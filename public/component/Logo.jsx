import React from "react";
import Link from "next/link";

const Logo = ({ color }) => {
  return (
    <Link href="/">
      {" "}
      <div style={{ display: "flex", gap: " 0.5rem", alignItems: "center" }}>
        <svg
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 16L9.5 0L19 16H0Z"
            fill="url(#paint0_linear_0_4430)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_4430"
              x1="9.5"
              y1="20"
              x2="16.6529"
              y2="3.01176"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFC593" />
              <stop offset="0.519452" stopColor="#BC7198" />
              <stop offset="1" stopColor="#5A77FF" />
            </linearGradient>
          </defs>
        </svg>
        <h1
          className={`font-extrabold text-2xl text-${color}`}
          style={{ fontWeight: "800", fontSize: "1.3rem", color: `${color}` }}
        >
          PHOTOSNAP
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
