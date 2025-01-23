import React from "react";
import TextContainer from "./TextContainer";
import ImgContainer from "./ImgContainer";

const homeData = [
  {
    heading: ["Create and", "share your", "photo stories."],
    paraText:
      "Photosnap is a platform for photographers and visual storytellers. Wemake it easy to share photos, tell stories and connect with others.",
    linkText: "Get the Invite",
    linkHref: "#",
    img: "../../assets/home/desktop/create-and-share.jpg",
    imgClassname: "home-img1"
  },
  {
    heading: ["BEAUTIFUL", "STORIES", "EVERY TIME"],
    paraText:
      "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    linkText: "VIEW THE STORIES",
    linkHref: "#",
    img: "../../assets/home/desktop/beautiful-stories.jpg",
    imgClassname: "home-img2"
  },
  {
    heading: ["DESIGNED FOR", "EVERYONE"],
    paraText:
      "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.",
    linkText: "VIEW THE STORIES",
    linkHref: "#",
    img: "../../assets/home/desktop/designed-for-everyone.jpg",
    imgClassname: "home-img3"
  }
];

const HomeLayout = () => {
  return (
    <div
      className="grid"
      style={{
        width: "100%"
      }}
    >
      {homeData.map(
        ({ heading, paraText, linkText, linkHref, imgClassname }, index) => (
          <div
            className={`home-grid-layout  ${
              index % 2 !== 0 && "home-layout-reverse"
            }`}
            key={paraText}
          >
            <TextContainer
              heading={heading}
              paraText={paraText}
              linkText={linkText}
              linkHref={linkHref}
              bgcolor={index !== 0 ? "white" : "bleck"}
              showTextLink={true}
            />
            <ImgContainer imgClassname={imgClassname} />
          </div>
        )
      )}
    </div>
  );
};

export default HomeLayout;
