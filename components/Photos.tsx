import React from "react";
import styles from "./../styles/questions.module.scss";

import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/images/photos/photo13-min.jpg",
    height: 500,
  },
  {
    original: "/images/photos/photo0-min.jpg",
    height: 500,
  },
  {
    original: "/images/photos/photo1-min.jpg/",
    height: 500,
  },
  {
    original: "/images/photos/photo2-min.jpg",
    height: 500,
  },
  {
    original: "/images/photos/photo3-min.jpg",
    height: 500,
  },
  {
    original: "/images/photos/photo4-min.jpg",
  },
  {
    original: "/images/photos/photo5-min.jpg",
  },
  {
    original: "/images/photos/photo6-min.jpg",
  },
  {
    original: "/images/photos/photo7-min.jpg",
  },
  {
    original: "/images/photos/photo8-min.jpg",
    height: 500,
  },
  {
    original: "/images/photos/photo9-min.jpg",
    height: 500,
  },
  {
    original: "/images/photos/photo10-min.jpg",
    height: 500,
  },
  {
    original: "/images/photos/photo11-min.jpg",
    height: 500,
  },
];

const Photos = () => (
  <div className={styles.questionsArea} style={{ maxHeight: 500 }}>
    <ImageGallery
      items={images}
      showThumbnails={false}
      showPlayButton={false}
    />
  </div>
);

export default Photos;
