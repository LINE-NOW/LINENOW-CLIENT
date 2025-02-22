import * as S from "./SettingPage.styled";
import SettingItem from "./_components/settingItem/SettingItem";
import SettingDeleteID from "./_components/deleteID/SettingDeleteID";
import useModal from "@hooks/useModal";
// import { useAtom } from 'jotai';
// import { languageAtom } from '@atoms/language';
import { usePostLogout } from "@hooks/apis/auth";

const SettingPage = () => {
  const { openModal } = useModal();
  const { mutate: postLogout } = usePostLogout();

  // const [language, setLanguage] = useAtom(languageAtom);

  const handleLogout = async () => {
    postLogout();
  };

  const logoutModalProps = {
    title: "로그아웃",
    sub: "로그아웃하시겠습니까? \n 대기를 등록하려면 다시 로그인해야 합니다.",
    primaryButton: {
      children: "로그아웃하기",
      onClick: handleLogout,
    },
    secondButton: {
      children: "취소하기",
    },
  };

  // 로그아웃 클릭
  const handleLogoutClick = () => {
    openModal(logoutModalProps);
  };

  // 언어설정 클릭
  // const handleLanguageClick = () => {
  //   setLanguage(prevLanguage => (prevLanguage === 'ko' ? 'en' : 'ko'));
  //   console.log(language);
  // };

  // 이용약관 클릭
  const handleTermsOfServiceClick = () => {
    window.open(
      "https://thorn-freesia-96f.notion.site/c645fe5ebb624ca9a7be3e697ecdf8be?pvs=4",
      "_blank"
    );
  };

  // 1:1 문의 클릭
  const handleInquiryClick = () => {
    window.open("https://open.kakao.com/o/gV5NsYSg", "_blank");
  };

  // 개발자 정보 클릭
  const handleDeveloperInfoClick = () => {
    window.open(
      "https://thorn-freesia-96f.notion.site/09b2230a514848ec9041518f467f86e4?pvs=4",
      "_blank"
    );
  };

  const settingItemProps = [
    { title: "로그아웃", onClick: handleLogoutClick },
    // { title: '언어설정', onClick: handleLanguageClick },
    { title: "이용약관", onClick: handleTermsOfServiceClick },
    { title: "1:1 문의", onClick: handleInquiryClick },
    { title: "개발자 정보", onClick: handleDeveloperInfoClick },
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
