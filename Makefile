install:
	npm i

start:
	npm run babel-node -- src/bin/brain-balance.js

lint:
	npm run lint

publish:
	npm publish
