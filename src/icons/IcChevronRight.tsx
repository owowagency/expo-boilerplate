import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const IcChevronRight = (props: SvgProps) => (
    <Svg
        fill="#000000"
        height={20}
        viewBox="0 0 20 20"
        width={20}
        {...props}
    >
        <Path d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z" />

    </Svg>
);

export default IcChevronRight;
