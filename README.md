# DevOps Showcase

This is a minimal React + Tailwind app that demonstrates DevOps skills and includes companion artifacts for Docker, Kubernetes, GitHub Actions, and AWS deployment.

What is included:
- A small Vite + React app styled with Tailwind (shows sample commands per skill)
- `scripts/` with example shell scripts (Linux checks, docker build/run, k8s deploy)
- `Dockerfile` to build and serve the site using nginx
- `k8s/` manifests (`deployment.yaml`, `service.yaml`) for deploying to Kubernetes (replace image)
- `.github/workflows/ci.yml` example pipeline that builds and optionally syncs to S3 (requires GitHub secrets)

Quick start (local):

1. Install dependencies

```bash
npm ci
```

2. Run dev server

```bash
npm run dev
```

3. Build

```bash
npm run build
```

4. Build and run docker (example)

```bash
scripts/build-and-run-docker.sh my-image-name
```

Kubernetes:

- Replace `REPLACE_WITH_IMAGE:latest` in `k8s/deployment.yaml` or call `scripts/deploy-to-k8s.sh <image>`

GitHub Actions:

- The workflow builds the site and uploads `dist` as an artifact.
- To enable S3 deployment, set `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `S3_BUCKET` in repo secrets.

Notes: This repo is intended as a compact showcase. You can extend the workflow to push a Docker image to ECR/ Docker Hub, add Terraform/CloudFormation for infra, or add GitHub Pages/S3 + CloudFront for hosting.
