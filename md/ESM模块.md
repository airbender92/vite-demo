原生 ES 模块（ESM，ECMAScript Modules）是 JavaScript 的官方模块系统，用于在 JavaScript 中组织和共享代码。ESM 是 ECMAScript 6（ES6）引入的一项功能，它通过 `import` 和 `export` 语法提供模块化支持，具有如下特点：

### 1. **语法**
   - **导出（export）**: 使用 `export` 来暴露模块中的功能或变量。
     ```javascript
     // 导出一个常量
     export const myVariable = 42;

     // 导出一个函数
     export function myFunction() {
       console.log('Hello, world!');
     }
     ```

   - **导入（import）**: 使用 `import` 语法来引入其他模块的功能或变量。
     ```javascript
     import { myVariable, myFunction } from './myModule.js';
     
     console.log(myVariable);  // 42
     myFunction();  // Hello, world!
     ```

### 2. **默认导出（default export）**
   - 可以导出一个默认的功能或对象。
     ```javascript
     // 导出一个默认函数
     export default function() {
       console.log('Default export function');
     }

     // 导入默认导出
     import myDefaultFunction from './myModule.js';
     myDefaultFunction();  // Default export function
     ```

### 3. **静态结构**
   - 与传统的 CommonJS 模块不同，ESM 是静态的，即模块在解析时会立即加载。这意味着在编译时就能知道模块的结构，因此能更好地进行优化（例如 tree shaking）。

### 4. **模块加载**
   - **浏览器环境**：可以直接在 `<script>` 标签中使用 `type="module"` 来加载 ESM 模块。
     ```html
     <script type="module" src="app.js"></script>
     ```

   - **Node.js 环境**：从 Node.js 12 开始，ESM 模块在 Node.js 中得到了原生支持。要启用 ESM，通常需要使用 `.mjs` 文件扩展名，或者在 `package.json` 中设置 `"type": "module"`。
     ```json
     {
       "type": "module"
     }
     ```

### 5. **异步加载**
   - ES 模块会异步加载，因此不会阻塞代码的执行。这使得浏览器能够并行加载多个模块，提升加载速度。

### 6. **作用域**
   - 每个 ES 模块都有自己的作用域。你不能直接从一个模块访问另一个模块的变量，除非显式地导出和导入。

### 7. **顶级 `await`**
   - 在支持顶级 `await` 的环境中，ES 模块允许直接在模块的顶部使用 `await`，无需将其包装在函数内。

     ```javascript
     // 在 ESM 中使用顶级 await
     const data = await fetchData();
     console.log(data);
     ```

ESM 是 JavaScript 现代化的重要一步，能够提高代码的可维护性和性能。它也与以前的 CommonJS 和 AMD 模块系统兼容，逐步取代了这些早期的模块化方案。