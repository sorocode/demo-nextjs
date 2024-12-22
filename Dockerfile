# Use a lightweight Node.js image
FROM node:18-slim

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy application source
COPY . .

# Build the application
RUN npm run build

# Expose the port used by Next.js
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
