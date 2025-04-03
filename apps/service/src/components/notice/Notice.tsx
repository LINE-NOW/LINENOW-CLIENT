import * as S from "./Notice.styled";
interface NoticeProps extends React.PropsWithChildren {}

const Notice = (props: NoticeProps) => {
  const { children } = props;
  return <section css={S.getWrapperStyle()}>{children}</section>;
};

export default Notice;
