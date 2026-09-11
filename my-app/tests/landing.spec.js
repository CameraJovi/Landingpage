import { test, expect } from "@playwright/test";
import { mkdir } from "node:fs/promises";

test("recursos detalhados, navegação e fundo preto", async ({ page }) => {
  await page.goto("/");
  const navigation = page.getByRole("navigation", { name: "Funcionalidades da Jovi" });
  await navigation.getByRole("link", { name: "Flashcards", exact: true }).click();
  await expect(page).toHaveURL(/#flashcards$/);
  await expect(page.locator("#flashcards")).toContainText("Coloque a memória para trabalhar");
  await expect(page.locator("#matematica")).toContainText("Entenda o caminho até o resultado");
  await expect(page.locator("#smartpix")).toContainText("as ações são demonstrativas");
  await expect(page.locator("#galeria article")).toHaveCount(6);
  await expect(page.getByText("Antes de abrir a câmera", { exact: true })).toHaveCount(0);
  await expect(page.locator("body")).toHaveCSS("background-color", "rgb(0, 0, 0)");
});

test("menu móvel fecha por Escape e após navegar", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Abrir menu" });
  await toggle.click();
  await expect(page.getByRole("navigation", { name: "Navegação principal" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(toggle).toBeFocused();
  await expect(page.getByRole("navigation", { name: "Navegação principal" })).toBeHidden();
  await toggle.click();
  await page
    .getByRole("navigation", { name: "Navegação principal" })
    .getByRole("link", { name: "Equipe", exact: true })
    .click();
  await expect(page).toHaveURL(/#equipe$/);
  await expect(page.getByRole("navigation", { name: "Navegação principal" })).toBeHidden();
});

test("formulário valida sem simular um envio real", async ({ page }) => {
  await page.goto("/");
  await page
    .getByText("Formulário de contato demonstrativo", { exact: true })
    .click();
  await page.getByRole("button", { name: "Validar demonstração" }).click();
  await expect(page.getByRole("status")).toBeEmpty();
  await page.getByLabel("Nome", { exact: true }).fill("Visitante");
  await page
    .getByLabel("E-mail", { exact: true })
    .fill("visitante@example.com");
  await page
    .getByLabel("Mensagem", { exact: true })
    .fill("Gostaria de conhecer o projeto.");
  await page.getByRole("button", { name: "Validar demonstração" }).click();
  await expect(page.getByRole("status")).toContainText(
    "nenhum dado foi transmitido",
  );
  await expect(page.getByLabel("Mensagem", { exact: true })).toHaveValue(
    "Gostaria de conhecer o projeto.",
  );
});

for (const width of [320, 390, 768, 1440]) {
  test(`layout e imagens em ${width}px`, async ({ page }) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.evaluate(async () => {
      await document.fonts.ready;
      document.querySelectorAll("img").forEach((img) => {
        img.loading = "eager";
      });
    });
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect
      .poll(() =>
        page
          .locator("img")
          .evaluateAll((images) =>
            images.every((img) => img.complete && img.naturalWidth > 0),
          ),
      )
      .toBe(true);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow).toBe(false);
    expect(errors).toEqual([]);
    if (width === 390 || width === 1440) {
      await mkdir(".impeccable/review", { recursive: true });
      await page.screenshot({
        path: `.impeccable/review/${width === 390 ? "mobile" : "desktop"}.png`,
        fullPage: true,
      });
      await page.screenshot({
        path: `.impeccable/review/${width === 390 ? "mobile" : "desktop"}-hero.png`,
      });
    }
  });
}
