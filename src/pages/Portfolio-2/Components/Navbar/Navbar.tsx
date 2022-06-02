import styled from "styled-components";
import { Button, Div } from "../../../../Components";
import { HashLink } from "react-router-hash-link";

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 40vw;
  padding: 10px 20px;
`;

const NavLink = styled(HashLink)`
  color: #494949;
  text-decoration: none;
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
    >
      <Div
        flex
        justifyContent="center"
        alignItems="center"
        fontFamily={"'Kdam Thmor Pro', sans-serif;"}
        paddingBottom={"10px"}
        paddingLeft={"20px"}
        paddingRight={"20px"}
        paddingTop={"10px"}
      >
        NP
      </Div>
      <NavLinks>
        <NavLink to={"#Home"}>Home</NavLink>
        <NavLink to={"#About"}>Home</NavLink>
        <NavLink to={"#Work"}>Home</NavLink>
        <Button green title="Resume"/>
      </NavLinks>
    </Div>
  );
};

export default Navbar;
