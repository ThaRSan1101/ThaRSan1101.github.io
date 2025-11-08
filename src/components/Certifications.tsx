import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaCertificate, FaAward, FaGraduationCap } from 'react-icons/fa'
import BackgroundElements from './BackgroundElements'

const certifications = [
  {
    title: 'UVAXTREME 1.0 PROGRAMMING COMPETITION',
    year: '2024',
    description: 'Competitive programming competition showcasing Java development skills',
    image: '/assets/images/certificates/uvaxtreme.png'
  },
  {
    title: 'Introduction to Java',
    year: '2024',
    description: 'Fundamental Java programming concepts and object-oriented principles',
    image: '/assets/images/certificates/java-sololearn.png'
  },
  {
    title: 'Responsive Web Design',
    year: '2025',
    description: 'HTML, CSS, and responsive design techniques for modern web development',
    image: '/assets/images/certificates/responsive-web-design.png'
  },
  {
    title: 'Programming Hub Git Certification Course',
    year: '2025',
    description: 'Version control with Git and GitHub collaboration workflows',
    image: '/assets/images/certificates/git-programming-hub.png'
  },
  {
    title: 'Introduction to SQL',
    year: '2025',
    description: 'Database fundamentals and MySQL query language essentials',
    image: '/assets/images/certificates/sql-sololearn.png'
  },
  {
    title: 'Introduction to JavaScript',
    year: '2025',
    description: 'Core JavaScript programming for dynamic web applications',
    image: '/assets/images/certificates/javascript-sololearn.png'
  },
  {
    title: 'Introduction to HTML',
    year: '2025',
    description: 'HTML markup fundamentals for web page structure and content',
    image: '/assets/images/certificates/html-sololearn.png'
  },
  {
    title: 'Introduction to CSS',
    year: '2025',
    description: 'CSS styling techniques for beautiful and responsive web designs',
    image: '/assets/images/certificates/css-sololearn.png'
  }
]

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certifications.length)
    }, 4000) // Slower movement - every 4 seconds for smoother experience
    
    return () => clearInterval(interval)
  }, [])

  // Get the 3 certificates to display (previous, current, next)
  const getVisibleCertificates = () => {
    const total = certifications.length
    const prevIndex = (currentIndex - 1 + total) % total
    const nextIndex = (currentIndex + 1) % total
    
    return [
      { ...certifications[prevIndex], position: 'left' },
      { ...certifications[currentIndex], position: 'center' },
      { ...certifications[nextIndex], position: 'right' }
    ]
  }

  useEffect(() => {
    // Add animation keyframes to document head
    const style = document.createElement('style')
    style.textContent = `
      @keyframes professionalFloat {
        0%, 100% {
          transform: translateY(0px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        50% {
          transform: translateY(-8px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
      }
      
      @keyframes subtlePulse {
        0%, 100% {
          opacity: 1;
          transform: scale(1);
        }
        50% {
          opacity: 0.95;
          transform: scale(1.02);
        }
      }

      .floating-card {
        animation: professionalFloat 4s infinite ease-in-out;
      }

      .floating-card:hover {
        transform: translateY(-12px);
        box-shadow: 0 12px 30px rgba(var(--primary-rgb), 0.3);
      }

      /* Sliding Certificates Container */
      .sliding-certificates-container {
        position: relative;
        height: 600px;
        max-width: 2000px;
        margin: 3rem auto;
        overflow: visible;
        padding: 2rem 250px;
      }

      .certificates-track {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .certificate-slide {
        position: absolute;
        width: 420px;
        padding: 0;
        border-radius: 24px;
        transition: transform 1s ease-out, opacity 1s ease-out;
        cursor: pointer;
        background: var(--cert-card-bg);
        border: 2px solid var(--cert-border);
        box-shadow: 
          0 20px 40px rgba(0, 0, 0, 0.6),
          inset 0 1px 0 rgba(255, 255, 255, 0.1);
        overflow: hidden;
      }

      .cert-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 2.5rem;
        gap: 2rem;
        background: var(--cert-content-bg);
        border-radius: 22px;
        margin: 2px;
      }

      .cert-image-container {
        position: relative;
        width: 220px;
        height: 220px;
        border-radius: 20px;
        background: var(--cert-image-bg);
        padding: 10px;
        box-shadow: 
          inset 0 2px 4px rgba(0, 0, 0, 0.3),
          0 4px 8px rgba(0, 0, 0, 0.3);
      }

      .cert-image {
        width: 100%;
        height: 100%;
        border-radius: 12px;
        object-fit: contain;
        background: var(--cert-image-container-bg);
        border: 1px solid var(--cert-image-border);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        transition: all 0.3s ease;
        padding: 8px;
      }

      .cert-image:hover {
        transform: scale(1.02);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        border-color: var(--cert-image-border);
      }

      .cert-info {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
      }

      .cert-title {
        font-size: 1.4rem;
        font-weight: 700;
        color: var(--cert-title-color);
        line-height: 1.3;
        margin: 0;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        letter-spacing: -0.5px;
      }

      .cert-year {
        background: var(--cert-year-bg);
        color: var(--cert-year-color);
        padding: 0.5rem 1.25rem;
        border-radius: 25px;
        font-size: 1rem;
        font-weight: 600;
        border: 1px solid var(--cert-year-border);
        box-shadow: 
          0 4px 8px rgba(0, 0, 0, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.1);
        align-self: center;
      }

      .cert-description {
        font-size: 1.1rem;
        color: var(--cert-description-color);
        line-height: 1.5;
        margin: 0;
        font-weight: 400;
      }

      .certificate-slide.left {
        transform: translateX(-500px) scale(0.85);
        opacity: 0.7;
        z-index: 5;
      }

      .certificate-slide.center {
        transform: translateX(0) scale(1);
        opacity: 1;
        z-index: 10;
        box-shadow: 
          0 25px 50px rgba(0, 0, 0, 0.8),
          0 0 0 1px rgba(255, 255, 255, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.2);
      }

      .certificate-slide.right {
        transform: translateX(500px) scale(0.85);
        opacity: 0.7;
        z-index: 5;
      }

      /* Simple 3 Dots Indicator */
      .carousel-dots-simple {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-top: 2rem;
      }

      .simple-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--cert-carousel-dots-bg);
        transition: all 0.3s ease;
        border: 1px solid var(--cert-carousel-dots-border);
      }

      .simple-dot.active {
        background: var(--cert-carousel-dots-active);
        transform: scale(1.3);
        border-color: var(--cert-carousel-dots-active);
        box-shadow: 0 0 8px var(--cert-carousel-dots-active);
      }

      @media (max-width: 768px) {
        .sliding-certificates-container {
          height: 520px;
          margin: 2rem auto;
          padding: 2rem 100px;
          max-width: 1200px;
        }
        
        .certificate-slide {
          width: 350px;
        }
        
        .certificate-slide.left {
          transform: translateX(-400px) scale(0.8);
        }
        
        .certificate-slide.right {
          transform: translateX(400px) scale(0.8);
        }

        .cert-content {
          padding: 2rem;
          gap: 1.5rem;
        }

        .cert-image-container {
          width: 180px;
          height: 180px;
        }

        .cert-title {
          font-size: 1.2rem;
        }

        .cert-description {
          font-size: 1rem;
        }
      }

      @media (max-width: 480px) {
        .sliding-certificates-container {
          height: 480px;
          margin: 1.5rem auto;
          padding: 2rem 50px;
          max-width: 800px;
        }
        
        .certificate-slide {
          width: 300px;
        }
        
        .certificate-slide.left {
          transform: translateX(-300px) scale(0.75);
        }
        
        .certificate-slide.right {
          transform: translateX(300px) scale(0.75);
        }

        .cert-content {
          padding: 1.5rem;
          gap: 1.25rem;
        }

        .cert-image-container {
          width: 150px;
          height: 150px;
        }

        .cert-title {
          font-size: 1.1rem;
        }

        .cert-description {
          font-size: 0.95rem;
        }

        .cert-year {
          font-size: 0.9rem;
          padding: 0.4rem 1rem;
        }
      }
    `
    document.head.appendChild(style)
    
    const applyTheme = () => {
      const isDark = localStorage.getItem('theme') === 'dark' || 
                     (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
      
      if (isDark) {
        // Dark theme styles
        document.documentElement.style.setProperty('--cert-card-bg', 'linear-gradient(145deg, #1a1a1a, #0d0d0d)')
        document.documentElement.style.setProperty('--cert-content-bg', 'linear-gradient(145deg, #141414, #0a0a0a)')
        document.documentElement.style.setProperty('--cert-border', '#333')
        document.documentElement.style.setProperty('--cert-image-bg', 'linear-gradient(145deg, #2a2a2a, #1a1a1a)')
        document.documentElement.style.setProperty('--cert-image-container-bg', '#ffffff')
        document.documentElement.style.setProperty('--cert-image-border', '#444')
        document.documentElement.style.setProperty('--cert-title-color', '#ffffff')
        document.documentElement.style.setProperty('--cert-description-color', '#cccccc')
        document.documentElement.style.setProperty('--cert-year-bg', 'linear-gradient(145deg, #333, #1a1a1a)')
        document.documentElement.style.setProperty('--cert-year-color', '#ffffff')
        document.documentElement.style.setProperty('--cert-year-border', '#444')
        document.documentElement.style.setProperty('--cert-section-bg', '#0f0f0f')
        document.documentElement.style.setProperty('--cert-pattern-color', 'rgba(187, 187, 187, 0.05)')
        document.documentElement.style.setProperty('--cert-dots-color', 'rgba(187, 187, 187, 0.03)')
        document.documentElement.style.setProperty('--cert-symbols-color', '#404040')
        document.documentElement.style.setProperty('--cert-carousel-dots-bg', 'rgba(192, 192, 192, 0.3)')
        document.documentElement.style.setProperty('--cert-carousel-dots-active', '#c0c0c0')
        document.documentElement.style.setProperty('--cert-carousel-dots-border', '#404040')
      } else {
        // Light theme styles
        document.documentElement.style.setProperty('--cert-card-bg', 'linear-gradient(145deg, #ffffff, #f5f5f5)')
        document.documentElement.style.setProperty('--cert-content-bg', 'linear-gradient(145deg, #fafafa, #f0f0f0)')
        document.documentElement.style.setProperty('--cert-border', '#e0e0e0')
        document.documentElement.style.setProperty('--cert-image-bg', 'linear-gradient(145deg, #f8f8f8, #e8e8e8)')
        document.documentElement.style.setProperty('--cert-image-container-bg', '#ffffff')
        document.documentElement.style.setProperty('--cert-image-border', '#d0d0d0')
        document.documentElement.style.setProperty('--cert-title-color', '#1a1a1a')
        document.documentElement.style.setProperty('--cert-description-color', '#4a4a4a')
        document.documentElement.style.setProperty('--cert-year-bg', 'linear-gradient(145deg, #e8e8e8, #d8d8d8)')
        document.documentElement.style.setProperty('--cert-year-color', '#333333')
        document.documentElement.style.setProperty('--cert-year-border', '#c0c0c0')
        document.documentElement.style.setProperty('--cert-section-bg', '#f8f9fa')
        document.documentElement.style.setProperty('--cert-pattern-color', 'rgba(108, 117, 125, 0.15)')
        document.documentElement.style.setProperty('--cert-dots-color', 'rgba(0, 0, 0, 0.05)')
        document.documentElement.style.setProperty('--cert-symbols-color', '#6c757d')
        document.documentElement.style.setProperty('--cert-carousel-dots-bg', 'rgba(108, 117, 125, 0.3)')
        document.documentElement.style.setProperty('--cert-carousel-dots-active', '#495057')
        document.documentElement.style.setProperty('--cert-carousel-dots-border', '#6c757d')
      }
      
      document.documentElement.style.setProperty('--certifications-bg', isDark ? '#0f0f0f' : '#f8f9fa')
      document.documentElement.style.setProperty('--certifications-pattern', isDark ? 'var(--certifications-pattern)' : 'rgba(108, 117, 125, 0.4)')
      document.documentElement.style.setProperty('--certifications-dots', isDark ? 'var(--certifications-dots)' : 'rgba(0,0,0,0.07)')
      document.documentElement.style.setProperty('--certifications-icons', isDark ? 'var(--certifications-icons)' : '#6c757d')
      document.documentElement.style.setProperty('--certifications-heading', isDark ? 'var(--certifications-heading)' : '#212529')
      document.documentElement.style.setProperty('--certifications-text', isDark ? 'var(--certifications-text)' : '#495057')
      document.documentElement.style.setProperty('--certifications-card-bg', isDark ? 'var(--certifications-card-bg)' : 'rgba(255, 255, 255, 0.8)')
      document.documentElement.style.setProperty('--certifications-card-border', isDark ? 'var(--certifications-card-border)' : '#dee2e6')
      document.documentElement.style.setProperty('--certifications-card-hover-bg', isDark ? 'var(--certifications-card-hover-bg)' : 'rgba(233, 236, 239, 0.8)')
      document.documentElement.style.setProperty('--certifications-card-hover-border', isDark ? 'var(--certifications-card-hover-border)' : '#6c757d')
      document.documentElement.style.setProperty('--certifications-badge-bg', isDark ? 'var(--certifications-badge-bg)' : 'rgba(108, 117, 125, 0.2)')
      document.documentElement.style.setProperty('--certifications-badge-text', isDark ? 'var(--certifications-badge-text)' : '#6c757d')
      document.documentElement.style.setProperty('--certifications-link-color', isDark ? 'var(--certifications-badge-text)' : '#007bff')
      document.documentElement.style.setProperty('--certifications-link-hover', isDark ? '#ccc' : '#0056b3')
    }
    
    // Apply theme on initial load
    applyTheme()
    
    // Listen for theme changes
    const handleThemeChange = () => applyTheme()
    const handleStorageChange = () => applyTheme()
    
    window.addEventListener('themeChange', handleThemeChange)
    window.addEventListener('storage', handleStorageChange)
    
    return () => {
      window.removeEventListener('themeChange', handleThemeChange)
      window.removeEventListener('storage', handleStorageChange)
      // Clean up style tag
      const styles = document.querySelectorAll('style')
      styles.forEach(style => {
        if (style.textContent.includes('professionalFloat') || style.textContent.includes('subtlePulse')) {
          style.remove()
        }
      })
    }
  }, [])

  return (
    <section id="certifications" className="py-20 relative overflow-hidden space-section-bg">
      {/* Enhanced Background Elements */}
      <BackgroundElements variant="certifications" density="medium" />
      
      {/* Space dust particles */}
      <div className="space-dust"></div>
      
      {/* Minimal Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-6">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 99px, var(--cert-pattern-color) 100px, var(--cert-pattern-color) 101px, transparent 102px),
            linear-gradient(transparent 99px, var(--cert-pattern-color) 100px, var(--cert-pattern-color) 101px, transparent 102px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>
      
      {/* Subtle Tech Dots */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, var(--cert-dots-color) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Minimal Tech Symbols */}
      <div className="absolute inset-0 opacity-3">
      </div>
      
      {/* Achievement Medal Icons */}
      <div className="absolute inset-0 opacity-4">
      </div>
      
      {/* Achievement Badge Patterns */}
      <div className="absolute inset-0 opacity-8">
        <div 
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, var(--cert-dots-color) 1px, transparent 1px),
                              radial-gradient(circle at 75px 75px, var(--cert-dots-color) 1px, transparent 1px),
                              radial-gradient(circle at 125px 40px, var(--cert-dots-color) 1px, transparent 1px)`,
            backgroundSize: '150px 150px',
            backgroundPosition: '0 0, 50px 50px, 100px 20px'
          }}
          className="w-full h-full"
        ></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          {...({ className: "text-center mb-16" } as any)}
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4" style={{ color: 'var(--cert-title-color)' }}>Certifications</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--cert-description-color)' }}>
            Professional certifications and achievements that validate my expertise
          </p>
        </motion.div>

        <div className="sliding-certificates-container">
          <div className="certificates-track">
            {getVisibleCertificates().map((cert, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className={`certificate-slide ${cert.position}`}
                style={{ 
                  backgroundColor: 'var(--certifications-icons)',
                  border: '1px solid #404040',
                  backdropFilter: 'blur(10px)'
                }}>
                <div className="cert-content">
                  {/* Image Container */}
                  <div className="cert-image-container">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="cert-image"
                    />
                  </div>

                  {/* Certificate Info */}
                  <div className="cert-info">
                    {/* Heading */}
                    <h3 className="cert-title">{cert.title}</h3>

                    {/* Year */}
                    <div className="cert-year">{cert.year}</div>

                    {/* Description */}
                    <p className="cert-description">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simple 3 Dots Indicator */}
        <div className="carousel-dots-simple">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className={`simple-dot ${index === 1 ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

