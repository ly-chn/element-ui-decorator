type RuleFunction = (message?: string) => any

interface LyRule {
  /**
   * 校验非空
   */
  must: RuleFunction,
}

declare module 'vue/types/vue' {
  interface Vue {
    // 占位函数
    $todo: (...args) => void,
    $rules: LyRule
  }
}

export interface Vue {
  $todo: (...args: any) => void,
  $rules: LyRule
}

// vuepress环境下识别问题, 暂未找到方案, 姑且使用global
declare global{
  const $todo: (...args: any[])=>void
  const $rules: LyRule
}
