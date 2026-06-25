.DEFAULT_GOAL := help

.PHONY: help fix docker-up docker-down

help:
	@echo "Available commands:"
	@echo "  make check        - run typecheck, fmt:check, lint and lint:eslint"
	@echo "  make fix          - run fmt, lint:fix and lint:eslint:fix"

check:
	pnpm run typecheck
	pnpm run fmt:check
	pnpm run lint
	pnpm run lint:eslint

fix:
	pnpm run fmt
	pnpm run lint:fix
	pnpm run lint:eslint:fix
