PROJECT_ID       		  :=javiersegovia/slatam# Google Cloud Project ID

# NAME_WEB           		:=${PROJECT_ID}/web# Docker Image Name of Web 
# NAME_API           		:=${PROJECT_ID}/api# Docker Image Name of API

# Tag used for the image (Git commit hash)
TAG                		 :=$$(git log -1 --pretty=%h)

# IMG_LOCATION         :=gcr.io # Google Container Registry Location

NAME_AND_TAG_WEB       :=${PROJECT_ID}:web_${TAG}# Docker Image Name
NAME_AND_TAG_API       :=${PROJECT_ID}:api_${TAG}# Docker Image Name

IMG_WEB_LATEST		 		 :=${PROJECT_ID}:web_prod
IMG_API_LATEST		 		 :=${PROJECT_ID}:api_prod

# eco:
# 	@echo "Creating docker image... ${G_NAME_WEB} ${G_NAME_API}"

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
	@cd web
	@echo "Creating docker image for WEB... ${NAME_AND_TAG_WEB}"
	@docker build -t ${NAME_AND_TAG_WEB} --target=prod web
	@docker tag ${IMG_NAME_WEB} ${IMG_WEB_LATEST}
	@cd ..

build-api:
	@echo "Creating docker image for API... ${NAME_AND_TAG_API}"
	@docker build -t ${NAME_AND_TAG_API} --target=prod api
	@docker tag ${IMG_NAME_API} ${IMG_API_LATEST}


build-all:
	@make build-web
	@make build-api
# 	@echo "Creating docker images for production (WEB and API)"
# 	@docker build --tag ${G_NAME_WEB} --target=prod .
# 	@docker build --tag ${G_NAME_API} --target=prod .

push:
	@echo "Pushing docker images to container registry on ${PROJECT_ID} (???)"
	@docker push ${PROJECT_ID}

push-web:
	@echo "Pushing docker image to container registry on ${NAME_AND_TAG_WEB} (???)"
	@docker push ${NAME_AND_TAG_WEB}

push-api:
	@echo "Pushing docker image to container registry on ${NAME_API} (???)"
	@docker push ${NAME_API}

push-all:
	@make push-web
	@make push-api
# 	@echo "Pushing docker image to container registry on ${G_LOCATION}/${G_PROJECT_ID}"
# 	# @docker push ${G_NAME_WEB}
# 	# @docker push ${G_NAME_API}

login:
	@docker log -u ${DOCKER_USER} -p ${DOCKER_PASS}
