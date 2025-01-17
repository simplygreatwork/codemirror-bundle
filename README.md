```
curl https://get.volta.sh | bash
volta install node@22
git clone git@github.com:simplygreatwork/codemirror-bundle.git
cd codemirror-bundle
npm install
node_modules/.bin/rollup ./source/exports.js -o ./dist/bundle.js -p @rollup/plugin-node-resolve --no-treeshake
```