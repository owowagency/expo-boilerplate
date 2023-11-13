module.exports = function (api) {
    api.cache(true);

    return {
        presets: ['babel-preset-expo'],
        plugins: [
            'expo-router/babel',
            [
                'module-resolver',
                {
                    extensions: [
                        '.js',
                        '.jsx',
                        '.ts',
                        '.tsx',
                        '.android.js',
                        '.android.tsx',
                        '.ios.js',
                        '.ios.tsx',
                        '.mjs',
                    ],
                    root: './',
                    alias: {
                        '@': './src',
                        assets: './src/assets',
                        components: './src/components',
                        config: './src/config',
                        hooks: './src/hooks',
                        router: './src/router',
                        screens: './src/screens',
                        services: './src/services',
                        icons: './src/icons',
                    },
                },
            ],
        ],
    };
};
