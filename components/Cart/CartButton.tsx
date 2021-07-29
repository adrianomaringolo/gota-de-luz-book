import { useEffect, useState } from "react";
import {
  CartItemType,
  CartService,
  CartType,
} from "../../services/CartService";
import Link from "next/link";

export const CartButton = () => {
  const [cart, setCart] = useState<CartType>();

  useEffect(() => {
    setCart(CartService.getCart());
  }, []);

  const getTotalItens = () => {
    let total = 0;
    cart?.items.forEach((element: CartItemType) => {
      total += element.amount || 0;
    });

    return total;
  };
  return (
    <Link href="/carrinho">
      <div className="cart-button">
        <img src="/images/shopping-bag.png" />
        <div className="text-area">
          <span className="title">Reservas</span>
          {cart?.items && (
            <span className="ammount">
              {getTotalItens()} {getTotalItens() > 1 ? "produtos" : "produto"}
            </span>
          )}
          <small>Clique para {!cart ? "fazer" : "ver"} seu pedido</small>
        </div>
      </div>
    </Link>
  );
};
