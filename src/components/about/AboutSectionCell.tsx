import { Column, Pressable, Row, Text } from 'native-base';
import { Linking } from 'react-native';
import React from 'react';

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
        <Row
            alignItems="center"
            space={4}>
            <Pressable
                alignItems="center"
                flex={1}
                onPress={handlePress}>
                <Text
                    color="blue.600"
                    fontSize={16}
                    underline>{title}
                </Text>
            </Pressable>

            <Column flex={5}>
                {children}
            </Column>
        </Row>
    );
};

export default AboutSectionCell;
