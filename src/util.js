export function calcTotalByItems(items) {
  if(items.length !== 0) {
    return items.map(item => { return parseInt(item.price.replace(/[\,]/g, ''), 10) }).reduce((prev, total) => {
      return prev + total
    })
  } else {
    return 0
  }
}
