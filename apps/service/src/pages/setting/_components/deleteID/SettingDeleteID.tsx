import { useModal } from "@linenow/core/hooks";
import * as S from "./SettingDeleteID.styled";
import { useModalWithdraw } from "@components/modal/user";

const SettingDeleteID = () => {
  const { openModal } = useModal();
  const withdrawModal = useModalWithdraw();

  const handleWithdrawClick = () => {
    openModal(withdrawModal);
  };

  return (
    <S.SettingDeleteIDComponentWrapper>
      <S.SettingDeleteIDComponentText onClick={handleWithdrawClick}>
        회원 탈퇴
      </S.SettingDeleteIDComponentText>
    </S.SettingDeleteIDComponentWrapper>
  );
};
export default SettingDeleteID;
