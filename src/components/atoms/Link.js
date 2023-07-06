import React from "react";
import { Link as RouterLink } from "react-router-dom";

export const Link = ({ children, to }) => {
  return (
    <RouterLink
      to={to}
      style={{ textDecoration: "none", color: "#d68102", fontSize: 23 }}
    >
      {children}
    </RouterLink>
  );
};
