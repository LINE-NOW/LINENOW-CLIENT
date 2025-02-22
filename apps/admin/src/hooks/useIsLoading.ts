import { IsLoadingAtom, IsLoadingProps } from "@atoms/isLoading";
import { useAtom } from "jotai";

const useIsLoading = () => {
  const [loadings, setLoadings] = useAtom<IsLoadingProps>(IsLoadingAtom);

  return { loadings, setLoadings };
};

export default useIsLoading;
