'use client';
import Box, { BoxProps } from '@mui/material/Box';

const FlexBox = ({ children, display = 'flex', ...props }: BoxProps) => (
  <Box display={display} {...props}>
    {children}
  </Box>
);

export default FlexBox;
