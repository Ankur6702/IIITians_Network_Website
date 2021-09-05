import React from 'react'
import Image from 'next/image'
import culture from '../../images/culture.png'

const Culture =()=>{
  return (
    <div>
    <h1 className="text-blue-600 text-7xl flex justify-center font-bold mt-40 pb-8">Culture</h1>
    <div className="flex justify-center"><Image src={culture} height={600} width={1050} alt="culture"/></div>
    <div>
    <h1 className="font-Homemade text-justify pb-24 Apple lg:mx-72 lg:mt-5 text-xl sm:mx-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor egestas semper tristique ultrices magna felis urna, morbi. Adipiscing nec auctor est quam sit. Justo urna, gravida velit dolor dapibus eu faucibus at. Tempus, in elementum diam nisl sit quis habitant enim. Cursus vitae vitae gravida morbi maecenas lectus lobortis tortor in.
  Sollicitudin morbi urna egestas lacus tellus erat. Adipiscing convallis id ut interdum. Tellus feugiat vestibulum egestas montes. Viverra nunc ipsum praesent consequat risus nisi, nibh at quam. Proin molestie velit dolor nunc. Faucibus consectetur et ullamcorper risus vivamus eget id id vel. Turpis aliquam dui morbi sollicitudin id pellentesque diam. Mauris imperdiet amet placerat tincidunt. Convallis aenean eleifend lectus aliquet vulputate adipiscing interdum at enim. Congue tincidunt blandit nec gravida urna, eget cum. Venenatis rhoncus lacus lectus odio habitant.
  Egestas ornare consequat tortor, viverra pretium adipiscing. Nascetur bibendum in dolor maecenas magna nunc eu egestas vulputate. Risus non massa hac iaculis non convallis. Et pharetra aenean velit eget. Aliquet eu sagittis auctor porttitor.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor egestas semper tristique ultrices magna felis urna, morbi. Adipiscing nec auctor est quam sit. Justo urna, gravida velit dolor dapibus eu faucibus at. Tempus, in elementum diam nisl sit quis habitant enim. Cursus vitae vitae gravida morbi maecenas lectus lobortis tortor in.
  </h1>
  </div>
  </div>
  );
}

export default Culture;
