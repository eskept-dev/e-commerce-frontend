// theme/types.ts

// Base primitive types
export type ColorValue = string;
export type SpacingValue = number | string;
export type BorderRadiusValue = number | string;
export type FontSizeValue = number | string;
export type LineHeightValue = number | string;
export type FontWeightValue = number;
export type DurationValue = number;
export type OpacityValue = number;

// Color palette structure
export interface ColorScale {
  50: ColorValue;
  100: ColorValue;
  200: ColorValue;
  300: ColorValue;
  400: ColorValue;
  500: ColorValue;
  600: ColorValue;
  700: ColorValue;
  800: ColorValue;
  900: ColorValue;
}

// Colors
export interface ThemeColors {
  // Brand colors
  primary: ColorScale;
  secondary: ColorScale;
  tertiary: ColorScale;

  // Semantic colors
  success: ColorScale;
  warning: ColorScale;
  error: ColorScale;
  info: ColorScale;

  // Neutral colors
  neutral: ColorScale;

  // Background colors
  background: {
    primary: ColorValue;
    default: ColorValue;
    paper: ColorValue;
    elevated: ColorValue;
    inverse: ColorValue;
    disabled: ColorValue;
    hover: ColorValue;
    selected: ColorValue;
  };

  // Surface colors
  surface: {
    default: ColorValue;
    subdued: ColorValue;
    elevated: ColorValue;
    inverse: ColorValue;
    disabled: ColorValue;
    hover: ColorValue;
    pressed: ColorValue;
  };

  // Text colors
  text: {
    primary: ColorValue;
    secondary: ColorValue;
    tertiary: ColorValue;
    disabled: ColorValue;
    inverse: ColorValue;
    success: ColorValue;
    warning: ColorValue;
    error: ColorValue;
    info: ColorValue;
  };

  // Border colors
  border: {
    default: ColorValue;
    subtle: ColorValue;
    strong: ColorValue;
    disabled: ColorValue;
    focus: ColorValue;
    inverse: ColorValue;
  };

  // Action colors
  action: {
    active: ColorValue;
    hover: ColorValue;
    selected: ColorValue;
    disabled: ColorValue;
    focus: ColorValue;
    pressed: ColorValue;
  };

  // Status colors
  status: {
    online: ColorValue;
    offline: ColorValue;
    busy: ColorValue;
    away: ColorValue;
  };
}

// Spacing
export interface ThemeSpacing {
  auto: 'auto';
  none: 0;
  xs: SpacingValue;   // 4px
  sm: SpacingValue;   // 8px
  md: SpacingValue;   // 16px
  lg: SpacingValue;   // 24px
  xl: SpacingValue;   // 32px
  xxl: SpacingValue;  // 48px
  custom: (value: number) => SpacingValue;
}

// Breakpoints
export interface ThemeBreakpoints {
  values: {
    xs: number;   // 0px
    sm: number;   // 600px
    md: number;   // 900px
    lg: number;   // 1200px
    xl: number;   // 1536px
  };
  up: (key: keyof ThemeBreakpoints['values']) => string;
  down: (key: keyof ThemeBreakpoints['values']) => string;
  between: (start: keyof ThemeBreakpoints['values'], end: keyof ThemeBreakpoints['values']) => string;
}

// Typography
export interface ThemeTypography {
  fontFamily: {
    heading: string;
    body: string;
    mono: string;
  };
  fontSize: {
    xs: FontSizeValue;     // 12px
    sm: FontSizeValue;     // 14px
    md: FontSizeValue;     // 16px
    lg: FontSizeValue;     // 18px
    xl: FontSizeValue;     // 20px
    xxl: FontSizeValue;    // 24px
    display1: FontSizeValue; // 48px
    display2: FontSizeValue; // 40px
    display3: FontSizeValue; // 32px
  };
  fontWeight: {
    light: FontWeightValue;    // 300
    regular: FontWeightValue;  // 400
    medium: FontWeightValue;   // 500
    semibold: FontWeightValue; // 600
    bold: FontWeightValue;     // 700
  };
  lineHeight: {
    none: LineHeightValue;     // 1
    tight: LineHeightValue;    // 1.25
    snug: LineHeightValue;     // 1.375
    normal: LineHeightValue;   // 1.5
    relaxed: LineHeightValue;  // 1.625
    loose: LineHeightValue;    // 2
  };
  letterSpacing: {
    tighter: string;  // -0.05em
    tight: string;    // -0.025em
    normal: string;   // 0
    wide: string;     // 0.025em
    wider: string;    // 0.05em
    widest: string;   // 0.1em
  };
}

