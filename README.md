
curl https://get.volta.sh | bash
volta install node
git clone codemirror-bundle
npm install
node_modules/.bin/rollup ./source/exports.js -o ./dist/bundle.js -p @rollup/plugin-node-resolve --no-treeshake
