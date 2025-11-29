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
         <Link href={path} style={{ textDecoration: "none" }}>
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
              <span style={{ textDecoration: "none" }}>{title}</span>
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
            text-decoration: none !important;
            -webkit-text-decoration: none !important;
            text-decoration-line: none !important;
            -webkit-text-decoration-line: none !important;
            font-weight: 400;
            font-size: 0.9rem;
            transition: all 0.3s ease;
            -webkit-tap-highlight-color: transparent;
          }

          a p {
            text-decoration: none !important;
            -webkit-text-decoration: none !important;
            text-decoration-line: none !important;
            -webkit-text-decoration-line: none !important;
            border-bottom: none !important;
          }

          a:hover {
            color: black;
            text-decoration: none !important;
          }

          a:active,
          a:focus,
          a:visited {
            text-decoration: none !important;
          }
        }

        .image-wrapper {
          position: relative;
          width: 300px;
          aspect-ratio: 4/3;
          background-color: #eee;
          margin-bottom: 0.5rem;
        }

        .hover-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 300px;
          aspect-ratio: 4/3;
          box-sizing: border-box;
          background-color: rgba(146, 215, 202, 0.8);
          padding: 15px;
          font-weight: 300;
          color: white;
          opacity: 0;
          transition: all 0.3s ease;
          p {
            font-size: 1.5rem;
          }
        }

        .hover-effect:hover {
          opacity: 1;
        }

        @media screen and (max-width: 600px) {
          .image-wrapper{
            min-width: 100%;
            width: 100%;
          }
          .container{
            min-width: 100%;
            width: 100%;
            margin-right: 0;
          }
          .hover-effect:hover {
          opacity: 0;
        }
      }
      `}</style>
    </>
  );
};

export default ServiceCard;
