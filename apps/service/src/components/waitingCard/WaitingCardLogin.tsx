import { useNavigate } from "react-router-dom";
import { ROUTE } from "@constants/route";

import WaitingCardNotice from "./WaitingCardNotice";

const WaitingCardLogin = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate(ROUTE.LOGIN);
  };

  return (
    <WaitingCardNotice
      titleLabel={"라인나우로 편하게 대기해보세요!"}
      descriptionLabel={"전화번호 인증 시 부스 대기가 가능해요."}
      button={{ variant: "lime", children: "전화번호로 빠르게 시작하기" }}
      onClick={handleButton}
    />
  );
};
export default WaitingCardLogin;
