import { OptionProps } from "@components/select/Select";
import { useState } from "react";

const sortBoothOptions: OptionProps[] = [
  { label: "이름 순", value: "name" },
  { label: "대기 적은 순", value: "waiting_count" },
  { label: "대기 많은 순", value: "-waiting_count" },
];

const useSortBooths = () => {
  const [currentSortBoothOption, setCurrentSortBoothOption] = useState("name");

  const handleSortBoothOptionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCurrentSortBoothOption(event.target.value);
  };

  return {
    sortBoothOptions,
    currentSortBoothOption,
    handleSortBoothOptionChange,
  };
};

export default useSortBooths;
