"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const ImageGrid = ({ imageData }) => {
  return (
    <div className="image-grid">
      {imageData.map(({ title, author, img }, index) => (
        <motion.div
          key={index}
          className="img-wrapper group"
          animate={{
            scale: 1,
            transition: {
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }
          }}
          exit={{ scale: 0 }}
          initial={{ opacity: 0, scale: 1, x: 5 }}
          whileInView={{
            opacity: 1,
            scaleX: 1 + index * 0.001,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: index * 0.002,
            ease: "easeOut"
          }}
          whileTap={{
            scale: 1.001,
            transition: { duration: 0.3, delayChildren: 100 }
          }}
        >
          {/* Overlay */}
          <motion.div
            className="img-overlay "
            whileHover={{ opacity: 0.2 }}
          ></motion.div>

          {/* Image */}
          <img
            src={img}
            alt={title}
            className="story-img group-hover:px-10  group-hover:scale-130"
          />

          {/* Content */}
          <div className="img-content ">
            <div className="story-details">
              <h6 className="">{title}</h6>
              <p className="author ">by {author}</p>
            </div>
            <Link href="#" className="">
              <p>READ STORY</p>
              <svg
                width="42"
                height="14"
                viewBox="0 0 42 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 7H41.864" stroke="white" />
                <path d="M35.4282 1L41.4282 7L35.4282 13" stroke="white" />
              </svg>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGrid;
