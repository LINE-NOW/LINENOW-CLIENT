import { useGetWaitings } from "@hooks/apis/waiting";
import {
  Flex,
  Icon,
  IconLabel,
  Label,
  LinkButton,
} from "@linenow/core/components";

const MainNavigationTitleUser = () => {
  const { data: waitings = [] } = useGetWaitings("waiting");
  return (
    <>
      <LinkButton to={`/my-waiting`}>
        <IconLabel
          gap={"0.25rem"}
          font="head3"
          color="white"
          icon={"right"}
          iconPosition="right"
          iconProps={{ color: "white", size: 16 }}
        >
          나의 대기
          <Label font="head3" color="lime">
            {waitings.length}개
          </Label>
        </IconLabel>
      </LinkButton>

      <LinkButton to={`/setting`}>
        <Icon icon="setting" color="white" />
      </LinkButton>
    </>
  );
};

export default MainNavigationTitleUser;
