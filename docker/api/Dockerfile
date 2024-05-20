FROM --platform=linux/amd64 node:20.11.1-slim

RUN apt-get update
RUN apt-get install -y openssl
 
WORKDIR /usr/src/app
 
# Copy root folders files
COPY package.json ./
COPY pnpm-lock.yaml ./
COPY pnpm-workspace.yaml ./
COPY .npmrc ./
COPY tsconfig.json ./
COPY turbo.json ./
 
# Copy sub folders files
COPY apps/api ./apps/api
COPY packages/contract ./packages/contract
COPY packages/eslint-config ./packages/eslint-config
COPY packages/typescript-config ./packages/typescript-config

# Install global packages
RUN npm install -g typescript
RUN npm install -g pnpm@8.9.0

# Run setup
RUN pnpm install
RUN pnpm run build
 
EXPOSE 9000
 
CMD [ "pnpm", "run", "start" ]