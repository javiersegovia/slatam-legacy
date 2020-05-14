NAME_WEB           :=slatam_web# Docker Image Name
NAME_API           :=slatam_api# Docker Image Name
TAG                :=$$(git log -1 --pretty=%h)# Tag used for the image (Git commit hash)
# IMG                :=${NAME}:${TAG}
# LATEST             :=${NAME}:latest
G_LOCATION         :=gcr.io# Google Container Registry Location
G_PROJECT_ID       :=slatam# Google Cloud Project ID
G_NAME_WEB         :=${G_LOCATION}/${G_PROJECT_ID}/${NAME_WEB}:${TAG}# GCR Image Name
G_NAME_API         :=${G_LOCATION}/${G_PROJECT_ID}/${NAME_API}:${TAG}# GCR Image Name

eco:
	@echo "Creating docker image... ${G_NAME_WEB} ${G_NAME_API}"

install:
	@docker-compose build --no-cache web
	@docker-compose run web yarn install --check-files
	@echo "Web app and dependencies successfully installed."
	@docker-compose build --no-cache api
	@docker-compose run api yarn install --check-files
	@echo "Api server and dependencies successfully installed."

run-web:
	@sudo docker-compose up web traefik

run-api:
	@sudo docker-compose up api traefik

run-all:
	@sudo docker-compose up

build-web:
	@echo "Creating docker image for WEB... ${G_NAME_WEB}"
	@docker build --tag ${G_NAME_WEB} --target=prod .

build-api:
	@echo "Creating docker image for API... ${G_NAME_API}"
	@docker build --tag ${G_NAME_API} --target=prod .

build-all:
	@echo "Creating docker images for production (WEB and API)"
	@docker build --tag ${G_NAME_WEB} --target=prod .
	@docker build --tag ${G_NAME_API} --target=prod .

push-web:
	@echo "Pushing docker image to container registry on ${G_LOCATION}/${G_PROJECT_ID}"
	@docker push ${G_NAME_WEB}

push-api:
	@echo "Pushing docker image to container registry on ${G_LOCATION}/${G_PROJECT_ID}"
	@docker push ${G_NAME_API}

push-all:
	@echo "Pushing docker image to container registry on ${G_LOCATION}/${G_PROJECT_ID}"
	@docker push ${G_NAME_WEB}
	@docker push ${G_NAME_API}
