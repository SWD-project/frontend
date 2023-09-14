"use client"
import { compose, display, spacing, styled } from '@mui/system';

const Image = styled('img')(({ ...props }) =>
  compose(spacing, display)({ ...props, display: 'block' })
);

export default Image;
