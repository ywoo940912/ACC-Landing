import React from "react";

export const Spotlight = () => {
  return (
    <div class="bg-[#4D1979] text-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <SpotlightCard
            title="Pay Your Summer Tuition!"
            description="Tuition payment deadlines start soon. Discover your payment options, including interest-free payment plans."
            buttonText="Make a Plan"
          />
          <SpotlightCard
            title="Congrats spring 2025 grads!"
            description="ACC celebrates more than 3,300 invited to participate. Celebrate the Class of 2025 with a message on our padlet wall."
            buttonText="Send Congrats"
          />
          <SpotlightCard
            title="ACC summer 2025 registration now open"
            description="Meet with your advisor to create a summer plan and explore support services."
            buttonText="Register Now"
          />
          <SpotlightCard
            title="ACC’s AAPI Heritage Month Celebration"
            description="Explore community events, workshops, and more fun celebrations from ACC’s AAPI Cultural Center."
            buttonText="Join Us"
          />
        </div>
      </div>
    </div>
  );
};

const SpotlightCard = ({ title, description, buttonText }) => (
  <div className="border-l-4 border-white/50 pl-6 pr-3 py-6">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-base mb-4">{description}</p>
    <button className="px-4 py-2 hover:text-gray-500 rounded-xl">
      {buttonText}
    </button>
  </div>
);
