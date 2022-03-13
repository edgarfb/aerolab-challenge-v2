import Image from "next/image";

export default function Navbar({ user }) {
  return (
    <nav>
      <div className="logo">
        <Image
          src="/images/aerolab-logo.svg"
          alt=""
          width="20px"
          height="20px"
        />
      </div>
      <div className="user-box">
        <div className="user-box-name">{user.name}</div>
        <div className="user-box-points">
          {user.points}
          <Image
            src="/images/icons/coin.svg"
            alt=""
            width="20px"
            height="20px"
          />
        </div>
      </div>
      <style jsx global>{`
        img {
          top: 5 !important;
        }
      `}</style>
      <style jsx>{`
        nav {
          max-width: 1440px;
          padding: 1rem 2rem;
          display: flex;

          justify-content: space-between;
          align-items: center;
        }

        .user-box {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .user-box-points {
          display: flex;
          gap: 0.3rem;
          padding: 0.3rem;
          border-radius: 1rem;
          background-color: var(--gray-very-light);
        }
      `}</style>
    </nav>
  );
}