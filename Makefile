# setup using nodejs

# if you want to use nodejs, you can use this command first
bun-to-node:
	npm i @hono/node-server
	npm i -D tsx @types/node

setup-node:
	npm install

dev-node:
	npm run dev:node

# setup using bun
setup:
	bun install

dev:
	bun run dev