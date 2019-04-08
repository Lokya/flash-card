## :mortar_board: flash-card

### 1、引子

最近在学习单词，但是由于岁数上涨，记忆力跟不上了。想起来以前学习单词的时候有什么单词卡片，方便利用碎片时间去学习单词，也方便记忆。  

google和百度了许多，要么就是要收费，要么就是功能达不到我要的这么简单的功能。（虽然做的很强大）。于是我突发奇想自己写一个。

### 2、相关
环境: node环境

打包: webpack + electron-packager

react + electron + js-xlsx + react-router + electron-packager

项目中的TS没怎么用到，只是搭建的框架上带了就顺便用了

### 3、使用
下载后执行yarn 安装依赖

浏览器使用： yarn start

手动启动软件：yarn build 然后执行 yarn elestart

生成可执行文件： yarn build 然后执行 yarn packager 在./build/flashCard-darwin-x64/下面可以找到flash-card.app文件 双击执行即可

:exclamation: excel格式 (特别注意)

1、定义4列 分别为 key word pronunciation translate

解释：key主键 word单词 pronunciation发音、读法 translate翻译

2、key从1开始到所有单词长度，不可重复。word列为你要展示的单词，pronunciation为读法或者发音的内容，translate为翻译

3、报错excel文件，读取使用

例如：

|key|word|pronunciation|translate|
|---|---|---|---|
|1|hello|[hə'ləʊ]|你好|
|2|name|[[neɪm]]|姓名|

### 4、程序使用
1、点击开始使用，可以在帮助选项看到如何使用

2、点击选择excel文件

3、支持顺序预览单词和乱序预览单词

### 5、后续功能还在完善中




## :stuck_out_tongue_closed_eyes:又不是不能能用，理解万岁（破音） ---罗老师名言

