export const palette = {
    alabaster: "#FBFBFB",
    white: "#FFFFFF",
    mercury: "#E5E5E5",
    staleGray: "#6E7E91",
    mineShaft: "#252525",
    mineShaftLight: "#363636B8",
    iron10: "#D1D5DA1A",
    iron30: "#D1D5DA4D",
    scienceBlue: "#0366D6",
    scienceBlue20: "#0366D633",
    scienceBlue50: "#0366D680",
    anakiwa: "#8CC2FF",
    parsley20: "#14462033",
    violet: "#090A3308",
    doveGray: "#6E6E6E",
    shipCove: "#6D93BE",
    dodgerBlue: "#2188FF",
}

export const sharedStyles = {
    breakpoints: {
        laptop: "1200px",
        tablet: "768px",
        phone: "425px",
    },
    fontSizes: {
        headlines: {
            xlarge: {
                default: "38px",
                mobile: "22px",
                tablet: "30px",
            },
            large: {
                default: "32px",
                mobile: "18px",
                tablet: "28px",
            },
            medium: {
                default: "30px",
                mobile: "18px",
                tablet: "24px",
            },
            small: {
                default: "24px",
                mobile: "16px",
                tablet: "20px",
            },
        },
        paragraph: {
            large: {
                default: "20px",
                mobile: "17px",
            },
            medium: {
                default: "18px",
                mobile: "14px",
                tablet: "16px",
            },
            small: {
                default: "12px",
            },
        },
    },
    fontWeights: {
        semiBold: 600,
        bold: 700,
        heavy: 900,
    },
    shadows: {
        light: "rgba(9, 10, 51, 0.03) 0px 16px 58px, rgba(9, 10, 51, 0.02) 0px -2px 50px",
    },
    cursor: {
        default: "default",
        pointer: "pointer",
    },
    borderRadius: {
        small: "4px",
    },
};

export const lightTheme = {
    ...sharedStyles,
    colors: {
        background: palette.alabaster,
        backgroundSwitcher: palette.mercury,
        textSecondaryColor: palette.mineShaft,
        text: palette.staleGray,
        blue: palette.scienceBlue,
        tile: {
            shadow: palette.violet,
            background: palette.white,
            border: palette.iron30,
            hover: palette.scienceBlue20
        },
        button: {
            outline: palette.anakiwa,
            active: palette.parsley20,
            text: palette.white
        },
    }
};

export const darkTheme = {
    ...sharedStyles,
    colors: {
        background: palette.mineShaft,
        backgroundSwitcher: palette.doveGray,
        textSecondaryColor: palette.white,
        text: palette.white,
        blue: palette.dodgerBlue,
        tile: {
            shadow: palette.violet,
            background: palette.mineShaftLight,
            border: palette.iron10,
            hover: palette.scienceBlue50
        },
        button: {
            outline: palette.shipCove,
            active: palette.parsley20,
            text: palette.white
        },
    }
};