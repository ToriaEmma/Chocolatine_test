#!/bin/bash
# Redimensionner les images PNG à 4960x6968 pixels (42x59 cm à 300 DPI)

for img in "9.png" "Green and White Minimalist Natural Skincare Feed Ad (1).png" "l-dark (4).png" "Orange and Yellow Modern Professional Product Promotion Special Summer Sale Instagram Post (5).png" "Pink Vibrant Gradient Weekend Special Promo Smoothie Instagram Post (42 x 59 cm).png" "Yellow Green 3D Illustrated Promotional  Summer Cosmetics Facebook Post (1).png"
do
  convert "$img" -resize 4960x6968\! "$img"
done

echo "Redimensionnement terminé."
