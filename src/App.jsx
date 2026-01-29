import React, { useState, useEffect } from "react";
import {
  Clock,
  Gavel,
  TrendingUp,
  Users,
  Search,
  Heart,
  Bell,
  User,
  Grid,
  List,
  ChevronRight,
  Zap,
  Award,
  ShoppingBag,
  X,
  Menu,
  LogIn,
  UserPlus,
  Home,
  Tag,
  MessageCircle,
  Settings,
  LogOut,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Dice1,
  Gift,
} from "lucide-react";
import "./AuctionPlatform.css";

export default function AuctionPlatform() {
  const [currentView, setCurrentView] = useState("home");
  const [selectedItem, setSelectedItem] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [favorites, setFavorites] = useState(new Set());
  const [userBids, setUserBids] = useState({});
  const [showAuctionModal, setShowAuctionModal] = useState(false);
  const [auctionModalItem, setAuctionModalItem] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showLuckyDraw, setShowLuckyDraw] = useState(false);
  const [userData, setUserData] = useState({
    name: "Rahul Kumar",
    email: "rahul.kumar@cuchd.in",
    department: "Computer Science",
    hostel: "Boys Hostel 5",
  });

  const auctionItems = [
    {
      id: 1,
      title: "MacBook Air M2 - CSE Student",
      description:
        "Barely used for 6 months. Perfect for coding and design work. Includes original charger and box.",
      currentBid: 52000,
      startingBid: 45000,
      bidCount: 28,
      timeLeft: 2400,
      seller: "Arjun Sharma",
      department: "Computer Science",
      hostel: "Boys Hostel 3",
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&h=600&fit=crop",
      condition: "Like New",
      bids: [
        { user: "Priya M.", amount: 52000, time: "30 sec ago", avatar: "PM" },
        { user: "Rahul K.", amount: 51500, time: "2 mins ago", avatar: "RK" },
        { user: "Sneha P.", amount: 51000, time: "4 mins ago", avatar: "SP" },
        { user: "Vikram S.", amount: 50500, time: "6 mins ago", avatar: "VS" },
      ],
    },
    {
      id: 2,
      title: "Engineering Textbook Set (3rd Year)",
      description:
        "Complete set including Data Structures, DBMS, Computer Networks. All highlighted and notes included.",
      currentBid: 1200,
      startingBid: 800,
      bidCount: 15,
      timeLeft: 5400,
      seller: "Neha Gupta",
      department: "Computer Science",
      hostel: "Girls Hostel 2",
      category: "Books",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
      condition: "Good",
      bids: [
        { user: "Amit T.", amount: 1200, time: "1 min ago", avatar: "AT" },
        { user: "Pooja R.", amount: 1150, time: "8 mins ago", avatar: "PR" },
      ],
    },
    {
      id: 3,
      title: "Gaming PC - RTX 3060 Ti Setup",
      description:
        "Custom built beast! Ryzen 5 5600X, 16GB RAM, 500GB NVMe. Includes RGB keyboard and gaming mouse.",
      currentBid: 48000,
      startingBid: 40000,
      bidCount: 42,
      timeLeft: 1200,
      seller: "Kartik Mehta",
      department: "Electronics",
      hostel: "Boys Hostel 5",
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&h=600&fit=crop",
      condition: "Excellent",
      bids: [
        { user: "Rohan J.", amount: 48000, time: "Just now", avatar: "RJ" },
        { user: "Aditya M.", amount: 47500, time: "45 sec ago", avatar: "AM" },
      ],
    },
    {
      id: 4,
      title: "Study Table & Chair Combo",
      description:
        "Wooden study table with drawer and ergonomic chair. Perfect condition.",
      currentBid: 2800,
      startingBid: 2000,
      bidCount: 12,
      timeLeft: 8600,
      seller: "Simran Kaur",
      department: "Mechanical",
      hostel: "Girls Hostel 4",
      category: "Furniture",
      image:
        "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=600&fit=crop",
      condition: "Good",
      bids: [
        { user: "Meera S.", amount: 2800, time: "15 mins ago", avatar: "MS" },
      ],
    },
    {
      id: 5,
      title: "Yamaha F310 Acoustic Guitar",
      description:
        "Well maintained guitar with bag and extra strings. Great for beginners!",
      currentBid: 4200,
      startingBid: 3500,
      bidCount: 22,
      timeLeft: 4800,
      seller: "Ankit Singh",
      department: "MBA",
      hostel: "Boys Hostel 7",
      category: "Musical",
      image:
        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&h=600&fit=crop",
      condition: "Good",
      bids: [
        { user: "Riya D.", amount: 4200, time: "3 mins ago", avatar: "RD" },
      ],
    },
    {
      id: 6,
      title: "Mini Refrigerator 50L",
      description: "Perfect for hostel room! Energy efficient, barely used.",
      currentBid: 3200,
      startingBid: 2500,
      bidCount: 18,
      timeLeft: 7200,
      seller: "Tanvi Sharma",
      department: "Civil Engineering",
      hostel: "Girls Hostel 1",
      category: "Appliances",
      image:
        "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&h=600&fit=crop",
      condition: "Like New",
      bids: [
        { user: "Nisha K.", amount: 3200, time: "5 mins ago", avatar: "NK" },
      ],
    },
  ];

  const categories = [
    "all",
    "Electronics",
    "Books",
    "Furniture",
    "Musical",
    "Appliances",
    "Sports",
    "Fashion",
  ];

  const filteredItems = auctionItems.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleViewItem = (item) => {
    setAuctionModalItem(item);
    setShowAuctionModal(true);
  };

  const toggleFavorite = (itemId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(itemId)) {
      newFavorites.delete(itemId);
    } else {
      newFavorites.add(itemId);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <div className="logo" onClick={() => setCurrentView("home")}>
            <div className="cu-logo">
              <img
                src="https://i.pinimg.com/474x/f5/98/ee/f598ee10179fe7a47ffea40ce625b21d.jpg"
                alt="CU Logo"
                className="logo-image"
              />
            </div>
            <div className="logo-text">
              <span className="logo-main">CU CampusBid</span>
              <span className="logo-sub">Chandigarh University</span>
            </div>
          </div>

          <nav className="nav-menu">
            <div
              className={`nav-link ${currentView === "home" ? "active" : ""}`}
              onClick={() => setCurrentView("home")}
            >
              <Home size={18} />
              <span>Home</span>
            </div>
            <div className="nav-link">
              <Tag size={18} />
              <span>My Bids</span>
            </div>
            <div className="nav-link">
              <Heart size={18} />
              <span>Favorites</span>
            </div>
            <div className="nav-link" onClick={() => setShowLuckyDraw(true)}>
              <Gift size={18} />
              <span>Daily Rewards</span>
            </div>
            <div className="nav-link">
              <MessageCircle size={18} />
              <span>Messages</span>
            </div>
          </nav>

          <div className="search-bar">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              className="search-input"
              placeholder="Search items, sellers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="header-actions">
            <button className="icon-button">
              <Bell size={20} />
            </button>
            {isLoggedIn ? (
              <div className="user-menu-container">
                <button
                  className="icon-button"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >
                  <User size={20} />
                </button>
                {showUserMenu && (
                  <div className="user-menu">
                    <div className="user-menu-header">
                      <div className="user-menu-name">{userData.name}</div>
                      <div className="user-menu-email">{userData.email}</div>
                    </div>
                    <div className="user-menu-items">
                      <div className="user-menu-item">
                        <User size={18} />
                        <span>My Profile</span>
                      </div>
                      <div className="user-menu-item">
                        <Tag size={18} />
                        <span>My Listings</span>
                      </div>
                      <div className="user-menu-item">
                        <Settings size={18} />
                        <span>Settings</span>
                      </div>
                      <div
                        className="user-menu-item logout"
                        onClick={() => {
                          setIsLoggedIn(false);
                          setShowUserMenu(false);
                        }}
                      >
                        <LogOut size={18} />
                        <span>Logout</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button
                  className="auth-button secondary"
                  onClick={() => {
                    setAuthMode("login");
                    setShowAuthModal(true);
                  }}
                >
                  <LogIn size={18} />
                  <span>Login</span>
                </button>
                <button
                  className="auth-button"
                  onClick={() => {
                    setAuthMode("signup");
                    setShowAuthModal(true);
                  }}
                >
                  <UserPlus size={18} />
                  <span>Sign Up</span>
                </button>
              </>
            )}
            <button
              className="mobile-menu-button"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {showLuckyDraw && (
        <LuckyDrawWheel onClose={() => setShowLuckyDraw(false)} />
      )}

      {currentView === "home" && (
        <>
          <section className="hero">
            <div className="animated-background"></div>
            <div className="hero-content">
              <div className="hero-badge">
                <div className="live-pulse"></div>
                <span>850+ Live Auctions</span>
              </div>
              <h1 className="hero-title">Bid. Win. Save.</h1>
              <p className="hero-subtitle">
                Your exclusive Chandigarh University marketplace
              </p>
              <div className="hero-cta-buttons">
                <button
                  className="cta-button cta-primary"
                  onClick={() => {
                    if (!isLoggedIn) {
                      setAuthMode("signup");
                      setShowAuthModal(true);
                    }
                  }}
                >
                  <Zap size={22} />
                  <span>Start Bidding Now</span>
                </button>
                <button className="cta-button cta-secondary">
                  <ShoppingBag size={22} />
                  <span>Browse Listings</span>
                </button>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <TrendingUp className="stat-icon" size={32} />
                  <div className="stat-value">850+</div>
                  <div className="stat-label">Active Listings</div>
                </div>
                <div className="stat-item">
                  <Users className="stat-icon" size={32} />
                  <div className="stat-value">12K+</div>
                  <div className="stat-label">CU Students</div>
                </div>
                <div className="stat-item">
                  <Award className="stat-icon" size={32} />
                  <div className="stat-value">₹2.5L+</div>
                  <div className="stat-label">Saved This Month</div>
                </div>
              </div>
            </div>
          </section>

          <section className="category-filter">
            <div className="category-scroll">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-chip ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === "all" ? "All Items" : category}
                </button>
              ))}
            </div>
          </section>

          <section className="auction-section">
            <div className="section-header">
              <h2 className="section-title">Live Auctions</h2>
              <div className="view-toggle">
                <button
                  className={`icon-button ${viewMode === "grid" ? "active" : ""}`}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid size={20} />
                </button>
                <button
                  className={`icon-button ${viewMode === "list" ? "active" : ""}`}
                  onClick={() => setViewMode("list")}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
            <div className="auction-grid">
              {filteredItems.map((item) => (
                <AuctionCard
                  key={item.id}
                  item={item}
                  onViewItem={handleViewItem}
                  onToggleFavorite={toggleFavorite}
                  isFavorite={favorites.has(item.id)}
                />
              ))}
            </div>
          </section>
        </>
      )}

      {showAuctionModal && auctionModalItem && (
        <LiveAuctionModal
          item={auctionModalItem}
          onClose={() => setShowAuctionModal(false)}
        />
      )}

      {showAuthModal && (
        <AuthModal
          authMode={authMode}
          setAuthMode={setAuthMode}
          onClose={() => setShowAuthModal(false)}
          onLogin={() => {
            setIsLoggedIn(true);
            setShowAuthModal(false);
          }}
        />
      )}

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">About CU CampusBid</h3>
            <p className="footer-text">
              Your trusted campus marketplace for buying, selling, and bidding
              on student items.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#auctions">Browse Auctions</a>
              </li>
              <li>
                <a href="#how-it-works">How It Works</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Support</h3>
            <ul className="footer-links">
              <li>
                <a href="#help">Help Center</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#safety">Safety & Trust</a>
              </li>
              <li>
                <a href="#report">Report Issue</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-item">
              <Mail size={18} />
              <span>support@cuchd.in</span>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <span>+91 (172) 555-0147</span>
            </div>
            <div className="contact-item">
              <MapPin size={18} />
              <span>Chandigarh University, India</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2026 CU CampusBid. All rights reserved. |{" "}
            <a href="#privacy">Privacy Policy</a> |{" "}
            <a href="#terms">Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

