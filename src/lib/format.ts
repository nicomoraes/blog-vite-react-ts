export const formatDate = (databaseDate: string): string => {
  const moreThanNine = (num: number) => (num <= 9 ? '0' + num : num);

  const date = databaseDate.split('T')[0];
  const jsDate = new Date(date);

  const day = jsDate.getDate();
  const month = jsDate.getMonth();
  const year = jsDate.getFullYear();

  return `${moreThanNine(day)}/${moreThanNine(month + 1)}/${year}`;
};
