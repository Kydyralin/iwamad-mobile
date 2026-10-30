import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { events } from "../../src/data/events";

export default function EventScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const event = events.find((e) => e.id === Number(id));
  if (!event) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: "Not found" }} />
        <Text style={styles.title}>Event not found</Text>
        <Text style={styles.body}>No event with id {id}.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: event.title }} />
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.body}>{event.date}</Text>
      <Text style={styles.body}>{event.place}</Text>
      <Text style={styles.body}>Seats: {event.seats}</Text>
      <Text style={styles.body}>{event.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, gap: 8 },
  title: { fontSize: 24, fontWeight: "bold", color: "#0B3D5C" },
  body: { fontSize: 16, color: "#1F2937" },
});
