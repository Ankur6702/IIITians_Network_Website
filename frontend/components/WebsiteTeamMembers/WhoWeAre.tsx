import Image from "next/image";
import Face from "../../images/face.png";
import Link from "next/link";

interface Desc {
    name: string;
    position: string;
    img: object;
}

const data: Desc[] = [
    {
      name: "Lorem Ipsum",
      position: "Executive Director",
      img: Face,
    },
    {
      name: "Lorem Ipsum",
      position: "Executive Director",
      img: Face,
    },
    {
      name: "Lorem Ipsum",
      position: "Executive Director",
      img: Face,
    },
    {
      name: "Lorem Ipsum",
      position: "Executive Director",
      img: Face,
    },
    {
      name: "Lorem Ipsum",
      position: "Executive Director",
      img: Face,
    },
    {
        name: "Lorem Ipsum",
        position: "Executive Director",
        img: Face,
    },
    {
        name: "Lorem Ipsum",
        position: "Executive Director",
        img: Face,
    },
    {
        name: "Lorem Ipsum",
        position: "Executive Director",
        img: Face,
    },
    {
        name: "Lorem Ipsum",
        position: "Executive Director",
        img: Face,
    },
    {
        name: "Lorem Ipsum",
        position: "Executive Director",
        img: Face,
    },
    {
        name: "Lorem Ipsum",
        position: "Executive Director",
        img: Face,
    },
    {
        name: "Lorem Ipsum",
        position: "Executive Director",
        img: Face,
    },
    {
        name: "Lorem Ipsum",
        position: "Executive Director",
        img: Face,
    },
    {
        name: "Lorem Ipsum",
        position: "Executive Director",
        img: Face,
    },
    {
        name: "Lorem Ipsum",
        position: "Executive Director",
        img: Face,
    },
    {
        name: "Lorem Ipsum",
        position: "Executive Director",
        img: Face,
    },
];

const FaceComp: React.FC<Desc> = ({ name, position, img }) => {
    return (
        <div className="lg:col-span-1 mb-36 lg:mb-56 justify-self-center w-32 h-32 xl:w-48 xl:h-48">
            <Image src={ img } alt="face"></Image>
            <p className="text-center lg:text-xl">{name}</p>
            <p className="text-center text-sm lg:text-lg text-yellow-700">{position}</p>
        </div>
    );
};

const WhoWeAre = () => {
  return (
    <>
        <div className="text-4xl text-red-700 mx-4 my-4 md:mx-6 lg:mx-12 xl:mx-24">
            Who We Are
        </div>

        <div className="flex flex-col place-items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-4 pt-12 pb-24 md:mx-6 lg:mx-12 xl:mx-24">
            {data.map((item, index) => {
                return <FaceComp key={index} name={item.name} position={item.position} img={item.img} />;
            })}
        </div>
        <div className="mx-4 my-4 md:mx-6 lg:mx-12 xl:mx-24 text-center text-4xl md:text-5xl lg:text-6xl flex justify-center">
            <p>Like what you see?</p>
            <p className="border-b-4 md:border-b-6 lg:border-b-8 border-red-600 w-40 md:w-52 lg:w-64"><Link href="#">Let's talk.</Link></p>
        </div>
    </>
  );
};

export default WhoWeAre;
