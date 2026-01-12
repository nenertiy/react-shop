#!/bin/bash

set -e

IMAGE_NAME="pipelinefailed/react-shop"
TAG="${1:-test-cluster}"

echo "Сборка Docker образа для Linux (amd64)..."
echo "Образ: ${IMAGE_NAME}:${TAG}"

docker buildx create --use --name multiarch-builder 2>/dev/null || docker buildx use multiarch-builder

docker buildx build \
  --platform linux/amd64 \
  --tag "${IMAGE_NAME}:${TAG}" \
  --push \
  .

echo "Образ успешно собран и отправлен: ${IMAGE_NAME}:${TAG}"
