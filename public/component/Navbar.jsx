"use client";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import MobileNavbar from "./MobileNavbar";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuRef = useRef(null);

  // useEffect(() => {
  //   const handleOutsideClick = (event) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setMobileMenu(false);
  //     }
  //   };

  //   // Add event listener for document click
  //   document.addEventListener("mousedown", handleOutsideClick);

  //   return () => {
  //     // Clean up event listener on unmount
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      setMobileMenu(false);
    };

    // Close menu on scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="flex justify-between w-100 align-middle bg-black">
      <Logo color="black" />
      <NavigationMenu className="nav-menu">
        <NavigationMenuItem style={{ listStyleType: "none" }}>
          <Link href="/stories" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              STORIES
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem style={{ listStyleType: "none" }}>
          <Link href="/features" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              FEATURES
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem style={{ listStyleType: "none" }}>
          <Link href="/pricing" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              PRICING
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenu>

      <Button className="nav-btn">Get an invite</Button>
      <div
        className="hamburger-wrapper"
        onClick={() => {
          setMobileMenu(!mobileMenu);
        }}
      >
        {!mobileMenu ? (
          <img
            src="../hamburger.svg"
            alt="hamburger"
            className="mobile-menu-trigger"
          />
        ) : (
          <img src="../close.svg" alt="close" className="mobile-menu-close" />
        )}
      </div>

      {/* Mobile Navbar */}
      {mobileMenu && (
        // <div ref={menuRef}>
        <MobileNavbar />
        // </div>
      )}
    </header>
  );
};

export default Navbar;
