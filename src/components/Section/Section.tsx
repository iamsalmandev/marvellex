import Box, { BoxProps } from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

interface SectionProps {
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  bgColor?: string;
  tight?: boolean;
  superTitle?: string | React.ReactNode;
  superTitleStyle?: React.CSSProperties;
  sectionTitle?: string | React.ReactNode;
  titleColor?: string;
  description?: string | React.ReactNode;
}

export const Section: React.FC<SectionProps & BoxProps> = ({
  description,
  style,
  containerStyle = {},
  superTitle,
  superTitleStyle = {},
  tight,
  sectionTitle,
  titleColor,
  children,
  ...boxProps
}) => {
  const sectionStyles: React.CSSProperties = { background: "lightGrey", ...style };
  if (tight) sectionStyles.padding = '30px 25px';

  return (
    <Box
      component="section"
      padding={{ xs: '56px', lg: '80px' }}
      style={sectionStyles}
      textAlign="center"
      {...boxProps}
    >
      <Container maxWidth="xl" style={containerStyle}>
        {superTitle && (
          <Typography variant="h5" style={{ textTransform: "capitalize", marginBottom: "30px", textAlign: "left", ...superTitleStyle }} >
            {superTitle}
          </Typography>
        )}
        {sectionTitle && <Typography style={{ color: titleColor }}>{sectionTitle}</Typography>}
        {description && <Typography>{description}</Typography>}
        {children}
      </Container>
    </Box>
  );
};
