module.exports = {
    env: {
        node: true,
        'react-native/react-native': true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        '@owowagency/eslint-config-react',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        'react-native',
        '@typescript-eslint',
        'unused-imports',
    ],
    globals: {
        JSX: true,
    },
    rules: {
        '@typescript-eslint/no-require-imports': 'off',
    },
};
