import styled from "@emotion/styled";

const HomeCategoryItem = ({ item }) => {
  const { name } = item;
  return (
    <CategoryItemBox>
        <CategoryNameBox>{name}</CategoryNameBox>
    </CategoryItemBox>
  );
};

export default HomeCategoryItem;

const CategoryItemBox = styled.div`
    width: 120px;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    border-color: #B9B9B9;
    margin: 0 8px;
`
const CategoryNameBox = styled.div`
    width: 88px;
    height: 20px;
    background-color: #D9D9D9;
    text-align: center;
`
