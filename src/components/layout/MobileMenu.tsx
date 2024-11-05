import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { scrollToElement } from '../../utils/layout'

const StyledMobileMenu = styled.header`
  width: 100%;
  height: 100%;
  background: #e0ddf4;
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
    background-image: url('/images/icons/close.png');
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
      color: #4c3b82;
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
`

export const MobileMenu: React.FC<{
  menuOpened: boolean
  closeMenu: () => void
}> = ({ menuOpened, closeMenu }) => {
  const router = useRouter()

  const goToArea = (id: string) => {
    closeMenu()
    router.replace('/#' + id)
    scrollToElement(id)
  }

  return (
    <StyledMobileMenu className={menuOpened ? 'opened' : ''}>
      <button className="close" onClick={closeMenu}></button>
      <nav>
        <span className="logo" onClick={() => goToArea('')}>
          <Image
            src="/images/logos/logo-icon.png"
            width={150}
            height={90}
            objectFit="contain"
            alt={`Logo ${process.env.NEXT_PUBLIC_COMPANY_NAME}`}
          />
        </span>
        <a onClick={() => goToArea('')}>Produtos</a>
        <a onClick={() => goToArea('depoimentos')}>Depoimentos</a>
        <a onClick={() => goToArea('recursos')}>Recursos</a>
        <a onClick={() => goToArea('contato')}>Contato</a>
        <a
          onClick={() => {
            closeMenu()
            router.push('cromatografias')
          }}
        >
          Cromatografias
        </a>
        <a
          onClick={() => {
            closeMenu()
            router.push('sobre')
          }}
        >
          Sobre
        </a>
      </nav>
    </StyledMobileMenu>
  )
}
