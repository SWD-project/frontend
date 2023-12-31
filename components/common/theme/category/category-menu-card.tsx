"use client"
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import navigations from 'config/navigations';
import CategoryMenuItem from './category-menu-item';
import MegaMenu1 from './mega-menu/mega-menu-1';
import MegaMenu2 from './mega-menu/mega-menu-2';

// styled component
const Wrapper = styled(Box)<CategoryMenuCardProps>(({ theme, position = 'absolute', open }) => ({
  left: 0,
  zIndex: 98,
  right: 'auto',
  borderRadius: 4,
  padding: '0.5rem 0px',
  transformOrigin: 'top',
  boxShadow: theme.shadows[2],
  position: position || 'unset',
  transition: 'all 250ms ease-in-out',
  transform: open ? 'scaleY(1)' : 'scaleY(0)',
  backgroundColor: theme.palette.background.paper,
  top: position === 'absolute' ? 'calc(100% + 0.7rem)' : '0.5rem'
}));

// ===============================================================
type CategoryMenuCardProps = {
  open?: boolean;
  position?: 'absolute' | 'relative';
};
// ===============================================================

const CategoryMenuCard = (props: CategoryMenuCardProps) => {
  const { open, position } = props;

  const megaMenu: any = { MegaMenu1, MegaMenu2 };

  return (
    <Wrapper open={open} position={position}>
      {navigations.map((item) => {
        const MegaMenu = megaMenu[item.menuComponent];

        return (
          <CategoryMenuItem
            key={item.title}
            href={item.href}
            title={item.title}
            caret={!!item.menuData}
          >
            <MegaMenu data={item.menuData || {}} />
          </CategoryMenuItem>
        );
      })}
    </Wrapper>
  );
};

export default CategoryMenuCard;
