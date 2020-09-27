import React, { useRef } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Animated, { multiply, divide } from "react-native-reanimated";
import {
  useValue,
  onScrollEvent,
  interpolateColor,
  useScrollHandler,
} from "react-native-redash";

import Slide, { SLIDE_HEIGHT, BORDER_RADIUS } from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot";

interface OnBoardingProps {}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  sliders: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
});

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about outfit? Don't worry! Find the best outfit here!",
    color: "#BFEAF5",
    picture: require("../../../../assets/1.png"),
  },
  {
    title: "Playful",
    subtitle: "Hear It First, Wear It First",
    description:
      "Hating the clothes in your wardrope? Explore hundreds of outfit ideas",
    color: "#BEECC4",
    picture: require("../../../../assets/2.png"),
  },
  {
    title: "Eccentric",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual and unique style and look amazing everyday",
    color: "#FFE4D9",
    picture: require("../../../../assets/3.png"),
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
    picture: require("../../../../assets/1.png"),
  },
];

const OnBoarding = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  // TODO: useScrollHandler
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.sliders, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({ title, picture }, index) => {
            return (
              <Slide
                key={title}
                right={index % 2 !== 0}
                label={title}
                {...{ picture }}
              />
            );
          })}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <View style={[styles.footerContent]}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>

          <Animated.View
            style={{
              width: width * slides.length,
              flex: 1,
              flexDirection: "row",
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ subtitle, description }, index) => {
              return (
                <Subslide
                  key={subtitle}
                  last={index === slides.length - 1}
                  onPress={() => {
                    if (scroll.current) {
                      scroll.current
                        .getNode()
                        .scrollTo({ x: width * (index + 1), animated: true });
                    }
                  }}
                  {...{ subtitle, description }}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default OnBoarding;
