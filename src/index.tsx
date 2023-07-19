import {NativeBaseProvider, StatusBar} from 'native-base';
import App from '@/App';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {I18nextProvider} from 'react-i18next';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {customTheme} from '@/helpers/theme';
import i18n from '@/i18n';
import {useColorScheme} from 'react-native';

const Root = (): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <NavigationContainer>
            <I18nextProvider i18n={i18n}>
                <NativeBaseProvider theme={customTheme}>
                    <App />

                    <StatusBar
                        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                        backgroundColor={backgroundStyle.backgroundColor}
                    />
                </NativeBaseProvider>
            </I18nextProvider>
        </NavigationContainer>
    );
};

export default Root;
