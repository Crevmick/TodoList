# To-Do List Backend API

This is a simple To-Do List backend application built using **Node.js** and **Express.js**. The API allows users to perform CRUD operations (Create, Read, Update, Delete) on tasks.

---

## Features
- Add new tasks
- View all tasks
- Update existing tasks
- Delete tasks

---

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## Installation & Setup
1. Clone this repository:
   ```sh
   git clone https://github.com/your-repo/todo-list-backend.git
   ```
2. Navigate into the project directory:
   ```sh
   cd todo-list-backend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the server:
   ```sh
   node server.js
   ```
   The server will run on `http://localhost:3500`.

---

## API Endpoints

### 1️⃣ Create a Task
- **Method:** `POST`
- **Endpoint:** `/task`
- **Request Body (JSON):**
  ```json
  {
    "title": "Buy groceries",
    "description": "Get milk, eggs, and bread"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Task created successfully",
    "task": {
      "id": "1",
      "title": "Buy groceries",
      "description": "Get milk, eggs, and bread"
    }
  }
  ```
- **Description:**
  - Receives task data.
  - Validates if `title` and `description` exist.
  - Stores the task in an array.
  - Returns the newly created task.

---

### 2️⃣ Read All Tasks
- **Method:** `GET`
- **Endpoint:** `/task`
- **Response:**
  ```json
  {
    "items": [
      {
        "id": "1",
        "title": "Buy groceries",
        "description": "Get milk, eggs, and bread"
      }
    ]
  }
  ```
- **Description:**
  - Retrieves all tasks stored in the array.

---

### 3️⃣ Update a Task
- **Method:** `PUT`
- **Endpoint:** `/task/:id`
- **Request Body (JSON):**
  ```json
  {
    "title": "Updated Task",
    "description": "Updated description"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Task updated successfully",
    "task": {
      "id": "1",
      "title": "Updated Task",
      "description": "Updated description"
    }
  }
  ```
- **Description:**
  - Finds the task by `id`.
  - Updates the `title` and `description`.
  - Returns the updated task.

---

### 4️⃣ Delete a Task
- **Method:** `DELETE`
- **Endpoint:** `/task/:id`
- **Response:**
  ```json
  {
    "message": "Task deleted successfully"
  }
  ```
- **Description:**
  - Finds the task by `id`.
  - Deletes it from the array.
  - Returns a success message.

---

## Running the Server
To start the application, run:
```sh
node server.js
```
The server will be available at `http://localhost:3500`.

---

## Future Improvements
- Connect to a database (e.g., MongoDB, PostgreSQL).
- Implement authentication.
- Add due dates and priority levels for tasks.

---

## License
This project is open-source. Feel free to modify and improve!

