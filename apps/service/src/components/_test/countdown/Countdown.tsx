import * as S from "./CountDown.styled";

import { Label } from "@linenow/core/components";
import { useCountdown } from "@linenow/core/hooks";

const Countdown = () => {
  const { getString } = useCountdown({
    targetDate: import.meta.env.VITE_PROD_DATE,
  });
  return (
    <section css={S.containerStyle}>
      <Label font="caption" color="white">
        동국대학교 대동제까지
      </Label>
      <Label font="head3" color="lime">
        {getString("DDHHMMSS")}
      </Label>
    </section>
  );
};

export default Countdown;
