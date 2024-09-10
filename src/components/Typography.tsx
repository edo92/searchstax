import { cn } from "@/lib/cn";
import { type VariantProps, cva } from "class-variance-authority";

const TypographyVariants = cva("text-dark-200 dark:text-light-200", {
  variants: {
    variant: {
      p: "",
      span: "",
      small: "",
    },

    size: {
      "2xl": "text-2xl",
      xl: "text-xl",
      lg: "text-lg",
      md: "text-md",
      base: "text-base",
      sm: "text-sm",
      xs: "text-xs",
    },

    font: {
      bold: "font-bold",
      medium: "font-medium",
      regular: "font-regular",
      light: "font-light",
    },

    defaultVariants: {
      variant: "p",
      size: "text-sm",
      font: "regular",
    },
  },
});

interface TypographyProps
  extends React.PropsWithChildren,
    VariantProps<typeof TypographyVariants> {
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  size,
  font,
  variant,
  className,
  children,
  ...props
}) => {
  switch (variant) {
    case "p":
      return (
        <p
          {...props}
          className={cn(TypographyVariants({ variant, size, font }), className)}
        >
          {children}
        </p>
      );

    case "span":
      return (
        <span
          {...props}
          className={cn(TypographyVariants({ variant, size, font }), className)}
        >
          {children}
        </span>
      );

    case "small":
      return (
        <small
          {...props}
          className={cn(TypographyVariants({ variant, size, font }), className)}
        >
          {children}
        </small>
      );

    default:
      return (
        <p
          {...props}
          className={cn(TypographyVariants({ variant, size, font }), className)}
        >
          {children}
        </p>
      );
  }
};
