# --- Stage 1: Build the static assets ---
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies first (leverages Docker cache)
COPY package*.json ./
RUN npm ci

# Copy codebase and compile the project
COPY . .
RUN npm run build

# --- Stage 2: Serve using Nginx ---
FROM nginx:alpine
# Copy the compiled static folder from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration to support client-side routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
