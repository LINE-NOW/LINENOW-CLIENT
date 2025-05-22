import { ROUTE } from "@constants/route";
import { Button } from "@linenow/core/components";
import { useNavigate } from "react-router-dom";

const SettingButton = () => {
  const navigate = useNavigate();

  const navigateSetting = () => {
    navigate(ROUTE.SETTING);
  };

  return (
    <Button variant="grayLight" onClick={navigateSetting}>
      <span>사용자 설정</span>
    </Button>
  );
};

export default SettingButton;
