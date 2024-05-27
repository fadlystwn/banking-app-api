# Makefile for managing Docker Compose, NestJS, and Database Migration
# Tech Stack: Docker, NestJS, PSQL

# Define targets
.PHONY: setup build up down restart logs shell migrate help

# Default target
default: help

# Help target
help:
	@echo "Usage: make [TARGET]"
	@echo "Targets:"
	@echo "  setup       Setup project environment (build)"
	@echo "  build       Build the Docker images"
	@echo "  up          Start the Docker containers"
	@echo "  down        Stop and remove the Docker containers"
	@echo "  restart     Restart the Docker containers"
	@echo "  logs        View container logs"
	@echo "  shell       Access shell in the NestJS container"
	@echo "  migrate     Run database migration"

# Setup project environment (build)
setup: build migrate

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
restart: down up

# View container logs
logs:
	docker-compose logs -f

# Access shell in the NestJS container
shell:
	docker exec -it nest-js-api ash

# Run database migration
migrate:
	npx prisma generate
	npx prisma migrate dev
