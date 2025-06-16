import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'lucide-react-native';
import Colors from '@/constants/colors';

export default function PoseAnalyzer() {
  const [image, setImage] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      analyzeYogaPose(result.assets[0].uri);
    }
  };

  const analyzeYogaPose = async (imageUri: string) => {
    setLoading(true);
    setScore(null);
    
    // Simulate API call to analyze pose
    setTimeout(() => {
      // Generate a random score between 70 and 98
      const randomScore = Math.floor(Math.random() * 29) + 70;
      setScore(randomScore);
      setLoading(false);
    }, 2000);
  };

  const getFeedback = (score: number) => {
    if (score >= 90) return "Excellent form! Your alignment is nearly perfect.";
    if (score >= 80) return "Great job! Minor adjustments needed for perfect form.";
    if (score >= 70) return "Good effort! Focus on alignment and balance.";
    return "Keep practicing! Try adjusting your posture.";
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Analyze Your Pose</Text>
      <Text style={styles.subtitle}>
        Upload a photo of your yoga pose and our AI will analyze your form
      </Text>
      
      <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
        <Camera size={24} color={Colors.light.primary} />
        <Text style={styles.uploadButtonText}>Upload Photo</Text>
      </TouchableOpacity>
      
      {image && (
        <View style={styles.resultContainer}>
          <Image source={{ uri: image }} style={styles.image} />
          
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={Colors.light.primary} />
              <Text style={styles.loadingText}>Analyzing your pose...</Text>
            </View>
          ) : score !== null ? (
            <View style={styles.scoreContainer}>
              <View style={styles.scoreCircle}>
                <Text style={styles.scoreText}>{score}</Text>
              </View>
              <Text style={styles.feedbackText}>{getFeedback(score)}</Text>
            </View>
          ) : null}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.accent,
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.light.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.light.primary,
    marginBottom: 20,
  },
  uploadButtonText: {
    color: Colors.light.primary,
    fontWeight: '500',
    marginLeft: 8,
  },
  resultContainer: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    marginBottom: 16,
  },
  loadingContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
  },
  scoreContainer: {
    alignItems: 'center',
  },
  scoreCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.light.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  scoreText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  feedbackText: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.light.text,
    lineHeight: 22,
  },
});