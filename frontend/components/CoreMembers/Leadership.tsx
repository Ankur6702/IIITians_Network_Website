import Image from "next/image";
import Face from "../../images/face.png";

interface Desc {
    name: string;
    position: string;
}

interface Button {
    role: string;
}

const ButtonList: Button[] = [
    {
        role: "Leaderhip"
    },
    {
        role: "Client Services"
    },
    {
        role: "Creative"
    },
    {
        role: "Development"
    },
    {
        role: "Marketing & Sales"
    },
    {
        role: "Strategy"
    },
    {
        role: "All"
    },
]

const data: Desc[] = [
    {
      name: "Lorem Ipsum",
      position: "Executive Director",
    },
    {
      name: "Lorem Ipsum",
      position: "Executive Director",
    },
    {
      name: "Lorem Ipsum",
      position: "Executive Director",
    },
    {
      name: "Lorem Ipsum",
      position: "Executive Director",
    },
    {
      name: "Lorem Ipsum",
      position: "Executive Director",
    },
    {
        name: "Lorem Ipsum",
        position: "Executive Director",
    },
    {
        name: "Lorem Ipsum",
        position: "Executive Director",
    },
    {
        name: "Lorem Ipsum",
        position: "Executive Director",
    },
    {
        name: "Lorem Ipsum",
        position: "Executive Director",
    },
    {
        name: "Lorem Ipsum",
        position: "Executive Director",
    },
    {
        name: "Lorem Ipsum",
        position: "Executive Director",
    },
    {
        name: "Lorem Ipsum",
        position: "Executive Director",
    },
    {
        name: "Lorem Ipsum",
        position: "Executive Director",
    },
    {
        name: "Lorem Ipsum",
        position: "Executive Director",
    },
    {
        name: "Lorem Ipsum",
        position: "Executive Director",
    },
];

const FaceComp: React.FC<Desc> = ({ name, position }) => {
    return (
        <div className="lg:col-span-1 mb-36 lg:mb-56 justify-self-center w-32 h-32 xl:w-48 xl:h-48">
            <Image src={Face} alt="face"></Image>
            <p className="text-center lg:text-xl">{name}</p>
            <p className="text-center text-sm lg:text-lg text-yellow-700">{position}</p>
        </div>
    );
};

const ButtonComp: React.FC<Button> = ({ role }) => {
    return (
        <div className="flex-auto pb-4 lg:pb-0">
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">{role}</button>
        </div>
    )
}

const Leadership = () => {
  return (
    <>
        <div className="flex flex-grow flex-col text-center text-2xl lg:flex-row mx-4 my-4 md:mx-6 lg:mx-12 xl:mx-24">
        {ButtonList.map((item, index) => {
            return <ButtonComp key={index} role={item.role} />;
        })}
        </div>

        {/* Photos */}
        <div className="flex flex-col place-items-center lg:grid lg:grid-cols-5 mx-4 pt-12 pb-24 md:mx-6 lg:mx-12 xl:mx-24">
            {data.map((item, index) => {
                return <FaceComp key={index} name={item.name} position={item.position} />;
            })}
        </div>
    </>
  );
};

export default Leadership;
