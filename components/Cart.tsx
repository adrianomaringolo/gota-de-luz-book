import React, { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { CartType, CartService, CartItemType } from "../services/CartService";
import PubSub from "pubsub-js";
import styles from "./../styles/products.module.scss";
import { useRouter } from "next/dist/client/router";
import { ContactForm } from "./Cart/ContactForm";
import { ConfirmationOrder } from "./Cart/ConfirmationOrder";

const CartModal = styled.div`
  input {
    padding: 5px;
    font-size: 1.2em;
  }

  .buy-button {
    background-color: #c7e2cb;
    &:hover {
      color: white;
      background-color: #618566;
    }
  }

  .title {
    font-size: 1.2em;
    margin-bottom: 0;
  }

  .title-description {
    font-size: 0.9em;
    color: #888;
    margin-top: 0;
  }

  .total-value {
    border-top: 1px solid #aaa;
    padding-top: 10px;
    margin-top: 10px;
    font-weight: bold;
  }

  .remove-button {
    color: #4d0303;
    padding: 5px;
    border: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .item-price {
    font-weight: bold;
    width: 70px;
    display: inline-block;
  }
`;

const StyledCart = styled.div`
  .cart-button {
    position: fixed;
    right: 20px;
    top: 20px;
    background: #f2e4ee;
    z-index: 1;
    display: flex;
    padding: 15px 25px;
    border-radius: 5px;
    transition: all 0.5s;

    &:hover {
      color: #fff;
      background: #8f6f85;
      text-decoration: underline;
      cursor: pointer;
    }

    .text-area {
      display: flex;
      flex-direction: column;
    }

    img {
      width: 67px;
      height: 77px;
      margin-right: 8px;
    }

    .title {
      font-weight: 500;
      display: inline-block;
    }
  }
`;

const Cart = () => {
  const [cart, setCart] = useState<CartType>();
  const [viewMode, setViewMode] = useState("");

  const [errorMessage, setErrorMessage] = useState(false);

  const [orderStep, setOrderStep] = useState(0);

  const [contactInfo, setContactInfo] = useState<any>();

  const router = useRouter();

  useEffect(() => {
    setCart(CartService.getCart());

    PubSub.subscribe("card_add_item", () => {
      console.log("Cart changed!");
      setCart(CartService.getCart());
    });
  }, []);

  const getTotal = () => {
    let total = 0;
    cart?.items.forEach((element: CartItemType) => {
      total += element.price * (element.amount || 0);
    });

    return total;
  };

  const getTotalItens = () => {
    let total = 0;
    cart?.items.forEach((element: CartItemType) => {
      total += element.amount || 0;
    });

    return total;
  };

  const saveOrder = async (e: FormEvent) => {
    e.preventDefault();
    setOrderStep(3);
    await CartService.saveOrder(cart, contactInfo);
    setOrderStep(4);
  };

  const checkData = () => {
    if (
      !contactInfo?.name ||
      !contactInfo?.phone ||
      !contactInfo?.city ||
      !contactInfo?.zipcode
    ) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
      setOrderStep(2);
    }
  };

  return (
    <StyledCart>
      <div className="cart-button" onClick={() => setViewMode(styles.expanded)}>
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

      <CartModal className={`${styles.modal} ${viewMode}`}>
        <div className={`${styles.detailedItem} ${styles.modalItem}`}>
          {orderStep === 0 && (
            <div>
              <p className="title">Meu pedido</p>
              <p className="title-description">
                Escolha os itens e quantidades abaixo e finalize sua reserva de
                pedido. Após o pedido, a equipe Gota de Luz vai entrar em
                contato para confirmar a disponibilidade dos produtos
                escolhidos.
              </p>
              <div
                style={{
                  padding: "20px",
                  maxHeight: "55vh",
                  overflow: "scroll",
                  border: "1px solid #ccc",
                }}
              >
                {cart?.items?.map((item: CartItemType) => (
                  <div key={`${item.id}`}>
                    <input
                      onChange={(event) => {
                        CartService.editItemAmount(
                          item.id,
                          Number(event.target.value)
                        );
                      }}
                      type="number"
                      min={0}
                      value={item.amount}
                      style={{ width: 60, marginRight: "10px" }}
                    />
                    <div
                      className="item-price"
                      style={!item.amount ? { color: "#ccc" } : {}}
                    >
                      R$ {item.price * (item.amount || 0)}
                    </div>
                    <span style={!item.amount ? { color: "#aaa" } : {}}>
                      [{item.type}] {item.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="total-value">Valor total: R$ {getTotal()}</div>
              <div className={styles.buttonArea} style={{ display: "flex" }}>
                <button
                  onClick={() => {
                    setViewMode("");
                    setOrderStep(0);
                    router.push("/#produtos");
                  }}
                  style={{ marginRight: "auto" }}
                >
                  Pedir mais produtos
                </button>
                <button
                  onClick={() => CartService.clearCart()}
                  style={{ marginRight: 10 }}
                >
                  Limpar tudo
                </button>
                <button onClick={() => setOrderStep(1)} className="buy-button">
                  Fazer pedido
                </button>
              </div>
            </div>
          )}

          {orderStep === 1 && (
            <form>
              <p className="title">Dados de contato</p>
              <p className="title-description">
                Preencha seus dados de contato abaixo
              </p>
              {errorMessage && (
                <p style={{ color: "red" }}>
                  Preencha todos os campos obrigatórios
                </p>
              )}
              <ContactForm
                setContactInfo={setContactInfo}
                contactInfo={contactInfo}
              />
              <div className={styles.buttonArea} style={{ display: "flex" }}>
                <button
                  type="button"
                  onClick={() => {
                    setOrderStep(0);
                  }}
                  style={{ marginRight: "auto" }}
                >
                  Voltar aos produtos
                </button>
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    checkData();
                  }}
                  className="buy-button"
                >
                  Fazer pedido
                </button>
              </div>
            </form>
          )}

          {orderStep === 2 && (
            <div>
              <p className="title">Confirmação</p>
              <p className="title-description">
                Confirme os produtos e seus dados de contato abaixo e clique em
                "Confirmar pedido"
              </p>

              <ConfirmationOrder cart={cart} contactInfo={contactInfo} />

              <div className={styles.buttonArea} style={{ display: "flex" }}>
                <button
                  type="button"
                  onClick={() => {
                    setOrderStep(1);
                  }}
                  style={{ marginRight: "auto" }}
                >
                  Corrigir dados de contato
                </button>
                <button
                  type="submit"
                  onClick={(e) => saveOrder(e)}
                  className="buy-button"
                >
                  CONFIRMAR PEDIDO
                </button>
              </div>
            </div>
          )}

          {orderStep === 3 && (
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "2em", fontWeight: "bold", color: "#ddd" }}>
                Sua reserva está sendo processada!
              </p>
            </div>
          )}

          {orderStep === 4 && (
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                Sua reserva foi feita com sucesso!
              </p>

              <p style={{ fontSize: "1.2em" }}>
                Em breve, a equipe Gota de Luz vai entrar em contato para
                confirmar os produtos e combinar a entrega.
              </p>

              <p>Obrigado pelo seu apoio!</p>

              <div className={styles.buttonArea} style={{ display: "flex" }}>
                <button
                  type="button"
                  onClick={() => {
                    setViewMode("");
                    setContactInfo({});
                    CartService.clearCart();
                    setOrderStep(0);
                  }}
                  style={{ marginRight: "auto" }}
                >
                  Fechar
                </button>
              </div>
            </div>
          )}
        </div>
      </CartModal>
    </StyledCart>
  );
};

export default Cart;
