import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Router from '@/router';

const App = (): JSX.Element => {
    return (
        <SafeAreaProvider>
            <Router />
        </SafeAreaProvider>
    );
};

export default App;
