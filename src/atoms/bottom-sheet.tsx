import type { BottomSheetProps } from '@gorhom/bottom-sheet';
import RNBottomSheet from '@gorhom/bottom-sheet';
import type { ColorProps } from '@shopify/restyle';
import { useTheme } from '@shopify/restyle';
import React, { forwardRef } from 'react';
import type { Theme } from '@/themes';

type Props = BottomSheetProps & ColorProps<Theme>;

const BottomSheet = forwardRef<RNBottomSheet, Props>(({ ...rest }, ref) => {
    const theme = useTheme<Theme>();
    const bgColor = theme.colors.$windowBackground;
    const handleColor = theme.colors.black;

    return (
        <RNBottomSheet
            {...rest}
            ref={ref}
            backgroundStyle={{
                backgroundColor: bgColor,
            }}
            handleIndicatorStyle={{
                backgroundColor: handleColor,
                opacity: 0.8,
            }}
    />
    );
});

BottomSheet.displayName = 'BottomSheet';

export default BottomSheet;
