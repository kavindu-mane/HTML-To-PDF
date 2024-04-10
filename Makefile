# setup using nodejs

# if you want to use nodejs, you can use this command first
bun-to-node:
	cd npm i bcrypt @hono/node-server
	cd npm i -D tsx @types/bcrypt @types/node

setup-node:
	npm install

dev-node:
	npm run dev:node

# setup using bun
setup:
	bun install

dev:
	bun run dev