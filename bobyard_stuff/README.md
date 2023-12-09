# Bobyard Fullstack Project

This project includes a Django RESTful API backend and a React.js frontend that work together to provide functionalities for displaying, adding, editing, and deleting comments.

## Prerequisites

Ensure you have the following installed on your system before you begin:
- Python 3
- Django
- Django REST Framework
- Node.js and npm

## Setup Instructions

### Step 1: Unpack the Project

Unzip the project file to your preferred location. This should create a folder with all the project files inside.

### Step 2: Set Up the Backend

1. Open a terminal and navigate to the backend directory within the project folder:

    ```bash
    cd bobyard_stuff/bobyard_backend
    ```

2. Install the required Python packages:

    ```bash
    pip install django
    ```

    ```bash
    pip install djangorestframework
    ```

    ```bash
    pip install django-cors-headers
    ```

3. Make and apply migrations to initialize the database:

    ```bash
    python3 manage.py makemigrations
    python3 manage.py migrate
    ```

4. Run the Django development server:

    ```bash
    python3 manage.py runserver
    ```

### Step 3: Set Up the Frontend

1. Open a new terminal and navigate to the frontend directory:

    ```bash
    cd bobyard_stuff/bobyard_frontend
    ```

2. Install the npm packages needed by the React application:

    ```bash
    npm install
    ```

3. Once the backend server is up and running, start the frontend server:

    ```bash
    npm start
    ```

The frontend should now be accessible in your browser at `http://localhost:3000`.

### Step 4: Access the Admin Panel

If you need to access the Django admin interface:

1. First, create a superuser account:

    ```bash
    python3 manage.py createsuperuser
    ```

2. Log in to the admin panel at `http://127.0.0.1:8000/admin/` using the superuser credentials.

## Additional Information

- The frontend interacts with the backend via RESTful APIs.
- Be sure to start the Django backend before the React frontend.
- The project uses SQLite for the database, which is included with Django.

If you run into any issues feel free to email me pratinav.e.sharma@gmail.com
