export const Hero = () => {
  return (
    <div className="relative">
      <div className="text-base font-light leading-6 text-start text-white bg-[url(/src/assets/College.jpg)] bg-cover bg-center h-[788px] w-full border-0 m-0 p-0 top-[60px] left-0 flex items-center justify-center text-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-lg relative">
            <h5 className="text-4xl font-bold sm:text-5xl lg:text-6xl text-white uppercase">
              It's Your Time
            </h5>
            <p className="mt-4 text-xl text-white">
              Find the future you want with ACC
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-block px-4 py-2 border border-white text-white font-bold text-base rounded hover:bg-white hover:text-black"
              >
                Apply Now
              </a>
            </div>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className=" p-4 rounded-lg">
              <a
                href="#"
                className="flex text-2xl font-semibold text-white uppercase"
              >
                Plan for Fall
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-0.5 size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <p className="mt-2 text-white">
                Course registration starts soon! Explore Fall 2025 classes and
                learn how to register.
              </p>
            </div>
            <div className=" p-4 rounded-lg">
              <a
                href="#"
                className="flex text-2xl font-semibold text-white uppercase"
              >
                Scholarships for Fall
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-0.5 size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <p className="mt-2 text-white">
                Submit your scholarship application today for the fall 2025
                semester!
              </p>
            </div>
            <div className=" p-4 rounded-lg">
              <a
                href="#"
                className="flex text-2xl font-semibold text-white uppercase"
              >
                Mental Health Counseling
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-0.5 size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <p className="mt-2 text-white">
                All currently enrolled students have access to mental health
                counseling with ACC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
