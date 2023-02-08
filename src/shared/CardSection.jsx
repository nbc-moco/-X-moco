import styled from '@emotion/styled';

const CardSection = () => {
  return (
    <CardListSection>
      <PostContainer>
        <PostCard>
          <BookmarkIconBox>
            <BookmarkIcon />
          </BookmarkIconBox>

          <LocationBox>
            <LocationIcon />
            <Location />
          </LocationBox>

          <PostBox>
            <PostTitle />
            <PostDesc />
            <TechStackIcon />
          </PostBox>

          <HorizontalLine />

          <ProfileBox>
            <ProfileImage />
            <NickName />
          </ProfileBox>
        </PostCard>
      </PostContainer>
    </CardListSection>
  );
};

export default CardSection;

const CardListSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`;

const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  > * {
    flex-grow: 0;
    flex-shrink: 0;
  }
`;

const PostCard = styled.div`
  border: 1px solid black;
  flex-basis: 245px;
  padding: 16px;
  flex-grow: 0;
  flex-shrink: 0;
`;

const BookmarkIconBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

const BookmarkIcon = styled.div`
  border: 1px solid black;
  width: 32px;
  height: 32px;
`;

const LocationBox = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const LocationIcon = styled.div`
  border: 1px solid black;
  width: 16px;
  height: 16px;
  margin-right: 4.5px;
`;

const Location = styled.div`
  border: 1px solid black;
  width: 62px;
  height: 16px;
`;

const PostBox = styled.div`
  margin-bottom: 22px;
  display: inline-block;
  width: 24%;
  margin: 2%;
`;

const PostTitle = styled.div`
  border: 1px solid black;
  width: 245px;
  height: 24px;
  margin-bottom: 8px;
  cursor: pointer;
`;

const PostDesc = styled.div`
  border: 1px solid black;
  width: 190px;
  height: 16px;
  margin-bottom: 26px;
`;

const TechStackIcon = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

const HorizontalLine = styled.div`
  border: 0.5px solid grey;
  width: 100%;
  margin: auto;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
`;

const ProfileImage = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const NickName = styled.div`
  border: 1px solid black;
  width: 70px;
  height: 20px;
`;
