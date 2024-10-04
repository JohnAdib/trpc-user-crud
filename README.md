# Simple User Management

A lightweight and efficient user management system built with **Next.js**, **tRPC**, and **TypeScript**. This app allows you to add, view, and delete users with ease. It features pagination, role-based access, validation, and is fully responsive.

https://www.loom.com/share/0e6d62dc88974c3889997e740f8315b6?sid=a92187c6-3ef9-4888-b63d-96ff83fce100

## Features

- Add, view, and delete users
- Role-based access control (e.g., Admin, User)
- Pagination for user lists
- Mobile-friendly design

## Tech Stack

- **Next.js**: React framework for server-side rendering and static site generation.
- **tRPC**: End-to-end type-safe APIs for faster development.
- **TypeScript**: Strongly typed JavaScript for reliability and maintainability.
- **PostgreSQL**: Used as the database (optional if you are using a database).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. Set up environment variables by creating a `.env` file:

   ```bash
   DATABASE_URL=your_database_url
   ```

3. Build and start the docker containers:

   ```bash
   docker-compose up --build
   ```

4. Access the app at `http://localhost:3000`.
