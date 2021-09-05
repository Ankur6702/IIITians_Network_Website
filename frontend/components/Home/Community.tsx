import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import community from "../../images/community.svg";
import Agartala from "../../images/Agartala.png";
import Allahabad from "../../images/Allahabad.png";
import Bhagalpur from "../../images/Bhagalpur.png";
import Bhopal from "../../images/Bhopal.png";
import Dharwad from "../../images/Dharwad.png";
import Guwahati from "../../images/Guwahati.png";
import Gwalior from "../../images/Gwalior.jpg";
import Jabalpur from "../../images/Jabalpur.jpg";
import Kalyani from "../../images/Kalyani.png";
import Kancheepuram from "../../images/Kancheepuram.png";
import Kota from "../../images/Kota.png";
import Kottayam from "../../images/Kottayam.png";
import Kurnool from "../../images/Kurnool.png";
import Lucknow from "../../images/Lucknow.png";
import Manipur from "../../images/Manipur.png";
import Nagpur from "../../images/Nagpur.png";
import Pune from "../../images/Pune.jpg";
import Raichur from "../../images/Raichur.png";
import Ranchi from "../../images/Ranchi.png";
import Sonepat from "../../images/Sonepat.png";
import Sri_City from "../../images/Sri_City.png";
import Surat from "../../images/Surat.jpg";
import Tiruchirappalli from "../../images/Tiruchirappalli.png";
import Una from "../../images/Una.png";
import Vadodara from "../../images/Vadodara.jpg";

const data2: StaticImageData[] = [Agartala, Allahabad, Bhagalpur, Bhopal, Dharwad, Guwahati, Gwalior, Jabalpur, Kalyani, Kancheepuram, Kota, Kottayam, Kurnool, Lucknow, Manipur, Nagpur, Pune, Raichur, Ranchi, Sonepat, Sri_City, Surat, Tiruchirappalli, Una, Vadodara];

const Community = () => {
  return (
    <>
      <div className="mx-4 mt-8 md:mt-8 md:mx-6 lg:mx-12 lg:mt-10 xl:mx-24 xl:mt-12">
        <div className="flex justify-center items-start flex-col">
          <div className="ml-1 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14">
            <Image src={community} alt="community" />
          </div>
          <div className="text-red text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-orange-1000 lg:font-bold">
            Community
          </div>
        </div>

        <div className="mt-0 text-2xl font-medium md:mt-2 md:text-4xl lg:text-5xl lg:font-semibold lg:mt-4">
          <h1>Lorem Ipsum ...</h1>
        </div>
        <div className="mt-2">
          <p className="text-gray-500 text-sm lg:text-2xl lg:mt-4 font-medium md:text-base md:font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            temporibus sint consequatur deleniti provident, necessitatibus
            voluptas expedita eos eaque officiis fugit at consequuntur
            recusandae rerum? Iusto est nam aperiam deleniti? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Sit fuga magni deserunt amet
            itaque saepe ut, sunt laudantium doloribus nam aperiam rerum unde
            odio? Ut ipsum numquam molestias provident! Sequi? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Eveniet eum reprehenderit
            veritatis ea. Nemo, maiores culpa necessitatibus sunt eaque repellat
            aspernatur exercitationem ex illum quia consequatur nesciunt modi
            sapiente pariatur.
          </p>
        </div>
      </div>
      <div className="px-4">
        <div className="flex py-6 items-center justify-center">
        <Marquee speed={100}>
        {data2.map((item,id) => (<div key={id} className="inline-flex mx-5"><Image height="200vw" width="200vw" quality="100" src={item} alt="community"/></div>))}
        </Marquee>
        </div>
      </div>
      <div className="mx-4 mb-8 md:mb-8 md:mx-6 lg:mx-12 lg:mb-10 xl:mx-24 xl:mb-12">
        <div className="flex mt-2 items-center lg:mt-4">
          <div className="text-orange-1000 lg:mr-2 xl:mr-4">
            <h2 className="font-medium text-m md:text-lg lg:text-2xl lg:font-bold xl:text-3xl xl:font-semibold">
              <Link href="#">Know about IIIT’s</Link>
            </h2>
          </div>
          <div className="cursor:pointer">
            <Link href="#">
              <svg
                className="w-8 h-4 text-orange-1000 md:w-10 md:h-5 lg:h-8 xl:h-9 xl:w-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
