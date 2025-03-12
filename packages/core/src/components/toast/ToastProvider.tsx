// components
import Toast from "./Toast";

// hooks
import useToast from "../../hooks/useToast";

const ModalProvider = () => {
  const { toasts } = useToast();
  return (
    <>
      {toasts.map((toast, index) => (
        <Toast key={index} position={toast.position} duration={toast.duration}>
          {toast.children}
        </Toast>
      ))}
    </>
  );
};

export default ModalProvider;
