import { Flex, Icon, IconLabel, Label } from "@linenow/core/components";

interface BoothDetailInfoProps {
  icon: React.ComponentProps<typeof Icon>["icon"];
  iconText: string;
  infoData: string;
}

const BoothDetailInfo = ({
  icon,
  iconText,
  infoData,
}: BoothDetailInfoProps) => {
  return (
    <Flex gap="1rem" alignItem="start">
      <Flex width="6rem">
        <IconLabel
          gap={"0.25rem"}
          icon={icon}
          font="body2"
          iconProps={{ color: "gray", size: 16 }}
        >
          {iconText}
        </IconLabel>
      </Flex>

      <Label font="body2_b">{infoData}</Label>
    </Flex>
  );
};

export default BoothDetailInfo;
