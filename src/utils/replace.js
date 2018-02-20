export default (string, searchValue, replaceValue) => {
  if (!searchValue) {
    return string
  }

  const search = searchValue.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')

  if (typeof replaceValue === 'function') {
    const index = string.search(new RegExp(search, 'gi'))
    const replaceString = string
      .substring(index)
      .substring(0, searchValue.length)

    return string.replace(new RegExp(search, 'gi'), replaceValue(replaceString))
  }

  return string.replace(new RegExp(search, 'gi'), replaceValue)
}
