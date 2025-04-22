// src/theme.js

export const theme = {
  fontFamily: 'Poppins, sans-serif',
  primaryColor: 'orange',

  colors: {
    orange: ['#FFF3E0', '#FFE0B2', '#FFCC80', '#FFB74D', '#FFA726', '#FF9800', '#FB8C00', '#F57C00', '#EF6C00', '#E65100'],
    gray: ['#f8f9fa', '#f1f3f5', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#868e96', '#495057', '#343a40'],
    darkGray: ['#f3f3f3', '#dcdcdc', '#c5c5c5', '#aeaeae', '#979797', '#808080', '#696969', '#525252', '#3b3b3b', '#242424'],
  },

  other: {
    colors: {
      accent: {
        yellow: '#FFCC00',
        pink: '#FF6699',
        teal: '#00CC99',
        purple: '#9966FF',
        red: '#ce2527',
        green: '#00cc99',
      },
      text: {
        default: '#e5e5e5',   // Light text for dark mode
        dark: '#424242',      // Dark text for light mode
      },
      background: {
        light: '#f3f3f3',
        dark: '#1a1a1a',
      },
    },
  },

  components: {
    Button: {
      styles: (theme, params, { variant }) => ({
        root: {
          fontWeight: 600,
          borderRadius: 999,
        },
      }),
    },
  },

  headings: {
    fontFamily: 'Poppins, sans-serif',
    sizes: {
      h1: { fontSize: 32 },
      h2: { fontSize: 28 },
      h3: { fontSize: 24 },
      h4: { fontSize: 20 },
    },
  },
};