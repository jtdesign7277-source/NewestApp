import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  
  // Generate mini chart data once
  const [chartData] = useState(() => Array.from({ length: 30 }, () => Math.random() * 100))

  // Mock stock data
  const portfolioValue = 43021.18
  const portfolioChange = 1247.82
  const portfolioChangePercent = 2.99

  const stocks = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 182.52, change: 2.34, changePercent: 1.30 },
    { symbol: 'TSLA', name: 'Tesla, Inc.', price: 248.42, change: -3.21, changePercent: -1.27 },
    { symbol: 'MSFT', name: 'Microsoft Corporation', price: 378.91, change: 5.67, changePercent: 1.52 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 141.80, change: 1.92, changePercent: 1.37 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 178.25, change: 4.18, changePercent: 2.40 },
    { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 495.22, change: 8.45, changePercent: 1.74 },
  ]

  const watchlist = [
    { symbol: 'META', name: 'Meta Platforms', price: 474.99, change: 6.23, changePercent: 1.33 },
    { symbol: 'NFLX', name: 'Netflix Inc.', price: 481.92, change: -2.14, changePercent: -0.44 },
    { symbol: 'AMD', name: 'Advanced Micro Devices', price: 152.08, change: 3.72, changePercent: 2.51 },
  ]

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>Investing</h1>
        <div className="header-actions">
          <button className="icon-button" aria-label="Search">
            🔍
          </button>
          <button className="icon-button" aria-label="Notifications">
            🔔
          </button>
        </div>
      </header>

      {/* Portfolio Summary */}
      <section className="portfolio-summary">
        <div className="portfolio-value">
          ${portfolioValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
        <div className={`portfolio-change ${portfolioChange >= 0 ? 'positive' : 'negative'}`}>
          <span>{portfolioChange >= 0 ? '↑' : '↓'}</span>
          <span>
            ${Math.abs(portfolioChange).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            {' '}({portfolioChangePercent >= 0 ? '+' : ''}{portfolioChangePercent.toFixed(2)}%)
          </span>
          <span style={{ color: 'var(--text-secondary)' }}>Today</span>
        </div>
        
        {/* Mini Chart */}
        <div className="mini-chart">
          {chartData.map((height, index) => (
            <div
              key={index}
              className="chart-bar"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </section>

      {/* Stock List */}
      <div className="stock-list">
        <div className="section-header">Your Portfolio</div>
        {stocks.map((stock) => (
          <div key={stock.symbol} className="stock-card">
            <div className="stock-info">
              <div className="stock-symbol">{stock.symbol}</div>
              <div className="stock-name">{stock.name}</div>
            </div>
            <div className="stock-details">
              <div className="stock-price">
                ${stock.price.toFixed(2)}
              </div>
              <div className={`stock-change ${stock.change >= 0 ? 'positive' : 'negative'}`}>
                <span>{stock.change >= 0 ? '↑' : '↓'}</span>
                <span>${Math.abs(stock.change).toFixed(2)} ({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)</span>
              </div>
            </div>
          </div>
        ))}

        <div className="section-header">Watchlist</div>
        {watchlist.map((stock) => (
          <div key={stock.symbol} className="stock-card">
            <div className="stock-info">
              <div className="stock-symbol">{stock.symbol}</div>
              <div className="stock-name">{stock.name}</div>
            </div>
            <div className="stock-details">
              <div className="stock-price">
                ${stock.price.toFixed(2)}
              </div>
              <div className={`stock-change ${stock.change >= 0 ? 'positive' : 'negative'}`}>
                <span>{stock.change >= 0 ? '↑' : '↓'}</span>
                <span>${Math.abs(stock.change).toFixed(2)} ({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button 
          className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          <span className="nav-icon">📊</span>
          <span className="nav-label">Investing</span>
        </button>
        <button 
          className={`nav-item ${activeTab === 'spending' ? 'active' : ''}`}
          onClick={() => setActiveTab('spending')}
        >
          <span className="nav-icon">💳</span>
          <span className="nav-label">Spending</span>
        </button>
        <button 
          className={`nav-item ${activeTab === 'retirement' ? 'active' : ''}`}
          onClick={() => setActiveTab('retirement')}
        >
          <span className="nav-icon">🏦</span>
          <span className="nav-label">Retirement</span>
        </button>
        <button 
          className={`nav-item ${activeTab === 'account' ? 'active' : ''}`}
          onClick={() => setActiveTab('account')}
        >
          <span className="nav-icon">👤</span>
          <span className="nav-label">Account</span>
        </button>
      </nav>
    </div>
  )
}

export default App
