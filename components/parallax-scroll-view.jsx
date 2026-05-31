import { StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollOffset,
} from "react-native-reanimated";

const HEADER_HEIGHT = 300;

export default function ParallaxScrollView({
  children,
  headerImage,
  color_content,
}) {
  const scrollRef = useAnimatedRef();
  const scrollOffset = useScrollOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  return (
    <Animated.ScrollView
      ref={scrollRef}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
    >
      <Animated.View style={[styles.header, headerAnimatedStyle]}>
        {headerImage}
      </Animated.View>

      <View style={[styles.content, { backgroundColor: color_content }]}>
        {children}
      </View>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    gap: 16,
    overflow: "hidden",
  },
});
