import {Box, Column, Image, ScrollView, useToast} from 'native-base';
import {NavigationProps} from 'router/params';
import React from 'react';
import Section from 'components/generic/Section';
import {useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const DashboardScreen = () => {
    const navigation = useNavigation<NavigationProps>();
    const {t} = useTranslation();
    const isDarkMode = useColorScheme() === 'dark';
    const {show} = useToast();

    const handleNavigation = () => {
        // Learn More: https://reactnavigation.org/docs/navigating/
        navigation.navigate('About');
    };

    const handleNativeBase = () => {
        // Learn More: https://docs.nativebase.io/
        // Edit the default style at helpers/theme.ts
        show({
            title: t('dashboard.toastDemo.title'),
            description: t('dashboard.toastDemo.description'),
            placement: 'top',
        });
    };

    return (
        <Column bgColor={isDarkMode ? 'black' : 'white'} flex={1}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
                <Column flex={1} px={6} safeAreaBottom>
                    <Box px={6} bg='white'>
                        <Image
                            source={require('assets/OwowLogo.png')}
                            resizeMode='contain'
                            alt="OWOW Logo"
                            height={200}
                        />
                    </Box>

                    <Box>
                        <Section title="dashboard.stepOne.title">
                            {t('dashboard.stepOne.description')}
                        </Section>

                        <Section title="dashboard.navigation.title" onPress={handleNavigation}>
                            {t('dashboard.navigation.description')}
                        </Section>

                        <Section title="dashboard.nativeBase.title" onPress={handleNativeBase}>
                            {t('dashboard.nativeBase.description')}
                        </Section>

                        <Section title="dashboard.learnMore.title">
                            {t('dashboard.learnMore.description')}
                        </Section>
                    </Box>
                </Column>
            </ScrollView>
        </Column>
    );
};

export default DashboardScreen;
