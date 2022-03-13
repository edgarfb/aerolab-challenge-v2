export default function MainImage() {
  return (
    <div className="main-image-container">
      <div className="main-image">
        <h3 className="section-title">Electronics</h3>
      </div>
      <style jsx>{`
        .main-image-container {
          background-color: var(--lightblue);
        }
        .main-image {
          max-width: 1440px;
          margin: auto;
          background-image: url("/images/header-x1.png");
          background-size: cover;
          background-position: right top;
          background-repeat: no-repeat;
          height: 412px;
          display: flex;
          align-items: flex-end;
        }
        .section-title {
          font-size: 4rem;
          color: var(--white);
          letter-spacing: 0.1rem;
          width: 1176px;
          margin: 3rem auto;
        }
        // I need to figure out how to make this work
        // Retina display
        // @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        //   .main-image {
        //     background-image: url("/images/header-x2.png");
        //   }
        // }
      `}</style>
    </div>
  );
}
