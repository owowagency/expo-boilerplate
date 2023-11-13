import { Box, Column, Image, ScrollView, useToast } from 'native-base';
import React from 'react';
import Section from 'components/generic/Section';
import { useColorScheme } from 'react-native';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';

const DashboardScreen = () => {
    const { t } = useTranslation();
    const isDarkMode = useColorScheme() === 'dark';
    const { show } = useToast();

    const handleNavigation = () => {
        router.push('/about');
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
        <Column
            bgColor={isDarkMode ? 'black' : 'white'}
            flex={1}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
                <Column
                    flex={1}
                    px={6}
                    safeAreaBottom>
                    <Box
                        bg="white"
                        px={6}>
                        <Image
                            alt="OWOW Logo"
                            height={200}
                            resizeMode="contain"
                            source={require('assets/OwowLogo.png')}
                        />
                    </Box>

                    <Box>
                        <Section title="dashboard.stepOne.title">
                            {t('dashboard.stepOne.description')}
                        </Section>

                        <Section
                            onPress={handleNavigation}
                            title="dashboard.navigation.title">
                            {t('dashboard.navigation.description')}
                        </Section>

                        <Section
                            onPress={handleNativeBase}
                            title="dashboard.nativeBase.title">
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
