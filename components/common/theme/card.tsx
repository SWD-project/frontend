"use client"
import Card, { CardProps } from '@mui/material/Card';
import { styled } from '@mui/material/styles';

// ===============================================
interface AppCardProps extends CardProps {
  hovereffect?: string;
}

// ===============================================

const AppCard = styled(({ children, ...rest }: AppCardProps) => (
  <Card {...rest}>{children}</Card>
))<AppCardProps>(({ theme, hovereffect }) => ({
  overflow: 'unset',
  borderRadius: '8px',
  transition: 'all 250ms ease-in-out',
  '&:hover': { ...(hovereffect === "true" && { boxShadow: theme.shadows[3] }) }
}));

export default AppCard;
