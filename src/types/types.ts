import { ReactNode } from "react";

export type anchorType = {
  anchor?: string;
};


export type navbarType = {
  page?: "home" | "product" | "about" | "contact";
  anchor?: ReactNode;
  href?: any;
  handleMenu?: () => void;
  setIsMenuOpen?: any;
};
