import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  image?: string;
  path: string;
};

const ServiceCard = ({
  title = "Default Title",
  image = "/ogp.png",
  path = "/",
}: Props) => {
  return (
    <>
      <div className="container">
        <Link href={path}>
          <div className="image-wrapper">
            <Image
              src={image}
              fill
              priority
              style={{
                objectFit: "cover",
              }}
              alt={title}
            />
            <div className="hover-effect">
              <p>{title}</p>
            </div>
          </div>

          <p>{title}</p>
        </Link>
      </div>

      <style jsx>{`
        .container {
          width: 300px;
          display: inline-block;
          margin-right: 20px;
          p {
            width: 100%;
          }

          a {
            color: #aaa;
            text-decoration: none;
            font-weight: 400;
            font-size: 0.9rem;
            font-weight: 400;
            transition: all 0.3s ease;
          }

          a:hover {
            color: black;
          }
        }

        .image-wrapper {
          position: relative;
          width: 300px;
          height: 170px;
          background-color: #eee;
          margin-bottom: 0.5rem;
        }

        .hover-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 300px;
          height: 170px;
          box-sizing: border-box;
          background-color: rgba(146, 215, 202, 0.8);
          padding: 15px;
          font-weight: 300;
          color: white;
          opacity: 0;
          transition: all 0.3s ease;
          p {
            font-size: 2rem;
          }
        }

        .hover-effect:hover {
          opacity: 1;
        }

        @media screen and (max-width: 600px) {
        }
      `}</style>
    </>
  );
};

export default ServiceCard;
