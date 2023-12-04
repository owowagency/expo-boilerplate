import { Stack } from 'expo-router';
import AboutScreen from '@/screens/about';

export default function Page() {
    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: 'About',
                }}
            />

            <AboutScreen />
        </>
    );
}
