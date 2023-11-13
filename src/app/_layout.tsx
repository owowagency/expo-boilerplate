import { NativeBaseProvider, StatusBar } from 'native-base';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { I18nextProvider } from 'react-i18next';
import React from 'react';
import { useColorScheme } from 'react-native';
import { Stack } from 'expo-router';
import { ThemeProvider } from '@shopify/restyle';
import { customTheme } from '@/helpers/theme';
import i18n from '@/i18n';
import { themes } from '@/themes';

const Root = (): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const activeTheme = themes[0].theme;

    return (
        <I18nextProvider i18n={i18n}>
            <ThemeProvider theme={activeTheme}>
                <NativeBaseProvider theme={customTheme}>
                    <Stack
                        screenOptions={{
                            headerBackTitleVisible: false,
                            headerTintColor: '#151515',
                            headerTitleStyle: { fontFamily: 'Inter-Regular' },
                            headerBackTitle: '',
                        }}
                />

                    <StatusBar
                        backgroundColor={backgroundStyle.backgroundColor}
                        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                        />
                </NativeBaseProvider>
            </ThemeProvider>
        </I18nextProvider>
    );
};

export default Root;
