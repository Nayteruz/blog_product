const colors = {
  LIGHT: '#D8E1FF',
  DARK: '#2C2E4A',
};

const themeNames = {
  LIGHT: 'Свелая тема',
  DARK: 'Темная тема',
};

export const themes = {
  backgrounds: {
    default: themeNames.LIGHT,
    values: [
      { name: themeNames.LIGHT, value: colors.LIGHT },
      { name: themeNames.DARK, value: colors.DARK },
    ],
  },
};

export const defaultLight = {
  parameters: {
    backgrounds: {
      default: themeNames.LIGHT,
    },
  },
};

export const defaultDark = {
  parameters: {
    backgrounds: {
      default: themeNames.DARK,
    },
  },
};
