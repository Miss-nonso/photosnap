"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const MobileNavbar = () => {
  return (
    <motion.div
      className="mobileNav"
      initial={{ opacity: 0, y: -1 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        type: "spring",
        // delay: 0.000,
        ease: "easeOut"
      }}
    >
      <div id="myLinks">
        <a href="/stories">STORIES</a>
        <a href="/features">FEATURES</a>
        <a href="/pricing">PRICING</a>
      </div>

      <div className="nav-invite-btn">
        <Button>Get an invite</Button>
      </div>
    </motion.div>
  );
};

export default MobileNavbar;
