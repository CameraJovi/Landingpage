"use client";

import { useEffect, useRef } from "react";

const animations = {
  reveal: "motion-safe:animate-reveal",
  hero: "motion-safe:animate-hero-enter",
  product: "motion-safe:animate-product-enter",
};

export default function Reveal({
  as: Tag = "div",
  children,
  className = "",
  animation = "reveal",
  repeat = true,
  ...props
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (
      !element ||
      reducedMotion.matches ||
      !("IntersectionObserver" in window)
    )
      return;

    let cancelled = false;
    let observer;
    const animationClass = animations[animation] || animations.reveal;

    async function observeWhenReady() {
      // Na abertura, espera as fontes e as imagens antes de iniciar o efeito.
      if (animation !== "reveal") {
        await document.fonts.ready;
        await Promise.allSettled(
          Array.from(element.querySelectorAll("img"), (image) =>
            image.decode(),
          ),
        );
      }
      if (cancelled) return;

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            element.classList.add(animationClass);
            if (!repeat) observer.disconnect();
          } else if (repeat) {
            element.classList.remove(animationClass);
          }
        },
        { threshold: 0.15 },
      );
      observer.observe(element);
    }

    observeWhenReady();
    return () => {
      cancelled = true;
      observer?.disconnect();
      element.classList.remove(animationClass);
    };
  }, [animation, repeat]);

  // Sem JavaScript ou com movimento reduzido, o conteúdo permanece visível.
  return (
    <Tag {...props} ref={elementRef} className={className}>
      {children}
    </Tag>
  );
}

