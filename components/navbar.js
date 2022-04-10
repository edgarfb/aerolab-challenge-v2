import Image from "next/image";
import { useUserContext } from "../context/UserContext";
import Link from "next/link";

export default function Navbar() {
  const user = useUserContext();

  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <a>
            <Image
              src="/images/aerolab-logo.svg"
              alt=""
              width="20px"
              height="20px"
            />
          </a>
        </Link>
      </div>
      <div className="user-box">
        <div className="user-box-name">
          <Link href="/user">
            <a> {user.name}</a>
          </Link>
        </div>
        <div className="user-box-points">
          {user.points}
          <Link href="/user/add-points">
            <a>
              <Image
                className="top-4"
                src="/images/icons/coin.svg"
                alt=""
                width="20px"
                height="20px"
              />
            </a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        nav {
          max-width: 1440px;
          margin: auto;
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
