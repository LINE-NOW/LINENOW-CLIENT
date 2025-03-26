import { useAtom } from "jotai";
import { mainViewTypeAtom } from "../_atom/mainViewType";
import { MainViewType } from "../types";
import { IconKey } from "@linenow/core/types";
import { Switch } from "@linenow/core/components";

interface MainViewTypeConfig {
  toggleType: MainViewType;
  switchIcon: IconKey;
  switchLabel: string;
}

type MainViewTypeConfigs = Record<MainViewType, MainViewTypeConfig>;

const mainViewTypeConfigs: MainViewTypeConfigs = {
  list: {
    toggleType: "map",
    switchIcon: "map",
    switchLabel: "지도 보기",
  },
  map: {
    toggleType: "list",
    switchIcon: "list",
    switchLabel: "목록 보기",
  },
};

const useMainViewType = () => {
  const [mainViewType, setMainViewType] = useAtom(mainViewTypeAtom);
  const config = mainViewTypeConfigs[mainViewType];

  // view type을 전환하는 버튼
  const mainViewTypeSwitchProps: React.ComponentProps<typeof Switch> = {
    icon: config.switchIcon,
    onClick: () => setMainViewType(config.toggleType),
    children: config.switchLabel,
  };

  return {
    viewType: mainViewType,
    setViewType: setMainViewType,
    mainViewTypeSwitchProps,
  };
};

export default useMainViewType;
