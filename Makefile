# Makefile for managing Docker Compose, NestJS, and Prisma
# Tech Stack: Docker, NestJS, Prisma

# Define targets
.PHONY: setup build up down restart logs

# Default target
default: help

# Help target
help:
	@echo "Usage: make [TARGET]"
	@echo "Targets:"
	@echo "  setup       Initialize Prisma and build Docker images"
	@echo "  build       Build the Docker images"
	@echo "  up          Start the Docker containers"
	@echo "  down        Stop and remove the Docker containers"
	@echo "  restart     Restart the Docker containers"
	@echo "  logs        Show logs of the Docker containers"

# Initialize Prisma and build Docker images
setup: prisma-generate build

# Generate Prisma client
prisma-generate:
	prisma generate

# Build the Docker images
build:
	docker-compose build

# Start the Docker containers
up:
	docker-compose up -d

# Stop and remove the Docker containers
down:
	docker-compose down

# Restart the Docker containers
restart:
	docker-compose restart

# Show logs of the Docker containers
logs:
	docker-compose logs -f
