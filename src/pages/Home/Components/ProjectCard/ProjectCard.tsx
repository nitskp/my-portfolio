import { Button, Div, ExternalLink, Heading } from "../../../../Components";

interface Props {
  img: string;
  title: string;
  subTitle: string;
  projectLink: string;
}

const ProjectCard = ({ img, title, subTitle, projectLink }: Props) => {
  return (
    <Div>
      <Div>Scrolling Image</Div>
      <Heading type="h3">{title}</Heading>
      <Heading type="h4">{subTitle}</Heading>
      <ExternalLink to={projectLink}>
        <Button title="Visit" secondary />
      </ExternalLink>
    </Div>
  );
};

export default ProjectCard;
