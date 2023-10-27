import { useEffect, useState } from "react";

const ImageLoader = ({ isRough }) => {
  useEffect(() => {
    if (isRough) {
      animate();
    }
  }, []);
  const animate = () => {};
  return (
    <div>
      <img src="" alt="" />
    </div>
  );
};

export default ImageLoader;
