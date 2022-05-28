import { Heading } from "../../Components";
import GlobalStyle from "../../GlobalStyles";
import { Skill } from "./Components";
import { AiFillAlert } from "react-icons/ai";

function App() {
  return (
    <>
      <GlobalStyle />
      <Heading type="h1" color="green" fontSize={"100px"} fontWeight={300}>
        Hello World
      </Heading>
      <Skill icon={<AiFillAlert fontSize={40}/>} name={"Test"} />
    </>
  );
}

export default App;
