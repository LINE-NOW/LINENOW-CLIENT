// import { useGetWaitings } from "@hooks/apis/waiting";
import { QUERY_KEY } from "@hooks/apis/query";
import { Waiting } from "@interfaces/waiting";
import { Icon, IconLabel, Label, LinkButton } from "@linenow/core/components";
import { useQueryClient } from "@tanstack/react-query";

const MainNavigationTitleUser = () => {
  const queryClient = useQueryClient();
  const waitings =
    (queryClient.getQueryData(QUERY_KEY.WAITINGS()) as Waiting[]) ?? [];

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
