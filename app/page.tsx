import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Colors from '@/constants/colors';
import Banner from '@/components/Banner';
import FeaturedSequences from '@/components/FeaturedSequences';
import PoseAnalyzer from '@/components/PoseAnalyzer';

export default function HomeScreen() {
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Banner />
      <FeaturedSequences />
      <PoseAnalyzer />
      <View style={styles.spacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  contentContainer: {
    paddingBottom: 40,
  },
  spacer: {
    height: 40,
  },
});
