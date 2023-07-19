import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from 'screens/dashboard';
import React from 'react';
import { screens } from 'router/screens';
import { useTranslation } from 'react-i18next';
import AboutScreen from '@/screens/about';

const Stack = createNativeStackNavigator();

export const defaultHeaderStyle: NativeStackNavigationOptions = {
    headerShown: true,
    headerShadowVisible: false,
    headerTitleStyle: {
        fontWeight: '600',
        fontSize: 30,
    },
};

const Router = () => {
    const { t } = useTranslation();

    return (
        <Stack.Navigator
            initialRouteName={screens.Dashboard}
        >
            <Stack.Screen
                name={screens.Dashboard}
                key={screens.Dashboard}
                component={DashboardScreen}
                options={{
                    ...defaultHeaderStyle,
                    headerTitle: t('dashboard.title'),
                }}
            />

            <Stack.Screen
                name={screens.About}
                key={screens.About}
                component={AboutScreen}
                options={{
                    ...defaultHeaderStyle,
                    headerTitle: t('about.title'),
                }}
            />
        </Stack.Navigator>
    );
};

export default Router;
