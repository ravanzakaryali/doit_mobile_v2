import { colors, fontSizes, spacing } from 'src/themes/index';
import { StyleSheet } from 'react-native';
import { center, container, title } from 'src/themes/doit.themes';
export default StyleSheet.create({
    titleText: title.large,
    container: {
        ...container.large, ...{
            flex: 1
        }
    },
    inputView: {
        paddingVertical: spacing.medium
    },
    inputStyle: {
        fontSize: fontSizes.medium,
        borderBottomColor: colors.black + '60',
        borderBottomWidth: 1,
    },
    center: center,
    buttonStyle: {
        fontSize: fontSizes.large,
    },
    buttonView: {
        marginTop: spacing.medium
    },
    textView:{
        paddingVertical: spacing.small
    }
});