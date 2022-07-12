// 默认触发时机
const trigger = ['change', 'blur']

/**
 * types\ly\prototype\vue-extends.d.ts
 * @file vue-extends.d.ts
 */
const rules = {
  // 不能为空
  must(message = '此项不能为空') {
    return {
      required: true,
      validator: (rule, value, callback) => {
        if (value === true || value === false || typeof value === 'number') {
          return callback()
        }
        if (!value || !value.length) {
          return callback(message)
        }
        callback()
      },
      trigger
    }
  }
}

export default rules
