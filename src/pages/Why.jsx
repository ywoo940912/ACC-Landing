export const Why = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left Side - Text Content */}
      <div className="p-6 lg:p-12 text-white flex-1">
        <h3 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose ACC</h3>
        <ul className="text-2xl space-y-4">
          <li className="py-2 border-b border-white/50">
            <button className="flex items-center w-full text-left py-2 hover:text-gray-300">
              <span className="mr-2"> {/* Optional icon */} </span>
              100+ In-Demand Programs
            </button>
          </li>
          <li className="py-2 border-b border-white/50">
            <button className="flex items-center w-full text-left py-2 hover:text-gray-300 ">
              <span className="mr-2"> {/* Optional icon */} </span>
              Low Cost & Stable Tuition
            </button>
          </li>
          <li className="py-2 border-b border-white/50">
            <button className="flex items-center w-full text-left py-2 hover:text-gray-300 ">
              <span className="mr-2"> {/* Optional icon */} </span>
              Classes Offered Anywhere
            </button>
          </li>
          <li className="py-2 border-b border-white/50">
            <button className="flex items-center w-full text-left py-2 hover:text-gray-300">
              <span className="mr-2"> {/* Optional icon */} </span>
              Austin's Top Career Gateway
            </button>
          </li>
          <li className="py-2 border-b border-white/50">
            <button className="flex items-center w-full text-left py-2 hover:text-gray-300">
              <span className="mr-2"> {/* Optional icon */} </span>
              The Best Start For Your Bachelor's Degree
            </button>
          </li>
        </ul>
      </div>

      <div className="flex-1 bg-cover bg-center h-96 lg:h-auto bg-[url(/src/assets/Hero.jpg)]"></div>
    </div>
  );
};
