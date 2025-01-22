import Link from "next/link";

import { Button } from "@/components/ui/button";

const MobileNavbar = () => {
  return (
    <div className="mobileNav">
      <div id="myLinks">
        <a href="/stories">STORIES</a>
        <a href="/features">FEATURES</a>
        <a href="/pricing">PRICING</a>
      </div>

      <div className="nav-invite-btn">
        <Button>Get an invite</Button>
      </div>
    </div>
  );
};

export default MobileNavbar;
