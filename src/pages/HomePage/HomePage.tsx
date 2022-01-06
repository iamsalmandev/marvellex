import { MainLayout } from '~/components';
import { IntroBanner } from './IntroBanner';
import { CoinsBanner } from './CoinsBanner';
import { PromotionBanner } from './PromotionBanner';
import { EcosystemBanner } from './EcosystemBanner';
import { WhitepaperBanner } from './WhitepaperBanner';
export const HomePage: React.FC<{}> = () => {
    return (
        <MainLayout >
            <IntroBanner />
            <PromotionBanner />
            <CoinsBanner />
            <EcosystemBanner />
            <WhitepaperBanner />
        </MainLayout >
    );
};
