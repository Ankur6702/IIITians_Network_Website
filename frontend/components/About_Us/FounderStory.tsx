import React from 'react'
import Image from 'next/image'
import founder from '../../images/founder.png'
import three_one from '../../images/three_one.png'

const FounderStory = () =>{
  return (
  <div>
  <h1 className="text-blue-600 text-7xl flex justify-center mt-40 pb-16 font-bold sm:px-20">Founder's Story</h1>
  <div className="flex justify-center"><Image src={founder} height={629} width={1170} alt="discord"/></div>
  <div>
  <h1 className=" lg:mx-72 text-justify lg:mt-5 lg:mb-10 text-xl sm:mx-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor egestas semper tristique ultrices magna felis urna, morbi. Adipiscing nec auctor est quam sit. Justo urna, gravida velit dolor dapibus eu faucibus at. Tempus, in elementum diam nisl sit quis habitant enim. Cursus vitae vitae gravida morbi maecenas lectus lobortis tortor in.
Sollicitudin morbi urna egestas lacus tellus erat. Adipiscing convallis id ut interdum. Tellus feugiat vestibulum egestas montes. Viverra nunc ipsum praesent consequat risus nisi, nibh at quam. Proin molestie velit dolor nunc. Faucibus consectetur et ullamcorper risus vivamus eget id id vel. Turpis aliquam dui morbi sollicitudin id pellentesque diam. Mauris imperdiet amet placerat tincidunt. Convallis aenean eleifend lectus aliquet vulputate adipiscing interdum at enim. Congue tincidunt blandit nec gravida urna, eget cum. Venenatis rhoncus lacus lectus odio habitant.
Egestas ornare consequat tortor, viverra pretium adipiscing. Nascetur bibendum in dolor maecenas magna nunc eu egestas vulputate. Risus non massa hac iaculis non convallis. Et pharetra aenean velit eget. Aliquet eu sagittis auctor porttitor.
</h1>

<div className="flex items-center lg:mx-72 lg:mb-10  text-xl sm:mx-16 pt-10 ">
  <div className="pr-12">
<Image className="" width="1000" height="1000" src={three_one} alt="first_f" />
</div>
<div>
<h1 className="text-3xl font-semibold pb-2">Co-Founder: </h1>
<h1 className="text-lg text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor egestas semper tristique ultrices magna felis urna, morbi. Adipiscing nec auctor est quam sit. Justo urna, gravida velit dolor dapibus eu faucibus at. Tempus, in elementum diam nisl sit quis habitant enim. Cursus vitae vitae gravida morbi maecenas lectus lobortis tortor in.
Sollicitudin morbi urna egestas lacus tellus erat. Adipiscing convallis id ut interdum. Tellus feugiat vestibulum egestas montes.
</h1>
</div>
</div>

<div className="flex items-center lg:mx-72 lg:mb-10  text-xl sm:mx-16 pt-10 ">
<div>
<h1 className="text-3xl font-semibold pb-4">Co-Founder: </h1>
<h1 className="text-lg text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor egestas semper tristique ultrices magna felis urna, morbi. Adipiscing nec auctor est quam sit. Justo urna, gravida velit dolor dapibus eu faucibus at. Tempus, in elementum diam nisl sit quis habitant enim. Cursus vitae vitae gravida morbi maecenas lectus lobortis tortor in.
Sollicitudin morbi urna egestas lacus tellus erat. Adipiscing convallis id ut interdum. Tellus feugiat vestibulum egestas montes.
</h1>
</div>
<div className="pl-12">
<Image className="" width="900" height="900" src={three_one} alt="first_f" />
</div>
</div>

<div className="flex items-center lg:mx-72 lg:mb-10  text-xl sm:mx-16 pt-10 ">
  <div className="pr-12">
<Image className="" width="900" height="900" src={three_one} alt="first_f" />
</div>
<div>
<h1 className="text-3xl font-semibold pb-4">Co-Founder: </h1>
<h1 className="text-lg text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor egestas semper tristique ultrices magna felis urna, morbi. Adipiscing nec auctor est quam sit. Justo urna, gravida velit dolor dapibus eu faucibus at. Tempus, in elementum diam nisl sit quis habitant enim. Cursus vitae vitae gravida morbi maecenas lectus lobortis tortor in.
Sollicitudin morbi urna egestas lacus tellus erat. Adipiscing convallis id ut interdum. Tellus feugiat vestibulum egestas montes.
</h1>
</div>
</div>
</div>
</div>
);
}

export default FounderStory;
