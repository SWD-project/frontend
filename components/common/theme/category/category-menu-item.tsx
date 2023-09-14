"use client"
import { ReactNode } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import ChevronRight from '@mui/icons-material/ChevronRight';

//styled component
const Wrapper = styled(Box)(({ theme }) => ({
  '& .category-dropdown-link': {
    height: 40,
    display: 'flex',
    minWidth: '278px',
    cursor: 'pointer',
    whiteSpace: 'pre',
    padding: '0px 1rem',
    alignItems: 'center',
    transition: 'all 250ms ease-in-out',
    '& .title': { flexGrow: 1, paddingLeft: '0.75rem' }
  },
  '&:hover': {
    '& > .category-dropdown-link': {
      color: theme.palette.primary.main,
      background: theme.palette.action.hover
    },
    '& > .mega-menu': { display: 'block' }
  }
}));

// =============================================================
type CategoryMenuItemProps = {
  icon?: any;
  href: string;
  title: string;
  caret?: boolean;
  children?: ReactNode;
};
// =============================================================

const CategoryMenuItem = (props: CategoryMenuItemProps) => {
  const { href, title, caret = true, children, ...rest } = props;

  return (
    <Wrapper>
      <Link href={href} passHref>
        <MenuItem className="category-dropdown-link">
          {rest.icon && <rest.icon fontSize="small" color="inherit" />}
          <span className="title">{title}</span>
          {caret && <ChevronRight fontSize="small" />}
        </MenuItem>
      </Link>

      {children}
    </Wrapper>
  );
};

export default CategoryMenuItem;
