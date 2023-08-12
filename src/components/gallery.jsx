import React from "react";
import gallery1 from "../images/gallery1.jpg";
import gallery2 from "../images/gallery2.jpg";
import gallery3 from "../images/gallery3.jpg";
import gallery4 from "../images/gallery4.jpg";
import gallery5 from "../images/gallery5.jpg";
import gallery6 from "../images/gallery6.jpg";
import "./gallery.css";
import AllImages from "../images/imagemudule";
import eminencevideo from "../videos/eminencevideo.mp4";

const Gallery = () => {
  const galleryImage = [
    AllImages.gallery1,
    AllImages.gallery2,
    AllImages.gallery3,
    AllImages.gallery4,
    AllImages.gallery5,
    AllImages.gallery6,
  ];

  const galleryVideo = [eminencevideo];
  console.log(galleryImage);
  return (
    <div className="container">
      {galleryImage.map((i) => (
        <div>
          <img className="gallery_image" src={i} />
        </div>
      ))}
      {galleryVideo.map((i) => (
        <div>
          <video autoPlay controls className="gallery_video" src={i} />
        </div>
      ))}
      <div>
        <iframe
          width="300"
          height="150"
          src="https://www.youtube.com/embed/XGCaLzaNfF4?autoplay=1"
          title="Step By Step Indian 30*40 house construction, time lapse - 5 months work in 48 minutes"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
    </div>
  );
};

export default Gallery;
