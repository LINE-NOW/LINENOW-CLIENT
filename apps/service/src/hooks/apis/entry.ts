import { useMutation } from "@tanstack/react-query";
import { PostConfirmRequest, postEntryConfirm } from "@apis/domains/entry/api";
import useModal from "@hooks/useModal";
import useIsLoading from "@hooks/useIsLoading";

export const usePostConfirm = ({ ...props }: PostConfirmRequest) => {
  const { closeModal } = useModal();
  const { setLoadings } = useIsLoading();
  return useMutation({
    mutationKey: ["post_confirm"],
    mutationFn: () => {
      alert("부스 입장을 확정했어요!\n10분 내로 부스에 입장해주세요.");
      setLoadings({ isFullLoading: true });
      return postEntryConfirm(props);
    },
    onSuccess: () => {
      closeModal();
      setLoadings({ isFullLoading: false });
      history.go(0);
    },
    onError: () => {
      alert("예상치 못한 오류가 발생했어요.\n잠시 후 다시 시도해주세요.");
      setLoadings({ isFullLoading: false });
    },
  });
};
