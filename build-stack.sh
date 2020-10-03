#!/bin/sh
echo "Setting env variables..."
export $(grep -v '^#' .env | xargs -d '\n')
export COMMIT_ID="$(git log -1 --pretty=%H)"

# echo "Starting the Slatam Web build..."
# docker build -t ${DOCKER_IMAGE_REPO}:web_prod_${COMMIT_ID} web --target=prod
# echo "Web built!"

# echo "Now I am building the API..."
# docker build -t ${DOCKER_IMAGE_REPO}:api_prod_${COMMIT_ID} api --target=prod
# echo "API built!"
