function render(src, des) {
  if (des instanceof Element && src instanceof Element) {
    des.appendChild(src)
  }
}