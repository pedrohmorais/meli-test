import Container from '@/components/Container'
import { BagIcon } from '@/components/Icons/BagIcon'
import { BoxIcon } from '@/components/Icons/BoxIcon'
import { CardIcon } from '@/components/Icons/CardIcon'
import { MapIcon } from '@/components/Icons/MapIcon'
import { MoneyIcon } from '@/components/Icons/MoneyIcon'
import { ThunderIcon } from '@/components/Icons/ThunderIcon'
import { UserIcon } from '@/components/Icons/UserIcon'
import SearchBar from '@/components/SearchBar'
import Image from 'next/image'

const infoCards = [
  {
    title: 'Frete grátis',
    description: 'Benefício por ser sua primeira compra.',
    button: 'Mostrar produtos',
    icon: <BoxIcon />,
  },
  {
    title: 'Entre na sua conta',
    description: 'Aproveite ofertas para comprar tudo que quiser.',
    button: 'Entrar na sua conta',
    icon: <UserIcon />,
  },
  {
    title: 'Insira sua localização',
    description: 'Confira os custos e prazos de entrega.',
    button: 'Inserir localização',
    icon: <MapIcon />,
  },
  {
    title: 'Meios de pagamento',
    description: 'Pague suas compras com rapidez e segurança.',
    button: 'Mostrar meios',
    icon: <CardIcon />,
  },
  {
    title: 'Menos de R$100',
    description: 'Confira produtos com preços baixos.',
    button: 'Mostrar produtos',
    icon: <MoneyIcon />,
  },
  {
    title: 'Mais vendidos',
    description: 'Explore os produtos que são tendência.',
    button: 'Ir para Mais vendidos',
    icon: <BagIcon />,
  },
]

export default function Home() {
  const thunderBtn = (
    <div className="py-[10px] px-4 text-meliDarkBlue bg-meliBgDefault rounded-[26px] flex justify-center items-center gap-2">
      <ThunderIcon />
      <span className="font-extrabold text-xl leading-5 tracking-normal text-left">
        ENTREGA
        <br />
        FULL
      </span>
    </div>
  )

  const saleBtn = (
    <div className="py-[18px] px-4 text-meliBgDefault bg-meliDarkBlue rounded-[26px] flex justify-center items-center">
      <span className="font-semibold text-xs">ATÉ</span>
      &nbsp;
      <span className="font-semibold text-2xl leading-5 tracking-normal text-left">
        60% OFF
      </span>
    </div>
  )

  const bannerSection = (
    <section className="flex items-center text-center bg-meliBgPrimary">
      <Container className="items-center">
        <div className="flex flex-col justify-center min-h-[300]">
          <h1 className="text-4xl font-bold text-meliDarkBlue">
            LOJAS OFICIAIS
          </h1>
          <div className="flex items-center gap-4 mt-3">
            {thunderBtn}
            {saleBtn}
          </div>
          <p className="text-meliDarkBlue font-semibold text-xs mt-3">
            Válido até 28/02/2025. Ver mais em Lojas Oficiais.
          </p>
        </div>
        <Image
          src="/banner.png"
          alt="Promoção Lojas Oficiais"
          width={400}
          height={267}
          className="hidden md:block"
        />
      </Container>
    </section>
  )

  const cardsSection = (
    <section className="meliGradient">
      <Container className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8 ">
        {infoCards.map((card, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="font-semibold">{card.title}</h2>
            <div className="text-meliDark mt-12 mb-7 flex justify-center text-meliDarkBlue h-[60px] items-center">
              {card.icon}
            </div>
            <p className="text-xs text-meliGray mt-1 text-center">
              {card.description}
            </p>
            {/* <button className="text-meliDarkBlue font-semibold mt-3">
              {card.button}
            </button> */}
          </div>
        ))}
      </Container>
    </section>
  )

  return (
    <div>
      <main className="bg-meliBgDefault min-h-screen flex flex-col">
        <SearchBar />
        {bannerSection}
        {cardsSection}
      </main>
    </div>
  )
}
