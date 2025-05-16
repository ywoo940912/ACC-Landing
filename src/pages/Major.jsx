import ArtImage from "../assets/Art.jpg";
import BusinessImage from "../assets/Business.jpg";
import CollegeImage from "../assets/College.jpg";
import ComputerImage from "../assets/Computer.jpg";
import CulinaryImage from "../assets/Culinary.jpg";
import DesignImage from "../assets/Design.jpg";
import EduImage from "../assets/Edu.jpg";
import EngineerImage from "../assets/Engineer.jpg";
import LiberalImage from "../assets/Liberal.jpg";
import SocialImage from "../assets/Social.jpg";
import HealthImage from "../assets/Health.jpg";

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
        image={ArtImage}
        title="Art, Digital Media & Communications"
      />
      <MajorBlock image={BusinessImage} title="Business" />
      <MajorBlock image={ComputerImage} title="Computer Science & IT" />
      <MajorBlock
        image={CulinaryImage}
        title="Culinary, Hospitality & Tourism"
      />
      <MajorBlock
        image={DesignImage}
        title="Design, Manufacturing, Construction & Applied Technologies"
      />
      <MajorBlock image={EduImage} title="Education" textColor="white" />
      <MajorBlock
        image={HealthImage}
        title="Health Sciences"
        textColor="white"
      />
      <MajorBlock image={LiberalImage} title="Liberal Arts" />
      <MajorBlock
        image={SocialImage}
        title="Public & Social Services"
        textColor="white"
      />
      <MajorBlock
        image={EngineerImage}
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
