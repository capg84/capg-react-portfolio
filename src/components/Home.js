import profilePhoto from "../assets/images/profile-picture.png";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="profile-photo">
        <img src={profilePhoto} alt="cyprian-gomes"></img>
      </div>
      <div className="my-bio">
        <h1>Cyprian Gomes</h1>
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
