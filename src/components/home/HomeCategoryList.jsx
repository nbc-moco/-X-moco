import styled from '@emotion/styled';
import HomeCategoryItem from './HomeCategoryItem';

const HomeCategoryList = ({ category }) => {
  return (
    <CategoryBox>
      {category.map((item, index) => (
        <HomeCategoryItem key={index} item={item} />
      ))}
    </CategoryBox>
  );
};

export default HomeCategoryList;

const CategoryBox = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
`;
