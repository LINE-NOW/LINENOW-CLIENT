import { useAtom } from "jotai";

import { ToastPosition } from "../components/toast/Toast";
import { toastsAtom } from "../atoms/toast";

const useToast = () => {
  const [toasts, setToasts] = useAtom(toastsAtom);

  const presentToast = (
    message: string,
    position: ToastPosition = "bottom",
    duration = 3
  ) => {
    const id = Date.now();
    setToasts((prev) => [
      ...prev,
      { id, position, duration, children: message },
    ]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, duration * 1000);
  };

  return { toasts, presentToast };
};

export default useToast;
