import Link from "next/link";

const ImageGrid = ({ imageData }) => {
  return (
    <div className="image-grid">
      {imageData.map(({ title, author, img }, index) => (
        <div key={index} className="img-wrapper">
          <div className="img-overlay"></div>
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
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
