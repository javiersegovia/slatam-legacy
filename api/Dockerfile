ARG NODE_VERSION=14.2.0

################################################

FROM node:${NODE_VERSION} as base
ENV NODE_ENV=production
ARG DUMB_INIT_VERSION=1.2.2

# This creates the folder where we will have the node_modules
WORKDIR /slatam

COPY package*.json yarn.lock* ./

RUN yarn install --check-files --prod && yarn cache clean

# Dumb-init helps with the Docker signals management
RUN wget -O /usr/local/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v${DUMB_INIT_VERSION}/dumb-init_${DUMB_INIT_VERSION}_amd64
RUN chmod +x /usr/local/bin/dumb-init

# Ensure that every command runs with dumb-init
ENTRYPOINT ["/usr/local/bin/dumb-init", "--"]

################################################

## Stage 2 (development)
# we don't COPY in this stage because for dev you'll bind-mount anyway
# this saves time when building locally for dev via docker-compose

FROM base as dev

ENV NODE_ENV=development
ENV PATH /slatam/node_modules/.bin:$PATH

WORKDIR /slatam

RUN yarn install --check-files && yarn cache clean

WORKDIR /slatam/api

EXPOSE 4000

# FIXED this should not have a ../ in it. The app and node_modules are in the same dir
# CMD ["node_modules/nodemon/bin/nodemon.js",  "./bin/www", "--inspect=0.0.0.0:9229"]

################################################

## Stage 3 (copy in source)
# This gets our source code into builder for use in next two stages
# It gets its own stage so we don't have to copy twice
# this stage starts from the first one and skips the last two
FROM base as source

WORKDIR /slatam/api

COPY . .

################################################

## Stage 4 (testing)
# use this in automated CI
# it has prod and dev npm dependencies
# In 18.09 or older builder, this will always run
# In BuildKit, this will be skipped by default 

FROM source as test

ENV NODE_ENV=development
ENV PATH=/slatam/node_modules/.bin:$PATH

# this copies all dependencies (prod+dev)
COPY --from=dev /slatam/node_modules /slatam/node_modules

# run linters as part of build
# be sure they are installed with devDependencies
# RUN eslint --fix -f tmp/eslintTableFormatter.js -o tmp/eslint_api_results.txt .
# run unit tests as part of build
# RUN yarn run test

# run integration testing with docker-compose later
# CMD ["yarn", "run", "int-test"] 

################################################

## Stage 5 (security scanning and audit)
FROM test as audit

# RUN yarn audit

# aqua microscanner, which needs a token for API access
# note this isn't super secret, so we'll use an ARG here
# https://github.com/aquasecurity/microscanner

# ARG MICROSCANNER_TOKEN
# ADD https://get.aquasec.com/microscanner /
# RUN chmod +x /microscanner
# RUN apk add --no-cache ca-certificates && update-ca-certificates
# RUN /microscanner $MICROSCANNER_TOKEN --continue-on-failure

################################################

## Stage 6 (default, production)
# this will run by default if you don't include a target
# it has prod-only dependencies

FROM source as prod

ENV NODE_ENV=production
# RUN /slatam/node_modules/.bin/keystone --entry=server.js build

# RUN ls
# RUN cat package.json
# RUN ls node_modules
# RUN ls /slatam/node_modules/.bin

# RUN yarn build

EXPOSE 4000

CMD ["node", "server.js"]
