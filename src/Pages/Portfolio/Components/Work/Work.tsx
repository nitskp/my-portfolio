import { Link } from "react-router-dom";
import styled from "styled-components";
import { Wrapper, Div, Heading } from "../../../../Components";
import { ProjectCard } from "../";
import project1 from "../../../../Assets/images/project1.png";

const liveSiteLink = "https://frosty-kirch-3cbcfd.netlify.app/";
const codeLink =
  "https://github.com/nitskp/Internship-IWebCode/tree/main/impact-landing-page";

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 18px;
  margin-right: 10px;
  :visited {
    color: #0fbf61;
  }
  :active,
  :hover {
    color: #494949;
  }
`;

const Grid = styled(Div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 26px;
`;

const Work = () => {
  return (
    <Wrapper id="work">
      <Div role="section" marginTop={"152px"} marginBottom={"342px"}>
        {/* Main Heading  */}
        <Div marginBottom={"75px"}>
          <Heading type="h1" color="#0FBF61" fontSize="40px">
            My recent works
          </Heading>
        </Div>
        {/* Try to do the next with react router outlet */}
        {/* Sub navbar  */}
        <Div
          role="nav"
          maxWidth={"540px"}
          marginLeft={"auto"}
          marginRight={"auto"}
          flex
          justifyContent="space-between"
          marginBottom={"95px"}
        >
          <NavLink to={"/"}>All</NavLink>
          <NavLink to={"/"}>Front end</NavLink>
          <NavLink to={"/"}>Back end</NavLink>
          <NavLink to={"/"}>MERN</NavLink>
        </Div>
        <Grid>
          <ProjectCard
            projectImage={project1}
            liveSiteLink={liveSiteLink}
            codeLink={codeLink}
          />
          <ProjectCard
            projectImage={project1}
            liveSiteLink={liveSiteLink}
            codeLink={codeLink}
          />
          <ProjectCard
            projectImage={project1}
            liveSiteLink={liveSiteLink}
            codeLink={codeLink}
          />
          <ProjectCard
            projectImage={project1}
            liveSiteLink={liveSiteLink}
            codeLink={codeLink}
          />
        </Grid>
      </Div>
    </Wrapper>
  );
};

export default Work;
