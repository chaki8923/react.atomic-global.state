import styled from "styled-components";
import { SearchInput } from "../molcules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

import { SecondaryButton } from "../atoms/button/SecondaryButton";

import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image: "https://source.unsplash.com/hikQ6zIVLiY",
    name: `chaki${val}`,
    email: "test@com",
    tell: "09025453741",
    company: {
      name: "やんちゃ株式会社"
    },
    web: "yancha@com"
  };
});

export const User = () => {
  const [userInfo, setUserInfo] = useRecoilState(userState);
  console.log(userInfo);

  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>USERページです</h2>
      <SearchInput></SearchInput>
      <br />
      <SecondaryButton onClick={onClickSwitch}>切替</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
