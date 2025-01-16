# Use the official Node.js image as the base image
FROM node:20-alpine AS base

# Install libc6-compat (required for some dependencies)
FROM base AS deps
RUN apk add --no-cache libc6-compat

# Set the working directory
WORKDIR /usr/src/interjob

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Build application
FROM base AS builder
WORKDIR /usr/src/interjob

# Copy node_modules from deps stage
COPY --from=deps /usr/src/interjob/node_modules ./node_modules

# Copy the rest of the application code
COPY . .

# Increase heap memory limit for Node.js
# ENV NODE_OPTIONS="--max_old_space_size=8192"

# Build the Next.js application
RUN npm run build

# Run application
FROM base AS runner
WORKDIR /usr/src/interjob

# Set environment variables for production
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the public directory
COPY --from=builder /usr/src/interjob/public ./public

# Create the .next directory and set ownership
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copy the Next.js build artifacts
COPY --from=builder --chown=nextjs:nodejs /usr/src/interjob/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /usr/src/interjob/.next/static ./.next/static

# Switch to non-root user
USER nextjs

# Expose the port the app runs on
EXPOSE 3000

# Set environment variable for the port
ENV PORT=3000

# Command to run the Next.js server
CMD ["node", "server.js"]