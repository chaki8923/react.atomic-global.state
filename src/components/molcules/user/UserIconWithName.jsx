import styled from "styled-components";
import { memo } from "react";

import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";

export const UserIconWithName = memo((props) => {
  const { image, name } = props;
  // const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(userState);

  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <>
      <SImg height={160} width={160} src={image} alt="プロフィール画像" />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </>
  );
});

const SImg = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.button`
  border: none;
  padding: 8px 18px;
  border-radius: 9999px;
  text-decoration: underline;
  color: cyan;
  &:hover {
    cursor: pointer;
  }
`;
