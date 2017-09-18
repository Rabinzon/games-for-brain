install:
	npm i

start:
	npm run babel-node -- src/bin/brain-games.js

lint:
	npm run lint

publish:
	npm publish
