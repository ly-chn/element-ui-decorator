/**
 * 快速生成一些字典项
 * @param labelListStr {string}
 * @return {{label, value}[]}
 */
const generateDict = labelListStr => {
  let value = 1
  return labelListStr.split(',').map(label=>({label, value: String(value++)}))
}

/**
 * 配套字典系统使用
 * @type {Object.<String, {label, value}[]>}
 */
const dictMap = {
  productionType: generateDict('虚拟物品,休闲零食,服饰箱包,电脑办公')
}

export function getDictByCode(dictCode) {
  if (dictMap[dictCode]) {
    return dictMap[dictCode]
  }
  throw Error('无匹配字典项')
}
