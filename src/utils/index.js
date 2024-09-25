import 'animate.css'
//这边定义一个animateCSS方法
//第一个参数element为传入的H5元素对象
//第二个参数是对应的动画名称
//第三个参数可以不用传，默认参数即可
export const animateCSS = (element, animation, prefix = 'animate__') => {
    return new Promise((resolve, reject) => {
      const animationName = `${prefix}${animation}`;
      const node = element; // 直接使用 element
  
      node.classList.add(`${prefix}animated`, animationName);
  
      function handleAnimationEnd(event) {
        event.stopPropagation();
        node.classList.remove(`${prefix}animated`, animationName);
        resolve('Animation ended');
      }
  
      node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });
  };
  