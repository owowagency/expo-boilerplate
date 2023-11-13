import DashboardScreen from 'screens/dashboard';
import { Stack } from 'expo-router';

export default function Page() {
    return (

        <>
            <Stack.Screen
                options={{
                    headerTitle: 'Dashboard',
                }}
        />

            <DashboardScreen />
        </>
    );
}
