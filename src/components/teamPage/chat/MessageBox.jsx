import React from 'react';
import {
  MessageSection,
  MessageImageBox,
  MessageImage,
  MessageTextBox,
  MessageNickName,
  MessageContent,
} from './messageBoxStyle';

const MessageBox = ({ team }) => {
  return (
    <MessageSection>
      <MessageImageBox>
        <MessageImage src={team.user.image} alt="" />
      </MessageImageBox>
      <MessageTextBox>
        <MessageNickName>{team.user.name}</MessageNickName>
        <MessageContent>{team.content}</MessageContent>
      </MessageTextBox>
    </MessageSection>
  );
};

export default MessageBox;
