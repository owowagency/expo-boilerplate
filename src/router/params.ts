import { type NavigationProp } from '@react-navigation/native';

export interface ParamList {
    Dashboard: undefined
    About: undefined
};

export type NavigationProps = NavigationProp<ParamList>;
