import styled from "styled-components";
import { Button, Div, Heading } from "../../../../Components";
import { HashLink } from "react-router-hash-link";

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 500px;
  padding: 10px 20px;
`;

const NavLink = styled(HashLink)`
  color: black;
  text-decoration: none;
  font-size: 18px;
  :visited {
    color: #494949;
  }
  :active,
  :hover {
    color: #0fbf61;
  }
`;

const Navbar = () => {
  return (
    <Div
      flex
      role="nav"
      justifyContent="space-between"
      alignItems="center"
      width={"100%"}
      maxWidth={`1120px`}
    >
      <Div
        flex
        justifyContent="center"
        alignItems="center"
        fontFamily={"'Kdam Thmor Pro', sans-serif;"}
        paddingBottom={"10px"}
        paddingTop={"10px"}
      >
        <Heading type="h1">NP</Heading>
      </Div>
      <NavLinks>
        <NavLink to={"#Home"}>Home</NavLink>
        <NavLink to={"#About"}>About</NavLink>
        <NavLink to={"#Work"}>Work</NavLink>
        <Button
          primary
          title="Resume"
          fontSize={`18px`}
        />
      </NavLinks>
    </Div>
  );
};

export default Navbar;
