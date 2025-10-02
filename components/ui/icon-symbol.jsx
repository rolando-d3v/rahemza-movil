// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const MAPPING = {
  "house.fill": "home",
  "paperplane.fill": "send",
  "chevron.left.forwardslash.chevron.right": "code",
  "movie.fill": "movie",
  "user.fill": "co-present",
  "chevron.right": "chevron-right",
  "list.fill": "list",
};

export function IconSymbol({ name, size = 24, color, style }) {
  return (
    <MaterialIcons
      color={color}
      size={size}
      // name="manage-accounts"
      name={MAPPING[name]}
      style={style}
    />
  );
}

