#!/bin/bash
cd backend && npm install && node index.js &
cd ../frontend && npm install && npm run dev