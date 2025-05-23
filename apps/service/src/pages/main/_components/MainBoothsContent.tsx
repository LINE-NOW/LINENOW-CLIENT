import { BoothThumbnail } from "@interfaces/booth";

// APIs
import { QUERY_KEY } from "@hooks/apis/query";
import { useIsFetching } from "@tanstack/react-query";

// Components
import MainBoothListLoading from "./boothList/MainBoothListLoading";
import MainBoothList from "./boothList/MainBoothList";
import MainMap from "./map/MainMap";

interface MainBoothContentProps {
  viewType: "map" | "list";
  booths: BoothThumbnail[];
}

const MainBoothsContent = (props: MainBoothContentProps) => {
  const { viewType, booths } = props;

  const isBoothsFetching = useIsFetching({ queryKey: QUERY_KEY.BOOTHS() });
  const isFirstLoading = isBoothsFetching === 1 && booths.length === 0;

  if (isFirstLoading) return <MainBoothListLoading />;

  if (viewType === "list")
    return (
      <MainBoothList booths={booths} isFetching={isBoothsFetching === 1} />
    );
  else if (viewType === "map") return <MainMap booths={booths} />;
};

export default MainBoothsContent;
