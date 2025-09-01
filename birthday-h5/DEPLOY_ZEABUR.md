## Zeabur 部署指南（生日祝福 H5）

### 一、准备
- 确保代码已推送到 Git 仓库（GitHub/GitLab）。
- Node 版本：>= 18（package.json 已声明 engines）。

### 二、在 Zeabur 控制台创建服务
1. 登录 Zeabur（使用 GitHub 账号）。
2. 新建项目 → 添加服务 → 选择“从 Git 仓库部署”。
3. 选择本仓库与分支（一般为 main/master）。
4. 框架类型：Static Site（静态站点）。
5. 构建命令：
```
npm ci && npm run build
```
6. 输出目录：
```
dist
```
7. 启动命令：留空（静态站点不需要）。

Zeabur 通常会自动识别 Vite 前端项目，如未自动填充，请按上面配置。

### 三、环境变量（如无需求可跳过）
- 本项目默认无需后端/密钥。若后续增加 API，可在“环境变量”中添加。

### 四、域名与访问
- 部署完成后，在“域名/网络”中生成 zeabur.app 二级域名。
- 可绑定自定义域名：按指引添加 CNAME 记录。

### 五、常见问题
- 构建报 Node 版本不符：确保 Zeabur 使用 Node 18+（项目设置或使用 .nvmrc）。
- 资源路径 404：确保使用 Vite 默认的相对路径或设置 base；当前项目使用相对路径，无需改动。
- 包体过大告警：后续可做资源懒加载与动态 import 优化。

### 六、本地验证
```
npm ci
npm run build
npm run preview
```
访问本地预览端口确认无误后再推送。
