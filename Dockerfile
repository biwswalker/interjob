# Use the official Node.js image as the base image
FROM node:20-alpine as base
FROM base AS deps

# Set the working directory
RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/interjob

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code

FROM base AS builder
WORKDIR /usr/src/interjob
COPY --from=deps /usr/src/interjob/node_modules ./node_modules
COPY . .

# เพิ่ม heap memory ให้ Node.js
# ENV NODE_OPTIONS="--max_old_space_size=4096"

RUN npm run build


FROM base AS runner
WORKDIR /usr/src/interjob

ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /usr/src/interjob/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /usr/src/interjob/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /usr/src/interjob/.next/static ./.next/static

USER nextjs
# Expose the port the app runs on
EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]