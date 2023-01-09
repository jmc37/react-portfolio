import { Container, Row, Tab, Col, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg2 from "../assets/img/project1.png";
import projImg3 from "../assets/img/project2.png";
import projImg1 from "../assets/img/project3.png";
import projImg4 from "../assets/img/sap-hackathon.png";
import projImg5 from "../assets/img/project-5.png";

export const Projects = () => {
  const projects = [
    {
      title: "Custom Pokedex",
      description:
        "Built with HTML for frontend, (JavaScript, Express, Node.js) for backend, and MongoDB for database. Designed and implemented working pokedex featuring online marketplace, stored database for users and purchases, and working card game utilizing API requests.",
      imgUrl: projImg1,
    },
    {
      title: "React Portfolio",
      description:
        "A personal portfolio made with React showcasing my past projects. Deployed on Google Cloud Platform.",
      imgUrl: projImg2,
    },
    {
      title: "Terra Studium",
      description:
        "Developed using JavaScript, hosted on AWS Elastic Beanstalk, with MySQL database. Special contributions include frogger type game using OOP with HTML Canvas, JavaScript, and overall UX/UI of application",
      imgUrl: projImg3,
    },
    {
      title: "SAP Rewards",
      description:
        "Submission for SAP Hackathon 2022. Technology used include HTML, JavaScript, Tailwind CSS. Our application provided a solution to the post-covid work environment that incentived employees to return to the office post covid.",
      imgUrl: projImg4,
    },
    {
      title: "FriendTrip",
      description:
        "Developed using HTML, JavaScript, CSS, and Google Firebase for its database.FriendTrip is a tour guide service similar to Airbnb but for tour guides instead. The benefit being that they got to experience the city from the eyes of a local.",
      imgUrl: projImg5,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Here are some of the projects that I've created for both school
              and personal devlopment. Hope you enjoy!
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              {/* <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" disabled>
                    Tab Three
                  </Nav.Link>
                </Nav.Item>
              </Nav> */}
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Impsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
