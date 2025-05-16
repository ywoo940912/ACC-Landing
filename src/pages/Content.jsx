export const Content = () => {
  return (
    <section class="bg-[#5E5E5E] py-12 w-full">
      <div className="container mx-auto">
        <div className="flex overflow-x-auto whitespace-nowrap mb-8">
          <a
            href="#"
            className="text-2xl text-white font-bold pb-2 border-b-4 mr-8 md:mr-15 hover:text-gray-300"
          >
            Academic
          </a>
          <a
            href="#"
            className="text-2xl text-white font-bold pb-2 border-b-4 mr-8 md:mr-15 hover:text-gray-300"
          >
            Admissions
          </a>
          <a
            href="#"
            className="text-2xl text-white font-bold pb-2 border-b-4 mr-8 md:mr-15 hover:text-gray-300"
          >
            Fiancial Aid
          </a>
          <a
            href="#"
            className="text-2xl text-white font-bold pb-2 border-b-4 mr-8 md:mr-15 hover:text-gray-300"
          >
            Student support
          </a>
          <a
            href="#"
            className="text-2xl text-white font-bold pb-2 border-b-4 mr-8 md:mr-15 hover:text-gray-300"
          >
            Campuses
          </a>
          <a
            href="#"
            className="text-2xl text-white font-bold pb-2 border-b-4 mr-8 md:mr-15 hover:text-gray-300"
          >
            About ACC
          </a>
        </div>

        <div className="text-white lg:flex lg:items-start lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-normal uppercase mt-8 mb-8 lg:mb-16">
              Academic Program Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="#"
                className="text-2xl font-normal uppercase border-b border-white/45 py-4 hover:bg-white/10"
              >
                ACC Online
              </a>
              <a
                href="#"
                className="text-2xl font-normal uppercase border-b border-white/45 py-4 hover:bg-white/10"
              >
                Adult Education
              </a>
              <a
                href="#"
                className="text-2xl font-normal uppercase border-b border-white/45 py-4 hover:bg-white/10"
              >
                Bachelor’s Degrees at ACC
              </a>
              <a
                href="#"
                className="text-2xl font-normal uppercase border-b border-white/45 py-4 hover:bg-white/10"
              >
                Career & Technical Training
              </a>
              <a
                href="#"
                className="text-2xl font-normal uppercase border-b border-white/45 py-4 hover:bg-white/10"
              >
                Continuing Education
              </a>
              <a
                href="#"
                className="text-2xl font-normal uppercase border-b border-white/45 py-4 hover:bg-white/10"
              >
                Dual Credit Programs
              </a>
              <a
                href="#"
                className="text-2xl font-normal uppercase border-b border-white/45 py-4 hover:bg-white/10"
              >
                English Language Programs
              </a>
              <a
                href="#"
                className="text-2xl font-normal uppercase border-b border-white/45 py-4 hover:bg-white/10"
              >
                Fast Track
              </a>
              <a
                href="#"
                className="text-2xl font-normal uppercase border-b border-white/45 py-4 hover:bg-white/10"
              >
                Honors Program
              </a>
              <a
                href="#"
                className="text-2xl font-normal uppercase border-b border-white/45 py-4 hover:bg-white/10"
              >
                University Transfer
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/4">
            <img
              src="//start.austincc.edu/wp-content/uploads/2021/11/acc-logo-2x.png"
              alt="Logo"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
