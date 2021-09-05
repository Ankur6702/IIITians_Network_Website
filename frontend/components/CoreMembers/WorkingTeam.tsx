import Image from "next/image";
import coffee from "../../images/coffee.png";
import laptops from "../../images/laptops.png";
import laptop from "../../images/laptop.png";
import globe from "../../images/globe.png";

const WorkingTeam = () => {
  return (
    <>
        <div className="mx-4 mt-16 mb-8 md:mx-6 lg:mx-12 xl:mx-24">
            <div className="lg:mt-4 justify-items-center">
            <h1 className="text-7xl text-red-1000 flex justify-end font-semibold italic">Meet our Smart Working team</h1>
            </div>
        </div>
        <div className="flex overflow-x-auto">
            <Image className="" src={coffee} alt="coffee" />
            <Image className="" src={laptops} alt="laptops" />
            <Image className="" src={laptop} alt="laptop" />
        </div>
        <div className="pl-96 mt-24 mb-4 md:mx-8 lg:mx-12 lg:text-4xl">
            <p className="items-end font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Turpis adipiscing lorem pellentesque aliquam nec egestas.
            Sapien nulla non mattis lacinia. Convallis egestas in ultrices
            est maecenas potenti at viverra. Aliquam quam adipiscing
            erat sodales nunc fames posuere.
            </p>
        </div>
        <div className="pl-96 mt-4 mb-24 md:mx-8 lg:mx-12 lg:text-3xl">
            <p className="items-end text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Turpis adipiscing lorem pellentesque aliquam nec egestas.
            Sapien nulla non mattis lacinia. Convallis egestas in ultrices
            est maecenas potenti at viverra. Aliquam quam adipiscing
            erat sodales nunc fames posuere.
            </p>
        </div>
        <br />
        <div className="lg:grid lg:grid-cols-3 mx-12 my-4 md:mx-6 lg:mx-12 xl:mx-40 align-middle">
            <div className="lg:col-span-1 lg:pr-4">
                <Image src={globe} width="400" quality="100" height="400" alt="globe" />
            </div>
            <div className="lg:col-span-2 ml-8">
                <p className="lg:text-3xl lg:font-semibold text-gray-700 text-justify"><i>
                "We might be spread across northern, eastern, western and southern part of India, operating on these sides of the of the country, but we’re all on the same page. We’re serious about what we do, and the commitments we make to our clients. We also try to give our best in grabing as much as possible while learning and doing projects."
                </i></p>
            </div>
        </div>
    </>
  );
};

export default WorkingTeam;
