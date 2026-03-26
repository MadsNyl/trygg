SHELL := /bin/bash

DB_CONTAINER ?= trygg-postgres
DB_VOLUME ?= trygg-postgres-data
DB_IMAGE ?= postgres:16
DB_PORT ?= 5632
DB_USER ?= postgres
DB_PASSWORD ?= password
DB_NAME ?= trygg
DATABASE_URL ?= postgresql://postgres:password@localhost:5632/trygg

.PHONY: db-create db-start db-stop db-destroy migrate generate studio

db-create:
	@docker volume inspect $(DB_VOLUME) >/dev/null 2>&1 || docker volume create $(DB_VOLUME)
	@if docker ps -a --format '{{.Names}}' | grep -qx '$(DB_CONTAINER)'; then \
		echo "Container '$(DB_CONTAINER)' already exists"; \
	else \
		docker create \
			--name $(DB_CONTAINER) \
			-e POSTGRES_USER=$(DB_USER) \
			-e POSTGRES_PASSWORD=$(DB_PASSWORD) \
			-e POSTGRES_DB=$(DB_NAME) \
			-p $(DB_PORT):5432 \
			-v $(DB_VOLUME):/var/lib/postgresql/data \
			$(DB_IMAGE) >/dev/null; \
		echo "Created container '$(DB_CONTAINER)'"; \
	fi
	@docker start $(DB_CONTAINER)
	@echo "Database is running at $(DATABASE_URL)"

db-start:
	@docker start $(DB_CONTAINER)
	@echo "Database started at $(DATABASE_URL)"

db-stop:
	@docker stop $(DB_CONTAINER)
	@echo "Database stopped"

db-destroy:
	@docker rm -f $(DB_CONTAINER) >/dev/null 2>&1 || true
	@docker volume rm $(DB_VOLUME) >/dev/null 2>&1 || true
	@echo "Database container and volume destroyed"

migrate:
	@DATABASE_URL="$(DATABASE_URL)" pnpm prisma migrate dev

generate:
	@DATABASE_URL="$(DATABASE_URL)" pnpm prisma generate

studio:
	@DATABASE_URL="$(DATABASE_URL)" pnpm prisma studio
