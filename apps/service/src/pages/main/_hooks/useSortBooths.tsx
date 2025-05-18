import { OptionProps } from "@components/select/Select";
import { Select } from "@linenow/core/components";
import { useState } from "react";

const sortBoothOptions: OptionProps[] = [
  {
    label: "대기 적은 순", // 오름차순
    value: "ASC",
    defaultChecked: true,
  },
  {
    label: "대기 많은 순", // 내림차순
    value: "DESC",
  },
];

const useSortBooths = () => {
  const [currentSortBoothOption, setCurrentSortBoothOption] = useState(
    sortBoothOptions[0].value
  );

  const handleSortBoothOptionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCurrentSortBoothOption(event.target.value);
  };

  const OptionSelect = () => {
    return (
      <Select
        options={sortBoothOptions}
        onChange={handleSortBoothOptionChange}
        value={currentSortBoothOption}
      />
    );
  };

  return {
    currentSortBoothOption,
    OptionSelect,
  };
};

export default useSortBooths;
