export const data = JSON.parse("{\"key\":\"v-b49e0398\",\"path\":\"/post/2023/04/19/1/\",\"title\":\"随便写写\",\"lang\":\"en-US\",\"frontmatter\":{\"layout\":\"Post\",\"title\":\"随便写写\",\"subtitle\":\"测试\",\"author\":\"Renovamen\",\"date\":\"2023-04-19T00:00:00.000Z\",\"useHeaderImage\":true,\"headerImage\":\"/img/home-bg/1.jpg\",\"headerMask\":\"rgb(14, 21, 5, .2)\",\"permalinkPattern\":\"/post/:year/:month/:day/:slug/\",\"tags\":[\"摸鱼\"]},\"excerpt\":\"<p>随便写写</p>\\n\",\"headers\":[{\"level\":2,\"title\":\"balabala\",\"slug\":\"balabala\",\"children\":[]}],\"readingTime\":{\"minutes\":1,\"words\":46},\"filePathRelative\":\"posts/1.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
