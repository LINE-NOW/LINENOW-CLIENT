import * as S from "./SettingPage.styled";
import SettingItem from "./_components/settingItem/SettingItem";
import SettingDeleteID from "./_components/deleteID/SettingDeleteID";

import { useModal } from "@linenow/core/hooks";
import { useModalLogouut } from "@components/modal/user";

const SettingPage = () => {
  const { openModal } = useModal();
  const logoutModal = useModalLogouut();

  // 로그아웃 클릭
  const handleLogoutClick = () => {
    openModal(logoutModal);
  };

  // 이용약관 클릭
  const handleTermsOfServiceClick = () => {
    window.open(
      "https://thorn-freesia-96f.notion.site/1f5d72341c498025813dff9f58b0e412",
      "_blank"
    );
  };

  // 1:1 문의 클릭
  const handleInquiryClick = () => {
    window.open("https://open.kakao.com/o/gV5NsYSg", "_blank");
  };

  // 개발자 정보 클릭
  // const handleDeveloperInfoClick = () => {
  //   window.open(
  //     "https://thorn-freesia-96f.notion.site/09b2230a514848ec9041518f467f86e4?pvs=4",
  //     "_blank"
  //   );
  // };

  const settingItemProps = [
    { title: "로그아웃", onClick: handleLogoutClick },
    { title: "이용약관", onClick: handleTermsOfServiceClick },
    { title: "1:1 문의", onClick: handleInquiryClick },
    // { title: "개발자 정보", onClick: handleDeveloperInfoClick },
  ];

  return (
    <S.SettingPageWrapper>
      <S.SettingComponentsWrapper>
        <S.SettingContentWrapper>
          {settingItemProps.map((item, index) => (
            <SettingItem key={index} {...item} />
          ))}
        </S.SettingContentWrapper>
        <SettingDeleteID />
      </S.SettingComponentsWrapper>
    </S.SettingPageWrapper>
  );
};
export default SettingPage;
