import Image from "next/image";

import Navbar from "@/public/component/Navbar";
import MobileNavbar from "@/public/component/MobileNavbar";
import HomeLayout from "@/public/component/home/HomeLayout";
import ImageGrid from "@/public/component/ImageGrid";
import { imageGridData } from "@/public/assets/data/homeData";
import InfoSection from "@/public/component/home/InfoSection";
import Footer from "@/public/component/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col  row-start-2 items-center sm:items-start">
        {/* <MobileNavbar /> */}
        <HomeLayout />
        <ImageGrid imageData={imageGridData.slice(0, 4)} />
        <InfoSection />
        <Footer />
      </main>
    </div>
  );
}
