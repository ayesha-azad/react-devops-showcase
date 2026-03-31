#!/usr/bin/env bash
set -euo pipefail

echo "== System Information =="
uname -a

echo "\n== OS Release =="
if [ -f /etc/os-release ]; then
  cat /etc/os-release
fi

echo "\n== Disk Usage =="
df -h

echo "\n== Memory =="
free -h 2>/dev/null || (cat /proc/meminfo | head -n 5)

echo "\n== Top processes =="
ps aux --sort=-%mem | head -n 10
