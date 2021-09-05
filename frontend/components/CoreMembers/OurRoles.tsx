import { useState } from "react";

const OurRoles = () => {

    const [AllRoles,setAllRoles] = useState(true);
    const [Design, setDesign] = useState(false);
    const [Engineering, setEngineering] = useState(false);
    const [Legal, setLegal] = useState(false);
    const [SocialMediaManagement, setSocialMediaManagement] = useState(false);
    const [Marketing, setMarketing] = useState(false);

    function showAllRoles(){
        return(
        <div className="col-span-1 text-2xl lg:text-3xl justify-right md:justify-left text-gray-600">
                <h2>Mentor</h2>
                <h2 className="pt-4">Web Developer</h2>
                <h2 className="pt-4">App Developer</h2>
                <h2 className="pt-4">Game Developer</h2>
                <h2 className="pt-4">Animation</h2>
                <h2 className="pt-4">Design</h2>
                <h2 className="pt-4">etc.</h2>
            </div>
        )
    }

    function showDesign(){
        return(
        <div className="col-span-1 text-2xl lg:text-3xl justify-right md:justify-left text-gray-600">
                <h2>Design</h2>
                <h2 className="pt-4">Animation</h2>
            </div>
        )
    }

    function showEngineering(){
        return(
        <div className="col-span-1 text-2xl lg:text-3xl justify-right md:justify-left text-gray-600">
                <h2>Web Developer</h2>
                <h2 className="pt-4">App Developer</h2>
                <h2 className="pt-4">Game Developer</h2>
            </div>
            )
    }

    function showLegal(){
        return(
        <div className="col-span-1 text-2xl lg:text-3xl justify-right md:justify-left text-gray-600">
                <h2>Legal</h2>
            </div>
            )
    }

    function showSocialMediaManagement(){
        return(
        <div className="col-span-1 text-2xl lg:text-3xl justify-right md:justify-left text-gray-600">
                <h2>Social Media Marketing</h2>
            </div>
            )
    }

    function showMarketing(){
        return(
        <div className="col-span-1 text-2xl lg:text-3xl justify-right md:justify-left text-gray-600">
                <h2>Marketing</h2>
            </div>
            )
    }

    function true_AllRoles(){
        setAllRoles(true);
        setDesign(false);
        setEngineering(false);
        setLegal(false);
        setSocialMediaManagement(false);
        setMarketing(false);
    }

    function true_Design(){
        setAllRoles(false);
        setDesign(true);
        setEngineering(false);
        setLegal(false);
        setSocialMediaManagement(false);
        setMarketing(false);
    }

    function true_Engineering(){
        setAllRoles(false);
        setDesign(false);
        setEngineering(true);
        setLegal(false);
        setSocialMediaManagement(false);
        setMarketing(false);
    }

    function true_Legal(){
        setAllRoles(false);
        setDesign(false);
        setEngineering(false);
        setLegal(true);
        setSocialMediaManagement(false);
        setMarketing(false);
    }

    function true_SocialMediaManagement(){
        setAllRoles(false);
        setDesign(false);
        setEngineering(false);
        setLegal(false);
        setSocialMediaManagement(true);
        setMarketing(false);
    }

    function true_Marketing(){
        setAllRoles(false);
        setDesign(false);
        setEngineering(false);
        setLegal(false);
        setSocialMediaManagement(false);
        setMarketing(true);
    }

  return (
    <>
        <div className="mx-4 my-4 md:mx-6 lg:mx-12 xl:mx-24">
            <h1 className="text-6xl mt-40 font-bold">Our Roles</h1>
            <p className="pt-8 text-xl md:text-2xl text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat a, turpis consequat. Faucibus maecenas vivamus fames etiam maecenas feugiat pretium arcu. Dignissim placerat urna et velit nisi, tellus, erat vel. Leo sit nisl tristique nec lectus in. Rhoncus sit sem sodales euismod dui, ac aliquam accumsan. 
            </p>
        </div>
        <div className="grid grid-cols-2 mx-4 my-4 md:mx-6 lg:mx-12 xl:mx-24">
            <div className="col-span-1 text-2xl lg:text-3xl">
                <h2 ><span className={AllRoles ? "border-b-8 border-green-400 font-semibold": ""} onClick={() => true_AllRoles()}>All Roles</span></h2>
                <h2 className="pt-4" onClick={()=> true_Design()}><span className={Design ? "border-b-8 border-green-400 font-semibold" : ""}>Design</span></h2>
                <h2 className="pt-4" onClick={()=> true_Engineering()}><span className={Engineering ? "border-b-8 border-green-400 font-semibold" : ""}>Engineering</span></h2>
                <h2 className="pt-4" onClick={()=> true_Legal()}><span className={Legal ? "border-b-8 border-green-400 font-semibold" : ""}>Legal</span></h2>
                <h2 className="pt-4" onClick={()=> true_SocialMediaManagement()}><span className={SocialMediaManagement ? "border-b-8 border-green-400 font-semibold" : ""}>Social Media Management</span></h2>
                <h2 className="pt-4" onClick={()=> true_Marketing()}><span className={Marketing ? "border-b-8 border-green-400 font-semibold" : ""}>Marketing</span></h2>
            </div>
            {AllRoles ? showAllRoles() : null}
            {Design ? showDesign() : null}
            {Engineering ? showEngineering() : null}
            {Legal ? showLegal() : null}
            {SocialMediaManagement ? showSocialMediaManagement() : null}
            {Marketing ? showMarketing() : null}
        </div>
    </>
  );
};

export default OurRoles;
