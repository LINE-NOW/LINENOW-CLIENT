import * as S from "./InputText.styled";

import Flex from "../flex/Flex";
import Label from "../label/Label";

interface InputTextContainerProps extends React.PropsWithChildren {
  label?: string;
  description?: string;
}

const InputTextContainer = (props: InputTextContainerProps) => {
  const { label, description, children } = props;
  return (
    <section css={[S.getWrapperStyle()]}>
      {/* text field 정보 */}
      <Flex
        direction="column"
        gap="0.25rem"
        padding="0rem 0.25rem 0.5rem 0.25rem"
      >
        {label && <Label font="head3" color="black" children={label} />}
        {description && (
          <Label font="caption" color="gray" children={description} />
        )}
      </Flex>

      <Flex direction="column" gap="0.5rem">
        {children}
      </Flex>
    </section>
  );
};

export default InputTextContainer;
