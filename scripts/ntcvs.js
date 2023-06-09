let clickCount = 0;

  function typeWriter(text, lineId, delay) {
    let line = document.getElementById(lineId);
    let textArray = text.split("");
    let i = 0;

    function type() {
      if (i < textArray.length) {
        line.textContent += textArray[i];
        i++;
        setTimeout(type, delay);
      }
    }

    type();
  }


// 获取Next按钮的引用
var nextButton = document.getElementById("nextButton");

// 定义控制按钮显示和隐藏的函数
function fadeButtonIn() {
  nextButton.style.opacity = "1";
}

function fadeButtonOut() {
  nextButton.style.opacity = "0";
}

// 定义点击Next按钮时触发的函数
function nextText() {
  // 淡出按钮
  fadeButtonOut();

  // 在这里添加处理文本显示的逻辑

  // 淡入按钮
  setTimeout(fadeButtonIn, 2000); // 设置延迟以等待文本显示完成后再淡入按钮
}




  function clearText() {
    let lines = document.getElementsByClassName("typing-text")[0].getElementsByTagName("p");
    for (let i = 0; i < lines.length; i++) {
      lines[i].textContent = "";
    }
  }

  function playSecondText() {
    clearText();

    setTimeout(function() {
      typeWriter("蝴蝶的變態過程，是幼蟲在蛹裡融化，重組為成蟲身體。", "line3", 100);
    }, 0);
    setTimeout(function() {
      fadeButtonIn()
    }, 3500);

    

    
  }

  function playThirdText() {
    clearText();

    setTimeout(function() {
      typeWriter("時代急速更迭，我們來得及成長嗎？", "line1", 100);
    }, 0);// 第一行文字逐字出現，每個字之間間隔100毫秒

    setTimeout(function() {
      typeWriter("反覆把自己融化，凝結成新的翅膀藉以跟上時間洪流。", "line2", 80);
    }, 3000);// 在第一行文字完全出現之後，等待2秒後，第二行文字逐字出現

    setTimeout(function() {
      typeWriter("但在融化的過程會不會有什麼消失了？", "line3", 80);
    }, 6500);// 在第二行文字完全出現之後，等待3秒後，第三行文字逐字出現


    setTimeout(function() {
      typeWriter("不斷重組的時候又有什麼被改變了？", "line4", 80);
    }, 9500);// 在第三行文字完全出現之後，等待3秒後，第四行文字逐字出現

    setTimeout(function() {
      typeWriter("如 果 ， 我 們 都 是 不 完 全 變 態 的 產 物 。", "line5", 110);
    }, 12500);// 在第四行文字完全出現之後，等待3秒後，第五行文字逐字出現
    // }
    setTimeout(function() {
      fadeButtonIn()
    }, 15500);

  }

  // 文字按鈕閃爍
  function shinningFirst(){
    let font_link = document.getElementById("font_link")
    setTimeout(function() {
    font_link.classList.add("nav_shinning");
    }, 4000);
  }



  function nextText() {
    clickCount++;

    if (clickCount === 1) {
      playSecondText();
      fadeButtonOut()
    } else if (clickCount === 2) {
      playThirdText();
      fadeButtonOut()
    } else if (clickCount === 3) {
      fadeButtonOut()
      showImage();
      shinningFirst()
    }
  }

  // 隱藏首頁理念的打字機文字行
  function hideLines() {
    let lines = document.getElementsByClassName("typing-text")[0].getElementsByTagName("p");
    for (let i = 0; i < lines.length; i++) {
      lines[i].style.display = "none";
    }
  }
  
  // 顯示首頁理念的打字機文字行
  function showLines() {
    let lines = document.getElementsByClassName("typing-text")[0].getElementsByTagName("p");
    for (let i = 0; i < lines.length; i++) {
      lines[i].style.display = "block";
    }
  }

  // 隱藏首頁 Next 按鈕
  function hideNextButton() {
    let nextButton = document.getElementById("nextButton");
    nextButton.style.display = "none";
    
  }
  
  // 顯示首頁 Next 按鈕
  function showNextButton() {
    let nextButton = document.getElementById("nextButton");
    nextButton.style.display = "block";
  }

  


  //顯示圖片
  function showImage() {
    hideLines();
    clearText();
    // hideNextButton()
    let imageContainer = document.getElementById("imageContainer");

    imageContainer.style.display = "block";

    setTimeout(function() {
      imageContainer.classList.add("show-image");
    }, 10);

    fadeIn(imageContainer);
  }

  //淡入
  function fadeIn(element) {
    let opacity = 0;
    let timer = setInterval(function() {
      if (opacity >= 1) {
        clearInterval(timer);
      }
      element.style.opacity = opacity;
      opacity += 0.1;
    }, 200);
  }

  setTimeout(function() {
  typeWriter("融化、融化、融化…", "line1", 80);
}, 500);
  setTimeout(function() {
    typeWriter("重組。", "line2", 160);
  }, 2000);
  setTimeout(function() {
    typeWriter("但幾分之幾的什麼，好像蒸發了", "line3", 80);
  }, 3500);
  setTimeout(function() {
    typeWriter("凝結、凝結、凝結…", "line4", 80);
  }, 6000);
  setTimeout(function() {
    typeWriter("滴落。", "line5", 160);
  }, 8000);
  setTimeout(function() {
    fadeButtonIn()
  }, 8500);


  function toggleMenu() {
    var links = document.querySelector('.links');
    links.style.display = links.style.display === 'none' ? 'flex' : 'none';
  }
  