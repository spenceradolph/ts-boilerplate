# ts-boilerplate

Working with workspaces is really cool with VS Code!

```
git clone https://github.com/spenceradolph/ts-boilerplate
code ts-boilerplate/project.code-workspace
```

The package.json contains many helpful commands for development.

```
yarn dev          -> runs both in a single console
yarn dev:web      -> runs react development server (saving auto-refreshes)
yarn dev:server   -> runs backend with ts-node-dev (saving auto-restarts)

yarn build        -> builds both and puts them into ./dist
yarn build:web    -> builds frontend (./packages/web/build)
yarn build:server -> builds backend (./packages/server/dist)

yarn start        -> runs the compiled code (from ./dist)

yarn clean        -> deletes all compiled code / build artifacts
yarn uninstall    -> deletes node_modules and yarn.lock
```

VS Code debugger will auto-find launch configurations when in the workspace.
Chrome Debugger extension may be required for frontend.
