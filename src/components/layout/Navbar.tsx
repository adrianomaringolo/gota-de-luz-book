import { useEffect, useState } from "react";
import {
  CartItemType,
  CartService,
  CartType,
} from "../../services/CartService";
import styled from "styled-components";
import PubSub from "pubsub-js";
import { scrollToElement } from "../../utils/layout";
import { useRouter } from "next/router";
import Image from "next/image";
import { MobileMenu } from "./MobileMenu";

const StyledHeader = styled.header`
  background: #f2e4ee;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 10;
  justify-content: space-between;
  box-shadow: #444 0px 0px 8px;

  .tag {
    background-color: #68415d;
    color: white;
    padding: 1px 5px;
    border-radius: 5px;
    margin-left: 5px;
    font-size: 0.7em;
  }
  .logo-image {
    margin-left: 15px;
    background-image: url("/images/logos/logo-icon.svg");
    width: 50px;
    height: 50px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transition: opacity 0.5s;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }

  li {
    display: flex;
  }

  ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    a,
    button {
      font-size: 1em;
      padding: 10px;
      border: 2px solid transparent;
      transition: all 0.8s;
      margin: 0 5px;
      background-color: transparent;
      color: #68415d;
      cursor: pointer;
      &:hover {
        border-color: #c77cb2;
        background-color: rgba(255, 255, 255, 0.8);
      }

      &.active {
        border-color: #633b58;
        background-color: transparent;
      }
    }
  }

  .menu-burguer {
    margin-left: 12px;
    background-color: transparent;
    border: none;
    width: 50px;
    display: flex;
    visibility: hidden;
  }

  .cart-button {
    width: 50px;
    display: flex;
  }

  @media only screen and (max-width: 768px) {
    .logo-image {
      margin-right: auto;
    }
    .menu-burguer {
      visibility: visible;
    }
    ul {
      button {
        display: none;
      }
    }
  }
`;

export const Navbar = () => {
  const router = useRouter();
  const [cart, setCart] = useState<CartType>();

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const getTotalItens = () => {
    let total = 0;
    cart?.items.forEach((element: CartItemType) => {
      total += element.amount || 0;
    });

    return total;
  };

  const getCartBadge = () =>
    cart?.items &&
    cart?.items.length > 0 && <span className="tag">{getTotalItens()}</span>;

  const navOptions = [
    { title: "Produtos", id: "#", onClick: () => goToArea("") },
    { title: "Recursos", id: "#recursos", onClick: () => goToArea("recursos") },
    {
      title: "Instagram",
      id: "#instagram",
      onClick: () => goToArea("instagram"),
    },
    { title: "Contato", id: "#contato", onClick: () => goToArea("contato") },
    {
      title: (
        <>
          <img src="/images/icons/shopping-cart.svg" alt="Meu pedido" />
          {getCartBadge()}
        </>
      ),
      classNames: "cart-button",
      id: "carrinho",
      onClick: () => router.push("carrinho"),
    },
  ];

  const getCart = async () => {
    setCart(await CartService.getCart());
  };

  useEffect(() => {
    getCart();

    PubSub.subscribe("card_add_item", () => {
      getCart();
    });
  }, []);

  const goToArea = (areaId: string) => {
    router.replace("/#" + areaId);
    scrollToElement(areaId);
  };

  return (
    <>
      <StyledHeader>
        <div className="logo-image" onClick={() => goToArea("")}></div>
        <ul>
          {navOptions.map((option) => {
            return (
              <li key={`nav-option-${option.id}`}>
                <button
                  className={`${option.classNames} ${
                    router.asPath === `/${option.id}` ? "active" : ""
                  }`}
                  onClick={option.onClick}
                >
                  {option.title}
                </button>
              </li>
            );
          })}
        </ul>

        <button
          className="menu-burguer"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Image
            src="/images/icons/menu-burger.svg"
            width={30}
            height={30}
            alt="Items menu"
          />
        </button>
      </StyledHeader>
      <MobileMenu
        menuOpened={mobileMenuOpen}
        closeMenu={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
