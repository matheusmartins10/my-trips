import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked."
        canonical="https://world-cup-history-map.vercel.app/"
        openGraph={{
          url: 'https://world-cup-history-map.vercel.app/',
          title: 'World of Cup',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: 'https://my-trips.willianjusten.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'World of Cup'
            }
          ],
          site_name: 'World of Cup'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
