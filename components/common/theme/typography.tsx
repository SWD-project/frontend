'use client';
import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';

const StyledBox = styled(Box, {
  shouldForwardProp: (props) => props !== 'textTransformStyle'
})<{
  textTransformStyle?: any;
  ellipsis?: any;
}>(({ textTransformStyle, ellipsis }) => ({
  textTransform: textTransformStyle || 'none',
  whiteSpace: ellipsis ? 'nowrap' : 'normal',
  overflow: ellipsis ? 'hidden' : '',
  textOverflow: ellipsis ? 'ellipsis' : ''
}));

// ============================================
type Props = {
  ellipsis?: any;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'initial' | 'inherit';
};
// ============================================

export const H1 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}: BoxProps & Props) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis ? 1 : undefined}
      className={clsx({ [className || '']: true })}
      component="h1"
      mb={0}
      mt={0}
      fontSize="30px"
      fontWeight="700"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const H2 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}: BoxProps & Props) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis ? 1 : undefined}
      className={clsx({
        [className || '']: true
      })}
      component="h2"
      mb={0}
      mt={0}
      fontSize="25px"
      fontWeight="700"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const H3 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}: BoxProps & Props) => {
  return (
    <StyledBox
      mb={0}
      mt={0}
      component="h3"
      fontSize="20px"
      fontWeight="700"
      lineHeight="1.5"
      ellipsis={ellipsis ? 1 : undefined}
      textTransformStyle={textTransform}
      className={clsx({ [className || '']: true })}
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const H4 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}: BoxProps & Props) => {
  return (
    <StyledBox
      mb={0}
      mt={0}
      component="h4"
      fontSize="17px"
      fontWeight="600"
      lineHeight="1.5"
      ellipsis={ellipsis ? 1 : undefined}
      textTransformStyle={textTransform}
      className={clsx({ [className || '']: true })}
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const H5 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}: BoxProps & Props) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis ? 1 : undefined}
      className={clsx({
        [className || '']: true
      })}
      component="h5"
      mb={0}
      mt={0}
      fontSize="16px"
      fontWeight="600"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const H6 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}: BoxProps & Props) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis ? 1 : undefined}
      className={clsx({
        [className || '']: true
      })}
      component="h6"
      mb={0}
      mt={0}
      fontSize="14px"
      fontWeight="600"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const Paragraph = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}: BoxProps & Props) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis ? 1 : undefined}
      className={clsx({
        [className || '']: true
      })}
      component="p"
      mb={0}
      mt={0}
      fontSize="14px"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const Small = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}: BoxProps & Props) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis ? 1 : undefined}
      className={clsx({
        [className || '']: true
      })}
      component="small"
      fontSize="12px"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const Span = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}: BoxProps & Props) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis ? 1 : undefined}
      className={clsx({
        [className || '']: true
      })}
      component="span"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const Tiny = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}: BoxProps & Props) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis ? 1 : undefined}
      className={clsx({
        [className || '']: true
      })}
      component="small"
      fontSize="10px"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};
