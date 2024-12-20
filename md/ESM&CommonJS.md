你的理解大体是对的，不过我可以进一步澄清一些细节。

### ESM 与 CommonJS 在现代浏览器的支持情况

- **ESM (ECMAScript Modules)** 是现代浏览器原生支持的模块系统。浏览器已经能够识别 `import` 和 `export` 语法，而不需要额外的转译。因此，如果你使用 ESM（例如：`import` 和 `export`），在现代浏览器中可以直接使用，而不需要 Babel 等工具进行转译。
  - 例如，`<script type="module">` 标签允许在浏览器中加载和执行 ES 模块。

- **CommonJS** 是 Node.js 中的模块系统，浏览器并不原生支持 CommonJS 的 `require` 和 `module.exports`。因此，浏览器无法直接运行使用 CommonJS 规范编写的代码。
  - 如果要在浏览器中运行 CommonJS 代码，你需要通过工具（如 Webpack、Browserify）将其转译成浏览器支持的格式，通常是 ES5 或 ES6 模块。

### 是否需要转译？

- **如果使用 ESM**，并且你的目标环境是现代浏览器，那么通常不需要通过 Babel 等工具进行转译，因为这些浏览器已经原生支持 ESM。
  
- **如果使用 CommonJS**，浏览器不直接支持，所以需要通过构建工具（如 Webpack、Vite）将其转换成浏览器可以理解的格式。在此过程中，通常是将 CommonJS 模块转译成 ES 模块（即 `import`/`export`）或者直接转译成 ES5。

### 总结

- **ESM**：现代浏览器支持，无需转译，但如果需要兼容老旧浏览器（如 IE），仍然可能需要 Babel 转译。
- **CommonJS**：浏览器不支持，必须通过构建工具（如 Webpack）转译为 ES6 或 ES5 兼容代码。

所以，简而言之：
- 使用 **ESM** 在现代浏览器中通常不需要转译。
- 使用 **CommonJS** 需要通过工具进行转译才能在浏览器中运行。