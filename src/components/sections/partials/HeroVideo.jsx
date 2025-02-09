import { useCallback, useState } from "react";
import videoPlaceholder from "../../../assets/images/video-placeholder.jpg";
import Modal from "../../elements/Modal";

/**
 * Hero video
 * @returns {import("react").ReactElement} Hero video
 */
export default function HeroVideo() {
  const [videoModalActive, setVideoModalActive] = useState(false);

  const openModal = useCallback((e) => {
    e.preventDefault();
    setVideoModalActive(true);
  }, []);

  const closeModal = useCallback((e) => {
    e.preventDefault();
    setVideoModalActive(false);
  }, []);

  return (
    <>
      <div
        className="hero-figure reveal-from-bottom illustration-element-01"
        data-reveal-value="20px"
        data-reveal-delay="800"
      >
        <div
          data-video="https://www.youtube.com/embed/dYY9RVNuwuY"
          aria-controls="video-modal"
          aria-hidden
          style={{
            background: `url(${videoPlaceholder}) no-repeat center/cover`,
            display: "block",
            width: "100%",
            aspectRatio: "16/9",
            cursor: "pointer",
          }}
          onClick={openModal}
        />
      </div>
      <Modal
        id="video-modal"
        show={videoModalActive}
        handleClose={closeModal}
        video="https://www.youtube.com/embed/NEAMNjOCixU"
        videoTag="iframe"
      />
    </>
  );
}
