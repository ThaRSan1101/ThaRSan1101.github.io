import React from 'react'
import './BackgroundElements.css'

export default function BackgroundElements({ variant = 'default', density = 'medium' }) {
  // Different variants for different pages
  const getStarPositions = () => {
    const positions = []
    const baseCount = density === 'light' ? 15 : density === 'medium' ? 25 : 35
    
    for (let i = 0; i < baseCount; i++) {
      positions.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 1,
        animationDelay: Math.random() * 4,
        animationDuration: 2 + Math.random() * 3
      })
    }
    return positions
  }

  const getFloatingElements = () => {
    const elements = []
    const count = density === 'light' ? 6 : density === 'medium' ? 10 : 14
    
    for (let i = 0; i < count; i++) {
      elements.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDelay: Math.random() * 8,
        animationDuration: 8 + Math.random() * 12
      })
    }
    return elements
  }

  const getLightRays = () => {
    const rays = []
    const count = density === 'light' ? 3 : density === 'medium' ? 5 : 8
    
    for (let i = 0; i < count; i++) {
      rays.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        rotation: Math.random() * 180,
        animationDelay: Math.random() * 6,
        animationDuration: 6 + Math.random() * 4
      })
    }
    return rays
  }

  const starPositions = getStarPositions()
  const floatingElements = getFloatingElements()
  const lightRays = getLightRays()

  return (
    <div className="background-elements-container">
      {/* Twinkling Stars */}
      <div className="background-stars">
        {starPositions.map((star) => (
          <div
            key={`star-${star.id}`}
            className="background-star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.animationDuration}s`,
              animationDelay: `${star.animationDelay}s`
            }}
          />
        ))}
      </div>

      {/* Floating Light Particles */}
      <div className="background-particles">
        {floatingElements.map((element) => (
          <div
            key={`particle-${element.id}`}
            className="background-particle"
            style={{
              left: `${element.left}%`,
              top: `${element.top}%`,
              animationDuration: `${element.animationDuration}s`,
              animationDelay: `${element.animationDelay}s`
            }}
          />
        ))}
      </div>

      {/* Subtle Light Rays */}
      <div className="background-rays">
        {lightRays.map((ray) => (
          <div
            key={`ray-${ray.id}`}
            className="background-ray"
            style={{
              left: `${ray.left}%`,
              top: `${ray.top}%`,
              transform: `rotate(${ray.rotation}deg)`,
              animationDuration: `${ray.animationDuration}s`,
              animationDelay: `${ray.animationDelay}s`
            }}
          />
        ))}
      </div>

      {/* Ambient Light Glow */}
      <div className="background-glows">
        <div
          className="background-glow background-glow-1"
        />
        <div
          className="background-glow background-glow-2"
        />
      </div>

      {/* Shooting Star (occasional) */}
      <div className="background-shooting-star" />
    </div>
  )
}