import type { NativeStackNavigationOptions } from '@react-navigation/native-stack/lib/typescript/src/types';
import DashboardScreen from 'screens/dashboard';
import React from 'react';
import { screens } from 'router/screens';
import { useTranslation } from 'react-i18next';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
                key={screens.Dashboard}
                component={DashboardScreen}
                name={screens.Dashboard}
                options={{
                    ...defaultHeaderStyle,
                    headerTitle: t('dashboard.title'),
                }}
            />

            <Stack.Screen
                key={screens.About}
                component={AboutScreen}
                name={screens.About}
                options={{
                    ...defaultHeaderStyle,
                    headerTitle: t('about.title'),
                }}
            />
        </Stack.Navigator>
    );
};

export default Router;
