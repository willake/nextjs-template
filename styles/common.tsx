import { styled } from 'styles';
import textStyles from './text';

export const Box = styled('div', {});

export const Group = styled(Box, {
  position: 'relative',
});

export const CenterBox = styled(Box, {
  display: 'grid',
  placeItems: 'center',
});

export const Text = styled('div', {
  variants: {
    type: textStyles,
  },
});

export const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

export const VFlex = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const Img = styled('img', {});

export const Input = styled('input', {
  h: 40,
  border: '1px solid #ccc',
  borderRadius: 9,
  fontSize: 15,
  px: 6,
  '&:focus': {
    outlineColor: 'rgb(0, 136, 199)',
  },
});

export const Button = styled('button', {
  p: '0 15px',
  h: 42,
  display: 'grid',
  placeItems: 'center',
  color: '#ffffff',
  backgroundColor: ' #0eb994',
  br: 9,
  boxShadow: '0 6px 0 #075c49',
  transition: '100ms ease-in-out',
  '&:active': {
    boxShadow: '0 0 #075c49',
    transform: 'translateY(6px)',
  },
});
