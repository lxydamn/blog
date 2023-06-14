export const data = JSON.parse("{\"key\":\"v-33d02486\",\"path\":\"/posts/2023-4-19%E6%B5%8B%E8%AF%95.html\",\"title\":\"一个小小的测试\",\"lang\":\"en-US\",\"frontmatter\":{\"layout\":\"Post\",\"title\":\"一个小小的测试\",\"subtitle\":\"测试一下文章的功能\"},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":1,\"words\":20},\"filePathRelative\":\"posts/2023-4-19测试.md\"}")

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
