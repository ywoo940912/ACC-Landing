export const Navbar = () => {
  return (
    <>
      <nav id="navbar" className="bg-[#4D1979] text-white w-full">
        <div className="container mx-auto flex items-center justify-between py-2">
          <a href="#" className="flex items-center">
            <img
              src="//start.austincc.edu/wp-content/uploads/2021/11/acc-logo-2x.png"
              alt="Logo"
              className="h-24"
            />
          </a>

          <div className="text-small text-base font-light leading-6 text-start text-white bg-transparent h-[128.5px] w-[700px] border-0 m-0 py-1 px-4 pr-0 right-0 ">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Students
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Faculty & Staff
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Business & Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Employment at ACC
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Course Schedule
                </a>
              </li>
            </ul>

            <div className="flex items-center space-x-4 font-light h-[85px] w-[250px] border-0 m-0 py-1 px-4 pr-0 fixed right-10 ">
              <button className="flex font-merriweather text-[19px] font-normal leading-[33px] text-left text-black bg-white px-4 py-4 border-0 m-0 p-4 hover:bg-gray-100">
                Search
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-3 h-5 w-5 my-1 inline-block"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="flex font-merriweather text-[19px] font-normal leading-[33px] text-left text-white bg-[#F0B323] px-4 py-4 border-0 m-0 p-4">
                Menu
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-3 size-6 my-1 inline-block"
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
          <div className="md:hidden">
            <button className="text-white focus:outline-none focus:text-gray-300">
              {/* Mobile menu icon (e.g., Hamburger icon) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {/* Add your mobile menu here (hidden by default, show on click) */}
          </div>
        </div>
      </nav>
    </>
  );
};