// Borders
export interface ThemeBorders {
  width: {
    none: number;     // 0
    thin: number;     // 1px
    medium: number;   // 2px
    thick: number;    // 4px
  };
  radius: {
    none: BorderRadiusValue;
    sm: BorderRadiusValue;   // 4px
    md: BorderRadiusValue;   // 8px
    lg: BorderRadiusValue;   // 16px
    xl: BorderRadiusValue;   // 24px
    full: BorderRadiusValue; // 9999px
  };
  style: {
    solid: string;
    dashed: string;
    dotted: string;
    double: string;
  };
}

// Shadows
export interface ThemeShadows {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  inner: string;
  focused: string;
}

// Z-index
export interface ThemeZIndex {
  hide: number;      // -1
  base: number;      // 0
  dropdown: number;  // 1000
  sticky: number;    // 1200
  fixed: number;     // 1300
  modal: number;     // 1400
  popover: number;   // 1500
  tooltip: number;   // 1600
}

// Transitions
export interface ThemeTransitions {
  duration: {
    shortest: DurationValue; // 150ms
    shorter: DurationValue;  // 200ms
    short: DurationValue;    // 250ms
    standard: DurationValue; // 300ms
    long: DurationValue;     // 400ms
    longer: DurationValue;   // 500ms
  };
  easing: {
    linear: string;
    ease: string;
    easeIn: string;
    easeOut: string;
    easeInOut: string;
    sharp: string;
  };
}

// Opacity
export interface ThemeOpacity {
  0: OpacityValue;    // 0
  5: OpacityValue;    // 0.05
  10: OpacityValue;   // 0.1
  20: OpacityValue;   // 0.2
  25: OpacityValue;   // 0.25
  30: OpacityValue;   // 0.3
  40: OpacityValue;   // 0.4
  50: OpacityValue;   // 0.5
  60: OpacityValue;   // 0.6
  70: OpacityValue;   // 0.7
  75: OpacityValue;   // 0.75
  80: OpacityValue;   // 0.8
  90: OpacityValue;   // 0.9
  95: OpacityValue;   // 0.95
  100: OpacityValue;  // 1
}

// Size
export interface ThemeSize {
  height: {
    header: SpacingValue;
    footer: SpacingValue;
    input: SpacingValue;
    button: {
      sm: SpacingValue;
      md: SpacingValue;
      lg: SpacingValue;
    };
  };
  width: {
    sidebar: SpacingValue;
    container: {
      sm: SpacingValue;
      md: SpacingValue;
      lg: SpacingValue;
      xl: SpacingValue;
    };
  };
}

// Main Theme interface
export interface Theme {
  colors: ThemeColors | null;
  spacing: ThemeSpacing | null;
  breakpoints: ThemeBreakpoints | null;
  typography: ThemeTypography | null;
  borders: ThemeBorders | null;
  shadows: ThemeShadows | null;
  zIndex: ThemeZIndex | null;
  transitions: ThemeTransitions | null;
  opacity: ThemeOpacity | null;
  size: ThemeSize | null;
}

// Theme Mode
export type ThemeMode = 'light' | 'dark';

// Theme Direction
export type ThemeDirection = 'ltr' | 'rtl';

// Theme Context
export interface ThemeContextType {
  theme: Theme;
  mode: ThemeMode;
  direction: ThemeDirection;
  setMode: (mode: ThemeMode) => void;
  setDirection: (direction: ThemeDirection) => void;
}