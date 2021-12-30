import { useState, useEffect } from "react";
import * as PurchaseService from "./services/purchase.service";

function MostExpansivePurchase({ produto, preco }) {
  return (
    <article className="purchase purchase--most-expansive">
      <h1>{produto}</h1>
      <strong>{preco}</strong>
    </article>
  );
}

function App() {
  const [purchase, setPurchase] = useState(null);

  useEffect(() => {
    PurchaseService.takeTheMostExpansive().then(setPurchase);
  }, []);

  return <MostExpansivePurchase {...purchase} />;
}
