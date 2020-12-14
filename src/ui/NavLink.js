/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

const NavLink = ({ href, active, children }) => (
  <Link href={href}>
    <a
      sx={{
        // py: [2, 3],
        px: 3,
        fontSize: 0,
        fontWeight: 600,
        display: "inline-block",
        textDecoration: "none",
        // borderBottom: "1px solid",
        // borderColor: active ? "primary" : "background",
        cursor: "pointer",
        transition: "border-color .5s",
        "&:hover": {
          borderColor: "primary",
        },
      }}
    >
      {children}
    </a>
  </Link>
);

export default NavLink;
