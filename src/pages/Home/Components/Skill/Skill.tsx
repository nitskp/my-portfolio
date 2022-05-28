interface Props {
  icon: React.ReactNode;
  name: string;
}

// interface StylesObjectType {
//   diamondBorder: React.CSSProperties;
//   container: React.CSSProperties;
// }

const Skill = ({ icon, name }: Props) => {
  // const styles: StylesObjectType = {
  //   diamondBorder: {
  //     rotate: "45deg",
  //     border: `solid 2px rgba(210, 215, 217, 0.75)`,
  //     borderRadius: `10px`,
  //     width: `132px`,
  //     height: '132px',
  //    translate:`translateY(66px)`
  //   },
  //   container: {
  //     border: `2px solid red`,
  //     maxWidth: `fit-content`
  //   }
  // };

  return (
    <>
      {icon}
      {name}
    </>
  );
};

export default Skill;
