export default function Button({
  href,
  variant = "primary",
  size = "default",
  type = "button",
  className = "",
  children,
  ...props
}) {
  const buttonClasses = `
    inline-flex min-h-12 items-center justify-center gap-3 rounded-full
    text-sm font-extrabold transition-[background-color,transform] duration-[160ms]
    motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0
    motion-safe:active:scale-[0.98]
    ${
      variant === "outline"
        ? "bg-transparent text-foreground shadow-[inset_0_0_0_1px_#777] hover:bg-[#373737]"
        : "bg-brand text-ink hover:bg-brand-hover"
    }
    ${size === "small" ? "px-[17px] py-3" : "px-[22px] py-4"}
    ${className}
  `;

  // Links levam a outro endereço; botões executam uma ação.
  if (href) {
    return (
      <a {...props} href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button {...props} type={type} className={buttonClasses}>
      {children}
    </button>
  );
}
