const WhatWeDo = () => {
  return (
    <>
        <div className="bg-gray-1000 lg:grid lg:grid-cols-2">
            <div className="col-span-1 text-center text-white py-40 text-2xl font-semibold">
                <h1 className="text-6xl font-bold">What We Do</h1>
                <br />
                <p className="pb-2">Expect creativity</p>
                <p className="pb-2">Obsess over details</p>
                <p className="pb-2">Value relationships</p>
                <p className="pb-2">High-five</p>
                <p className="pb-2">Make things, break things</p>
                <p className="pb-2">Meme</p>
                <p className="pb-2">Exceed expectations</p>
                <p className="pb-2">World-class digital</p>
                <p className="pb-2">Party</p>
            </div>
            <div className="col-span-1 text-center text-gray-500 py-40 text-2xl font-semibold">
                <h1 className="text-6xl font-bold line-through">What we don't do</h1>
                <br />
                <p className="pb-2">Work late / weekends</p>
                <p className="pb-2">Resist cake</p>
                <p className="pb-2">Sacrifice quality for profit</p>
                <p className="pb-2">Overpromise</p>
                <p className="pb-2">Lose at Mario Kart</p>
                <p className="pb-2">Work for free</p>
                <p className="pb-2">Egos</p>
                <p className="pb-2">Impossible deadlines</p>
                <p className="pb-2">Outsource</p>
            </div>
        </div>
    </>
  );
};

export default WhatWeDo;
