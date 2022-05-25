import { Heading } from "../../shared/Components";
import GlobalStyle from "../../shared/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Heading type="h1" color="green" fontSize={"100px"} fontWeight={300}>
        Hello World
      </Heading>
    </>
  );
}

export default App;
