import {Pressable, Row, Text} from 'native-base';
import IcChevronRight from '@/icons/IcChevronRight';
import React from 'react';
import {useColorScheme} from 'react-native';
import {useTranslation} from 'react-i18next';

interface SectionProps {
    title: string;
    children: React.ReactNode;
    onPress?: () => void;
}

const Section = (props: SectionProps) => {
    const {t} = useTranslation();
    const isDarkMode = useColorScheme() === 'dark';

    const {title, children, onPress} = props;

    return (
        <Pressable mt={8} onPress={onPress}>
            <Row alignItems='center' space={1}>
                <Text
                    color={isDarkMode ? 'white' : 'black'}
                    fontSize={24}
                    fontWeight={600}
                >
                    {t(title)}
                </Text>

                {onPress && <IcChevronRight fill='black' width={24} height={24}/>}
            </Row>

            <Text
                color={isDarkMode ? 'white' : 'black'}
                mt={2}
                fontSize={18}
                fontWeight={400}
            >
                {children}
            </Text>
        </Pressable>
    );
};

export default Section;
