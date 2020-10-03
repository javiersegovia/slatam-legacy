#!/bin/sh
echo "Deploying stack: slatamstack"
docker stack deploy --compose-file docker-stack.yml slatamstack