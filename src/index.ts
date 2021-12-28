import * as PurchaseService from "./services/purchase.service";

const adaptingToDate = (value: PurchaseService.Purchase) => ({
  ...value,
  data: new Date(value.data),
});

const byYear = (year: number) => {
  return <T extends { data: Date }>({ data }: T) => data.getFullYear() === year;
};

const mostExpansive = <T extends { valorTotal: number }>(acc: T, item: T) => {
  return acc.valorTotal < item.valorTotal ? item : acc;
};

const takeTheMostExpansive = (purchases: PurchaseService.Purchase[]) => {
  return purchases
    .map(adaptingToDate)
    .filter(byYear(2016))
    .reduce(mostExpansive);
};

PurchaseService.findAll().then(takeTheMostExpansive).then(console.log);
