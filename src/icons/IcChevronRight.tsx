import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const IcChevronRight = (props: SvgProps) => (
    <Svg
        viewBox='0 0 20 20'
        width={20}
        height={20}
        fill='#000000'
        {...props}
    >
        <Path d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z"/>

    </Svg>
);

export default IcChevronRight;
