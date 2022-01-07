import { Section, TabsVertical } from '~/components';
import { Box, BoxProps } from '@material-ui/core';
import { highlightGreen } from '~/styles';
import { EcosystemSlide } from './EcosystemSlide';
import { useState } from 'react';
import {
  marvellexMarketplace,
  marvellexGoldImg,
  marvellexExchange,
  marvellexLabs,
  marvellexChain,
} from '~/assets';

const slidesData = [
  {
    heading: 'Marvellex labs',
    description: `Identify, invest, and empower viable blockchain entrepreneurs, startups, and communities to provide financing to industry projects that help grow the larger blockchain ecosystem.`,
    imgUrl: marvellexLabs,
  },
  {
    heading: 'NFT Marketplace',
    description:
      'Marvellex empowers creators, brands, and companies to build a direct relationship with their audiences. Marvellex offers ultra-fast NFTs with low minting fees on the Marvellex marketplace.',
    imgUrl: marvellexMarketplace,
  },
  {
    heading: 'Marvellex Blockchain',
    description:
      'Marvellex blockchain will be the lynchpin of the entire ecosystem as all the products will be built on top of it.',
    imgUrl: marvellexChain,
  },
  {
    heading: 'Marvellex Gold',
    description:
      'Marvellex streamlines the gold supply chain and makes gold investment accessible for every investor.   It delivers secure, seamless access to the acquisition of gold, allowing investors to transact in real-time, reducing the volatility traditionally associated with the procurement of gold.',
    imgUrl: marvellexGoldImg,
  },
  {
    heading: 'Marvellex Exchange',
    description:
      'Marvellex will also create a cryptocurrency exchange where all the markets will be based on MLXG. Having a stake in MLXG will provide discounts in trading fees.',
    imgUrl: marvellexExchange,
  },
];

export const EcosystemBanner: React.FC<BoxProps> = (props) => {
  const [activeSection, setActiveSection] = useState('marvellex-labs');
  const onClickTab = (tabName: string) => {
    setActiveSection(tabName);
  };
  return (
    <Section
      superTitle="The Marvellex Ecosystem"
      superTitleStyle={{ letterSpacing: '0.5px', padding: '0 32px' }}
      {...props}
      style={{ background: highlightGreen, padding: '55px 0' }}
    >
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        <TabsVertical
          activeSection={activeSection}
          onClickTab={onClickTab}
          sections={[
            {
              name: 'marvellex-labs',
              displayName: 'Marvellex Labs',
              render: ({ index, getSectionProps }) => (
                <div {...getSectionProps()} id="transanctions-section">
                  <EcosystemSlide
                    key={index}
                    slideNo={index + 1}
                    {...slidesData[index]}
                  />
                </div>
              ),
            },
            {
              name: 'nft-marketplace',
              displayName: 'NFT Marketplace',
              render: ({ index, getSectionProps }) => (
                <div {...getSectionProps()} id="nft-marketplace-section">
                  <EcosystemSlide
                    key={index}
                    slideNo={index + 1}
                    {...slidesData[index]}
                  />
                </div>
              ),
            },
            {
              name: 'marvellex-exchange',
              displayName: 'Marvellex Exchange',
              render: ({ index, getSectionProps }) => (
                <div {...getSectionProps()} id="marvellex-exchange-section">
                  <EcosystemSlide
                    key={index}
                    slideNo={index + 1}
                    {...slidesData[index]}
                  />
                </div>
              ),
            },
            {
              name: 'marvellex-chain',
              displayName: 'Marvellex Chain',
              render: ({ index, getSectionProps }) => (
                <div {...getSectionProps()} id="marvellex-chain-section">
                  <EcosystemSlide
                    key={index}
                    slideNo={index + 1}
                    {...slidesData[index]}
                  />
                </div>
              ),
            },
            {
              name: 'marvellex-gold',
              displayName: 'Marvellex Gold',
              render: ({ index, getSectionProps }) => (
                <div {...getSectionProps()} id="marvellex-gold-section">
                  <EcosystemSlide
                    key={index}
                    slideNo={index + 1}
                    {...slidesData[index]}
                  />
                </div>
              ),
            },
          ]}
        />
      </Box>
    </Section>
  );
};
