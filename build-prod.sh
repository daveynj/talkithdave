#!/bin/bash
# Production build script that includes image copying

echo "Building frontend..."
npm run build

echo "Copying public assets to production..."
cp -r public/* dist/public/

echo "Build complete! All images and assets copied to dist/public/"