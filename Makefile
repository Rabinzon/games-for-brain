install:
	npm i

start:
	npm run babel-node -- src/bin/brain-$(game).js

lint:
	npm run lint

publish:
	npm publish
