FROM node:16-bullseye-slim
WORKDIR /workspace
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build
