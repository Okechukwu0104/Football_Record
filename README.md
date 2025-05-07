# Football Management System

This is a full-stack web application for managing football clubs, leagues, and related data. The project is built using **React** for the frontend and **Django** for the backend, with REST APIs for communication between the two.

---

## Features

### Frontend
- **React** with **Vite** for fast development and build.
- **Ant Design** for UI components.
- **React Router** for navigation.
- **Axios** for API requests.
- **TailwindCSS** for styling.

### Backend
- **Django** with **Django REST Framework** for API development.
- **SQLite** as the database.
- **CORS** enabled for frontend-backend communication.

---

## Project Structure

### Frontend
- **`src/components`**: Contains reusable components like `Navbar`, `Header`, and `Axios` instance.
- **`src/pages`**: Contains pages like `Home`, `Create`, `Edit`, and `Delete`.
- **`vite.config.js`**: Configuration for Vite.
- **`App.jsx`**: Main application file with routing.

### Backend
- **`api`**: Contains Django app for managing football-related data.
  - **`models.py`**: Defines database models for `Country`, `League`, `Characteristics`, and `FootballClub`.
  - **`views.py`**: Contains API views for CRUD operations.
  - **`serializers.py`**: Serializes models for API responses.
  - **`urls.py`**: Defines API endpoints.
- **`football`**: Main Django project folder with settings and configurations.

---

## Installation

### Prerequisites
- **Node.js** and **npm** (for frontend)
- **Python 3.10+** and **pip** (for backend)

### Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2.Create a virtual environment:
   ```bash
python -m venv venv
```

3.Activate the virtual environment:
On Windows:
   ```bash
venv\Scripts\activate
```
4.Install dependencies:
   ```bash
pip install -r requirements.txt
```

5.Run migrations:
   ```bash
python manage.py migrate
```

6.Start the backend server:
   ```bash
python manage.py runserver
```





### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend/football
   ```

2. Install dependencies and run development server:
   ```bash
   npm install
   npm run dev
  ```


