# Entertainment & Event Dashboard

A premium, full-stack SaaS analytics dashboard built for Entertainment & Event companies. Features real-time KPI tracking, event management, revenue analytics, customer insights, and comprehensive financial reporting.

**Project**: Tampomas Eco Park - Entertainment & Event Division Dashboard

---

## 🎯 Features

### 📊 Core Modules
- **KPI Dashboard** - Real-time metrics with trend analysis
- **Event Management** - Complete event lifecycle management
- **Revenue Tracking** - Income analytics with forecasting
- **Customer Analytics** - Customer segmentation and insights
- **Equipment Rental** - Asset tracking and inventory
- **Sales Pipeline** - Deal management and conversions
- **Event Calendar** - Visual event scheduling
- **Financial Reports** - Comprehensive reporting suite
- **Notifications** - Real-time alerts and notifications

### 🎨 UI/UX
- Premium SaaS design (Stripe, Notion, Power BI inspired)
- Dark/Light theme support
- Responsive mobile design
- Smooth animations and transitions
- Interactive charts and visualizations

### ⚙️ Tech Stack
- **Frontend**: React 18+ with TypeScript, Tailwind CSS, Recharts
- **Backend**: Node.js/Express with PostgreSQL
- **Real-time**: WebSocket support for live updates
- **Auth**: JWT-based authentication
- **Deployment**: Docker-ready configuration

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 12+
- Docker & Docker Compose (optional)

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/Malik9144/entertainment-dasboard.git
cd entertainment-dasboard
```

#### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Configure your database and API settings in .env
npm run migrate
npm run seed
npm run dev
```

#### 3. Frontend Setup
```bash
cd frontend
npm install
cp .env.example .env
# Configure your API endpoint in .env
npm start
```

The dashboard will be available at `http://localhost:3000`

### Using Docker
```bash
docker-compose up -d
```

Access:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Database: localhost:5432

---

## 📁 Project Structure

```
entertainment-dasboard/
├── frontend/                 # React SPA
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── services/        # API services
│   │   ├── store/           # Redux state management
│   │   ├── utils/           # Utility functions
│   │   └── styles/          # Global styles
│   ├── package.json
│   └── tsconfig.json
│
├── backend/                  # Express API
│   ├── src/
│   │   ├── routes/          # API endpoints
│   │   ├── controllers/      # Route handlers
│   │   ├── models/          # Data models
│   │   ├── middleware/      # Express middleware
│   │   ├── services/        # Business logic
│   │   ├── config/          # Configuration
│   │   ├── utils/           # Helper functions
│   │   └── migrations/      # Database migrations
│   ├── package.json
│   └── tsconfig.json
│
├── docker-compose.yml
├── .env.example
├── .gitignore
└── docs/                    # Documentation
```

---

## 🔐 Authentication

The dashboard uses JWT-based authentication with secure httpOnly cookies.

---

## 📊 API Endpoints

### Events
- `GET /api/events` - List all events
- `POST /api/events` - Create event
- `GET /api/events/:id` - Get event details
- `PUT /api/events/:id` - Update event
- `DELETE /api/events/:id` - Delete event

### Revenue & Analytics
- `GET /api/revenue/dashboard` - Revenue overview
- `GET /api/customers/analytics` - Customer analytics
- `GET /api/reports/financial` - Financial reports

*See `/docs/API.md` for complete API documentation.*

---

## 🎨 Customization

### Theme
Edit `frontend/src/styles/theme.ts` to customize colors, fonts, and styling.

### Environment Variables
Copy `.env.example` to `.env` and configure database, API endpoints, and JWT secrets.

---

## 🔒 Security

- Input validation and sanitization
- SQL injection prevention
- XSS protection
- CSRF token implementation
- Rate limiting on API endpoints
- Secure password hashing (bcrypt)
- JWT authentication

---

## 📝 License

MIT License - See LICENSE file for details

---

**Built with ❤️ for Tampomas Eco Park Entertainment & Event Division**