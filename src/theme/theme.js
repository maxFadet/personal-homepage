const common = {
    breakpoints: {
        laptop: 1200,
        tablet: 768,
        phone: 480,
    },
    fontSizes: {
        large: "30px",
        medium: "20px",
        small: "18px",
        xSmall: "12px",
    },
    fontWeights: {
        normal: 400,
        semiBold: 600,
        bold: 700,
        heavy: 900,
    },
    lineHeights: {
        large: "36px",
        medium: "28px",
        small: "25px",
    },
    spacing: {
        xLarge: "72px",
        large: "56px",
        medium: "24px",
        small: "16px",
        xSmall: "12px",
    },
    borderRadius: {
        small: "4px",
        large: "50%",
    },
    shadows: {
        light: "rgba(9, 10, 51, 0.03) 0px 16px 58px, rgba(9, 10, 51, 0.02) 0px -2px 50px",
    }
};

export const lightTheme = {
    ...common,
    colors: {
        background: "#FBFBFB",
        backgroundTile: "#FFFFFF",
        backgroundSwitcher: "#E5E5E5",
        textDominantColor: "#6E7E91",
        textSecondaryColor: "#252525",
        border: "#D1D5DA4D",
        borderHover: "#0366D633",
        buttonText: "#FFFFFF",
        buttonShadow: "#8CC2FF",
        buttonActive: "#14462033",
        tileShadow: "#090A3308",
        tileShadow2: "#090A3305",
        blue: "#0366D6",
    }
};

export const darkTheme = {
    ...common,
    colors: {
        background: "#252525",
        backgroundTile: "#363636B8",
        backgroundSwitcher: "#6E6E6E",
        textDominantColor: "#FFFFFF",
        textSecondaryColor: "#FFFFFF",
        border: "#D1D5DA1A",
        borderHover: "#0366D680",
        buttonText: "#FFFFFF",
        buttonShadow: "#6D93BE",
        buttonActive: "#14462033",
        tileShadow: "#090A3308",
        tileShadow2: "#090A3305",
        blue: "#2188FF",
    }
};
