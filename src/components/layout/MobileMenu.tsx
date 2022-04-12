import styled from "styled-components";
import { scrollToElement } from "../../utils/layout";
import Image from "next/image";
import { useRouter } from "next/router";

const StyledMobileMenu = styled.header`
  width: 100%;
  height: 100%;
  background: #633b58;
  position: fixed;
  top: 0;
  left: 100%;
  transition: all 0.5s;
  z-index: 10;

  &.opened {
    left: 0;
  }

  button.close {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 30px;
    height: 30px;

    cursor: pointer;

    background-color: transparent;
    border: none;
    background-image: url("/images/icons/close.png");
    background-size: 100%;
    background-repeat: no-repeat;
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 65px;
    padding-top: 140px;

    .logo {
      margin-bottom: 40px;
    }
    a {
      color: #fff;
      font-size: 24px;
      line-height: 33px;
      text-decoration: none;
      display: inline-block;
      margin-bottom: 32px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    button {
      margin-top: auto;
    }
  }
`;

export const MobileMenu: React.FC<{
  menuOpened: boolean;
  closeMenu: () => void;
}> = ({ menuOpened, closeMenu }) => {
  const router = useRouter();

  const goToArea = (id: string) => {
    closeMenu();
    router.replace("/#" + id);
    scrollToElement(id);
  };

  return (
    <StyledMobileMenu className={menuOpened ? "opened" : ""}>
      <button className="close" onClick={closeMenu}></button>
      <nav>
        <span className="logo" onClick={() => goToArea("")}>
          <Image
            src="/images/logos/logo-icon-white.svg"
            width={150}
            height={90}
            alt="Logo Gota de Luz"
          />
        </span>
        <a onClick={() => goToArea("")}>Produtos</a>
        <a onClick={() => goToArea("recursos")}>Recursos</a>
        <a onClick={() => goToArea("instagram")}>Instagram</a>
        <a onClick={() => goToArea("contato")}>Contato</a>
      </nav>
    </StyledMobileMenu>
  );
};
