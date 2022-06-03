import Div from "../Div/Div";

interface Props {
  children?: any;
}

const Wrapper = ({ children }: Props) => {
  return <Div maxWidth={"1120px"} width={`90vw`} marginLeft={`auto`} marginRight={`auto`}>{children}</Div>;
};

export default Wrapper;
