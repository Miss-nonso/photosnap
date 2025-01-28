import React from "react";
import Navbar from "@/public/component/Navbar";
import Footer from "@/public/component/Footer";
import StoriesHero from "@/public/component/stories/StoriesHero";
import ImageGrid from "@/public/component/ImageGrid";
import { imageGridData } from "@/public/assets/data/homeData";

export const metadata = {
  title: "Photosnap | Stories - Immersive Visual Narratives",
  description:
    "Dive into captivating stories told through breathtaking photography. Discover the world from a new perspective.",
  image: "/assets/stories/desktop/moon-of-appalacia.jpg",
  url: "https://perfecto-photosnap.netlify.app/stories",

  openGraph: {
    title: "Photosnap | Stories - Immersive Visual Narratives",
    description:
      "Dive into captivating stories told through breathtaking photography. Discover the world from a new perspective.",
    url: "https://perfecto-photosnap.netlify.app/stories",
    images: ["/assets/stories/desktop/moon-of-appalacia.jpg"]
  },
  twitter: {
    card: "/assets/stories/desktop/moon-of-appalacia.jpg",
    title: "Photosnap | Stories - Immersive Visual Narratives",
    description:
      "Dive into captivating stories told through breathtaking photography. Discover the world from a new perspective.",
    images: ["/assets/stories/desktop/moon-of-appalacia.jpg"]
  }
};

const Stories = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col ">
        <StoriesHero />
        <ImageGrid imageData={imageGridData} />
      </main>

      <Footer />
    </>
  );
};

export default Stories;
