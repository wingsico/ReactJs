function createElement(tag, attrs, ...props) {
  let el = document.createElement(tag)
  
  for (let key in attrs) {
    el.setAttribute(key, attrs[key])
  }

  props.forEach((prop) => {
    if (prop instanceof Element) {
      el.appendChild(prop)
    } else {
      el.innerHTML += prop
    }
  })
  return el
}