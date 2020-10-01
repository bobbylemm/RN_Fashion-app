import React, { ReactNode } from "react";
import { StyleSheet, Image, Dimensions, StatusBar } from "react-native";

import theme, { Box } from "./Theme";

interface ContainerProps {
    children: ReactNode;
    footer: ReactNode;
}

export const assets = [require("./assets/patterns/pattern-1.png")];
const { width } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

const Container = ({ children, footer }: ContainerProps) => {
    return (
        <Box flex={1} backgroundColor="secondary">
            <StatusBar barStyle="light-content" />
            <Box backgroundColor="white">
                <Box
                    borderBottomLeftRadius="xl"
                    height={height * 0.61}
                    overflow="hidden"
                >
                    <Image
                        source={assets[0]}
                        style={{
                            width,
                            height,
                            borderBottomLeftRadius: theme.borderRadii.xl,
                        }}
                    />
                </Box>
            </Box>

            <Box flex={1} overflow="hidden">
                <Image
                    source={assets[0]}
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        width,
                        height,
                        top: -height * 0.61
                    }}
                />
                <Box flex={1} borderTopLeftRadius={0} borderRadius="xl" backgroundColor="white">
                    {children}
                </Box>
            </Box>
            <Box height={200} backgroundColor="secondary">
                {footer}
            </Box>
        </Box>
    );
};

export default Container;

const styles = StyleSheet.create({});