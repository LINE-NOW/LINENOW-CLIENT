import useMainViewType from "@pages/main/_hooks/useMainViewType";
import WaitingCardNotice from "./WaitingCardNotice";
import { MainViewType } from "@pages/main/types";

interface Config {
  label: string;
  toggleType: MainViewType;
}
const configs: Record<MainViewType, Config> = {
  list: {
    label: "지도로 둘러보기",
    toggleType: "map",
  },
  map: {
    label: "목록으로 보기",
    toggleType: "list",
  },
};
const WaitingCardEmpty = () => {
  const { viewType, setViewType } = useMainViewType();
  const config = configs[viewType];

  return (
    <WaitingCardNotice
      titleLabel={"대기중인 부스가 아직 없어요!"}
      descriptionLabel={"대기를 통해 쉽게 부스에 입장해보세요!"}
      button={{ variant: "blueLight", children: config.label }}
      onClick={() => {
        setViewType(config.toggleType);
      }}
    />
  );
};
export default WaitingCardEmpty;
