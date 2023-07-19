// extend the theme

import { extendTheme } from 'native-base';

// Define the config
const config = {
    useSystemColorMode: false,
};

export const customTheme = extendTheme({
    config,
    components: {
        Toast: {
            baseStyle: {
                rounded: 'full',
                bg: 'green.800',
                px: 6,
                py: 2,
            },
        },
    },
});
