// 4 задание

console.log([].map.call(document.querySelectorAll('[data-id]'), function(el) {
  return el.dataset.id;
  }));

// 5 задание

const wrapper = document.querySelector('#wrapper');
const sorted = [...wrapper.querySelectorAll('div')].sort(
  (a, b) => a.offsetHeight - b.offsetHeight
);
sorted.forEach(item => item.parentNode.appendChild(item));