import React from 'react';
import { useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';
import IcChevronRight from '@/icons/IcChevronRight';
import { Pressable, Row, Text } from '@/atoms';

interface SectionProps {
    title: string
    children: React.ReactNode
    onPress?: () => void
}

const Section = (props: SectionProps) => {
    const { t } = useTranslation();
    const isDarkMode = useColorScheme() === 'dark';

    const { title, children, onPress } = props;

    return (
        <Pressable
            mt={8}
            onPress={onPress}>
            <Row
                alignItems="center"
                g={1}
            >
                <Text
                    color={isDarkMode ? 'white' : 'black'}
                    fontSize={24}
                    fontWeight="600"
                >
                    {t(title)}
                </Text>

                {onPress && (
                    <IcChevronRight
                        fill="black"
                        height={24}
                        width={24}
                    />
                )}
            </Row>

            <Text
                fontSize={18}
                fontWeight="400"
                mt={2}
            >
                {children}
            </Text>
        </Pressable>
    );
};

export default Section;
