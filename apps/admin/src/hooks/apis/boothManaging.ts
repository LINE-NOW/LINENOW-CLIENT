import {
  PostBoothStatusRequest,
  PostWaitingsActionRequest,
} from "@apis/domains/boothManaging/_interfaces";
import {
  getBoothStatus,
  getWaitingsCounts,
  postBoothOperation,
  postBoothStatus,
  postWaitingsAction,
} from "@apis/domains/boothManaging/apis";
import { BOOTH_MANAGING_QUERY_KEY } from "@apis/domains/boothManaging/queries";
import useBoothInfo from "@hooks/useBoothInfo";
import { useModal } from "@linenow/design-system";
import { useMutation, useQuery } from "@tanstack/react-query";

interface PostWaitingActionProps {
  waitingID: number;
  requestBody: PostWaitingsActionRequest;
}

export const usePostWaitingAction = () => {
  const { closeModal } = useModal();
  return useMutation<void, Error, PostWaitingActionProps>({
    mutationKey: [BOOTH_MANAGING_QUERY_KEY.ACTION],
    mutationFn: ({ waitingID, requestBody }: PostWaitingActionProps) =>
      postWaitingsAction(waitingID, requestBody),
    onSuccess: () => {
      closeModal();
      history.go(0); // 새로고침
    },
    onError: (error) => {
      alert("처리중 오류가 발생했어요.\n다시 시도해주세요");
      console.log(error);
    },
  });
};

export const useGetBoothStatus = () => {
  return useQuery({
    queryKey: [BOOTH_MANAGING_QUERY_KEY.BOOTH_STATUS, "boothInfo"],
    queryFn: () => getBoothStatus(),
  });
};

interface PostBoothStatusProps {
  requestBody: PostBoothStatusRequest;
}

export const usePostBoothStatus = () => {
  const { closeModal } = useModal();
  const { setBoothInfo } = useBoothInfo();

  return useMutation<void, Error, PostBoothStatusProps>({
    mutationKey: [BOOTH_MANAGING_QUERY_KEY.BOOTH_STATUS, "status"],
    mutationFn: ({ requestBody }: PostBoothStatusProps) =>
      postBoothStatus(requestBody),
    onSuccess: async () => {
      closeModal();
      try {
        setBoothInfo(await getBoothStatus());
      } catch (error) {
        location.reload();
      }
    },
    onError: () => {
      alert("처리중 오류가 발생했어요.\n다시 시도해주세요");
    },
  });
};

interface PostBoothOperationProps {
  status: "pause" | "resume";
}

export const usePostBoothOperation = () => {
  const { closeModal } = useModal();
  const { setBoothInfo } = useBoothInfo();

  return useMutation<void, Error, PostBoothOperationProps>({
    mutationKey: [BOOTH_MANAGING_QUERY_KEY.BOOTH_STATUS, "operation"],
    mutationFn: ({ status }: PostBoothOperationProps) =>
      postBoothOperation(status),
    onSuccess: async () => {
      closeModal();
      try {
        setBoothInfo(await getBoothStatus());
      } catch (error) {
        location.reload();
      }
    },
    onError: () => {
      alert("처리중 오류가 발생했어요.\n다시 시도해주세요");
    },
  });
};

export const useGetWaitingsCounts = () => {
  return useQuery({
    queryKey: [BOOTH_MANAGING_QUERY_KEY.WAITINGS_COUNTS],
    queryFn: () => getWaitingsCounts(),
  });
};
