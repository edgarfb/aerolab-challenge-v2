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
          height: 312px;
          display: flex;
          align-items: flex-end;
        }
        .section-title {
          padding: 0 1rem;
          font-size: 2.5rem;
          color: var(--white);
          letter-spacing: 0.1rem;
          width: 1176px;
          margin: 3rem auto;
        }

        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .main-image {
            background-image: url("/images/header-x2.png");
          }
        }

        @media (min-width: 768px) {
          .main-image {
            height: 412px;
          }
          .section-title {
            font-size: 3rem;
          }
        }
        @media (min-width: 1000px) {
          .main-image {
            height: 412px;
          }
          .section-title {
            font-size: 4rem;
          }
        }
      `}</style>
    </div>
  );
}
