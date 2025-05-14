import { useAtomValue } from "jotai";
import { authAtom } from "@atoms/auth";
import { useEffect, useRef } from "react";

const useWebSocket = (onMessageCallback: (message: any) => void) => {
  const auth = useAtomValue(authAtom);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const boothId = auth?.adminUser?.booth_id;
    const baseSocketUrl = import.meta.env.VITE_BASE_SOCKET_URL;

    if (!token || !boothId) {
      console.log("토큰 또는 부스 아이디 없음");
      return;
    }

    const socket = new WebSocket(
      `${baseSocketUrl}/ws/waiting/${boothId}?token=${token}`
    );

    socket.onopen = () => {
      console.log("WebSocket 연결됨");
    };

    socket.onmessage = (event) => {
      console.log("받은 메시지:", event.data);
      try {
        const data = JSON.parse(event.data);
        console.log("파싱된 데이터:", data);
        onMessageCallback?.(data);
      } catch (error) {
        console.error("JSON 파싱 실패:", error);
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket 에러:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket 연결 종료");
    };

    // cleanup
    return () => {
      socket.close();
      console.log("웹소켓 종료");
    };
  }, [auth, onMessageCallback]);

  return socketRef;
};

export default useWebSocket;
