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
    color: #0fbf61;
  }
  :active,
  :hover {
    color: #494949;
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
        <NavLink to={"#home"}>Home</NavLink>
        <NavLink to={"#about"}>About</NavLink>
        <NavLink to={"#service"}>Service</NavLink>
        <NavLink to={"#work"}>Work</NavLink>
        <Button primary title="Resume" fontSize={`18px`} />
      </NavLinks>
    </Div>
  );
};

export default Navbar;
