import Image from "next/image";
import Navbar from "../components/Navbar";

const menusPage = () => {
  return (
    <div>
      <Navbar />
      <div className="image-contain">
        <Image src="/Menu.png" className="menu" height={1000} width={429} />
      </div>

      <style jsx>{`
        .image-contain {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default menusPage;
