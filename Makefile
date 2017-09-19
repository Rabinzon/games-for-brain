install:
	npm i

start:
	npm run babel-node -- src/bin/brain-even.js

lint:
	npm run lint

publish:
	npm publish
