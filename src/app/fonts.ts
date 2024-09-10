import localFont from "next/font/local";

export const interBold = localFont({
  weight: "700",
  style: "normal",
  display: "swap",
  src: "/fonts/Inter-Bold.ttf",
  variable: "--font-inter-bold",
});

export const interSemibold = localFont({
  weight: "600",
  style: "normal",
  display: "swap",
  src: "/fonts/Inter-SemiBold.ttf",
  variable: "--font-inter-semibold",
});

export const interMedium = localFont({
  weight: "500",
  style: "normal",
  display: "swap",
  src: "/fonts/Inter-Medium.ttf",
  variable: "--font-inter-medium",
});

export const interRegular = localFont({
  weight: "400",
  style: "normal",
  display: "swap",
  src: "/fonts/Inter-Regular.ttf",
  variable: "--font-inter-regular",
});

export const interLight = localFont({
  weight: "300",
  style: "normal",
  display: "swap",
  src: "/fonts/Inter-Light.ttf",
  variable: "--font-inter-light",
});
