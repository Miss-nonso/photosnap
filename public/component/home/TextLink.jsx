"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const TextLink = ({ linkText, href, bgcolor }) => {
  return (
    <motion.a
      href={href}
      className="arr-link"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.009,
        ease: "easeOut"
      }}
    >
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
    </motion.a>
  );
};

export default TextLink;
