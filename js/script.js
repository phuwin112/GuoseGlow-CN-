//banner 轮播图
// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
  // 使用var代替let/const
  var slider = document.querySelector('.slider');
  var slides = document.querySelectorAll('.slide');
  var prevBtn = document.querySelector('.prev');
  var nextBtn = document.querySelector('.next');
  var dots = document.querySelectorAll('.dot');
  
  var currentIndex = 0;
  var intervalId;
  var slideCount = slides.length;
  
  // 初始化轮播
  function initSlider() {
    updateSlider();
    startAutoSlide();
  }
  
  // 更新轮播位置
  function updateSlider() {
    // 使用传统字符串拼接代替模板字符串
    // 添加浏览器前缀确保兼容性
    slider.style.webkitTransform = 'translateX(-' + (currentIndex * 100) + '%)';
    slider.style.MozTransform = 'translateX(-' + (currentIndex * 100) + '%)';
    slider.style.msTransform = 'translateX(-' + (currentIndex * 100) + '%)';
    slider.style.OTransform = 'translateX(-' + (currentIndex * 100) + '%)';
    slider.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
    
    // 更新指示点状态
    for (var i = 0; i < dots.length; i++) {
      if (i === currentIndex) {
        dots[i].className = 'dot active';
      } else {
        dots[i].className = 'dot';
      }
    }
  }
  
  // 下一张
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
  }
  
  // 上一张
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlider();
  }
  
  // 自动轮播
  function startAutoSlide() {
    // 使用传统函数代替箭头函数
    intervalId = setInterval(function() {
      nextSlide();
    }, 3000);
  }
  
  // 停止自动轮播
  function stopAutoSlide() {
    if (intervalId) {
      clearInterval(intervalId);
    }
  }
  
  // 事件监听
  nextBtn.addEventListener('click', function() {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
  });
  
  prevBtn.addEventListener('click', function() {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
  });
  
  // 点击指示点跳转
  for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', (function(index) {
      return function() {
        stopAutoSlide();
        currentIndex = index;
        updateSlider();
        startAutoSlide();
      };
    })(i));
  }
  
  // 鼠标悬停暂停轮播
  slider.addEventListener('mouseenter', stopAutoSlide);
  slider.addEventListener('mouseleave', startAutoSlide);
  
  // 初始化
  initSlider();
});


