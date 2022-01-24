// 防抖：在短时间内多次触发同一个函数，只执行最后一次
function debounce(fn,delay){
  let timer = null
  if(timer) clearTimeout(timer)
  return function debounced(){
    timer = setTimeout(() => {
      fn()
    }, delay);
  }
}

// 节流：在执行一次后的一段时间内不会再触发
function debounce(fn,delay){
}