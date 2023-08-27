export const categoryMap = {"tag":{"/":{"path":"/tags/","map":{"AI":{"path":"/tags/ai/","keys":["v-01487058"]},"Springboot":{"path":"/tags/springboot/","keys":["v-01487058"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
