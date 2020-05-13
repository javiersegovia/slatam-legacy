# Slatam App
This is the main repository of the Slatam web application.


## Local installation

### Pre-requisites
1. Install Docker and Docker Compose on Mac/Linux. Please follow the following tutorials: https://docs.docker.com/engine/install/ubuntu/ <br /> https://docs.docker.com/compose/install/ <br /> Make sure you installed it correctly by running `sudo docker info` and `sudo docker-compose version`

2. Clone the repository using SSH or HTTPS.

3. Run `sudo usermod -a -G docker ${USER}`, so you can use the docker commands without using sudo.

4. Get the `.env` file from a teammate and place it on root.

### Development

1. To run **only** the frontend: `make run-web`. This command will download the necessary Docker images and build the custom Dockerfile for the React app. The hot-reload app will start on localhost, you can visit it by going to `vcap.me`.

2. To run **only** the backend: `make run-api`. This command will download the necessary Docker images and build the custom Dockerfile for the Node GraphQL api. The app will start on localhost, you can visit it by going to `api.vcap.me`.

3. To run **both** the frontend and the backend: `make run-all`. With this command, you will be able to visit the app on `vcap.me` and `api.vcap.me`.

* **NOTE:** By running any of those commands, you will be able to visit the reverse-proxy interface on `traefik.vcap.me`

## Integration
1. Make sure your master is up to date with `git pull --rebase origin master`

2. Create a new git branch with `git checkout -b YOUR_NAME/YOUR_TASK` and make all the changes there.

3. Add all the new changes you made with `git add -A` and create a good commit description with `git commit -m YOUR_DESCRIPTION`.

4. Push the branch to a new branch in the repository with `git push --set-upstream origin YOUR_NAME/YOUR_TASK --force`.

5. After your PR is approved, someone on the team will make a QA (Quality Assurance) by downloading your branch and making sure all the changes are working as intended. If the QA tester does not find any issues, he will merge your changes into the master branch.

## Deployment

### Automatic deployment (work in progress)

When a new commit is merged into the master branch, the Semaphore CI will trigger a deployment pipeline and then notify about the results by sending an alert to a Slack channel.

### Manual deployment (work in progress)

Only for testing purposes. **You should NOT deploy this way.**

1. Make sure you have access to the Google Cloud Console.

2. Download and initialize the Google Cloud SDK: https://cloud.google.com/sdk/docs

3. Run `gcloud auth login` to authenticate your gcloud CLI.
