import { Column, ScrollView, Text } from 'native-base';
import React from 'react';
import AboutSectionCell from '@/components/about/AboutSectionCell';

const AboutScreen = () => {
    return (
        <Column flex={1} bg='white'>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Column px={6} py={4} safeAreaBottom space={6}>
                    <AboutSectionCell title='i18n' link='https://react.i18next.com/'>
                        <Text fontSize={16}>
                            i18n is a library that allows us to translate our app into different languages.
                        </Text>
                    </AboutSectionCell>

                    <AboutSectionCell title='RN-svg' link='https://github.com/software-mansion/react-native-svg'>
                        <Text fontSize={16}>
                            React Native SVG is a library that allows us to use SVGs in our app.
                        </Text>
                    </AboutSectionCell>
                </Column>
            </ScrollView>
        </Column>
    );
};

export default AboutScreen;
