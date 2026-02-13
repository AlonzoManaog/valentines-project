import React, { useState } from 'react';

export default function ValentineCard() {
  const [showLetter, setShowLetter] = useState(false);
  const [letterContent] = useState({
    greeting: "Dear Izell",
    message: "MANNN YOU COOK ME. I like you SOOOO MUCHHHHH. The way you care for ek and jd you gave them small handsewn cats, the way you make me laugh, the way you always support me with everything you have, the way you crashout on your sister, the way you get greedy. EVERYTHINGGGG ABOUT YOU I LIKE IT SOOO MUCH. You got me so cooked whenever I see you in person a cute laufey song plays in my head. I’ve genuinely never felt this comfortable and compatible that I can’t believe its real.I hope I make you feel the same way and we can feel this way for a LONG time. Now, I should’ve given you a playlist. Can you read what first letters of each song spells out for me please :)",
    closing: "From,",
    signature: "Gabe :D"
  });

  // ADD YOUR IMAGE LINKS HERE - 3 images on LEFT side, 3 images on RIGHT side
  const leftSideImages = [
    "/uploads/img_1.jpg",     // Top left
    "/uploads/img_3.png",  // Middle left
    "/uploads/img_5.png"   // Bottom left
  ];

  const rightSideImages = [
    "/uploads/img_2.jpg",     // Top right
    "/uploads/img_4.png",  // Middle right
    "/uploads/img_6.png"   // Bottom right
  ];

  const handleCardClick = () => {
    setShowLetter(true);
  };

  const closeLetter = (e) => {
    e.stopPropagation();
    setShowLetter(false);
  };

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      background: '#ffb3ba',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0',
      margin: '0',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Left Side Images - 3 squares vertically aligned */}
      {leftSideImages.map((imgSrc, index) => (
        <img 
          key={`left-${index}`}
          src={imgSrc}
          alt={`Left decoration ${index + 1}`}
          style={{
            position: 'fixed',
            left: '20px',
            top: index === 0 ? '20px' : index === 1 ? '50%' : 'auto',
            bottom: index === 2 ? '20px' : 'auto',
            transform: index === 1 ? 'translateY(-50%)' : 'none',
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '15px',
            border: '4px solid white',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)',
            zIndex: 100
          }}
        />
      ))}
      
      {/* Right Side Images - 3 squares vertically aligned */}
      {rightSideImages.map((imgSrc, index) => (
        <img 
          key={`right-${index}`}
          src={imgSrc}
          alt={`Right decoration ${index + 1}`}
          style={{
            position: 'fixed',
            right: '20px',
            top: index === 0 ? '20px' : index === 1 ? '50%' : 'auto',
            bottom: index === 2 ? '20px' : 'auto',
            transform: index === 1 ? 'translateY(-50%)' : 'none',
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '15px',
            border: '4px solid white',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)',
            zIndex: 100
          }}
        />
      ))}

      {/* Main Card Container - Fullscreen and Centered */}
      <div
        onClick={handleCardClick}
        style={{
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          transform: showLetter ? 'scale(0.95)' : 'scale(1)',
          zIndex: showLetter ? 1 : 10,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onMouseEnter={(e) => {
          if (!showLetter) {
            e.currentTarget.style.transform = 'scale(1.02)';
          }
        }}
        onMouseLeave={(e) => {
          if (!showLetter) {
            e.currentTarget.style.transform = 'scale(1)';
          }
        }}
      >
        {/* Main Valentine Card Image - Fullscreen */}
        <img 
          src="/uploads/izell.jpg" 
          alt="Valentine Card"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            display: 'block'
          }}
        />
      </div>

      {/* Animated Letter */}
      {showLetter && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          animation: 'fadeIn 0.3s ease-in-out',
          padding: '20px'
        }}>
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideDown {
              from {
                transform: translateY(-100%) rotateX(-90deg);
                opacity: 0;
              }
              to {
                transform: translateY(0) rotateX(0deg);
                opacity: 1;
              }
            }
            @keyframes unfold {
              0% {
                transform: rotateX(-180deg);
              }
              100% {
                transform: rotateX(0deg);
              }
            }
          `}</style>

          <div style={{
            background: '#fff8f0',
            borderRadius: '15px',
            maxWidth: '600px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            position: 'relative',
            animation: 'slideDown 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            transformOrigin: 'top center'
          }}>
            <div style={{
              padding: '40px',
              position: 'relative'
            }}>
              <button
                onClick={closeLetter}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'transparent',
                  border: 'none',
                  fontSize: '28px',
                  cursor: 'pointer',
                  color: '#8b454e',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  fontWeight: 'bold'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#fad0c4';
                  e.currentTarget.style.transform = 'rotate(90deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'rotate(0deg)';
                }}
              >
                ×
              </button>

              <div style={{
                marginBottom: '30px',
                paddingBottom: '20px',
                borderBottom: '2px solid #fad0c4'
              }}>
                <h2 style={{
                  margin: 0,
                  fontSize: '28px',
                  fontWeight: '600',
                  color: '#8b454e',
                  fontFamily: "'Brush Script MT', cursive"
                }}>{letterContent.greeting}</h2>
              </div>

              <div style={{
                marginBottom: '30px',
                lineHeight: '1.8',
                fontSize: '16px',
                color: '#5a3a3f'
              }}>
                <p style={{ 
                  margin: 0,
                  fontFamily: "'Georgia', serif",
                  whiteSpace: 'pre-wrap'
                }}>{letterContent.message}</p>
              </div>

              <div style={{
                textAlign: 'right',
                fontFamily: "'Georgia', serif"
              }}>
                <p style={{
                  margin: '0 0 10px 0',
                  fontSize: '16px',
                  color: '#5a3a3f'
                }}>{letterContent.closing}</p>
                <p style={{
                  margin: 0,
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#8b454e',
                  fontFamily: "'Brush Script MT', cursive"
                }}>{letterContent.signature}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}