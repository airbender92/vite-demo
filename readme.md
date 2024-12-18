## 运行 npx 时遇到下载缓慢的问题，可以通过以下方式解决：

1. 使用国内镜像源：

```bash
npm config set registry https://registry.npmmirror.com

```

2. 安装阿里云提供的 cnpm（但这与 npx 无关，只是替代工具）：

```bash
npm install -g cnpm --registry=https://registry.npmmirror.com
```

---------

## degit 
使用 **`degit`** 而不是直接 **`git clone`** 的原因主要在于它的用途和特性。以下是它们之间的区别和 **`degit`** 的优势：


### **1. `degit` vs. `git clone` 的核心区别**
- **`git clone`**  
  - 是 Git 提供的工具，用于复制整个 Git 仓库，包括所有的提交历史（commit history）、分支信息等。
  - 克隆后，本地文件夹会作为一个完整的 Git 仓库，可以继续使用 Git 命令管理版本。

- **`degit`**  
  - 是一个轻量级工具，用于从 Git 仓库中提取特定的内容（比如模板文件），而不包含提交历史和版本信息。
  - 克隆后，本地文件夹不会初始化为 Git 仓库，适合用来搭建项目的初始结构。

---

### **2. 为什么选择 `degit`？**

1. **简洁性**  
   - 当你只需要项目模板文件，而不需要整个版本历史时，`degit` 是更好的选择。  
   - 例如，你从某个模板项目开始开发新项目时，不需要模板项目的提交历史，`degit` 可以直接提取干净的文件结构。

2. **避免错误操作**  
   - 使用 `git clone` 时，本地副本仍是一个 Git 仓库。如果开发者不小心提交了更改到原始仓库（或误推到远程仓库），可能会导致问题。  
   - `degit` 提取的文件没有 Git 跟踪，因此更安全。

3. **轻量级与快速**  
   - `degit` 不会下载完整的 `.git` 文件夹（包括历史记录），提取速度更快，占用空间更少。

4. **多分支模板的便捷性**  
   - `degit` 支持直接指定分支或标签，比如：
     ```bash
     npx degit user/project#feature-branch my-project
     ```
     - 这使得从特定分支提取模板非常方便。

---

### **3. `degit` 的适用场景**

- 使用开源项目模板启动新项目。
- 需要快速复制项目的某个分支或版本，但不想带上历史记录。
- 避免原始模板仓库与新项目之间的误关联。

---

### **4. 示例对比**

#### 使用 `git clone`：
```bash
git clone https://github.com/user/project.git
cd project
```
结果：
- 下载了完整的 Git 仓库，包括 `.git` 文件夹。
- 本地目录是一个 Git 仓库，跟踪原始远程仓库。

#### 使用 `degit`：
```bash
npx degit user/project#main my-project
cd my-project
```
结果：
- 只下载了 `main` 分支中的文件。
- 本地目录不是一个 Git 仓库。

---

### **5. 何时仍应使用 `git clone`？**

- 如果你需要完整的版本控制历史。
- 如果你计划对原始项目进行贡献（例如参与开源项目）。
- 如果你需要查看或切换不同分支。

---

## Vite
```bash
# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue
```

**在开发过程中，Vite 是一个服务器，而 index.html 是应用程序的入口点。**

### 快速启动一个项目
```bash
 npm install -D vite

 #create an index.html file like this:
 <p>Hello Vite!</p>

 #Then run the appropriate CLI command in your terminal:
 npx vite

 #The index.html will be served on http://localhost:5173.
```


### 示例：`index.html` 中 URL 自动调整基准路径

在 Vite 中，`index.html` 文件的 URL 会根据项目的根目录自动调整，无需使用像 `%PUBLIC_URL%` 这样的占位符。例如，下面是一个简单的 `index.html`：

#### 目录结构

```plaintext
project-root/
├── index.html
├── assets/
│   ├── logo.png
│   └── styles.css
├── src/
│   └── main.js
├── vite.config.js
```

#### index.html 示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vite Demo</title>
  <!-- CSS 引用 -->
  <link rel="stylesheet" href="/assets/styles.css">
</head>
<body>
  <h1>Welcome to Vite!</h1>
  <!-- 图片引用 -->
  <img src="/assets/logo.png" alt="Logo">
  <!-- JavaScript 模块引用 -->
  <script type="module" src="/src/main.js"></script>
</body>
</html>
```

#### 特性说明

1. **绝对路径解析**  
   - 例如 `<link href="/assets/styles.css">` 和 `<img src="/assets/logo.png">` 中的 URL 是以 `/` 开头的绝对路径。
   - 在开发环境下，这些路径会自动解析到项目根目录下的对应文件，而无需手动调整路径。

2. **无需 `%PUBLIC_URL%` 占位符**  
   - 传统工具（如 Create React App）需要通过 `%PUBLIC_URL%` 来动态生成正确的 URL，例如：  
     ```html
     <link rel="stylesheet" href="%PUBLIC_URL%/assets/styles.css">
     ```
     在 Vite 中，这不再需要，因为 URL 会根据项目根目录自动调整。

3. **生产环境下的路径调整**  
   - 构建后，Vite 会自动为这些路径添加正确的基准路径（如果你设置了 `base` 选项），确保部署时路径正确。例如：  
     如果在 `vite.config.js` 中设置了 `base: '/my-app/'`，生成的 HTML 会将 `/assets/styles.css` 调整为 `/my-app/assets/styles.css`。

#### vite.config.js 示例

如果需要自定义基准路径，可以在 `vite.config.js` 中配置：

```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/my-app/', // 部署时的根路径
});
```

---

### 运行示例

1. 在开发环境下运行：
   ```bash
   npm run dev
   ```
   Vite 会自动调整 URL，让文件正确加载。

2. 构建生产环境版本：
   ```bash
   npm run build
   ```
   生成的 `dist/index.html` 中，路径会根据 `base` 配置自动更新为 `/my-app/assets/styles.css`。  

### 总结

Vite 的这种自动路径调整机制，使得你在开发和生产环境中都能轻松管理静态资源路径，无需依赖占位符或复杂的路径处理逻辑，非常高效和方便！