import { useParams } from "react-router-dom";

const useWaitingId = () => {
  const { waitingID } = useParams<{ waitingID: string }>();

  return waitingID;
};

export default useWaitingId;
