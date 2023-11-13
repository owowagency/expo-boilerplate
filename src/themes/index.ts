import type { Theme } from './light';
import light from './light';

export type ThemeNames = 'light';

export interface ThemeMeta {
    id: ThemeNames
    name: string
    theme: Theme
}

export const themes: readonly ThemeMeta[] = [
    {
        id: 'light',
        name: 'Default Light',
        theme: light,
    },
];

export type { Theme };
