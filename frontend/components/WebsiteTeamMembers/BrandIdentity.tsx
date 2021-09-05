import Link from "next/link";
import Image from "next/image";
import Unsplash from "../../images/unsplash.jpg"

const BrandIdentity = () => {
  return (
    <>
        <div className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
          <Image src={Unsplash} alt="image"></Image>
        </div>
        <div className="lg:grid gap-16 lg:grid-cols-2 mx-4 my-4 md:mx-6 lg:mx-12 xl:mx-24">
            <div className="col-span-1">
                <h1 className="text-4xl md:text-5xl lg:text-7xl">We are brand identity house of the South.</h1>
            </div>
            <div className="col-span-1">
                <p className="text-xl md:text-2xl lg:text-3xl">We believe that identity is essential, and to stand out in your space, you have to know who you are. Our work does just that—helping brands uncover and express what makes them unique and how they can drive culture forward.</p>
                <br />
                <p className="text-xl md:text-2xl lg:text-3xl">Because branding is all we do, we can focus on the one thing that matters most: your reputation.</p>
                <p className="text-xl md:text-2xl lg:text-3xl text-red-600"><Link href="#">Let's Talk.</Link></p>
                {/* Link in the above line "Lets's Talk" */}
            </div>
        </div>
    </>
  );
};

export default BrandIdentity;
