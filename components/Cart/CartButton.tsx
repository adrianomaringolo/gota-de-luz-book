import { useEffect, useState } from "react";
import {
  CartItemType,
  CartService,
  CartType,
} from "../../services/CartService";
import Link from "next/link";
import styled from "styled-components";
import PubSub from "pubsub-js";

const StyledCartButton = styled.div`
  .cart-button {
    @media only screen and (max-width: 800px) {
      flex-direction: column;
      justify-content: center;
      text-align: center;
      align-items: center;
      img {
        width: 50px;
        height: 58px;
        margin-right: 0;
      }
    }
  }
`;

export const CartButton = () => {
  const [cart, setCart] = useState<CartType>();

  const getCart = async () => {
    setCart(await CartService.getCart());
  };

  useEffect(() => {
    getCart();

    PubSub.subscribe("card_add_item", () => {
      getCart();
    });
  }, []);

  const getTotalItens = () => {
    let total = 0;
    cart?.items.forEach((element: CartItemType) => {
      total += element.amount || 0;
    });

    return total;
  };
  return (
    <StyledCartButton>
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
    </StyledCartButton>
  );
};
