import Image from "next/image";

import Navbar from "@/public/component/Navbar";
import MobileNavbar from "@/public/component/MobileNavbar";
import HomeLayout from "@/public/component/home/HomeLayout";
import ImageGrid from "@/public/component/ImageGrid";
import { imageGridData } from "@/public/assets/data/homeData";
import InfoSection from "@/public/component/home/InfoSection";
import Footer from "@/public/component/Footer";
import { infoSectionData } from "@/public/assets/data/homeData";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col ">
        <HomeLayout />
        <ImageGrid imageData={imageGridData.slice(0, 4)} />
        <InfoSection infoSectionData={infoSectionData.slice(3)} />
        <Footer />
      </main>
    </>
  );
}
