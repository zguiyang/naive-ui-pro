# 布局 Layout

布局是用来布局的。

这个组件用起来有点麻烦，但是就像手动挡的车，还是值得一试的。

如果你正在使用 v2.3.0 以前的版本，你可能需要了解一下 <n-a href="#v2.3.0-的变化">v2.3.0 的变化</n-a>。

<!--single-column-->

## 演示

```demo
basic.vue

```

## API

### Layout, Layout Content Props

| 名称             | 类型                     | 默认值      | 说明                                                                                                                                                                                                                                                                                                 | 版本   |
| ---------------- | ------------------------ | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| content-class    | `string`                 | `undefined` | 可滚动内容节点的类名                                                                                                                                                                                                                                                                                 | 2.36.0 |
| content-style    | `string \| Object`       | `undefined` | 可滚动内容节点的样式                                                                                                                                                                                                                                                                                 |        |
| embedded         | `boolean`                | `false`     | 使用更深的背景色展现嵌入效果，只对亮色主题生效                                                                                                                                                                                                                                                       |        |
| has-sider        | `boolean`                | `false`     | 组件内部是否有边栏，如果有的话必须设为 `true`                                                                                                                                                                                                                                                        |        |
| native-scrollbar | `boolean`                | `true`      | 是否在自身使用原生滚动条。如果设定为 `false`，`Layout` 将会对内容使用 `naive-ui` 风格的滚动条                                                                                                                                                                                                        |        |
| position         | `'static' \| 'absolute'` | `'static'`  | `static` 模式将会把 CSS `position` 设为 `static`，`absolute` 模式将会把 CSS `position` 设为 `absolute`，还将 `left`、`right`、`top`、`bottom` 设为 `0`。`absolute` 模式在你想将内容在一个固定容器或者将这个页面的布局设为固定位置的时候很有用。你可能需要修改一些 style 来确保它按照你预想的方式展示 |        |
| scrollbar-props  | `object`                 | `undefined` | 属性参考 [Scrollbar props](scrollbar#Scrollbar-Props)                                                                                                                                                                                                                                                |        |
| sider-placement  | `'left' \| 'right'`      | `left`      | 组件折叠侧边栏在哪一侧                                                                                                                                                                                                                                                                               |        |
| on-scroll        | `(e: Event) => void`     | `undefined` | 内容的滚动事件回调函数                                                                                                                                                                                                                                                                               |        |
