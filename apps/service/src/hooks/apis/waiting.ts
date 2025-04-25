import { useMutation, useQuery } from "@tanstack/react-query";

import { WAITING_QUERY_KEY } from "@apis/domains/waiting/queries";
import {
  getNowWaitings,
  getWaiting,
  GetWaitingRequest,
  getWaitings,
} from "@apis/domains/waiting/apis";

import { postWaitingCancel } from "@apis/domains/waitingCancel/apis";
import { useModal } from "@linenow/core/hooks";
import useIsLoading from "@hooks/useIsLoading";
import {
  postWaitingRegister,
  PostWaitingRegisterResponse,
  RegisterWaitingRequest,
} from "@apis/domains/waiting/_interfaces";

import { useLocation, useNavigate } from "react-router-dom";
import { useSplash } from "@pages/waitingCheck/_components/splash/SplashContext";

export const useGetWaiting = ({ ...props }: GetWaitingRequest) => {
  return useQuery({
    queryKey: [WAITING_QUERY_KEY.WAITING],
    queryFn: () => getWaiting(props),
  });
};

export const useGetWaitings = () => {
  return useQuery({
    queryKey: [WAITING_QUERY_KEY.WAITINGS],
    queryFn: () => getWaitings(),
  });
};

export const useGetNowWaitings = (isLogin: boolean, query?: string) => {
  return useQuery({
    queryKey: [WAITING_QUERY_KEY.NOW_WAITINGS, query],
    queryFn: () => getNowWaitings(),
    enabled: isLogin,
  });
};

export const usePostWaitingCancel = () => {
  const { closeModal } = useModal();
  const { setLoadings } = useIsLoading();
  const navigate = useNavigate();
  const location = useLocation();

  return useMutation({
    mutationKey: ["waiting_cancel"],
    mutationFn: (waitingID: number) => {
      setLoadings({ isFullLoading: true });
      return postWaitingCancel({ waitingID: waitingID });
    },
    onSuccess: () => {
      alert("대기가 취소 되었습니다.");
      setLoadings({ isFullLoading: false });
      closeModal();

      if (location.pathname.startsWith("/waiting")) {
        navigate("/", { replace: true });
      } else {
        window.history.go(0);
      }
    },
    onError: () => {
      alert("대기 취소에 실패했어요.\n잠시 후 다시 시도해주세요.");
      setLoadings({ isFullLoading: false });
    },
  });
};

export const usePostWaitingRegister = () => {
  const { showSplash } = useSplash();
  const { closeModal } = useModal();
  const { setLoadings } = useIsLoading();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["waiting_register"],
    mutationFn: async ({
      boothID,
      partySize,
    }: RegisterWaitingRequest): Promise<PostWaitingRegisterResponse | null> => {
      try {
        setLoadings({ isFullLoading: true });
        return await postWaitingRegister({ boothID, partySize });
      } catch (error) {
        throw error;
      }
    },
    onSuccess: (response) => {
      showSplash();

      setTimeout(() => {
        navigate(`/waiting/${response?.id}`, {
          state: response,
          replace: true,
        });
      }, 600);
      setLoadings({ isFullLoading: false });
      closeModal();
    },
    onError: () => {
      alert("대기 걸기에 실패했어요.\n잠시 후 다시 시도해주세요.");
      setLoadings({ isFullLoading: false });
    },
  });
};
