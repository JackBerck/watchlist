import React from "react";

export default function FooterLink({ href, children, addClass = "" }) {
  return (
    <a href={href} className={`px-2 hover:underline ${addClass}`}>
      {children}
    </a>
  );
}
