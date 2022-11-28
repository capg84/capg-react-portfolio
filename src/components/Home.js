import profilePhoto from "../assets/images/profile-picture.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <div>
        <img
          className="profile-photo"
          src={profilePhoto}
          alt="cyprian-gomes"
        ></img>
      </div>
      <div className="my-bio">
        <p>
          A Full Stack Developer with years of experience of business and big
          data analysis. Has contributed to multiple large ERP projects in
          various capacities.
        </p>
      </div>
    </div>
  );
};

export default Home;
