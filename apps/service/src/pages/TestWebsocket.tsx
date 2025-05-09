// src/pages/dev/TestWebSocket.tsx
import { useEffect } from "react";

const TestWebSocket = () => {
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const socket = new WebSocket(`백엔드 socket 주소`);

    socket.onopen = () => {
      console.log("WebSocket 연결됨");
    };

    socket.onmessage = (event) => {
      console.log("받은 메시지:", event.data);
      try {
        const data = JSON.parse(event.data);
        console.log("파싱된 데이터:", data);
      } catch (error) {
        console.error("JSON 파싱 실패:", error);
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket 에러:", error);
    };

    socket.onclose = () => {
      console.log("🔌 WebSocket 연결 종료");
    };

    // cleanup
    return () => {
      socket.close();
    };
  }, []);

  return <div>웹소켓 테스트 중...</div>;
};

export default TestWebSocket;
