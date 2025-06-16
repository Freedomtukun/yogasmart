"use client";

import React, { useState } from "react";

export default function HomePage() {
  const [score, setScore] = useState<number | null>(null);

  const sequences = [
    {
      title: "Morning Flow",
      level: "Beginner",
      duration: "10 min",
      description: "Start your day with energy and clarity.",
      image: "https://cdn.pixabay.com/photo/12345.jpg", // 可换成本地路径
    },
    {
      title: "Strength Builder",
      level: "Beginner",
      duration: "12 min",
      description: "Build your foundation with strong postures.",
      image: "https://cdn.pixabay.com/photo/23456.jpg",
    },
    {
      title: "Balance & Focus",
      level: "Intermediate",
      duration: "15 min",
      description: "Improve stability and body control.",
      image: "https://cdn.pixabay.com/photo/34567.jpg",
    },
  ];

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // 模拟评分结果
    setTimeout(() => setScore(Math.floor(Math.random() * 51) + 50), 800);
  };

  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-2">SmartYoga</h1>
      <p className="text-gray-600 mb-8">Your Personal AI Yoga Coach</p>

      <h2 className="text-xl font-semibold mb-4">Featured Sequences</h2>
      {sequences.map((s, i) => (
        <div key={i} className="mb-6 text-left bg-white rounded shadow p-4">
          <img src={s.image} alt={s.title} className="w-full rounded mb-2" />
          <h3 className="text-lg font-bold">{s.title}</h3>
          <p className="text-sm text-gray-500">{s.level} · {s.duration}</p>
          <p className="text-sm">{s.description}</p>
        </div>
      ))}

      <hr className="my-8" />

      <h2 className="text-xl font-semibold mb-2">Upload Your Pose</h2>
      <input type="file" accept="image/*" onChange={handleUpload} className="mb-4" />
      {score !== null && (
        <p className="text-green-600 font-semibold">Your pose score: {score}%</p>
      )}
    </div>
  );
}
