import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
  path: string;
};

const ServiceCard = ({ title, image, path }: Props) => {
  return (
    <>
      <Link href={path}>
        <div className="container">
          <Image
            src={image}
            fill
            priority
            style={{
              objectFit: "cover",
            }}
            alt={title}
          />
          <div className="wrapper">
            <p>{title}</p>
          </div>
        </div>
      </Link>

      <style jsx>{`
        .container {
          position: relative;
          width: 300px;
          height: 170px;
          margin-right: 20px;
          display: inline-block;
          background-color: #eee;
        }

        .wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 300px;
          height: 170px;
          box-sizing: border-box;
          background-color: rgba(146, 215, 202, 0.8);
          padding: 15px;
          font-weight: 300;
          font-size: 2rem;
          color: white;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .wrapper:hover {
          opacity: 1;
        }
      `}</style>
    </>
  );
};

export default ServiceCard;
