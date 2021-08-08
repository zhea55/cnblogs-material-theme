# cnblogs-material-theme

## 预览图
![preview](https://github.com/zhea55/cnblogs-material-theme/blob/main/screenshot/night-article.png)

## 本主题特点：
- 极简，突出博客内容
- 高对比度，适合眼睛阅读
- 适配Dark Mode

## 安装：

```
npm install
npm run prod
```
生成最终样式文件dist/style.css

## 博客园后台配置
1. 进入设置页面
2. 配置皮肤为Custom
![config theme](https://raw.githubusercontent.com/zhea55/cnblogs-material-theme/main/screenshot/cnblogs-theme-setting1.png)
3. 禁用模板默认CSS
4. 将dist/style.css中的内容copy到页面定制CSS代码中
![paste css](https://raw.githubusercontent.com/zhea55/cnblogs-material-theme/main/screenshot/cnblogs-theme-setting2.png)

## 自定义主题样式
```
npm run dev
```
配置代理，将服务器响应的custom.css文件映射到本地dist/style.css文件
![fiddle proxy](https://raw.githubusercontent.com/zhea55/cnblogs-material-theme/main/screenshot/fiddle-proxypng.png)
