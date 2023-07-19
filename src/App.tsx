import React from 'react';
import Router from '@/router';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = (): JSX.Element => {
    return (
        <SafeAreaProvider>
            <Router />
        </SafeAreaProvider>
    );
};

export default App;
