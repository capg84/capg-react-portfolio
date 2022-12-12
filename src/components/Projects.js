import Card from "./Card";
import "../styles/Home.css";

const Projects = () => {
  const projects = [
    {
      title: "Trigger Animal Rehoming",
      image:
        "https://user-images.githubusercontent.com/97121483/207147887-c458343f-6f49-49b8-ac3c-45b60fad85e1.png",
      description:
        "Trigger is an application for animals needing rehoming. The application allows pet owners/caretakers, who are sadly unable to keep their pets, to find them a safe and loving new home. It is a MERN-stack single-page application, with a MongoDB backend, a GraphQL API, an Express.js and Node.js server with a React front end. We've also implemented user authentication with JWT. We are also planning to integrate Stripe checkout for collecting donations for animals in need.",
      githubUrl: "https://github.com/capg84/trigger",
      deployedUrl: "https://boiling-dusk-63403.herokuapp.com/",
    },
    {
      title: "Tradr Marketplace",
      image:
        "https://user-images.githubusercontent.com/97121483/205514246-ecb1733f-ca66-4887-b962-a5042acc818f.png",
      description:
        "An express-based marketplace application for users to buy and sell items, just like eBay and Amazon. The users are also able to leave comments. The App follows MVC file structure, uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.",
      githubUrl: "https://github.com/capg84/tradr-marketplace",
      deployedUrl: "https://calm-gorge-52770.herokuapp.com",
    },
    {
      title: "Destination Guide",
      image:
        "https://user-images.githubusercontent.com/97121483/205514355-2f08faf7-a4b3-4035-b05d-c189ffb7646d.png",
      description:
        "Destination Guide, is an all-in-one application that offers a range of services such as currency conversion, country information and weather information for tourists.",
      githubUrl: "https://github.com/capg84/holiday-planner",
      deployedUrl: "https://capg84.github.io/holiday-planner/",
    },
    {
      title: "Password Generator",
      image:
        "https://user-images.githubusercontent.com/97121483/205514428-3fb33940-66ee-4e69-ba3a-0f41866a7f0e.png",
      description:
        "A simple application to generate strong and secure password that you can use anywhere.",
      githubUrl: "https://github.com/capg84/password-generator",
      deployedUrl: "https://capg84.github.io/password-generator/",
    },
    {
      title: "Weather App",
      image:
        "https://user-images.githubusercontent.com/97121483/205743114-0d54bdd8-68cd-40e5-9510-335a9e7b1e77.png",
      description:
        "A real time weather app that allows the user to search for the current and next five-days weather forecasts.",
      githubUrl: "https://github.com/capg84/weather-app",
      deployedUrl: "https://capg84.github.io/weather-app/",
    },
    {
      title: "Code Quiz",
      image:
        "https://user-images.githubusercontent.com/97121483/205514900-ce3cf7d9-5064-4f02-a3b0-9ddc61967854.png",
      description: "A timed code quiz for beginner full-stack developers.",
      githubUrl: "https://github.com/capg84/code-quiz",
      deployedUrl: "https://capg84.github.io/code-quiz/",
    },
    {
      title: "Work Day Scheduler",
      image:
        "https://user-images.githubusercontent.com/97121483/205741015-648077b7-6175-4744-a9ab-e7a9dedf791c.png",
      description:
        "A simple hourly scheduler for a working day. The scheduler displays today's date and the current time at the top of the page. An user can add tasks between 9am and 6pm.",
      githubUrl: "https://github.com/capg84/schedhuler",
      deployedUrl: "https://capg84.github.io/schedhuler/",
    },
  ];

  return (
    <div>
      <Card projects={projects} />
    </div>
  );
};

export default Projects;
