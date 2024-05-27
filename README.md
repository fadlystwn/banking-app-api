## Project Setup Guide

This guide provides step-by-step instructions to set up and run NEST PROJECT using Docker Compose, NestJS, and Prisma.

### Prerequisites

Before starting, ensure you have the following installed on your system:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Prisma CLI: You can install it globally via npm: `npm install -g prisma`

### Getting Started

1. **Clone the Repository**: Clone your project repository from version control or download the source code.

   ```bash
   git clone https://github.com/fadlystwn/banking-app-api
   ```

2. **Navigate to Project Directory**: Change your current directory to the root directory of your project.

   ```bash
   cd banking-app-api
   ```

3. **Initialize Prisma and Build Docker Images**: Run the setup target in the Makefile to initialize Prisma and build Docker images.

   ```bash
   make setup
   ```

4. **Start Docker Containers**: Run the up target in the Makefile to start the Docker containers.

   ```bash
   make up
   ```

### Usage

Once the Docker containers are up and running, you can access your NestJS application and interact with it as needed. The application should be available at `http://localhost:3001`.

### Additional Commands

- **Accessing Shell in NestJS Container**: To access the shell in the NestJS container, run:

  ```bash
  make shell
  ```

- **Running Database Migration**: To run the database migration, ensuring your database schema is up to date, run:

  ```bash
  make migrate
  ```

- **Stopping Docker Containers**: To stop and remove the Docker containers, run:

  ```bash
  make down
  ```

- **Restarting Docker Containers**: To restart the Docker containers, run:

  ```bash
  make restart
  ```

- **Viewing Logs**: To view the logs of the Docker containers, run:

  ```bash
  make logs
  ```

