import Image from "next/image";
import Compo from "../../images/compo_photo.png";


const OurApproach = () => {
  return (
    <>
        <div className="mx-4 my-8 md:mx-6 lg:mx-12 xl:mx-24">
            <h1 className="text-6xl lg:text-8xl mt-20 font-bold">Our APPROACH</h1>
        </div>
        <div>
            <p className="mx-4 my-4 md:mx-6 lg:mx-12 xl:mx-24 text-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            temporibus sint consequatur deleniti provident, necessitatibus
            voluptas expedita eos eaque officiis fugit at consequuntur
            recusandae rerum? Iusto est nam aperiam deleniti? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Sit fuga magni deserunt amet
            itaque saepe ut, sunt laudantium doloribus nam aperiam rerum unde
            odio? Ut ipsum numquam molestias provident!
            </p>
        </div>
        <div className="lg:grid lg:grid-cols-5 gap-8 mx-4 my-8 md:mx-6 lg:mx-12 xl:mx-24">
            <div className="col-span-2">

                <h2 className="text-4xl font-semibold py-4">Adaptable</h2>
                <p className="lg:text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
                temporibus sint consequatur deleniti provident, necessitatibus
                voluptas expedita eos eaque officiis fugit at consequuntur
                recusandae rerum? Iusto est nam aperiam deleniti?
                </p>
                <br />
                <h2 className="text-4xl font-semibold py-4">Interdisciplinary</h2>
                <p className="lg:text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
                temporibus sint consequatur deleniti provident, necessitatibus
                voluptas expedita eos eaque officiis fugit at consequuntur
                recusandae rerum? Iusto est nam aperiam deleniti?
                </p>
                <br />
                <h2 className="text-4xl font-semibold py-4">Process-Oriented</h2>
                <p className="lg:text-xl pb-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
                temporibus sint consequatur deleniti provident, necessitatibus
                voluptas expedita eos eaque officiis fugit at consequuntur
                recusandae rerum? Iusto est nam aperiam deleniti?
                </p>
            </div>
            {/* Image */}
            <div className="col-span-3 items-center">
                <Image src={Compo} alt="discussion"></Image>
            </div>
        </div>
    </>
  );
};

export default OurApproach;
