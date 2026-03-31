#!/usr/bin/env bash
set -euo pipefail

IMAGE_NAME=${1:-devops-showcase}

echo "Building Docker image: $IMAGE_NAME"
docker build -t ${IMAGE_NAME}:latest .

echo "Running container on port 8080 (host) -> 80 (container)"
docker run --rm -p 8080:80 ${IMAGE_NAME}:latest
