import { createTheme } from '@shopify/restyle';
import type { StatusBarStyle } from 'expo-status-bar';

const palette = {
    white: '#FEFEFE',
    black: '#151515',

    primary: '#FFC107',
};

const theme = createTheme({
    spacing: {
        0: 0,
        1: 4,
        2: 8,
        3: 12,
        4: 16,
        5: 20,
        6: 24,
        7: 28,
        8: 32,
        9: 36,
        10: 40,
    },
    colors: {
        white: palette.white,
        black: palette.black,

        $primary: palette.primary,
        $windowBackground: palette.white,
        $foreground: palette.black,

    },
    borderRadii: {
        xs: 4,
        sm: 16,
        md: 24,
        lg: 64,
        hg: 128,
    },
    statusBar: {
        barStyle: 'dark-content' as StatusBarStyle,
    },
    textVariants: {
        defaults: {
            color: '$foreground',
            fontSize: 16,
        },
    },
});

export default theme;

export type Theme = typeof theme;
