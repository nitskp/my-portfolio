import styled from "styled-components";
import { Button, Div } from "../../../../Components";

interface Props {
  liveSiteLink: string;
  codeLink: string;
  projectImage: string;
}

const GrayCover = styled(Div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(48, 48, 48, 0.8);
  border-radius: 36px;
  gap: 20px;
  display: none;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 36px;
`;

const CardContainer = styled(Div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  :hover {
    .gray-cover {
      display: flex;
    }
  }
`;

const ProjectCard = ({ liveSiteLink, codeLink, projectImage }: Props) => {
  return (
    <CardContainer
      maxWidth={"545px"}
      border={"1px solid #c4c4c4"}
      borderRadius={"36px"}
      position="relative"
    >
      <Image src={projectImage} alt="Project Preview"></Image>
      <GrayCover className="gray-cover">
        <Button
          title="Preview Site"
          primary
          onClick={() => (window.location.href = liveSiteLink)}
        />
        <Button
          title="View Code"
          secondary
          onClick={() => (window.location.href = codeLink)}
        />
      </GrayCover>
    </CardContainer>
  );
};

export default ProjectCard;
