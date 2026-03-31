#!/usr/bin/env bash
set -euo pipefail

IMAGE=${1:-REPLACE_WITH_IMAGE:latest}

echo "Updating k8s deployment image to $IMAGE"
kubectl set image deployment/devops-showcase web=${IMAGE} --record
kubectl rollout status deployment/devops-showcase
