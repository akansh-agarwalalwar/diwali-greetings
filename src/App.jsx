import { useState } from 'react'
import './App.css'

function App() {
  const [giftBoxState, setGiftBoxState] = useState('closed') // 'closed', 'failed', 'success'
  const [showFireworks, setShowFireworks] = useState(false)

  const handleGiftBoxClick = () => {
    if (giftBoxState === 'closed') {
      setGiftBoxState('failed')
    }
  }

  const handleRetryClick = () => {
    setGiftBoxState('success')
    setShowFireworks(true)
    setTimeout(() => setShowFireworks(false), 3000)
  }

  return (
    <div className="app">
      {/* Background decorations */}
      <div className="decorations">
        <div className="diya diya-1">🪔</div>
        <div className="diya diya-2">🪔</div>
        <div className="diya diya-3">🪔</div>
        <div className="diya diya-4">🪔</div>
        <div className="rangoli rangoli-1">🌸</div>
        <div className="rangoli rangoli-2">🌺</div>
        <div className="rangoli rangoli-3">🌼</div>
        <div className="lotus lotus-1">🪷</div>
        <div className="lotus lotus-2">🪷</div>
      </div>

      {/* Fireworks animation */}
      {showFireworks && (
        <div className="fireworks">
          <div className="firework firework-1">✨</div>
          <div className="firework firework-2">🎆</div>
          <div className="firework firework-3">🎇</div>
          <div className="firework firework-4">✨</div>
          <div className="firework firework-5">🎆</div>
        </div>
      )}

      {/* Main content */}
      <div className="main-content">
        <header className="header">
          <h1 className="main-title">
            🪔 शुभ दीपावली 🪔
          </h1>
          <h2 className="subtitle">Happy Diwali</h2>
          <p className="greeting">
            Wishing all our wonderful team members and managers a very Happy Diwali!
            <br />
            May this festival of lights bring joy, prosperity, and success to all.
          </p>
        </header>

        <div className="gift-section">
          {giftBoxState === 'closed' && (
            <div className="gift-container">
              <div 
                className="gift-box"
                onClick={handleGiftBoxClick}
              >
                <div className="gift-box-top">🎁</div>
                <div className="gift-box-bottom"></div>
                <div className="gift-ribbon"></div>
              </div>
              <p className="gift-instruction">Click to open your special gift!</p>
            </div>
          )}

          {giftBoxState === 'failed' && (
            <div className="gift-container">
              <div className="gift-box opened">
                <div className="gift-box-top opened">📦</div>
                <div className="gift-box-bottom"></div>
              </div>
              <div className="error-message">
                <h3>🚫 Build Unsuccessful!</h3>
                <p>Oops! Something went wrong while preparing your gift.</p>
                <button 
                  className="retry-button"
                  onClick={handleRetryClick}
                >
                  🔄 Retry
                </button>
              </div>
            </div>
          )}

          {giftBoxState === 'success' && (
            <div className="gift-container success">
              <div className="success-message">
                <div className="success-icon">🎊</div>
                <h3>🎉 Happy Diwali! 🎉</h3>
                <div className="greetings">
                  <p>✨ May the divine light of Diwali illuminate your path to success!</p>
                  <p>🏠 May your home be filled with happiness and prosperity!</p>
                  <p>💝 Wishing you and your family endless joy and blessings!</p>
                  <p>🌟 May this Diwali bring new opportunities and achievements!</p>
                  <p>🙏 From all of us - Happy Diwali and a prosperous New Year!</p>
                </div>
                <div className="team-message">
                  <p>With warm wishes from your team ❤️</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>🪔 May the festival of lights brighten your life with endless happiness 🪔</p>
      </footer>
    </div>
  )
}

export default App
