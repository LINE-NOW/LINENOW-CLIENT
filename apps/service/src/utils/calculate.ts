export const getEnteringTime = (confirmedAt: string) => {
  const confirmedAtDate = new Date(confirmedAt);
  if (isNaN(confirmedAtDate.getTime())) {
    return "error";
  }

  const getTargetDate = (): string => {
    confirmedAtDate.setMinutes(confirmedAtDate.getMinutes() + 10);
    return confirmedAtDate.toISOString();
  };

  return getTargetDate();
};
