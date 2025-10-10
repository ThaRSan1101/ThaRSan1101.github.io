import React from 'react'
import { FaLinkedin, FaGithub, FaArrowRight, FaInstagram, FaEnvelope } from 'react-icons/fa'

// Smooth scroll function
const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId.replace('#', ''))
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden" style={{backgroundColor: 'var(--primary-dark, #0a0a0a)'}}>
      {/* Enhanced Animated Space Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Deep Space Nebula */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(ellipse 800px 400px at 20% 30%, rgba(138, 43, 226, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse 600px 300px at 80% 70%, rgba(30, 144, 255, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse 400px 600px at 60% 20%, rgba(255, 20, 147, 0.15) 0%, transparent 50%)
            `,
            animation: 'nebulaDrift 25s ease-in-out infinite'
          }}
        />
        
        {/* Distant Planets */}
        <div className="absolute top-20 right-20 w-16 h-16 rounded-full opacity-30" 
          style={{
            background: 'radial-gradient(circle at 30% 30%, #666666, #333333)',
            boxShadow: 'inset -5px -5px 10px rgba(0,0,0,0.5), 0 0 20px rgba(102,102,102,0.2)',
            animation: 'planetOrbit 30s linear infinite'
          }}
        />
        <div className="absolute bottom-32 left-16 w-12 h-12 rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle at 40% 20%, #888888, #444444)',
            boxShadow: 'inset -3px -3px 8px rgba(0,0,0,0.4), 0 0 15px rgba(136,136,136,0.1)',
            animation: 'planetOrbit 45s linear infinite reverse'
          }}
        />
        <div className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle at 35% 25%, #aaaaaa, #555555)',
            animation: 'planetOrbit 60s linear infinite'
          }}
        />
        
        {/* Asteroid Field */}
        <div className="absolute top-40 left-1/3 w-2 h-2 rounded-full opacity-40"
          style={{
            backgroundColor: '#666666',
            boxShadow: '0 0 4px rgba(102,102,102,0.3)',
            animation: 'asteroidDrift 20s linear infinite'
          }}
        />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full opacity-50"
          style={{
            backgroundColor: '#888888',
            animation: 'asteroidDrift 15s linear infinite reverse'
          }}
        />
        <div className="absolute top-2/3 left-1/2 w-1.5 h-1.5 rounded-full opacity-35"
          style={{
            backgroundColor: '#777777',
            animation: 'asteroidDrift 25s linear infinite'
          }}
        />
        
        {/* Enhanced Starfield Background */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(2px 2px at 20px 30px, var(--text-primary, #fafafa), transparent),
              radial-gradient(2px 2px at 40px 70px, var(--text-primary, #fafafa), transparent),
              radial-gradient(1px 1px at 90px 40px, var(--text-primary, #fafafa), transparent),
              radial-gradient(1px 1px at 130px 80px, var(--text-primary, #fafafa), transparent),
              radial-gradient(2px 2px at 160px 30px, var(--text-primary, #fafafa), transparent),
              radial-gradient(1px 1px at 300px 50px, var(--text-primary, #fafafa), transparent),
              radial-gradient(2px 2px at 250px 120px, var(--text-primary, #fafafa), transparent),
              radial-gradient(1px 1px at 350px 90px, var(--text-primary, #fafafa), transparent),
              radial-gradient(3px 3px at 380px 200px, var(--text-secondary, #cccccc), transparent),
              radial-gradient(2px 2px at 450px 100px, var(--text-secondary, #cccccc), transparent)
            `,
            backgroundRepeat: 'repeat',
            backgroundSize: '500px 300px',
            animation: 'moveStars 60s linear infinite'
          }}
        />
        
        {/* Moving Stars Layer 2 - Medium Stars */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(1px 1px at 50px 100px, var(--text-secondary, #cccccc), transparent),
              radial-gradient(2px 2px at 150px 50px, var(--text-secondary, #cccccc), transparent),
              radial-gradient(1px 1px at 200px 150px, var(--text-secondary, #cccccc), transparent),
              radial-gradient(1px 1px at 320px 80px, var(--text-secondary, #cccccc), transparent),
              radial-gradient(2px 2px at 380px 140px, var(--text-secondary, #cccccc), transparent),
              radial-gradient(1.5px 1.5px at 420px 180px, var(--text-muted, #999999), transparent)
            `,
            backgroundRepeat: 'repeat',
            backgroundSize: '450px 250px',
            animation: 'moveStars 40s linear infinite reverse'
          }}
        />
        
        {/* Twinkling Stars */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(1px 1px at 80px 60px, var(--text-primary, #fafafa), transparent),
              radial-gradient(1px 1px at 180px 120px, var(--text-primary, #fafafa), transparent),
              radial-gradient(1px 1px at 280px 40px, var(--text-primary, #fafafa), transparent),
              radial-gradient(1px 1px at 360px 110px, var(--text-primary, #fafafa), transparent),
              radial-gradient(1.5px 1.5px at 420px 180px, var(--text-secondary, #eeeeee), transparent),
              radial-gradient(1px 1px at 500px 220px, var(--text-muted, #dddddd), transparent)
            `,
            backgroundRepeat: 'repeat',
            backgroundSize: '600px 400px',
            animation: 'twinkle 3s ease-in-out infinite'
          }}
        />
        
        {/* Shooting Stars */}
        <div className="absolute top-10 left-10 w-1 h-1 rounded-full opacity-80"
          style={{backgroundColor: 'var(--text-primary, #ffffff)', animation: 'shootingStar 8s ease-out infinite'}}
        />
        <div className="absolute top-1/3 right-20 w-0.5 h-0.5 rounded-full opacity-60"
          style={{backgroundColor: 'var(--text-secondary, #cccccc)', animation: 'shootingStar 12s ease-out infinite 4s'}}
        />
        
        {/* Distant Galaxy */}
        <div className="absolute top-16 right-1/3 w-32 h-4 rounded-full opacity-10"
          style={{
            background: `linear-gradient(90deg, transparent, var(--text-primary, #fafafa), var(--text-secondary, #cccccc), var(--text-primary, #fafafa), transparent)`,
            transform: 'rotate(-15deg)',
            filter: 'blur(2px)',
            animation: 'galaxyRotate 40s linear infinite'
          }}
        />
        
        {/* Space Dust */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              radial-gradient(0.5px 0.5px at 25px 45px, var(--text-muted, #888888), transparent),
              radial-gradient(0.5px 0.5px at 75px 125px, var(--text-muted, #999999), transparent),
              radial-gradient(0.5px 0.5px at 125px 75px, var(--text-muted, #777777), transparent),
              radial-gradient(0.5px 0.5px at 175px 175px, var(--text-secondary, #aaaaaa), transparent)
            `,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
            animation: 'spaceDust 80s linear infinite'
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full opacity-60" style={{animation: 'float 6s ease-in-out infinite'}}></div>
          <div className="absolute top-40 right-32 w-0.5 h-0.5 bg-gray-300 rounded-full opacity-40" style={{animation: 'float 8s ease-in-out infinite 2s'}}></div>
          <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-white rounded-full opacity-50" style={{animation: 'float 7s ease-in-out infinite 1s'}}></div>
          <div className="absolute bottom-20 right-20 w-0.5 h-0.5 bg-gray-400 rounded-full opacity-60" style={{animation: 'float 5s ease-in-out infinite 3s'}}></div>
        </div>
      </div>
      
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl" style={{backgroundColor: 'var(--text-primary, #ffffff)'}}></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl" style={{backgroundColor: 'var(--text-primary, #ffffff)'}}></div>
      </div>
      
      {/* Clean minimal pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full" style={{backgroundColor: 'var(--text-primary, #ffffff)'}}></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 rounded-full" style={{backgroundColor: 'var(--text-primary, #ffffff)'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full" style={{backgroundColor: 'var(--text-primary, #ffffff)'}}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full" style={{backgroundColor: 'var(--text-primary, #ffffff)'}}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-16 sm:py-20">
          
           {/* Left Content */}
           <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
             
             {/* Main Greeting */}
             <div className="space-y-4 sm:space-y-6">
               <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight" style={{color: 'var(--text-primary, #fafafa)', fontWeight: 'bold'}}>
                 Hi, I'm Tharsan
               </h1>
               
               {/* Rotating Titles */}
               <div className="text-xl sm:text-2xl lg:text-3xl font-bold flex items-center justify-center lg:justify-start gap-2">
                 <span style={{color: 'var(--text-muted, #666666)', fontWeight: 'bold'}}>&lt;</span>
                 <span 
                   className="rotating-title min-w-fit"
                   style={{
                     color: '#00ff88',
                     textShadow: '0 0 10px rgba(0, 255, 136, 0.3)',
                     animation: 'titleGlow 2s ease-in-out infinite alternate',
                     fontWeight: 'bold'
                   }}
                 >
                 </span>
                 <span style={{color: 'var(--text-muted, #666666)', fontWeight: 'bold'}}>/&gt;</span>
               </div>
             </div>
             
             {/* Description */}
             <p className="text-lg sm:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 font-bold" style={{color: 'var(--text-secondary, #cccccc)'}}>
               Crafting modern web apps & digital solutions
               <br />
               that turn ideas into reality.
             </p>
             
             {/* CTA Button */}
             <div className="pt-4">
               <button 
                 onClick={() => {
                   const element = document.getElementById('contact')
                   if (element) {
                     element.scrollIntoView({ 
                       behavior: 'smooth',
                       block: 'start'
                     })
                   }
                 }}
                 className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 font-bold rounded-full hero-cta-button transition-all duration-300 hover:scale-105"
               >
                 <span className="text-sm sm:text-base">Let's Connect</span>
                 <FaArrowRight className="text-base sm:text-lg" />
               </button>
             </div>
           </div>
          
          {/* Right Content - Lunar 3D Profile Model */}
          <div className="relative flex justify-center order-1 lg:order-2">
            {/* Lunar Night Scene Container */}
            <div className="relative perspective-1000">
              
              {/* Moon Background Glow */}
              <div 
                className="absolute -inset-12 rounded-full opacity-40"
                style={{
                  background: `
                    radial-gradient(circle, 
                      rgba(250, 250, 250, 0.2) 0%, 
                      rgba(200, 200, 200, 0.1) 30%, 
                      rgba(150, 150, 150, 0.05) 60%, 
                      transparent 100%
                    )
                  `,
                  filter: 'blur(20px)',
                  animation: 'moonGlow 8s ease-in-out infinite'
                }}
              />
              
              {/* Crater Field Around Image */}
              <div className="absolute -inset-16 opacity-25">
                <div 
                  className="absolute top-4 left-8 w-4 h-4 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, rgba(100, 100, 100, 0.3), rgba(50, 50, 50, 0.1))',
                    boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.3)',
                    animation: 'craterFloat 12s ease-in-out infinite'
                  }}
                />
                <div 
                  className="absolute bottom-8 right-6 w-6 h-6 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 40% 40%, rgba(120, 120, 120, 0.2), rgba(60, 60, 60, 0.05))',
                    boxShadow: 'inset 3px 3px 6px rgba(0,0,0,0.2)',
                    animation: 'craterFloat 10s ease-in-out infinite 2s'
                  }}
                />
                <div 
                  className="absolute top-16 right-12 w-3 h-3 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 35% 35%, rgba(110, 110, 110, 0.25), rgba(55, 55, 55, 0.08))',
                    boxShadow: 'inset 1px 1px 3px rgba(0,0,0,0.25)',
                    animation: 'craterFloat 14s ease-in-out infinite 4s'
                  }}
                />
                <div 
                  className="absolute bottom-12 left-6 w-5 h-5 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 25% 25%, rgba(130, 130, 130, 0.2), rgba(65, 65, 65, 0.06))',
                    boxShadow: 'inset 2px 2px 5px rgba(0,0,0,0.2)',
                    animation: 'craterFloat 16s ease-in-out infinite 6s'
                  }}
                />
              </div>
              
              {/* Lunar Dust Particles */}
              <div className="absolute -inset-8 opacity-30">
                <div 
                  className="absolute top-6 left-12 w-1 h-1 bg-gray-300 rounded-full"
                  style={{animation: 'lunarDust 20s linear infinite'}}
                />
                <div 
                  className="absolute bottom-10 right-8 w-0.5 h-0.5 bg-gray-400 rounded-full"
                  style={{animation: 'lunarDust 15s linear infinite 3s'}}
                />
                <div 
                  className="absolute top-20 right-16 w-1.5 h-1.5 bg-gray-200 rounded-full opacity-50"
                  style={{animation: 'lunarDust 25s linear infinite 5s'}}
                />
                <div 
                  className="absolute bottom-16 left-10 w-0.5 h-0.5 bg-gray-500 rounded-full"
                  style={{animation: 'lunarDust 18s linear infinite 8s'}}
                />
              </div>
              
              {/* 3D Lunar Profile Container */}
              <div 
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden cursor-pointer lunar-model-container"
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)'
                }}
              >
                {/* Lunar Surface Texture Overlay */}
                <div 
                  className="absolute inset-0 rounded-full pointer-events-none z-15"
                  style={{
                    background: `
                      radial-gradient(circle at 20% 30%, rgba(200, 200, 200, 0.1) 2px, transparent 2px),
                      radial-gradient(circle at 60% 70%, rgba(180, 180, 180, 0.08) 1px, transparent 1px),
                      radial-gradient(circle at 80% 40%, rgba(220, 220, 220, 0.06) 1.5px, transparent 1.5px),
                      radial-gradient(circle at 40% 80%, rgba(160, 160, 160, 0.12) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px, 80px 80px, 60px 60px, 70px 70px',
                    opacity: 0.3,
                    animation: 'lunarTexture 30s linear infinite'
                  }}
                />
                
                {/* Moonlight Scanning Effect */}
                <div 
                  className="absolute inset-0 rounded-full pointer-events-none z-20"
                  style={{
                    background: `
                      linear-gradient(135deg, 
                        transparent 20%, 
                        rgba(250, 250, 250, 0.15) 40%,
                        rgba(230, 230, 230, 0.25) 50%,
                        rgba(250, 250, 250, 0.15) 60%,
                        transparent 80%
                      )
                    `,
                    animation: 'moonlightScan 12s ease-in-out infinite'
                  }}
                />
                
                {/* Profile Image */}
                <img 
                  src="/assets/images/profile/profile.jpg" 
                  alt="Tharsan - Software Engineer"
                  className="w-full h-full object-cover relative z-10"
                  style={{
                    filter: 'contrast(1.2) brightness(0.9) saturate(0.8) sepia(0.1)',
                    transition: 'filter 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback Lunar Avatar */}
                <div 
                  className="w-full h-full flex items-center justify-center text-6xl font-bold relative z-10"
                  style={{
                    background: 'radial-gradient(circle, #2a2a2a, #1a1a1a)',
                    color: '#fafafa',
                    textShadow: '0 0 30px rgba(250, 250, 250, 0.8)',
                    display: 'none'
                  }}
                >
                  T
                </div>
                
                {/* Lunar Crater Details on Frame */}
                <div 
                  className="absolute top-3 left-3 w-6 h-6 rounded-full opacity-40"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, rgba(200, 200, 200, 0.3), transparent)',
                    boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.3)'
                  }}
                />
                <div 
                  className="absolute top-3 right-3 w-4 h-4 rounded-full opacity-35"
                  style={{
                    background: 'radial-gradient(circle at 40% 40%, rgba(180, 180, 180, 0.25), transparent)',
                    boxShadow: 'inset 1px 1px 3px rgba(0,0,0,0.25)'
                  }}
                />
                <div 
                  className="absolute bottom-3 left-3 w-5 h-5 rounded-full opacity-30"
                  style={{
                    background: 'radial-gradient(circle at 35% 35%, rgba(220, 220, 220, 0.2), transparent)',
                    boxShadow: 'inset 1.5px 1.5px 3px rgba(0,0,0,0.2)'
                  }}
                />
                <div 
                  className="absolute bottom-3 right-3 w-7 h-7 rounded-full opacity-25"
                  style={{
                    background: 'radial-gradient(circle at 25% 25%, rgba(190, 190, 190, 0.28), transparent)',
                    boxShadow: 'inset 3px 3px 5px rgba(0,0,0,0.3)'
                  }}
                />
              </div>
              
              {/* Lunar Orbit Rings */}
              <div className="absolute -inset-8 opacity-20">
                <div 
                  className="absolute inset-0 border border-gray-300/30 rounded-full"
                  style={{
                    animation: 'lunarOrbit 25s linear infinite'
                  }}
                />
                <div 
                  className="absolute inset-4 border border-gray-400/20 rounded-full"
                  style={{
                    animation: 'lunarOrbit 20s linear infinite reverse'
                  }}
                />
                <div 
                  className="absolute inset-8 border border-gray-200/15 rounded-full"
                  style={{
                    animation: 'lunarOrbit 30s linear infinite'
                  }}
                />
              </div>
              
              {/* Lunar Debris */}
              <div className="absolute inset-0 pointer-events-none opacity-40">
                <div 
                  className="absolute top-8 left-16 w-1 h-1 bg-gray-300 rounded-full"
                  style={{animation: 'lunarDebris 18s ease-in-out infinite'}}
                />
                <div 
                  className="absolute top-24 right-12 w-0.5 h-0.5 bg-gray-400 rounded-full"
                  style={{animation: 'lunarDebris 22s ease-in-out infinite 3s'}}
                />
                <div 
                  className="absolute bottom-16 left-20 w-1.5 h-1.5 bg-gray-200 rounded-full opacity-60"
                  style={{animation: 'lunarDebris 16s ease-in-out infinite 6s'}}
                />
                <div 
                  className="absolute bottom-8 right-16 w-0.5 h-0.5 bg-gray-500 rounded-full"
                  style={{animation: 'lunarDebris 20s ease-in-out infinite 9s'}}
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}