function AuctionCard({ item, onViewItem, onToggleFavorite, isFavorite }) {
  return (
    <div className="auction-card" onClick={() => onViewItem(item)}>
      <div className="card-image-wrapper">
        <img src={item.image} alt={item.title} className="card-image" />
        <div className="card-badge">{item.condition}</div>
        <button
          className={`favorite-button ${isFavorite ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(item.id);
          }}
        >
          <Heart size={18} fill={isFavorite ? "#ffffff" : "none"} />
        </button>
      </div>
      <div className="card-content">
        <h3 className="card-title">{item.title}</h3>
        <div className="card-seller">
          <User size={14} />
          <span>{item.seller}</span>
          <span className="college-badge">{item.department}</span>
        </div>
        <CountdownTimer timeLeft={item.timeLeft} compact />
        <div className="bid-info">
          <div className="current-bid">
            <div className="bid-label">Current Bid</div>
            <div className="bid-amount">
              ₹{item.currentBid.toLocaleString()}
            </div>
          </div>
          <div className="bid-stats">
            <TrendingUp size={16} />
            <span>{item.bidCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CountdownTimer({ timeLeft, compact = false }) {
  const [time, setTime] = useState(timeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  const isUrgent = time < 3600;

  if (compact) {
    return (
      <div className={`countdown-timer ${isUrgent ? "timer-urgent" : ""}`}>
        <Clock size={16} />
        <span>
          {hours}h {minutes}m {seconds}s
        </span>
      </div>
    );
  }

  return (
    <div className="countdown-timer-large">
      <div className="time-unit">
        <div className="time-value">{String(hours).padStart(2, "0")}</div>
        <div className="time-label">Hours</div>
      </div>
      <div className="time-unit">
        <div className="time-value">{String(minutes).padStart(2, "0")}</div>
        <div className="time-label">Minutes</div>
      </div>
      <div className="time-unit">
        <div className="time-value">{String(seconds).padStart(2, "0")}</div>
        <div className="time-label">Seconds</div>
      </div>
    </div>
  );
}

function LuckyDrawWheel({ onClose }) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedReward, setSelectedReward] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const rewards = [
    { id: 1, label: "10% OFF", color: "#FF6B6B", discount: 10 },
    { id: 2, label: "Try Next Time", color: "#FFB84D", message: true },
    { id: 3, label: "20% OFF", color: "#4ECDC4", discount: 20 },
    { id: 4, label: "Free Shipping", color: "#95E1D3", message: true },
    { id: 5, label: "15% OFF", color: "#FFD700", discount: 15 },
    { id: 6, label: "5% OFF", color: "#FF9F4A", discount: 5 },
  ];

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedReward(null);
    setShowResult(false);

    const randomIndex = Math.floor(Math.random() * rewards.length);
    const randomDegree = randomIndex * 60;
    const extraRotation = 360 * 5; // 5 full rotations
    const finalRotation = extraRotation + (360 - randomDegree);

    setRotation(finalRotation);

    setTimeout(() => {
      setSelectedReward(rewards[randomIndex]);
      setShowResult(true);
      setIsSpinning(false);
    }, 4000);
  };

  return (
    <div className="lucky-draw-overlay" onClick={onClose}>
      <div
        className="lucky-draw-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="draw-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="draw-header">
          <h2>🎁 Daily Lucky Draw</h2>
          <p>Spin the wheel and get amazing rewards!</p>
        </div>

        <div className="wheel-wrapper">
          <div className="pointer"></div>
          <svg
            className={`wheel ${isSpinning ? "spinning" : ""}`}
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: isSpinning
                ? "transform 4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                : "none",
            }}
            viewBox="0 0 400 400"
            width="300"
            height="300"
          >
            {rewards.map((reward, index) => {
              const startAngle = (index * 360) / rewards.length;
              const endAngle = ((index + 1) * 360) / rewards.length;
              const midAngle = (startAngle + endAngle) / 2;
              const radius = 100;

              const x1 =
                200 + radius * Math.cos(((startAngle - 90) * Math.PI) / 180);
              const y1 =
                200 + radius * Math.sin(((startAngle - 90) * Math.PI) / 180);
              const x2 =
                200 + radius * Math.cos(((endAngle - 90) * Math.PI) / 180);
              const y2 =
                200 + radius * Math.sin(((endAngle - 90) * Math.PI) / 180);

              const textX =
                200 + 130 * Math.cos(((midAngle - 90) * Math.PI) / 180);
              const textY =
                200 + 130 * Math.sin(((midAngle - 90) * Math.PI) / 180);

              const largeArc = endAngle - startAngle > 180 ? 1 : 0;

              return (
                <g key={reward.id}>
                  <path
                    d={`M 200 200 L ${x1} ${y1} A 100 100 0 ${largeArc} 1 ${x2} ${y2} Z`}
                    fill={reward.color}
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <text
                    x={textX}
                    y={textY}
                    textAnchor="middle"
                    dy="0.3em"
                    fill="#fff"
                    fontSize="14"
                    fontWeight="bold"
                    transform={`rotate(${midAngle} ${textX} ${textY})`}
                  >
                    {reward.label}
                  </text>
                </g>
              );
            })}
            <circle cx="200" cy="200" r="30" fill="#fff" />
            <text
              x="200"
              y="210"
              textAnchor="middle"
              fontSize="12"
              fontWeight="bold"
              fill="#000"
            >
              SPIN
            </text>
          </svg>
        </div>

        <button
          className={`spin-button ${isSpinning ? "disabled" : ""}`}
          onClick={spinWheel}
          disabled={isSpinning}
        >
          {isSpinning ? "SPINNING..." : "START SPINNING"}
        </button>

        {showResult && selectedReward && (
          <ResultPopup
            reward={selectedReward}
            onClose={() => setShowResult(false)}
          />
        )}
      </div>
    </div>
  );
}

function ResultPopup({ reward, onClose }) {
  const isDiscount = !reward.message;

  return (
    <div className="result-popup-overlay">
      <div className="result-popup">
        <div className={`result-icon ${isDiscount ? "success" : "info"}`}>
          {isDiscount ? "🎉" : "✨"}
        </div>

        <h2 className="result-title">
          {isDiscount ? "Congratulations!" : "Try Next Time!"}
        </h2>

        <div className="result-content">
          {isDiscount ? (
            <>
              <p className="result-text">You won</p>
              <div className="reward-badge">{reward.discount}% Discount</div>
              <p className="result-subtext">
                Use this code on your next purchase!
              </p>
            </>
          ) : (
            <>
              <p className="result-text">{reward.label}</p>
              <p className="result-subtext">Come back tomorrow to try again!</p>
            </>
          )}
        </div>

        <button className="result-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

function LiveAuctionModal({ item, onClose }) {
  const [bidAmount, setBidAmount] = useState(item.currentBid + 100);
  const [showBidSuccess, setShowBidSuccess] = useState(false);
  const [isHammerAnimating, setIsHammerAnimating] = useState(false);
  const [liveBids, setLiveBids] = useState(item.bids);

  const handlePlaceBid = () => {
    if (bidAmount > item.currentBid) {
      setIsHammerAnimating(true);
      setTimeout(() => {
        setShowBidSuccess(true);
        setIsHammerAnimating(false);
        const newBid = {
          user: "You",
          amount: bidAmount,
          time: "Just now",
          avatar: "YO",
        };
        setLiveBids([newBid, ...liveBids.slice(0, 4)]);
        setTimeout(() => setShowBidSuccess(false), 3000);
      }, 1500);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="auction-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        {isHammerAnimating && (
          <div className="hammer-animation">
            <Gavel className="hammer-icon" size={120} />
          </div>
        )}
        <div className="auction-header">
          <div className="auction-title-badge">🔥 Live Auction Now</div>
          <h2 className="auction-modal-title">{item.title}</h2>
          <p className="auction-subtitle">
            Listed by {item.seller} • {item.department}
          </p>
        </div>
        <div className="auction-body">
          <div className="auction-left">
            <div className="auction-image-container">
              <img
                src={item.image}
                alt={item.title}
                className="auction-main-image"
              />
            </div>
            <div className="auction-details-grid">
              <div className="detail-badge">
                <div className="detail-badge-label">Condition</div>
                <div className="detail-badge-value">{item.condition}</div>
              </div>
              <div className="detail-badge">
                <div className="detail-badge-label">Starting Bid</div>
                <div className="detail-badge-value">
                  ₹{item.startingBid.toLocaleString()}
                </div>
              </div>
              <div className="detail-badge">
                <div className="detail-badge-label">Total Bids</div>
                <div className="detail-badge-value">{item.bidCount}</div>
              </div>
            </div>
            <div className="auction-description">
              <h3>📋 Description</h3>
              <p>{item.description}</p>
            </div>
            <div className="timer-wrapper">
              <CountdownTimer timeLeft={item.timeLeft} />
            </div>
          </div>
          <div className="auction-right">
            <div className="bidding-board">
              <div className="board-header">
                <div className="board-title">⚡ Bidding Board ⚡</div>
              </div>
              <div className="current-price-display">
                <div className="price-label">Current Highest Bid</div>
                <div className="price-amount">
                  ₹{item.currentBid.toLocaleString()}
                </div>
              </div>
              {showBidSuccess && (
                <div className="success-message">
                  <Award size={32} />
                  <div>🎉 Bid Placed Successfully!</div>
                </div>
              )}
              <div className="bid-controls">
                <input
                  type="number"
                  className="bid-input-modal"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(Number(e.target.value))}
                  min={item.currentBid + 1}
                />
                <button className="bid-button" onClick={handlePlaceBid}>
                  <Gavel size={24} />
                  <span>Place Bid</span>
                </button>
                <div className="quick-bids">
                  <button
                    className="quick-bid-btn"
                    onClick={() => setBidAmount(item.currentBid + 100)}
                  >
                    +₹100
                  </button>
                  <button
                    className="quick-bid-btn"
                    onClick={() => setBidAmount(item.currentBid + 500)}
                  >
                    +₹500
                  </button>
                  <button
                    className="quick-bid-btn"
                    onClick={() => setBidAmount(item.currentBid + 1000)}
                  >
                    +₹1000
                  </button>
                </div>
              </div>
              <div className="live-bids-section">
                <div className="live-bids-header">
                  <div className="live-indicator"></div>
                  <div className="live-bids-title">Live Bidding Activity</div>
                </div>
                <div className="live-bids-list">
                  {liveBids.map((bid, index) => (
                    <div key={index} className="live-bid-item">
                      <div className="bid-avatar">{bid.avatar}</div>
                      <div className="bid-details">
                        <div className="bid-user">{bid.user}</div>
                        <div className="bid-time">{bid.time}</div>
                      </div>
                      <div className="bid-amount-display">
                        ₹{bid.amount.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AuthModal({ authMode, setAuthMode, onClose, onLogin }) {
  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="auth-modal-close" onClick={onClose}>
          <X size={20} />
        </button>
        <div className="auth-modal-header">
          <div className="auth-modal-icon">
            {authMode === "login" ? (
              <LogIn size={30} />
            ) : (
              <UserPlus size={30} />
            )}
          </div>
          <h2 className="auth-modal-title">
            {authMode === "login" ? "Welcome Back!" : "Join CU CampusBid"}
          </h2>
          <p className="auth-modal-subtitle">
            {authMode === "login"
              ? "Login to start bidding"
              : "Create your account"}
          </p>
        </div>
        <form
          className="auth-form"
          onSubmit={(e) => {
            e.preventDefault();
            onLogin();
          }}
        >
          {authMode === "signup" && (
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter your full name"
                required
              />
            </div>
          )}
          <div className="form-group">
            <label className="form-label">CU Email</label>
            <input
              type="email"
              className="form-input"
              placeholder="your.name@cuchd.in"
              required
            />
          </div>
          {authMode === "signup" && (
            <>
              <div className="form-group">
                <label className="form-label">Department</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g., Computer Science"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Hostel</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g., Boys Hostel 5"
                  required
                />
              </div>
            </>
          )}
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            {authMode === "login" ? "Login to CampusBid" : "Create Account"}
          </button>
          <div className="auth-switch">
            {authMode === "login" ? (
              <>
                Don't have an account?{" "}
                <span
                  className="auth-switch-link"
                  onClick={() => setAuthMode("signup")}
                >
                  Sign Up
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  className="auth-switch-link"
                  onClick={() => setAuthMode("login")}
                >
                  Login
                </span>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
