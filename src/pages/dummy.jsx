export const Dummy = () => {
  return (
    <div className="relative">
      <div className="text-base font-light leading-6 text-start text-white bg-[url(/src/assets/Hero.jpg)] bg-cover bg-center h-[788px] w-full border-0 m-0 p-0 top-[60px] left-0 flex items-center justify-center text-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay */}
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
            <div className="bg-white/20 p-4 rounded-lg">
              <a
                href="#"
                className="block text-2xl font-semibold text-white uppercase"
              >
                Plan for Fall
              </a>
              <p className="mt-2 text-white">
                Course registration starts soon! Explore Fall 2025 classes and
                learn how to register.
              </p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <a
                href="#"
                className="block text-2xl font-semibold text-white uppercase"
              >
                Scholarships for Fall
              </a>
              <p className="mt-2 text-white">
                Submit your scholarship application today for the fall 2025
                semester!
              </p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <a
                href="#"
                className="block text-2xl font-semibold text-white uppercase"
              >
                Mental Health Counseling
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
