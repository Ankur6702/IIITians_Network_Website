import React from "react";

interface Stats {
  text: string;
  score: number;
}

const data: Stats[] = [
  {
    text: "Colleges",
    score: 10,
  },
  {
    text: "Female Members",
    score: 10,
  },
  {
    text: "Core Members",
    score: 10,
  },
  {
    text: "Campus Heroes",
    score: 10,
  },
  {
    text: "Projects & Events",
    score: 10,
  },
];

const Triangle: React.FC<Stats> = ({ text, score }) => {
  return (
    <div className="flex flex-col relative mt-2 md:mt-4 lg:mt-8 xl:mt-2 mr-3 lg:mr-0 items-center justify-center">
      <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 xl:w-56 xl:h-56 bg-black flex flex-col items-center">
        <div className="text-white flex justify-center items-center text-m sm:text-lg lg:text-xl xl:text-3xl text-center w-24 h-18 sm:w-32 sm:h-20 lg:w-36 lg:h-24 xl:w-56 xl:h-32 p-4">
          {text}
        </div>
      </div>
      <div className="w-24 sm:w-32 lg:w-36 xl:w-56 overflow-hidden inline-block">
        <div className="h-18 w-18 sm:h-22 sm:w-22 lg:w-26 lg:h-26 xl:w-38 xl:h-38 bg-black -rotate-45 transform origin-top-left"></div>
      </div>
      <div className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-38 xl:h-38 text-sm sm:text-lg xl:text-3xl flex justify-center items-center text-white rounded-full border-4 xl:border-6 absolute top-16 left-5 sm:top-20 sm:left-7 lg:left-6 xl:left-8 xl:top-28">
        {score}
      </div>
    </div>
  );
};

const Statistics = () => {
  return (
    <div className="mx-4 mt-8 md:mt-8 md:mx-6 lg:mx-12 lg:mt-10 xl:mx-24 xl:mt-12">
      <div className="text-blue-800 ml-1 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14">
        <svg
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M24.8192 -0.0594853C24.7379 -0.0447992 24.6576 -0.0248861 24.5788 0.000130117C24.1447 0.0974411 23.7577 0.342291 23.4838 0.692955C23.21 1.04362 23.0662 1.4784 23.0769 1.92321V3.84628H5.76923C4.23914 3.84628 2.77171 4.45411 1.68977 5.53605C0.607828 6.61799 0 8.08542 0 9.61551L0 34.6155C0 37.8001 2.58462 40.3847 5.76923 40.3847H23.0769V41.1059L12.6192 46.3347C12.1571 46.5579 11.8026 46.9555 11.6337 47.44C11.4647 47.9245 11.4951 48.4563 11.7183 48.9184C11.9414 49.3805 12.339 49.735 12.8235 49.904C13.308 50.0729 13.8398 50.0425 14.3019 49.8194L23.0769 45.4328V46.154C23.0769 46.664 23.2795 47.1532 23.6402 47.5138C24.0008 47.8744 24.49 48.0771 25 48.0771C25.51 48.0771 25.9992 47.8744 26.3598 47.5138C26.7205 47.1532 26.9231 46.664 26.9231 46.154V45.4328L35.6981 49.8194C36.1602 50.0425 36.692 50.0729 37.1765 49.904C37.661 49.735 38.0586 49.3805 38.2817 48.9184C38.5049 48.4563 38.5353 47.9245 38.3663 47.44C38.1974 46.9555 37.8429 46.5579 37.3808 46.3347L26.9231 41.1059V40.3847H44.2308C47.4154 40.3847 50 37.8001 50 34.6155V9.61551C50 8.08542 49.3922 6.61799 48.3102 5.53605C47.2283 4.45411 45.7609 3.84628 44.2308 3.84628H26.9231V1.92321C26.9328 1.64974 26.884 1.37735 26.78 1.12424C26.6761 0.871124 26.5193 0.643114 26.3201 0.455441C26.121 0.267769 25.8841 0.124756 25.6253 0.0359578C25.3664 -0.0528406 25.0916 -0.0853796 24.8192 -0.0594853ZM3.84615 9.61551H46.1538V34.6155H3.84615V9.61551ZM40.1442 11.5386C39.7135 11.5849 39.3109 11.7753 39.0019 12.079L32.6923 18.3905L28.3058 14.0001C28.0957 13.7846 27.838 13.6213 27.5533 13.5236C27.2686 13.4258 26.965 13.3962 26.6668 13.4371C26.3686 13.4781 26.0842 13.5885 25.8365 13.7594C25.5887 13.9304 25.3845 14.1571 25.2404 14.4213L19.5308 24.3982L17.1865 18.5078C17.0727 18.2037 16.8837 17.9333 16.6372 17.722C16.3906 17.5106 16.0946 17.3651 15.7766 17.2991C15.4587 17.233 15.1292 17.2486 14.8188 17.3442C14.5085 17.4399 14.2275 17.6126 14.0019 17.8463L8.23269 23.6155C7.86547 23.9825 7.65906 24.4803 7.65888 24.9995C7.6587 25.5186 7.86476 26.0166 8.23173 26.3838C8.5987 26.751 9.09651 26.9574 9.61567 26.9576C10.1348 26.9578 10.6328 26.7517 11 26.3847L14.6654 22.7194L17.4308 29.5694C17.5613 29.9129 17.7875 30.2119 18.0827 30.4308C18.3778 30.6498 18.7295 30.7796 19.0961 30.8049C19.4628 30.8302 19.829 30.7499 20.1514 30.5735C20.4738 30.3972 20.7389 30.1321 20.9154 29.8097L27.3462 18.5713L31.3115 22.5386C31.4909 22.7241 31.7057 22.8717 31.9433 22.9724C32.1808 23.0732 32.4362 23.1251 32.6942 23.1251C32.9523 23.1251 33.2077 23.0732 33.4452 22.9724C33.6827 22.8717 33.8976 22.7241 34.0769 22.5386L41.7692 14.8463C42.073 14.565 42.2779 14.1933 42.3535 13.7863C42.4291 13.3792 42.3714 12.9587 42.1888 12.5871C42.0063 12.2156 41.7087 11.9128 41.3403 11.7239C40.972 11.535 40.5525 11.47 40.1442 11.5386Z"
              fill="#808080"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="50" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="text-red text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-1300 lg:font-bold">Statistics</div>
      <div className="mt-0 text-2xl font-medium md:mt-2 md:text-4xl lg:text-5xl lg:font-semibold lg:mt-4">
        <h1>People with us...</h1>
      </div>
      <div className="flex-row flex justify-center lg:justify-between xl:justify-evenly flex-wrap mt-4 lg:mt-6 xl:mt-8">
        {data.map((item, index) => {
          return <Triangle key={index} text={item.text} score={item.score} />;
        })}
      </div>
    </div>
  );
};

export default Statistics;
