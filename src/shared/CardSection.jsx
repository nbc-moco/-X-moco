import styled from '@emotion/styled';
import { BsBookmarkHeart } from 'react-icons/bs';
import { GrFormView } from 'react-icons/gr';
import { FaRegCommentDots } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import { BsPower } from 'react-icons/bs';
import { Tag } from 'antd';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { css } from '@emotion/react';

const CardSection = ({ item }) => {
  const navigate = useNavigate();
  const handeMoveToDetail = () => {
    navigate(`/matedetail/${item.id}`);
  };
  return (
    <PostCard>
      <BookmarkIconBox>
        <Location>{item.partyLocation}</Location>
        <span>{item.bookmark}</span>
        <BsBookmarkHeart cursor="pointer" size="20px" />
      </BookmarkIconBox>

      <PostBox>
        <PostTitle onClick={handeMoveToDetail}>
          {item.partyPostTitile}
        </PostTitle>
        <PostDesc>{item.partyDesc}</PostDesc>
        <TechStackIcon>
          {item.partyStack.map((item, idx) => (
            <Tag key={idx} style={{ fontSize: 12 }} color="purple">
              {item}
            </Tag>
          ))}
        </TechStackIcon>
      </PostBox>

      <PartyStatusBox>
        <RecruitingBox>
          <Recruiting>
            {item.partyIsOpen === true ? (
              <span style={{ color: 'green' }}>모집 중</span>
            ) : (
              <span style={{ color: 'red' }}>모집완료</span>
            )}
          </Recruiting>
        </RecruitingBox>
        <HeadCountBox>
          <BsPeopleFill size="15px" />
          <HeadCount>{`: 1 / ${item.partyNum}`}</HeadCount>
        </HeadCountBox>
      </PartyStatusBox>

      <HorizontalLine />

      <PostInfo>
        <ProfileBox>
          <ProfileImage></ProfileImage>
          <NickName>{item.nickName}</NickName>
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

export default CardSection;

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
  &:hover {
    color: #531cab;
  }
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
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 240px;
  margin: 43px 0;
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

const ProfileImage = styled.div`
  background-color: grey;
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
