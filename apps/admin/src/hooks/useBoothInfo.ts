import { BoothInfoAtom } from "@atoms/boothInfo";
import { Booth } from "@interfaces/booth";
import { useAtom } from "jotai";

const useBoothInfo = () => {
  const [boothInfo, setBoothInfo] = useAtom<Booth>(BoothInfoAtom);

  const clearBoothInfo = () => {
    setBoothInfo({
      // Booth 인터페이스에 필요한 초기 값 지정
      boothID: 0,
      name: "",
      status: "finished",
    });
  };

  return { boothInfo, setBoothInfo, clearBoothInfo };
};

export default useBoothInfo;
