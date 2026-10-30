import { Pressable, StyleSheet, Text } from "react-native";
import type { CampusEvent } from "../data/events";

type EventRowProps = {
  event: CampusEvent;
  saved: boolean;
  onPress: () => void;
  onLongPress: () => void;
};

export function EventRow({
  event,
  saved,
  onPress,
  onLongPress,
}: EventRowProps) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.meta}>
        {event.date} · {event.place}
      </Text>
      {saved && <Text style={styles.saved}>★ Saved</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 44,
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#E3E8EC",
    backgroundColor: "#FFFFFF",
    gap: 4,
  },
  cardPressed: { backgroundColor: "#D6E6F0", borderColor: "#1C7293" },
  title: { fontSize: 18, fontWeight: "600", color: "#0B3D5C" },
  meta: { fontSize: 14, color: "#667085" },
  saved: { fontSize: 14, fontWeight: "600", color: "#B85C00" },
});
