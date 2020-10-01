#!/bin/bash

ssh $REMOTE_USERNAME@$REMOTE_HOST << EOF
  ls
EOF
