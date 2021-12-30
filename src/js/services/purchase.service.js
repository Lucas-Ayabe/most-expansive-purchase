import api from "./api";

const adaptingToDate = (value) => ({
  ...value,
  data: new Date(value.data),
});

const byYear = (year) => (obj) => obj.data.getFullYear() === year;

const mostExpansive = (acc, item) => {
  return acc.valorTotal < item.valorTotal ? item : acc;
};

const theMostExpansive = (purchases) => {
  return purchases
    .map(adaptingToDate)
    .filter(byYear(2016))
    .reduce(mostExpansive);
};

export const findAll = () => api.get("/");
export const takeTheMostExpansive = () => findAll().then(theMostExpansive);
