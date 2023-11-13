import { ScrollView } from 'native-base';
import React from 'react';
import AboutSectionCell from '@/components/about/AboutSectionCell';
import { Box, Text } from '@/atoms';

const AboutScreen = () => {
    return (
        <Box
            bg="white"
            flex={1}
            flexDirection="column"
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <Box
                    flexDirection="column"
                    g={6}
                    px={6}
                    py={4}
                >
                    <AboutSectionCell
                        link="https://react.i18next.com/"
                        title="i18n">
                        <Text fontSize={16}>
                            i18n is a library that allows us to translate our app into different languages.
                        </Text>
                    </AboutSectionCell>

                    <AboutSectionCell
                        link="https://github.com/software-mansion/react-native-svg"
                        title="RN-svg">
                        <Text fontSize={16}>
                            React Native SVG is a library that allows us to use SVGs in our app.
                        </Text>
                    </AboutSectionCell>
                </Box>
            </ScrollView>
        </Box>
    );
};

export default AboutScreen;
