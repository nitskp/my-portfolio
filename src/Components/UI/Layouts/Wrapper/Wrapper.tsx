import Div from "../Div/Div";

interface Props {
  children?: any;
  id?: string;
}

const Wrapper = ({ children, id }: Props) => {
  return (
    <Div
      maxWidth={"1120px"}
      id={id}
      width={`90vw`}
      marginLeft={`auto`}
      marginRight={`auto`}
    >
      {children}
    </Div>
  );
};

export default Wrapper;
