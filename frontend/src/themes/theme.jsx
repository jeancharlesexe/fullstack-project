export const lightTheme = {
  name: 'light',
  
  layout: {
    background: '#E3E2DE',
    surface: '#FFFFFF',
    divider: '#E0E0E0',
    border: '#DADCE0',
    shadow: '0px 0px 15px rgba(0, 0, 0, 0.103)',
    shadowNone: 'none'
  },
  
  typography: {
    primary: '#202124',
    secondary: '#5F6368',
    disabled: '#BDBDBD'
  },
  
  brand: {
    primary: '#0064E6',
    primaryLight: '#4791DB',
    primaryDark: '#115293',
    secondary: '#03DAC6',
    secondaryLight: '#66FFF9',
    secondaryDark: '#00A896'
  },
  
  // Estados de interação
  interaction: {
    hover: 'rgba(0, 0, 0, 0.04)',
    focus: 'rgba(0, 0, 0, 0.12)',
    selected: 'rgba(25, 118, 210, 0.08)',
    disabled: '#BDBDBD'
  },
  
  status: {
    error: '#B00020',
    success: '#4CAF50',
    warning: '#FB8C00',
    info: '#2196F3'
  }
};

export const darkTheme = {
  name: 'dark',
  

  layout: {
    background: '#121212',
    surface: '#1E1E1E',
    divider: '#2D2D2D',
    border: '#333333',
    shadow: '0px 0px 15px rgba(0, 0, 0, 0.103)',
    shadowNone: 'none'
  },

  typography: {
    primary: '#E1E1E1',
    secondary: '#ABABAB',
    disabled: '#6E6E6E'
  },
  
  brand: {
    primary: '#0064E6',
    primaryLight: '#C3FDFF',
    primaryDark: '#5D99C6',
    secondary: '#03DAC6',
    secondaryLight: '#66FFF9',
    secondaryDark: '#00A896'
  },
  
  interaction: {
    hover: 'rgba(255, 255, 255, 0.08)',
    focus: 'rgba(255, 255, 255, 0.12)',
    selected: 'rgba(144, 202, 249, 0.16)',
    disabled: '#6E6E6E'
  },
  
  status: {
    error: '#CF6679',
    success: '#81C784',
    warning: '#FFB74D',
    info: '#64B5F6'
  }
};