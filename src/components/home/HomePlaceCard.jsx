import HomePlaceDescBox from "./HomePlaceDescBox";

const HomePlaceCard = ({ testList }) => {
  return (
    <>
      {testList.map((a, index) => (
        <HomePlaceDescBox key={index} />
      ))}
    </>
  );
};

export default HomePlaceCard;
