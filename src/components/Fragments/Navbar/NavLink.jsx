import React from "react";

export default function NavLink({ children, href }) {
  return (
    <a
      href={href}
      className="block py-2 px-3 rounded md:p-0"
      aria-current="page"
    >
      {children}
    </a>
  );
}
