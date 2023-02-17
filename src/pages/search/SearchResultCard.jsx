import styled from '@emotion/styled';
import { BsBookmarkHeart } from 'react-icons/bs';
import { GrFormView } from 'react-icons/gr';
import { FaRegCommentDots } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import { BsPower } from 'react-icons/bs';

const SearchResultCard = ( searchdata ) => {
    // const {
    //     createdDate,
    //     isDeleted,
    //     isRemoted,
    //     nickName,
    //     partyDesc,
    //     partyIsOpen,
    //     partyLocation,
    //     partyName,
    //     partyNum,
    //     partyPostTitle,
    //     partyStack
    // } = searchdata
    // console.log(searchdata)
  return (
    <PostCard>
      <BookmarkIconBox>
        <Location>
            {searchdata.partyLocation}
        </Location>
        {/* <Location>{searchdata.partyTime}</Location> */}
        <BsBookmarkHeart cursor="pointer" size="20px" />
      </BookmarkIconBox>

      <PostBox>
        <PostTitle>{searchdata.partyName}</PostTitle>
        <PostDesc>
          {searchdata.partyDesc}
        </PostDesc>
        <TechStackIcon></TechStackIcon>
        {searchdata.partyStack.map((a)=>a)}
      </PostBox>

      <PartyStatusBox>
        <RecruitingBox>
          <BsPower color="green" size="15px" />
          <Recruiting>{searchdata.partyIsOpen ? "모집중" : "마감"}</Recruiting>
        </RecruitingBox>
        <HeadCountBox>
          <BsPeopleFill size="15px" />
          <HeadCount>{searchdata.partyNum}</HeadCount>
        </HeadCountBox>
      </PartyStatusBox>

      <HorizontalLine />

      <PostInfo>
        <ProfileBox>
          <ProfileImage src={searchdata.profileImg} />
          {/* <img width="30" height="30" src={searchdata.profileImg} /> */}
          <NickName>{searchdata.nickName}</NickName>
        </ProfileBox>
        <InfoBox>
          <GrFormView size="24px" />
          <PostView>12</PostView>
          <FaRegCommentDots size="15px" />
          <PostComments>3</PostComments>
        </InfoBox>
      </PostInfo>
    </PostCard>
  );
};

export default SearchResultCard;

const PostCard = styled.div`
  border: 1px solid black;
  flex-basis: 245px;
  padding: 16px;
  flex-grow: 0;
  flex-shrink: 0;
  width: 280px;
  height: 320px;
  display: flex;
  flex-direction: column;
`;

const BookmarkIconBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  align-items: center;
`;

const Location = styled.div`
  width: 62px;
  height: 16px;
  color: #4f4f4f;
`;

const PostBox = styled.div`
  margin-bottom: 22px;
  display: inline-block;
  width: 24%;
  margin: 2%;
`;

const PostTitle = styled.div`
  width: 245px;
  height: 24px;
  cursor: pointer;
  font-size: 17px;
`;

const PostDesc = styled.div`
  overflow-wrap: break-word;
  display: inline-block;
  width: 240px;
  margin-bottom: 20px;
  color: #828282;
  font-size: 14px;
`;

const PartyStatusBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
`;

const HeadCountBox = styled.div`
  display: flex;
  align-items: center;
`;

const HeadCount = styled.div`
  font-size: 15px;
`;

const RecruitingBox = styled.div`
  display: flex;
  align-items: center;
`;

const Recruiting = styled.div`
  font-size: 15px;
`;

const TechStackIcon = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-image: url('https://images.velog.io/images/hang_kem_0531/post/05903636-878d-4e75-bf8b-aaddfcecbcce/js-logo.png');
  background-size: cover;
`;

const HorizontalLine = styled.div`
  border: 0.5px solid grey;
  width: 100%;
  margin: auto;
`;

const PostInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const NickName = styled.div`
  width: 70px;
  height: 20px;
  font-size: 15px;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
`;

const PostView = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 15px;
`;

const PostComments = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
  font-size: 15px;
`;