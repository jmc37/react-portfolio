import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import python from "../assets/img/python.png";
import javascript from "../assets/img/javascript.png";
import java from "../assets/img/java.png";
import c from "../assets/img/c.png";
import typescript from "../assets/img/TS.png";
import react from "../assets/img/react.png";
import sql from "../assets/img/sql.png";
import tailwind from "../assets/img/tailwind.png";
import html from "../assets/img/html.png";
import vite from "../assets/img/vite.png";
import agile from "../assets/img/agile.png";
import cloud from "../assets/img/cloud.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Over the past couple years I have obtained an assortment of
                skills that have increased both my language arsenal as well as
                my soft skills in areas such as agile devlopment and scrum
                meetings. I'm always looking for new ways to grow and increase
                my knowledge regarding the newest tech available.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={python} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={java} alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={typescript} alt="Image" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={sql} alt="Image" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={tailwind} alt="Image" />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={vite} alt="Image" />
                  <h5>Vite</h5>
                </div>
                <div className="item">
                  <img src={agile} alt="Image" />
                  <h5>Agile Development</h5>
                </div>
                <div className="item">
                  <img src={cloud} alt="Image" />
                  <h5>Cloud Computing</h5>
                </div>
                <div className="item">
                  <img src={c} alt="Image" />
                  <h5>C</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
