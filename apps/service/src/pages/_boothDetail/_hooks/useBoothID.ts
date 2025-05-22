import { useParams } from "react-router-dom";

const useBoothID = () => {
  const { boothID } = useParams<{ boothID: string }>();

  return boothID;
};

export default useBoothID;
