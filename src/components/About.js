import { Icon } from "@iconify/react";
import javascriptIcon from "@iconify/icons-logos/javascript";
import reactIcon from "@iconify/icons-logos/react";
import tailwindIcon from "@iconify/icons-logos/tailwindcss-icon";

const About = () => {
  const profilepic = "images/myProfile.jpg";
  return (
    <section id="about">
      <div className="col-md-12">
        <h1 style={{ color: "black" }}>
          <span>About Me</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 mb-5 center">
            <div className="polaroid">
              <span style={{ cursor: "auto" }}>
                <img height="250px" src={profilepic} alt="Avatar placeholder" />
                <Icon
                  icon={reactIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={javascriptIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />

                <Icon
                  icon={tailwindIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
              </span>
            </div>
          </div>

          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <span
                    className="iconify"
                    data-icon="emojione:red-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:yellow-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:green-circle"
                    data-inline="false"
                  ></span>
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <span className="wave">Hi 👋 </span>
                  <br />
                  I'm Rohullah Noory, a passionate software developer and a
                  proud graduate of the Software Engineering Technology program
                  from Conestoga College. <br />
                  <br />
                  My journey into software development began when a professor
                  compared it to magic, explaining how users see what happens
                  when using a software but do not understand the intricate
                  processes behind it. This analogy sparked my curiosity and
                  drove me to explore the world of software development, a
                  curiosity that continues to fuel my growth and learning every
                  day. One of my proudest achievements is winning Conestoga's
                  Mastercraft award for my capstone project, recognized as the
                  best among over 20 programs. While I primarily focus on
                  frontend technologies, I also have experience working with
                  backend development, giving me a well-rounded perspective on
                  building comprehensive solutions.
                  <br />
                  <br />
                  Outside of web development, I enjoy working out and reading,
                  which helps me maintain a balanced and motivated lifestyle.
                  I'm excited to continue my journey in the tech world,
                  constantly striving to create seamless and impactful user
                  experiences.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
