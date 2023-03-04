import { fontSizes } from './../../themes/index';
import { StyleSheet } from 'react-native';
import { colors, borderRadius } from '../../themes'

export default StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 17,
        borderRadius: borderRadius.medium
    },
    buttonDis: {
        paddingVertical: 17,
        borderRadius: borderRadius.medium,
        backgroundColor: colors.primary + '50'
    },
    label: {
        color: colors.white,
        textAlign: 'center',
    },

});
