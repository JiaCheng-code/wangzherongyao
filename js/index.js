window.onload = function () { 
    // 网页logo,名称：星落农场切换
    // 1. 获取元素
    var headXlnc = document.getElementById("head-xlnc");
    var headerXlncBig = document.getElementById("header-xlnc-big");
    headXlnc.onmouseover = function () { 
        headXlnc.style.display = "none";
        headerXlncBig.style.display = "block"
     }
     headerXlncBig.onmouseout = function () { 
        headXlnc.style.display = "block";
        headerXlncBig.style.display = "none"
      }
      //咨询轮播图
      var infos = function() {
        var r = document.getElementsByClassName('adBtn')[0],
            rotationOption = r.getElementsByTagName('a'),
            rotationOptionLen = rotationOption.length;
        var rotationImage = document.getElementsByClassName('this-cart')[0],
            x = 0;
    
        function play() {
            var time = setInterval(function() {
                autoOption();
            }, 3000);
        }
        play();
    
        function autoOption() {
            x++;
            if(x > 4) {
                x = 0;
            }
            for(var i = 0; i < rotationOptionLen; i++) {
                rotationOption[i].className = '';
            }
            rotationImage.style.left = x * -608 + 'px';
            rotationOption[x].className = 'active';
        }
    
        for(var i = 0; i < rotationOptionLen; i++) {
            (function(i) {
                rotationOption[i].index = i;
                rotationOption[i].onmouseover = function() {
                    for(var j = 0; j < rotationOptionLen; j++) {
                        rotationOption[j].className = '';
                    }
                    this.className = 'active';
                    if(this.index == 0) {
                        return(function() {
                            rotationImage.style.left = 0 + 'px';
                            x = 0;
                        }())
    
                    } else if(this.index == 1) {
                        return(function() {
                            rotationImage.style.left = -608 + 'px';
                            x = 1;
                        }())
                    } else if(this.index == 2) {
                        return(function() {
                            rotationImage.style.left = -1216 + 'px';
                            x = 2;
                        }())
    
                    } else if(this.index == 3) {
                        return(function() {
                            rotationImage.style.left = -1824 + 'px';
                            x = 3;
                        }())
    
                    } else if(this.index == 4) {
                        return(function() {
                            rotationImage.style.left = -2432 + 'px';
                            x = 4;
                        }())
    
                    }
                }
    
            }(i))
        }
    }
    infos();
    //  新闻
    var xinweninfos = function () { 
        var t = document.getElementsByClassName('tab-hd')[0],
	topTab = t.getElementsByTagName('li'),
	topTabLen = topTab.length ;
var activeOption = document.getElementsByClassName('tab-rotation-warpper')[0];
for(var i = 0; i < topTabLen; i++) {
	topTab[i].index = i;
	topTab[i].onmouseover = function() {
		for(var j = 0; j < topTabLen; j++) {
			topTab[j].className = '';
		}
		this.className = 'tab-hd-active';
		if(this.index == 0) {
			return(function() {
				activeOption.style.left = 0 + 'px';
			}())

		} else if(this.index == 1) {
			return(function() {
				activeOption.style.left = -330 + 'px';
			}())
		} else if(this.index == 2) {
			return(function() {
				activeOption.style.left = -660 + 'px';
			}())

		} else if(this.index == 3) {
			return(function() {
				activeOption.style.left = -990 + 'px';
			}())

		} else if(this.index == 4) {
			return(function() {
				activeOption.style.left = -1320 + 'px';
			}())

		}
	}
 }
    }
    xinweninfos();
    //内容中心
    var neironginfo = function () { 
        var n = document.getElementsByClassName('item-top-nav-ul')[0],
        itemTable = n.getElementsByTagName('li');
    itemTableLen = itemTable.length;
        var itemRotation = document.getElementsByClassName('item-rotation-cart')[0];
        for(var i = 0; i < itemTableLen; i++) {
            itemTable[i].index = i;
            itemTable[i].onmouseover = function() {
                for(var j = 0; j < itemTableLen; j++) {
                    itemTable[j].className = '';
                }
                this.className = 'border-bottom-color';
                if(this.index == 0) {
                    itemRotation.style.marginLeft = 0 + 'px';
                } else if(this.index == 1) {
                    itemRotation.style.marginLeft = -872 + 'px';
                } else if(this.index == 2) {
                    itemRotation.style.marginLeft = -1744 + 'px';
                }
            }
        }
     }
     neironginfo();
    var yingxinfo = function () { 
        var t = document.getElementsByClassName('item-right-nav-ul')[0],
        tabes = t.getElementsByTagName('li'),
        tabesLen = tabes.length;
        var tabOption = document.getElementsByClassName('item-box-right')[0];
        for(var i = 0; i < tabesLen; i++) {
            tabes[i].index = i;
            tabes[i].onmouseover = function() {
                for(var j = 0; j < tabesLen; j++) {
                    tabes[j].className = '';
                }
                this.className = 'border-bottom-color';
                if(this.index == 0) {
                    tabOption.style.left = 0 + 'px';
                } else if(this.index == 1) {
                    tabOption.style.left = -294 + 'px';
                } else if(this.index == 2) {
                    tabOption.style.left = -588 + 'px';
                }
            }
        }
      }
      yingxinfo()
}
