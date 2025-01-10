import React from "react";
import Link from "next/link";

const TextLink = ({ linkText, href, bgcolor }) => {
  return (
    <Link href={href} className="arr-link">
      {linkText}
      <span>
        <svg
          width="42"
          height="14"
          viewBox="0 0 42 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 7H41.864"
            stroke={bgcolor === "white" ? "black" : "white"}
            // stroke="white"
          />
          <path
            d="M35.4282 1L41.4282 7L35.4282 13"
            stroke={bgcolor === "white" ? "black" : "white"}
          />
        </svg>
      </span>
    </Link>
  );
};

export default TextLink;
