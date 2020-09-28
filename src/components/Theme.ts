import { createTheme, createText } from "@shopify/restyle";

const theme = createTheme({
    colors: {
        primary: "#2CB9B0",
        title: "#0C0D34",
        text: "rgba(12,13,52,0.7)",
        white: "white",
        grey: "rgba(12,13,52,0.05)"
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    breakpoints: {},
    textVariants: {
        hero: {
            fontSize: 70,
            lineHeight: 80,
            fontFamily: "SFProDisplay-Bold",
            color: "white",
            textAlign: "center",
        },
        title1: {
            fontSize: 28,
            fontFamily: "SFProDisplay-Semibold",
            color: "title",
        },
        title2: {
            fontSize: 20,
            lineHeight: 30,
            fontFamily: "SFProDisplay-Semibold",
            color: 'title',
        },
        body: {
            fontFamily: "SFProDisplay-Regular",
            fontSize: 16,
            lineHeight: 24,
            color: 'text',
        },
        button: {
            fontFamily: "SFProDisplay-Regular",
            fontSize: 15,
            color: 'text',
        }
    },
});

export type Theme = typeof theme;
export const Text = createText<Theme>();

export default theme;
