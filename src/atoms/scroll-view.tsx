import type {
    ScrollViewProps as NativeScrollViewProps,
} from 'react-native';
import {
    ScrollView as NativeScrollView,
} from 'react-native';
import { createBox } from '@shopify/restyle';
import type { Theme } from '@/themes';

const ScrollView = createBox<Theme, NativeScrollViewProps>(NativeScrollView);

export type ScrollViewProps = React.ComponentProps<typeof ScrollView>;

export default ScrollView;
