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
      descriptionLabel={"로그인 후 이용하실 수 있습니다."}
      button={{ variant: "lime", children: "전화번호로 로그인하기" }}
      onClick={handleButton}
    />
  );
};
export default WaitingCardLogin;
