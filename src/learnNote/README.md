
# 默认主题

::: tip 提示
本页所列的选项仅对默认主题生效。如果你在使用一个自定义主题，选项可能会有不同。
:::
## 首页
默认的主题提供了一个首页（Homepage）的布局 (用于 [这个网站的主页](http://www.baidu.com) )。想要使用它，需要在你的根级 README.md 的 [YAML front matter](http://www.baidu.com) 指定 home: true。以下是这个网站实际使用的数据：
```js{4}

home: true
heroImage: /hero.png
actionText: 快速上手 →
actionLink: /zh/guide/
```

任何 `YAML front matter` 之后额外的内容将会以普通的 `markdown` 被渲染，并插入到 features 的后面。

代码行高亮
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```