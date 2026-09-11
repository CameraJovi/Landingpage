const base =
  "inline-flex min-h-12 items-center justify-center gap-3 rounded-full text-sm font-extrabold transition-[background-color,transform] duration-[160ms] active:scale-[0.98]";
const variants = {
  primary: "bg-brand text-ink hover:bg-brand-hover",
  outline:
    "bg-transparent text-foreground shadow-[inset_0_0_0_1px_#777] hover:bg-[#373737]",
};
const sizes = { default: "px-[22px] py-4", small: "px-[17px] py-3" };

export default function Button({
  href,
  variant = "primary",
  size = "default",
  className = "",
  children,
  ...props
}) {
  const Tag = href ? "a" : "button";
  return (
    <Tag
      {...props}
      {...(href ? { href } : { type: props.type || "button" })}
      className={[base, variants[variant], sizes[size], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
