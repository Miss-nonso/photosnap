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

const Navbar = () => {
  return (
    <header className="flex justify-between w-100 align-middle bg-black ">
      <Logo color="black" />
      <NavigationMenu className="nav-menu">
        {" "}
        <NavigationMenuItem style={{ listStyleType: "none" }}>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              STORIES
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem style={{ listStyleType: "none" }}>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              FEATURES
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem style={{ listStyleType: "none" }}>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              PRICING
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenu>

      <Button className="nav-btn">Get an invite</Button>
      <img
        src="../hamburger.svg"
        alt="hamburger"
        className="mobile-menu-trigger"
      />
    </header>
  );
};

export default Navbar;
