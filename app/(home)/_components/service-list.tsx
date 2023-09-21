'use client'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

import { H4, Span } from '@components/common/theme/typography';
import FlexRowCenter from '@components/common/theme/flex-box/flex-grow-center';
import appIcons from '@components/common/theme/icons';

// custom styled components
const StyledFlexBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  padding: '2rem 0',
  gridTemplateColumns: 'repeat(4, 1fr)',
  backgroundColor: theme.palette.common.white,
  [theme.breakpoints.down('md')]: {
    gap: 30,
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  [theme.breakpoints.down('sm')]: {
    gap: 30,
    paddingLeft: '2rem',
    paddingRight: '2rem',
    gridTemplateColumns: '1fr'
  }
}));

const ServiceItem = styled(FlexRowCenter)(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.grey[400]}`,
  ':last-child': { borderRight: 0 },
  [theme.breakpoints.down('md')]: { ':nth-of-type(even)': { borderRight: 0 } },
  [theme.breakpoints.down('sm')]: {
    borderRight: 0,
    justifyContent: 'flex-start'
  }
}));

interface Service {
  id: string;
  icon: string;
  title: string;
  description?: string;
}

const Section2 = () => {
  return (
    <Container sx={{ mt: '2rem' }}>
      <StyledFlexBox>
        {SERVICES.map((item, ind) => {
          const Icon = appIcons[item.icon as keyof typeof appIcons];

          return (
            <ServiceItem flexGrow={1} gap={2} key={ind}>
              <Icon sx={{ fontSize: 40 }} />
              <Box>
                <H4 lineHeight={1.3}>{item.title}</H4>
                {/* <Span color="grey.600">{item.description}</Span> */}
              </Box>
            </ServiceItem>
          );
        })}
      </StyledFlexBox>
    </Container>
  );
};

const SERVICES: Service[] = [
  {
    id: 'MoneyGuarantee',
    icon: 'MoneyGuarantee',
    title: 'Low Prices',
    description: 'Low Prices'
  },
  // {
  //   id: 'Cart',
  //   icon: 'Cart',
  //   title: 'Easy shopping',
  //   description: 'Easy shopping',
  // },
  {
    id: 'Payment',
    icon: 'Payment',
    title: 'Diversity payment',
    description: 'Diversity payment'
  },
  {
    id: 'Truck',
    icon: 'StarBorder',
    title: 'Higher retention rates',
    description: 'Start from $10'
  },
  {
    id: 'AlarmClock',
    icon: 'AlarmClock',
    title: 'Support 24/7',
    description: 'Support 24/7'
  }
];

export default Section2;
