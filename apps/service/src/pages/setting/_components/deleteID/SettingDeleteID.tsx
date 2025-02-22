import * as S from "./SettingDeleteID.styled";
import useModal from "@hooks/useModal";
import { usePostDeleteID } from "@hooks/apis/auth";

const SettingDeleteID = () => {
  const { openModal } = useModal();
  const { mutate: postDeleteID } = usePostDeleteID();

  const handleDeleteIDClick = () => {
    openModal({
      title: "회원탈퇴",
      sub: "회원 탈퇴 시, 모든 이용 내역과 개인 정보가\n삭제되며 복구할 수 없습니다.\n계속 진행하시겠습니까?",
      primaryButton: {
        children: "회원탈퇴하기",
        onClick: handleDeleteID,
      },
      secondButton: {
        children: "취소하기",
      },
    });
  };

  const handleDeleteID = async () => {
    postDeleteID();
  };

  return (
    <S.SettingDeleteIDComponentWrapper>
      <S.SettingDeleteIDComponentText onClick={handleDeleteIDClick}>
        회원 탈퇴
      </S.SettingDeleteIDComponentText>
    </S.SettingDeleteIDComponentWrapper>
  );
};
export default SettingDeleteID;
