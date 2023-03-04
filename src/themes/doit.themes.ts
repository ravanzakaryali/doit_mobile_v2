import { TextStyle, ViewStyle } from 'react-native';
import { fontSizes, fonts, fontWeights, spacing, colors } from './';
export const text = {
    fontFamily: fonts.regular,
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.regular,
};
export const container = {
    large: {
        paddingHorizontal: spacing.large,
        paddingVertical: spacing.large,
    }
};
export const button = {
    borderRadius: 8,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
    fontWeight: fontWeights.bold,
};
export const title: any = {
    large: {
        fontFamily: fonts.bold,
        fontSize: fontSizes.large * 1.5,
        fontWeight: fontWeights.bold,
        color: colors.black
    }
};
export const subtitle: TextStyle = {
    fontFamily: fonts.regular,
    fontSize: fontSizes.medium,
};
export const center: ViewStyle = {
    flex: 1,
    justifyContent: 'center',
}
