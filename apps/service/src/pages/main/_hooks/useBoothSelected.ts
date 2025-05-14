import { useState } from "react";

const useBooothSelected = () => {
  const [isBoothSelected, setSelectedStatus] = useState<boolean>(false);
  return { isBoothSelected, setSelectedStatus };
};

export default useBooothSelected;
