export const Navbar = () => {
  return (
    <>
      <nav
        id="navbar"
        className=" text-base bg-[#4D1979] font-light leading-6 text-start text-white h-[128.5px] w-full border-0 m-0 p-0 max-h-none min-h-0 max-w-none min-w-0 top-0 left-0 flex"
      >
        <a
          href="#"
          className=" text-base font-light leading-6 text-start text-active h-[100px] w-[280px] border-0 mt-0.5 p-0 max-h-none min-h-auto max-w-none min-w-auto "
        >
          <img
            className=" text-base font-light leading-6 text-start text-active h-[100px] w-[180px] border-0 mt-3 mr-0 ml-3 pl-6 max-h-none min-h-0 max-w-full min-w-0 "
            src="//start.austincc.edu/wp-content/uploads/2021/11/acc-logo-2x.png"
            alt="Logo"
          />
        </a>

        <div className=" text-base font-light leading-6 text-start text-white bg-transparent h-[128.5px] w-[650px] border-0 m-0 py-1 px-4 pr-0 max-h-none min-h-auto max-w-none min-w-auto fixed right-0">
          <ul className=" text-base font-light leading-6 text-start text-white bg-transparent h-[27.5px] w-full border-0 mb-3 pt-2 pb-0 pl-0 pr-0 max-h-none min-h-auto max-w-none min-w-auto flex overflow-visible cursor-auto visible transform-none transition-all duration-0 ease-linear  box-border resize-none text-shadow-none text-clip whitespace-normal break-normal shadow-none rounded-none list-none">
            <a
              href="#"
              className=" text-sm font-normal leading-[19.5px] text-left text-white bg-transparent border-0 m-0 px-2 max-h-none min-h-0 max-w-none min-w-0 block overflow-visible cursor-pointer visible transform-none transition-all duration-100 ease-in outline-none outline-offset-0 box-border resize-none text-shadow-none text-clip whitespace-normal break-normal shadow-none rounded-none list-none"
            >
              Students
            </a>
            <a
              href="#"
              className=" text-sm font-normal leading-[19.5px] text-left text-white bg-transparent border-0 m-0 px-2 max-h-none min-h-0 max-w-none min-w-0 block"
            >
              Faculty & Staff
            </a>
            <a
              href="#"
              className=" text-sm font-normal leading-[19.5px] text-left text-white bg-transparent border-0 m-0 px-2 max-h-none min-h-0 max-w-none min-w-0 block"
            >
              Business & Community
            </a>
            <a
              href="#"
              className=" text-sm font-normal leading-[19.5px] text-left text-white bg-transparent border-0 m-0 px-2 max-h-none min-h-0 max-w-none min-w-0 block"
            >
              Employment at ACC
            </a>
            <a
              href="#"
              className=" text-sm font-normal leading-[19.5px] text-left text-white bg-transparent border-0 m-0 px-2 max-h-none min-h-0 max-w-none min-w-0 block"
            >
              Course Schedule
            </a>
          </ul>

          <div className="flex  text-base font-light h-[85px] w-[250px] border-0 m-0 py-1 px-4 pr-0 max-h-none min-h-auto max-w-none min-w-auto fixed right-10 ">
            <button className="flex font-merriweather text-[19px] font-normal leading-[33px] text-left text-black bg-white h-[65px] w-[129.547px] border-0 m-0 p-4">
              Search
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-3 size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="flex font-merriweather text-[19px] font-normal leading-[33px] text-left text-white bg-[#F0B323] h-[65px] w-[120.68px] border-0 m-0 p-4">
              Menu
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-3 size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
