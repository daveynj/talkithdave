#!/bin/bash
# Production build script that includes image copying

echo "Building frontend..."
npm run build

echo "Copying public assets to production..."
cp -r public/* dist/public/

echo "Copying assets to server public directory..."
mkdir -p server/public
cp -r dist/public/* server/public/

echo "Build complete! All images and assets copied to both dist/public/ and server/public/"