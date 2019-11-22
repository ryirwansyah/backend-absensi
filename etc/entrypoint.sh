#!/bin/bash
set -e

cd /usr/lib/halo-backoffice
npm run dev

exec "$@"
