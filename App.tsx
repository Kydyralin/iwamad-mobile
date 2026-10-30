import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, World!</Text>
      <Text style={styles.name}>Magzhan Kydyralin</Text>

      <View style={styles.card}>
        <Text style={styles.count}>Likes: {likes}</Text>
        <Pressable
          accessibilityRole="button"
          onPress={() => setLikes(likes + 1)}
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        >
          <Text style={styles.buttonText}>Like</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7F9',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0B3D5C',
  },
  name: {
    fontSize: 18,
    color: '#667085',
  },
  card: {
    marginTop: 24,
    alignItems: 'center',
    gap: 12,
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  count: {
    fontSize: 20,
    color: '#1F2937',
  },
  button: {
    minHeight: 44,
    minWidth: 120,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1C7293',
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
