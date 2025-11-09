"use client";

import { usePathname } from "next/navigation";
// import Nav from "./Nav";
import Footer from "./Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();

  const hideNavOnRoutes = ["/login", "/signup", "/auth"];

  const shouldHide = hideNavOnRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (shouldHide) return null;

  return <Footer />;
}
