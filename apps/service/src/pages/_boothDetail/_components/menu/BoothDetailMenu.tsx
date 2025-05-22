import { Booth } from "@interfaces/booth";
import * as S from "./BoothDetailMenu.styled";

interface BoothDetailContentProps {
  booth: Booth;
}

export const BoothDetailMenu = ({ booth }: BoothDetailContentProps) => {
  return (
    <S.BoothDetailMenuLayout>
      <S.BoothDetailTitle>메뉴</S.BoothDetailTitle>
      <S.BoothDetailMenuWrapper>
        {booth.menus?.map((menu, index) => (
          <S.BoothDetailMenuArticleWrapper key={index}>
            <S.BoothDetailMenuArticle>{menu.name}</S.BoothDetailMenuArticle>
            <S.BoothDetailMenuArticle>
              {menu.price.toLocaleString()}
            </S.BoothDetailMenuArticle>
          </S.BoothDetailMenuArticleWrapper>
        ))}
      </S.BoothDetailMenuWrapper>
    </S.BoothDetailMenuLayout>
  );
};
