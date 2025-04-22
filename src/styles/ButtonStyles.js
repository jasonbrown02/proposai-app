// src/styles/ButtonStyles.js
import { createStyles } from '@mantine/core';
import { theme } from '../theme.js'; // Import the whole theme object

const colors = theme.colors; // Extract colors from the theme

const useButtonStyles = createStyles((theme) => ({
  primary: {
    backgroundColor: colors.primary.orange,
    color: 'white',
    '&:hover': {
      backgroundColor: colors.primary.orangeDark,
    },
  },

  secondary: {
    backgroundColor: colors.gray.light,
    color: colors.text.dark,
    '&:hover': {
      backgroundColor: colors.gray.medium,
    },
  },

  outline: {
    backgroundColor: 'transparent',
    border: `2px solid ${colors.primary.orange}`,
    color: colors.primary.orange,
    '&:hover': {
      backgroundColor: colors.primary.orange,
      color: 'white',
    },
  },

  danger: {
    backgroundColor: colors.accent.red,
    color: 'white',
    '&:hover': {
      backgroundColor: '#a91e20',
    },
  },

  success: {
    backgroundColor: colors.accent.green,
    color: 'white',
    '&:hover': {
      backgroundColor: '#00b389',
    },
  },

  nav: {
    backgroundColor: 'transparent',
    color: colors.text.light,
    fontWeight: 600,
    fontSize: 18,
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? '#000' : '#fff',
      color: colors.primary.orange,
    },
  },
}));

export default useButtonStyles;