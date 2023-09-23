import React, { useState } from "react";
import "./gallery.css";
import images from "../components/Images";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Gallery() {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  const imageCards = images.map((image) => (
    <img
      className="image-card"
      alt=""
      onClick={() => showImage(image)}
      src={image}
    />
  ));

  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  return (
    <>
      <div className="wrapper">{imageCards}</div>

      {lightboxDisplay ? (
        <div id="lightbox" onClick={hideLightBox}>
          <div id="imageContainer">
            <ChevronLeftIcon
              sx={{
                fontSize: { xs: 20, sm: 30, md: 40, lg: 50 },
                float: "left",
              }}
              className="chevronButton"
              onClick={showPrev}
            />
            <img id="lightbox-img" alt="" src={imageToShow}></img>
            <ChevronRightIcon
              sx={{
                fontSize: { xs: 20, sm: 30, md: 40, lg: 50 },
                float: "right",
              }}
              className="chevronButton"
              onClick={showNext}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
