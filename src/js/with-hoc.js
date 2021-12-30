import { useState, useEffect } from "react";
import * as PurchaseService from "./services/purchase.service";

function MostExpansivePurchase(purchase) {
  return (
    <article className="purchase purchase--most-expansive">
      <h1>{purchase.produto}</h1>
      <strong>{purchase.preco}</strong>
    </article>
  );
}

function withMostExpansivePurchase(Component) {
  return function ComponentWithMostExpansivePurchase(...props) {
    const [purchase, setPurchase] = useState(null);

    useEffect(() => {
      PurchaseService.takeTheMostExpansive().then(setPurchase);
    }, []);

    return <Component purchase={purchase} {...props} />;
  };
}

const Purchase = withMostExpansivePurchase(MostExpansivePurchase);

function App() {
  return <Purchase />;
}
