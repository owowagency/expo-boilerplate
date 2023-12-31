import { I18nextProvider } from 'react-i18next';
import React from 'react';
import { Stack } from 'expo-router';
import { ThemeProvider } from '@shopify/restyle';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import i18n from '@/i18n';
import { themes } from '@/themes';

const Root = (): JSX.Element => {
    const activeTheme = themes[0].theme;

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <I18nextProvider i18n={i18n}>
                <ThemeProvider theme={activeTheme}>
                    <Stack
                        screenOptions={{
                            headerBackTitleVisible: false,
                            headerTintColor: '#151515',
                            headerTitleStyle: { fontFamily: 'Inter-Regular' },
                            headerBackTitle: '',
                        }}
                    />

                    <StatusBar />
                </ThemeProvider>
            </I18nextProvider>
        </GestureHandlerRootView>
    );
};

export default Root;
