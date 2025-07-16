#!/bin/bash

# Build the frontend
echo "Building frontend..."
npx vite build

# Copy public assets to dist/public (images, etc.)
echo "Copying public assets..."
cp -r public/* dist/public/

# Build the backend
echo "Building backend..."
npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist

echo "Production build complete!"
echo "Images copied to dist/public/"
ls -la dist/public/dave*