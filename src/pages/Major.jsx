export const Major = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
      <div className="text-center bg-black text-white p-6">
        <h2 className="text-2xl font-bold mb-4">Find the Program for You</h2>
      </div>
      <div className="bg-black text-white p-6 rounded-lg">
        <p className="text-lg">
          Austin Community College offers more than 100 programs in 10 areas of
          study that lead to career certificates, associate degrees, bachelor’s
          degrees, or university transfer. Explore classes that can boost your
          income, improve your skills, and change your life.
        </p>
      </div>

      <MajorBlock
        image="/src/assets/Art.jpg"
        title="Art, Digital Media & Communications"
      />
      <MajorBlock image="/src/assets/Business.jpg" title="Business" />
      <MajorBlock
        image="/src/assets/Computer.jpg"
        title="Computer Science & IT"
      />
      <MajorBlock
        image="/src/assets/Culinary.jpg"
        title="Culinary, Hospitality & Tourism"
      />
      <MajorBlock
        image="/src/assets/Design.jpg"
        title="Design, Manufacturing, Construction & Applied Technologies"
      />
      <MajorBlock
        image="/src/assets/Edu.jpg"
        title="Education"
        textColor="white"
      />
      <MajorBlock
        image="/src/assets/Health.jpg"
        title="Health Sciences"
        textColor="white"
      />
      <MajorBlock image="/src/assets/Liberal.jpg" title="Liberal Arts" />
      <MajorBlock
        image="/src/assets/Social.jpg"
        title="Public & Social Services"
        textColor="white"
      />
      <MajorBlock
        image="/src/assets/Engineer.jpg"
        title="Science, Engineering & Math"
        textColor="white"
      />
    </div>
  );
};

const MajorBlock = ({ image, title, textColor = "white" }) => (
  <div
    className="bg-cover bg-center h-96 p-6 flex items-center justify-center gap-0"
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="bg-black/30 p-4 rounded-md">
      <h3 className={`text-2xl font-bold text-${textColor} text-center`}>
        {title}
      </h3>
    </div>
  </div>
);
