import { useAtom } from 'jotai';
import { useMemo } from 'react';
import { authAtom, AuthProps } from '@atoms/auth';

const useAuth = () => {
  const [auth, setAuth] = useAtom(authAtom);

  const login = ({ accessToken, refreshToken }: AuthProps) => {
    if (auth) return;

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    setAuth({ accessToken, refreshToken });
  };

  const logout = () => {
    if (!auth) return; // 이미 로그아웃된 상태

    // localStorage에서 토큰 삭제
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    setAuth(null);
  };

  const isLogin = useMemo(() => auth != null, [auth]);

  return {
    isLogin,
    auth,
    login,
    logout,
  };
};

export default useAuth;
