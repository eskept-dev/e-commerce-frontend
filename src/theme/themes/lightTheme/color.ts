import { ThemeColors } from '../../type'

const lightThemeColors: ThemeColors = {
  // Brand colors
  primary: {
    50: '#e6f4ff',
    100: '#bae0ff',
    200: '#91caff',
    300: '#69b1ff',
    400: '#4096ff',
    500: '#1677ff',  // Primary brand color
    600: '#0958d9',
    700: '#003eb3',
    800: '#002c8c',
    900: '#001d66',
  },
  secondary: {
    50: '#f0f5ff',
    100: '#d6e4ff',
    200: '#adc6ff',
    300: '#85a5ff',
    400: '#597ef7',
    500: '#2f54eb',  // Secondary brand color
    600: '#1d39c4',
    700: '#10239e',
    800: '#061178',
    900: '#030852',
  },
  tertiary: {
    50: '#f9f0ff',
    100: '#efdbff',
    200: '#d3adf7',
    300: '#b37feb',
    400: '#9254de',
    500: '#722ed1',  // Tertiary brand color
    600: '#531dab',
    700: '#391085',
    800: '#22075e',
    900: '#120338',
  },

  // Semantic colors
  success: {
    50: '#f6ffed',
    100: '#d9f7be',
    200: '#b7eb8f',
    300: '#95de64',
    400: '#73d13d',
    500: '#52c41a',  // Primary success color
    600: '#389e0d',
    700: '#237804',
    800: '#135200',
    900: '#092b00',
  },
  warning: {
    50: '#fffbe6',
    100: '#fff1b8',
    200: '#ffe58f',
    300: '#ffd666',
    400: '#ffc53d',
    500: '#faad14',  // Primary warning color
    600: '#d48806',
    700: '#ad6800',
    800: '#874d00',
    900: '#613400',
  },
  error: {
    50: '#fff2f0',
    100: '#ffd8d6',
    200: '#ffb1b1',
    300: '#ff8a8a',
    400: '#ff6363',
    500: '#f5222d',  // Primary error color
    600: '#cf1322',
    700: '#a8071a',
    800: '#820014',
    900: '#5c0011',
  },
  info: {
    50: '#e6f7ff',
    100: '#bae7ff',
    200: '#91d5ff',
    300: '#69c0ff',
    400: '#40a9ff',
    500: '#1890ff',  // Primary info color
    600: '#096dd9',
    700: '#0050b3',
    800: '#003a8c',
    900: '#002766',
  },

  // Neutral colors
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#f0f0f0',
    300: '#d9d9d9',
    400: '#bfbfbf',
    500: '#8c8c8c',
    600: '#595959',
    700: '#434343',
    800: '#262626',
    900: '#1f1f1f',
  },

  // Background colors
  background: {
    primary: '#1B7F77',
    default: '#ffffff',
    paper: '#ffffff',
    elevated: '#fafafa',
    inverse: '#000000',
    disabled: '#f5f5f5',
    hover: 'rgba(0, 0, 0, 0.04)',
    selected: 'rgba(0, 0, 0, 0.08)',
  },

  // Surface colors
  surface: {
    default: '#ffffff',
    subdued: '#fafafa',
    elevated: '#ffffff',
    inverse: '#000000',
    disabled: '#f5f5f5',
    hover: 'rgba(0, 0, 0, 0.04)',
    pressed: 'rgba(0, 0, 0, 0.12)',
  },

  // Text colors
  text: {
    primary: 'rgba(0, 0, 0, 0.88)',
    secondary: 'rgba(0, 0, 0, 0.65)',
    tertiary: 'rgba(0, 0, 0, 0.45)',
    disabled: 'rgba(0, 0, 0, 0.25)',
    inverse: '#ffffff',
    success: '#52c41a',
    warning: '#faad14',
    error: '#ff4d4f',
    info: '#1890ff',
  },

  // Border colors
  border: {
    default: '#d9d9d9',
    subtle: '#f0f0f0',
    strong: '#888888',
    disabled: '#d9d9d9',
    focus: '#1677ff',
    inverse: '#ffffff',
  },

  // Action colors
  action: {
    active: 'rgba(0, 0, 0, 0.88)',
    hover: 'rgba(0, 0, 0, 0.04)',
    selected: 'rgba(0, 0, 0, 0.08)',
    disabled: 'rgba(0, 0, 0, 0.25)',
    focus: 'rgba(0, 0, 0, 0.12)',
    pressed: 'rgba(0, 0, 0, 0.12)',
  },

  // Status colors
  status: {
    online: '#52c41a',
    offline: '#bfbfbf',
    busy: '#ff4d4f',
    away: '#faad14',
  },
};

export default lightThemeColors;