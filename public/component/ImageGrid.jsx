"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const ImageGrid = ({ imageData }) => {
  return (
    <>
      {" "}
      <div className="image-grid">
        {imageData.map(({ title, author, img }, index) => (
          <motion.div
            key={index}
            className="img-wrapper"
            animate={{
              sacle: 1,
              transition: {
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }
            }}
            exit={{ scale: 0 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.002,
              ease: "easeOut"
            }}
            whileHover={{
              scale: 1.015,
              transition: { duration: 1.9 },
              translateY: 1
            }}
            whileTap={{
              scale: 1.001,
              transition: { duration: 0.3, delayChildren: 100 }
            }}
          >
            <motion.div
              className="img-overlay "
              whileHover={{ opacity: 0.2 }}
            ></motion.div>
            <img src={img} alt={title} />
            <div className="img-content ">
              <div className="story-details">
                <h6>{title}</h6>
                <p className="author">by {author}</p>
              </div>
              <Link href="#">
                <p>READ STORY</p>
                <svg
                  width="42"
                  height="14"
                  viewBox="0 0 42 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 7H41.864"
                    //   stroke={bgcolor === "white" ? "black" : "white"}
                    stroke="white"
                  />
                  <path
                    d="M35.4282 1L41.4282 7L35.4282 13"
                    stroke="white"
                    //   stroke={bgcolor === "white" ? "black" : "white"}
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ImageGrid;
