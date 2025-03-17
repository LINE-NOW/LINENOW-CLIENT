import { useAtom } from "jotai";
import { mainViewTypeAtom } from "../_atom/mainViewType";
import { MainViewType } from "../types";
import { IconKey } from "@linenow/core/types";
import { Switch } from "@linenow/core/components";
import { css } from "@emotion/react";

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
  const MainViewTypeSwitch = () => (
    <Switch
      icon={config.switchIcon}
      onClick={() => setMainViewType(config.toggleType)}
      css={getSwitchStyle(mainViewType)}
    >
      {config.switchLabel}
    </Switch>
  );

  return {
    viewType: mainViewType,
    MainViewTypeSwitch,
  };
};

export default useMainViewType;

const getSwitchStyle = (type: MainViewType) => {
  const getBottom = type === "list" ? "1rem" : "4rem";
  return css`
    position: fixed;
    transform: translateX(-50%);
    left: 50%;
    bottom: ${getBottom};
    box-shadow: 0px 1px 5px 2px rgba(26, 30, 39, 0.1);
  `;
};
