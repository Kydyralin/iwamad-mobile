import { useState } from "react";
import { router } from "expo-router";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { EventRow } from "../../src/components/EventRow";
import { events } from "../../src/data/events";

export default function EventsScreen() {
  const [query, setQuery] = useState("");
  const [savedIds, setSavedIds] = useState<number[]>([]);

  const shown = events.filter((e) =>
    e.title.toLowerCase().includes(query.trim().toLowerCase()),
  );

  function toggleSaved(id: number) {
    setSavedIds((ids) =>
      ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id],
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Search events"
        autoCapitalize="none"
        returnKeyType="search"
        style={styles.search}
      />
      <Text style={styles.hint}>
        Long-press an event to save it. Saved: {savedIds.length}
      </Text>
      <FlatList
        data={shown}
        keyExtractor={(e) => String(e.id)}
        renderItem={({ item }) => (
          <EventRow
            event={item}
            saved={savedIds.includes(item.id)}
            onPress={() => router.push(`/events/${item.id}`)}
            onLongPress={() => toggleSaved(item.id)}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.gap} />}
        ListEmptyComponent={<Text style={styles.empty}>No events match</Text>}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F7F9" },
  search: {
    minHeight: 44,
    margin: 16,
    marginBottom: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#667085",
    backgroundColor: "#FFFFFF",
    fontSize: 16,
  },
  hint: { marginHorizontal: 16, marginBottom: 8, color: "#667085" },
  list: { padding: 16, paddingTop: 0 },
  gap: { height: 12 },
  empty: { textAlign: "center", marginTop: 32, fontSize: 16, color: "#667085" },
});
