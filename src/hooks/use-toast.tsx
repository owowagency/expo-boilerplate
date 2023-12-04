import * as Burnt from 'burnt';
import { useColorScheme } from 'react-native';
import type { SFSymbol } from 'sf-symbols-typescript';

export interface IconParams {
    ios: {
        /**
       * The name of an iOS-only SF Symbol. For a full list, see https://developer.apple.com/sf-symbols/.
       * @platform ios
       */
        name: SFSymbol | (string)
        /**
       * Change the custom icon color, default is system blue.
       * @platform ios
       */
        color: string
    }
    web?: JSX.Element
}

interface BurntCroutonProps {
    title: string
    message?: string
    preset?: 'error' | 'done' | 'none' | 'custom'
    duration?: number
    haptic?: 'success' | 'warning' | 'error' | 'none'
    shouldDismissByDrag?: boolean
    from?: 'top' | 'bottom'
    layout?: {
        iconSize?: {
            height: number
            width: number
        }
    }
    icon?: IconParams
}

const useToast = () => {
    const colorScheme = useColorScheme();
    const customIconColor = colorScheme === 'dark' ? '#C1F979' : '#89E119';

    const show = async (props: BurntCroutonProps) => {
        const {
            title,
            message,
            preset = 'done',
            duration = 2,
            haptic = 'none',
            shouldDismissByDrag = true,
            from = 'top',
            layout = {
                iconSize: {
                    height: 24,
                    width: 24,
                },
            },
            icon = {
                ios: {
                    name: 'figure.golf',
                    color: customIconColor,
                },
            },
        } = props;

        Burnt.toast({
            title,
            message,
            preset,
            duration,
            haptic,
            shouldDismissByDrag,
            from,
            layout,
            icon,
        });
    };

    return {
        show,
    };
};

export default useToast;
