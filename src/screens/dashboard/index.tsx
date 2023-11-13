import React from 'react';
import Section from 'components/generic/Section';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Image } from 'expo-image';
import { Box, Column, ScrollView } from '@/atoms';
import useToast from '@/hooks/use-toast';
import BottomSheetButton from '@/components/BottomSheetButton';

const DashboardScreen = () => {
    const { t } = useTranslation();
    const { show } = useToast();

    const handleNavigation = () => {
        router.push('/about');
    };

    const handleNativeBase = () => {
        show({
            title: 'Hello OWOW',
            message: 'This is a toast',
        });
    };

    return (
        <Column
            bg="$windowBackground"
            flex={1}
        >
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
                <Column
                    flex={1}
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
                            style={{ height: 200 }}
                        />
                    </Box>

                    <BottomSheetButton />

                    <Column>
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
                    </Column>
                </Column>
            </ScrollView>
        </Column>
    );
};

export default DashboardScreen;
