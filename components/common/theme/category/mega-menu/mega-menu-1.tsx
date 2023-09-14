"use client"
import LazyImage from '@components/common/theme/lazy-image';
import NavLink from '@components/common/theme/nav-link/nav-link';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import StyledMegaMenu from './styled-mega-menu';
import FlexBox from '../../flex-box/flex-box';

// =========================================================

type Image = { imgUrl: string; href: string };
type SubCategory = { title: string; href: string };

type Category = {
  title: string;
  href?: string;
  subCategories: SubCategory[];
};

type MegaMenu = {
  categories: Category[];
  rightImage?: Image;
  bottomImage?: Image;
};

type MegaMenuProps = {
  data: MegaMenu;
  minWidth?: string;
};
// =========================================================

const MegaMenu1 = ({
  data: { categories, rightImage, bottomImage },
  minWidth = '760px'
}: MegaMenuProps) => {
  return categories ? (
    <StyledMegaMenu>
      <Card elevation={2} sx={{ ml: '1rem', minWidth }}>
        <FlexBox px={2.5} py={1.75} alignItems="unset">
          <Box flex="1 1 0">
            <Grid container spacing={4}>
              {categories?.map((item, ind) => (
                <Grid item md={3} key={ind}>
                  {item.href ? (
                    <NavLink className="title-link" href={item.href}>
                      {item.title}
                    </NavLink>
                  ) : (
                    <Box className="title-link">{item.title}</Box>
                  )}
                  {item.subCategories?.map((sub, ind) => (
                    <NavLink className="child-link" href={sub.href} key={ind}>
                      {sub.title}
                    </NavLink>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Box>

          {rightImage && (
            <Box mt={1.5}>
              <Link href={rightImage.href}>
                <LazyImage
                  src={rightImage.imgUrl}
                  // objectFit="contain"
                  width={137}
                  height={318}
                  alt="banner"
                />
              </Link>
            </Box>
          )}
        </FlexBox>

        {bottomImage && (
          <Link href={bottomImage.href}>
            <Box position="relative" height="170px">
              <LazyImage
                src={bottomImage.imgUrl}
                // layout="fill"
                // objectFit="cover"
                alt="banner"
              />
            </Box>
          </Link>
        )}
      </Card>
    </StyledMegaMenu>
  ) : null;
};

export default MegaMenu1;
