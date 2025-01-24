import Image from 'next/image'
import { useRouter } from 'next/router'
import PubSub from 'pubsub-js'
import { useEffect, useState } from 'react'
import { cn } from 'utils/styling'
import { CartItemType, CartService, CartType } from '../../services/CartService'
import { scrollToElement } from '../../utils/layout'
import { MobileMenu } from './MobileMenu'

export const Navbar = () => {
  const router = useRouter()
  const [cart, setCart] = useState<CartType>()

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  const getTotalItens = () => {
    let total = 0
    cart?.items.forEach((element: CartItemType) => {
      total += element.amount || 0
    })

    return total
  }

  const getCartBadge = () =>
    cart?.items &&
    cart?.items.length > 0 && (
      <span className="absolute top-0 right-0 bg-[#4c3b82] text-white px-1 py-px rounded-md ml-1 text-[0.7em]">
        {getTotalItens()}
      </span>
    )

  const navOptions = [
    { title: 'Produtos', id: '#', onClick: () => goToArea('') },
    {
      title: 'Visitas',
      id: 'visitas',
      onClick: () => router.push('visitas'),
    },
    { title: 'Recursos', id: '#recursos', onClick: () => goToArea('recursos') },
    { title: 'Contato', id: '#contato', onClick: () => goToArea('contato') },
    {
      title: 'Cromatografias',
      id: 'cromat',
      onClick: () => router.push('cromatografias'),
    },
    {
      title: 'Sobre',
      id: 'sobre',
      onClick: () => router.push('sobre'),
    },
    {
      title: (
        <>
          <img src="/images/icons/shopping-cart.svg" alt="Meu pedido" />
          {getCartBadge()}
        </>
      ),
      id: 'carrinho',
      className: 'w-14 block ml-auto',
      onClick: () => router.push('carrinho'),
    },
  ]

  const getCart = async () => {
    setCart(await CartService.getCart())
  }

  useEffect(() => {
    getCart()

    PubSub.subscribe('card_add_item', () => {
      getCart()
    })
  }, [])

  const goToArea = (areaId: string) => {
    router.replace('/#' + areaId)
    scrollToElement(areaId)
  }

  return (
    <>
      <header className="bg-[#e0ddf4] p-2 flex items-center fixed w-full z-10 justify-between">
        <div
          className={cn(
            "ml-4 bg-[url('/images/logos/logo-icon.png')] w-12 h-12 bg-contain bg-no-repeat",
            'bg-center transition-opacity cursor-pointer',
          )}
          onClick={() => goToArea('')}
        ></div>
        <ul className="list-none p-0 m-0 flex ml-auto md:ml-0">
          {navOptions.map((option) => {
            return (
              <li key={`nav-option-${option.id}`} className="flex">
                <button
                  className={cn(
                    router.asPath === `/${option.id}`
                      ? 'border-[#4c3b82] bg-transparent'
                      : '',
                    'relative hidden md:block',
                    'text-[1em] p-2 border-[1px] border-[transparent] transition-all mx-2 my-0',
                    'bg-transparent text-[#4c3b82] cursor-pointer',
                    'hover:border-[#4c3b82]',
                    option.className,
                  )}
                  onClick={option.onClick}
                >
                  {option.title}
                </button>
              </li>
            )
          })}
        </ul>

        <button
          className="ml-3 bg-transparent border-none w-12 flex visible md:invisible"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Image
            src="/images/icons/menu-burger.svg"
            width={30}
            height={30}
            alt="Items menu"
          />
        </button>
      </header>
      <MobileMenu
        menuOpened={mobileMenuOpen}
        closeMenu={() => setMobileMenuOpen(false)}
      />
    </>
  )
}
