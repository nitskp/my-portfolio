interface Props {
  content: string;
}

const Heading = ({ content }: Props) => {
  return <h1>{content}</h1>;
};

export default Heading;
