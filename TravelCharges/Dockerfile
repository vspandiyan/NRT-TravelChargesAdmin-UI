# Use an official Node.js runtime as a parent image
FROM node:21-alpine
LABEL author="Alaska"

# Set the working directory to /app
WORKDIR /app

USER root
RUN npm install -g npm@10
RUN npm install -g ip@2.0.1

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install


# Copy the rest of the application code to the container
COPY . .

# RUN apk upgrade libssl3 libcrypto3

# Build the Next.js app
RUN npm run build
# Expose port 3000 for the app
EXPOSE 8080

#RUN adduser --system --uid 1001 nextjs
RUN addgroup -S appgroup && adduser -S appuser -G appgroup   
#USER nextjs
USER appuser

# Start the app
CMD ["npm", "start"]
