import FacebookButton from 'components/layout/FacebookButton'
import InstagramButton from 'components/layout/InstagramButton'
import { ProductCategories } from 'components/products/ProductCategories'
import Image from 'next/image'

export const InitArea: React.FC = () => {
  return (
    <div className="p-2 pt-20 md:p-20 bg-[url('/images/background-init.png')] bg-no-repeat bg-cover">
      <div className="flex flex-col justify-center max-w-[60rem] mx-auto my-0 px-5 py-0">
        <div className="text-center pt-8">
          <Image
            priority
            src="/images/logo.png"
            height={150}
            width={400}
            objectFit="contain"
            alt="Gota de Cura, cuidando com amor"
            className="max-w-[400px]"
          />
        </div>
      </div>

      <h2 className="text-center mt-6 mb-4 italic">Conheça nossos produtos</h2>
      <ProductCategories mode="grid" />

      <h2 className="text-center mt-10 italic">
        Acompanhe nosso trabalho pelas redes sociais
      </h2>
      <div className="flex gap-3 flex-wrap justify-center mt-3">
        <span className="my-1">
          <InstagramButton />
        </span>
        <span className="my-1">
          <FacebookButton />
        </span>
      </div>
    </div>
  )
}
