# my-doc-jsx-plugin-template
这是一个[my-doc-jsx](https://github.com/laden666666/my-doc-jsx "") 的一个插件模板，用于创建 **my-doc-jsx** 插件。

## 使用方法
首先下载该模板，记住尽量不要用 **git clone** 下载该插件，因为这样会生成.git目录，这样会影响你将你的插件上传到git上面。

然后修改 **package.json** 文件，修改里面的 **name** 、 **main** 和 **版本** 。

修改 **build/webpack.*.conf.js** 里面的插件名称。模板项目的插件名称为 **myDocJsxPluginTemplate** ,你需要将其改为你插件的名字。

修改 **src** 里面的文件，根据hello world的例子完成你的插件


## 调试
执行

```javascript
npm run dev
```
模板工程会打开一个浏览器页面供你查看插件的效果


## 打包
执行

```javascript
npm run build
```
这样会在dist目录中输出插件的打包文件。


## 文档编写
修改 **doc-jsx/README.jsx** 里面的文档，这是个doc-jsx文档。然后执行

```javascript
npm run doc
```
默认执行是不包含任何插件的，你可以修改 **package.json** 文件里面的脚本，可以为doc-jsx加插件，甚至可以使用你刚刚开发的插件。



