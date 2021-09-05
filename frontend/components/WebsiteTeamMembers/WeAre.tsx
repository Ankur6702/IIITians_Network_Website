interface Heading {
    role: string;
}

const ButtonList: Heading[] = [
    {
        role: "Curiously Offbeat"
    },
    {
        role: "Strategists"
    },
    {
        role: "Designers"
    },
    {
        role: "Writers"
    },
    {
        role: "Illutstrators"
    },
    {
        role: "Photographers"
    },
    {
        role: "Artists"
    },
    {
        role: "Collaborators"
    },
    {
        role: "Branding Experts"
    },
]

const TextComp: React.FC<Heading> = ({ role }) => {
    return (
        <div className="text-2xl pb-6 justify-self-center">
            { role }
        </div>
    )
}

const WeAre = () => {
    return (
      <>
        <div className="sm:grid gap-16 sm:grid-cols-2 lg:grid-cols-3 mx-4 my-4 pt-16 md:mx-6 lg:mx-12 xl:mx-24">
            <div className="col-span-1">
                <div className="text-3xl pb-4 text-red-700 justify-self-center">We Are</div>
            {ButtonList.map((item, index) => {
                return <TextComp key={index} role={item.role} />;
            })}
            </div>
            <div className="col-span-1">
            <div className="text-3xl pb-4 text-red-700">We Aren't</div>
            {ButtonList.map((item, index) => {
                return <TextComp key={index} role={item.role} />;
            })}
            </div>
            <div className="col-span-1">
            <div className="text-3xl pb-4 text-red-700">We Do</div>
            {ButtonList.map((item, index) => {
                return <TextComp key={index} role={item.role} />;
            })}
            </div>
        </div>
      </>
    );
};
  
export default WeAre;
  