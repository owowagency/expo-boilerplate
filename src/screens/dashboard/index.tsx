import { ScrollView, useToast } from 'native-base';
import React from 'react';
import Section from 'components/generic/Section';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Image } from 'expo-image';
import { Box } from '@/atoms';

const DashboardScreen = () => {
    const { t } = useTranslation();
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
        <Box
            bg="$windowBackground"
            flex={1}
            flexDirection="column"
        >
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
                <Box
                    flex={1}
                    flexDirection="column"
                    px={6}
                >
                    <Box
                        height={200}
                        px={6}
                    >
                        <Image
                            alt="OWOW Logo"
                            contentFit="contain"
                            source={require('assets/OwowLogo.png')}
                        />
                    </Box>

                    <Box
                        flexDirection="column"
                    >
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
                </Box>
            </ScrollView>
        </Box>
    );
};

export default DashboardScreen;
