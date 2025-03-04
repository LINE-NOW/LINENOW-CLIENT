import styled from "@emotion/styled";
import useAuth from "@hooks/useAuth";
import { useModal } from "@linenow/design-system";

const TestTool = () => {
  const { openModal } = useModal();
  const { auth, isLogin, login, logout } = useAuth();

  const handleLoginButton = () => {
    login({ accessToken: "1234", refreshToken: "1234" });
  };

  return (
    <TestToolWrapper>
      <div>프론트의 테스트 툴입니다</div>
      <button onClick={() => openModal({ title: "hello" })}>모달 열기</button>
      <div>유저 정보 : {auth?.accessToken}</div>
      {isLogin ? (
        <button onClick={logout}>로그아웃</button>
      ) : (
        <button onClick={handleLoginButton}>로그인</button>
      )}
    </TestToolWrapper>
  );
};

export default TestTool;

const TestToolWrapper = styled.section`
  position: fixed;
  z-index: 999999999;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: #ffffff;
  button {
    padding: 8px;
    background-color: blue;
    color: white;
  }
  cursor: pointer;
`;
