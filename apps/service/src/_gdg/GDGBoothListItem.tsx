import { Booth } from "@interfaces/booth";

import { Chip, ModalProps } from "@linenow/core/components";
import { getBoothListItemStyle } from "@pages/main/_components/boothList/MainBoothList.styled";
import BoothThumbnailBadge from "@components/booth/BoothThumbnailBadge";
import { useModal } from "@linenow/core/hooks";

export interface GDGBoothListItemProps
  extends Pick<
    Booth,
    "boothID" | "description" | "name" | "location" | "thumbnail"
  > {
  GDGID: number;
}

const GDGBoothListItem = (props: GDGBoothListItemProps) => {
  const { ...booth } = props;

  const navigateGDG = () => {
    closeModal();
    window.open(`https://www.dirvana.co.kr/booth/${booth.GDGID}`, "_blank");
  };

  const gdgModal: ModalProps = {
    title: "축제사이트로 이동합니다",
    sub: "해당 부스는 축제 사이트에서 대기 가능해요.\n지금 이동할까요?",
    primaryButton: {
      children: "이동하기",
      variant: "grayLight",
      onClick: navigateGDG,
    },
    secondButton: {
      children: "뒤로가기",
    },
  };

  const { openModal, closeModal } = useModal();

  const handleOnClick = () => {
    openModal(gdgModal);
  };

  return (
    <div css={getBoothListItemStyle()} onClick={handleOnClick}>
      <BoothThumbnailBadge
        {...booth}
        badges={<Chip variant="black">축제사이트</Chip>}
      />
    </div>
  );
};

export default GDGBoothListItem;
