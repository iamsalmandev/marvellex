import Box from '@material-ui/core/Box';

import { Header, Footer } from '~/components';
import { headerHeight } from '~/styles';
interface Props {
  showHeader?: boolean;
  showFooter?: boolean;
}
export const MainLayout: React.FC<Props> = ({
  showHeader = true,
  showFooter = true,
  children,
}) => {
  return (
    <Box>
      {showHeader && <Header />}
      <Box marginTop={showHeader ? `${headerHeight}px` : 0}>{children}</Box>
      {showFooter && <Footer />}
    </Box>
  );
};
