# Stock Portfolio Management System

A full-stack web application for managing stock portfolios with real-time data visualization and user authentication.

## 🚀 Features

- **User Authentication & Authorization**
  - JWT-based authentication
  - Role-based access control (User, Admin)
  - Secure registration and login

- **Stock Management**
  - Search and view stock information
  - Real-time stock data integration
  - Interactive stock charts and visualizations
  - Financial metrics display (Balance Sheet, Cash Flow, etc.)

- **Portfolio Management**
  - Add/remove stocks to personal portfolio
  - Track portfolio performance
  - Personalized dashboard

- **Comments System**
  - Add comments on stocks
  - Community discussion features

## 🛠️ Tech Stack

### Backend
- **Framework**: ASP.NET Core 8.0
- **Database**: SQL Server with Entity Framework Core
- **Authentication**: ASP.NET Core Identity with JWT
- **API Documentation**: Swagger/OpenAPI

### Frontend
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Charts**: Recharts & Lightweight Charts
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Notifications**: React Toastify

### DevOps
- **Containerization**: Docker & Docker Compose
- **Development**: Hot reload for both frontend and backend

## 📁 Project Structure

```
Stock/
├── backend/
│   └── api/
│       ├── Controllers/         # API controllers
│       ├── Models/             # Data models
│       ├── DTOs/               # Data transfer objects
│       ├── Repository/         # Data access layer
│       ├── Services/           # Business logic
│       └── DBContext/          # Database context
├── frontend/
│   └── src/
│       ├── Components/         # React components
│       ├── Pages/             # Page components
│       ├── Context/           # React context
│       └── Services/          # API services
└── docker-compose.yml         # Container orchestration
```

## 🚦 Getting Started

### Prerequisites
- .NET 8.0 SDK
- Node.js 18+
- Docker & Docker Compose (optional)

3. Access the application:
   - Frontend: http://localhost:8081
   - Backend API: http://localhost:8080
   - API Documentation: http://localhost:8080/swagger

### Running Locally

#### Backend Setup
```bash
cd backend/api
dotnet restore
dotnet run
```

#### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## 🔧 Configuration

### Environment Variables

Create appropriate configuration files:

**Backend (`appsettings.json`)**:
- Database connection string
- JWT secret key
- External API keys (Financial Market Pro, etc.)

**Frontend**:
- API base URL
- Environment-specific settings

## 📊 API Endpoints

### Authentication
- `POST /api/account/register` - User registration
- `POST /api/account/login` - User login

### Stocks
- `GET /api/stock` - Get all stocks (with pagination/filtering)
- `GET /api/stock/{id}` - Get stock by ID
- `POST /api/stock` - Create new stock (Admin only)
- `PUT /api/stock/{id}` - Update stock (Admin only)
- `DELETE /api/stock/{id}` - Delete stock (Admin only)

### Portfolio
- `GET /api/portfolio` - Get user portfolio
- `POST /api/portfolio?symbol={symbol}` - Add stock to portfolio
- `DELETE /api/portfolio?symbol={symbol}` - Remove stock from portfolio

### Comments
- Stock comment management endpoints

## 🧪 Development

### Running Tests
```bash
# Backend tests
cd backend/api
dotnet test

# Frontend tests
cd frontend
npm test
```

### Code Style
- Backend: Follow C# coding conventions
- Frontend: ESLint configuration included
- Run linting: `npm run lint`

## 🐳 Docker Configuration

The application uses Docker Compose with:
- **Backend**: Runs on port 8080
- **Frontend**: Runs on port 8081 (nginx in production)
- **Network**: Custom bridge network for service communication
- **Health Checks**: Configured for backend service

## 🙏 Acknowledgments

- Financial Market Pro API for stock data
- React ecosystem for frontend tools
- ASP.NET Core team for backend framework
