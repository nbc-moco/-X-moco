import React, { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { doc, updateDoc } from 'firebase/firestore';
import { db, authService } from '../../../common/firebase';
// import { uuidv4 } from '@firebase/util';
import CustomUi from './CustomUi';
import { GrMoreVertical } from 'react-icons/gr';
import {
  CommentContainer,
  CommentDeleteBtn,
  CommentContainHeader,
  CommentIconBody,
  CommentUserName,
  CommentUserInput,
  CommentText,
  CommentTextIcon,
  CommentUpdateBtn,
  ListContainer,
  ListTextSection,
  NoneDiv,
  UpdateDeleteBody,
} from './CommentStyle';

const Comment = ({ user }) => {
  // comment 컬렉션 데이터 저장
  const [editBox, setEditBox] = useState(false);
  const [editValue, setEditValue] = useState(user.comment);
  const [toggleBtn, setToggleBtn] = useState(false);
  const [areYouUser, setAreYouUser] = useState(false);

  const handleChange = (e) => {
    setEditValue(e.target.value);
  };

  // 토글 버튼을 누를 시 userid와 currentuid비교
  // 수정 삭제 버튼 오픈
  const ToggleDropDown = (userId) => {
    const currentUid = authService?.currentUser?.uid;

    if (toggleBtn === false) {
      if (userId === currentUid) {
        setAreYouUser(true);
      }
      setToggleBtn(true);
    } else if (toggleBtn === true) {
      if (userId === currentUid) {
        setAreYouUser(false);
      }
      setToggleBtn(false);
    }
  };

  // 댓글 수정
  const editHandler = (comment) => {
    setEditValue(comment);
    setEditBox(true);
  };

  // 댓글 수정완료
  const completeHandler = async (user, comment) => {
    setEditBox(false);
    await updateDoc(doc(db, 'comment', user.id), { comment: comment });
    setToggleBtn(false);
  };

  // 댓글 삭제
  const deleteHandler = (id) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return <CustomUi onClose={onClose} id={id} />;
      },
    });
  };

  return (
    <CommentContainer>
      <CommentContainHeader>댓글</CommentContainHeader>
      {/* 댓글 내용 */}
      <ListContainer>
        <ListTextSection>
          <CommentUserName>{user.nickname}</CommentUserName>

          {!editBox ? (
            <CommentText>{user.comment}</CommentText>
          ) : (
            <CommentUserInput
              type="text"
              value={editValue}
              onChange={(e) => handleChange(e)}
            />
          )}
          <CommentTextIcon>
            <CommentIconBody>
              <GrMoreVertical onClick={() => ToggleDropDown(user.uid)} />
            </CommentIconBody>

            {toggleBtn ? (
              <>
                {areYouUser ? (
                  <UpdateDeleteBody>
                    {!editBox ? (
                      <CommentUpdateBtn
                        onClick={() => {
                          editHandler(user.comment);
                        }}
                      >
                        수정
                      </CommentUpdateBtn>
                    ) : (
                      <CommentUpdateBtn
                        onClick={() =>
                          completeHandler(user, editValue, user.uid)
                        }
                      >
                        수정완료
                      </CommentUpdateBtn>
                    )}

                    <CommentDeleteBtn
                      onClick={() => {
                        deleteHandler(user.id);
                      }}
                      user={user}
                    >
                      삭제
                    </CommentDeleteBtn>
                  </UpdateDeleteBody>
                ) : (
                  <UpdateDeleteBody></UpdateDeleteBody>
                )}
              </>
            ) : (
              <NoneDiv></NoneDiv>
            )}
          </CommentTextIcon>
        </ListTextSection>
      </ListContainer>
    </CommentContainer>
  );
};

export default Comment;
