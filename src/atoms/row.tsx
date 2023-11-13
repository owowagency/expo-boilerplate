import * as React from 'react';
import type { BoxProps } from '@shopify/restyle';
import Box from './box';
import type { Theme } from '@/themes';

type Props = BoxProps<Theme> & {
    children: React.ReactNode
};

const Row: React.FC<Props> = props => (
    <Box
        {...props}
        flexDirection="row">
        {props.children}
    </Box>
);

export default Row;
