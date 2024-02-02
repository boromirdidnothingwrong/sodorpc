#!/bin/ash
nohup tcpsvd 0 36782 ./updatecss.sh
dumb-init node build