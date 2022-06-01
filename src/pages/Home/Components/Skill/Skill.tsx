import styled from "styled-components";
import { Div, Heading } from "../../../../Components";

interface Props {
  icon: React.ReactNode;
  name: string;
}

const DiamondDiv = styled(Div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: rotate(45deg);
  border: #dde1e3 solid 1px;
  border-radius: 8px;
`;

const Skill = ({ icon, name }: Props) => {
  return (
    <>
      <Div>
        <Div
          position="relative"
          width={`80px`}
          height={`80px`}
          flex
          justifyContent="center"
          alignItems="center"
        >
          {icon}
          <DiamondDiv />
        </Div>

        <Heading type="h3" color="#3d4449">
          {name}
        </Heading>
      </Div>
    </>
  );
};

export default Skill;
