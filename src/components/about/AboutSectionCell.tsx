import { Pressable } from 'native-base';
import { Linking } from 'react-native';
import React from 'react';
import { Box, Text } from '@/atoms';

interface AboutSectionCellProps {
    title: string
    link: string
    children: React.ReactNode
}

const AboutSectionCell = (props: AboutSectionCellProps) => {
    const { title, link, children } = props;

    const handlePress = () => {
        // Learn More: https://reactnative.dev/docs/linking
        Linking.openURL(link);
    };

    return (
        <Box
            alignItems="center"
            flexDirection="row"
            g={4}
        >
            <Pressable
                alignItems="center"
                flex={1}
                onPress={handlePress}>
                <Text
                    color="$primary"
                    fontSize={16}
                    textDecorationLine="underline"
                >
                    {title}
                </Text>
            </Pressable>

            <Box
                flex={5}
            >
                {children}
            </Box>
        </Box>
    );
};

export default AboutSectionCell;
