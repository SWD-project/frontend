"use client"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import StyledMegaMenu from './styled-mega-menu';

import Card from '@components/common/theme/card';
import LazyImage from '@components/common/theme/lazy-image';
import NavLink from '@components/common/theme/nav-link/nav-link';
import { H3, Small } from '@components/common/theme/typography';
import FlexBox from '../../flex-box/flex-box';

// ====================================================================================
type Image = { imgUrl: string; href: string };
type SubCategory = { title: string; href: string };
type Category = { title: string; href?: string; subCategories: SubCategory[] };
type MegaMenu = { categories: Category[]; rightImage?: Image };
type MegaMenuProps = { data: MegaMenu; minWidth?: string };
// ====================================================================================

const MegaMenu3 = ({ data: { categories, rightImage }, minWidth = '760px' }: MegaMenuProps) => {
  return categories ? (
    <StyledMegaMenu>
      <Card sx={{ ml: '1rem', minWidth }} elevation={2}>
        <FlexBox px={2.5} py={1.75}>
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
            <Link href={rightImage.href}>
              <Box position="relative" width="153px" height="100%">
                <LazyImage
                  alt="banner"
                  // layout="fill"
                  // objectFit="contain"
                  src={rightImage.imgUrl}
                />
              </Box>
            </Link>
          )}
        </FlexBox>

        <Link href="/sale-page-2">
          <Grid className="h-full" container spacing={0} wrap="wrap-reverse" alignItems="center">
            <Grid item sm={6} xs={12}>
              <Box px={2.5}>
                <H3 mb={1}>Big Sale Upto 60% Off"</H3>

                <Box color="grey.600" mb={1}>
                  Handcrafted from genuine Italian Leather
                </Box>

                <Small fontWeight="700" borderBottom="2px solid" borderColor="primary.main">
                  SHOP NOW
                </Small>
              </Box>
            </Grid>
            <Grid item sm={6} xs={12}>
              <FlexBox
                flexDirection="column"
                justifyContent="flex-end"
                height="160px"
                position="relative"
              >
                <LazyImage
                  // layout="fill"
                  // objectFit="cover"
                  src="/assets/images/models/model-1.png"
                  alt="model"
                />
              </FlexBox>
            </Grid>
          </Grid>
        </Link>
      </Card>
    </StyledMegaMenu>
  ) : null;
};

export default MegaMenu3;
