import React from "react";
import Navbar from "@/public/component/Navbar";
import Footer from "@/public/component/Footer";
import StoriesHero from "@/public/component/stories/StoriesHero";
import ImageGrid from "@/public/component/ImageGrid";
import { imageGridData } from "@/public/assets/data/homeData";

const Stories = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col mt-[4.5rem]">
        <StoriesHero />
        <ImageGrid imageData={imageGridData} />
      </main>

      <Footer />
    </>
  );
};

export default Stories;
