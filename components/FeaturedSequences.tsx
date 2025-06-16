import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '@/constants/colors';
import { featuredSequences } from '@/constants/yogaSequences';

const { width } = Dimensions.get('window');
const cardWidth = width * 0.85;

export default function FeaturedSequences() {
  const router = useRouter();

  const handleSequencePress = (id: string) => {
    // In a real app, this would navigate to the sequence details
    console.log(`Sequence ${id} pressed`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Featured Sequences</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {featuredSequences.map((sequence) => (
          <TouchableOpacity 
            key={sequence.id} 
            style={styles.card}
            onPress={() => handleSequencePress(sequence.id)}
          >
            <Image source={{ uri: sequence.image }} style={styles.image} />
            <View style={styles.cardContent}>
              <View style={styles.headerRow}>
                <Text style={styles.title}>{sequence.title}</Text>
                <View style={styles.levelBadge}>
                  <Text style={styles.levelText}>{sequence.level}</Text>
                </View>
              </View>
              <Text style={styles.duration}>{sequence.duration}</Text>
              <Text style={styles.description} numberOfLines={2}>
                {sequence.description}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: Colors.light.text,
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingHorizontal: 15,
  },
  card: {
    width: cardWidth,
    backgroundColor: Colors.light.accent,
    borderRadius: 12,
    marginHorizontal: 5,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 160,
  },
  cardContent: {
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.light.text,
  },
  levelBadge: {
    backgroundColor: Colors.light.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  levelText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  duration: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: Colors.light.text,
    lineHeight: 20,
  },
});