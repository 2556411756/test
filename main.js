window.addEventListener('load', function () {

    //T台效果
    //1.获取对象
    var con3box = this.document.querySelector("#right_3").querySelector('#xunhuan');
    var con3ul = con3box.querySelector('ul');
    var con3lis = con3ul.querySelectorAll('li');
    var leng = 0;
    //2.循环图
    function xunhuan() {
        var speed = 50;
        //3.复制一个ul，用于无缝滚动
        con3box.innerHTML += con3box.innerHTML;
        var con3uls = con3box.querySelectorAll('ul');
        //4.启动定时器，调用滚动函数
        var timer1 = window.setInterval(marquee, speed);
        con3box.onmouseover = function () {
            clearInterval(timer1);
        }
        con3box.onmouseout = function () {
            timer1 = setInterval(marquee, speed);
        }
        function marquee() {
            if (con3box.scrollLeft > con3uls[0].offsetWidth) {
                con3box.scrollLeft = 0;
            } else {
                // 浏览器缩放的时候,scrollTop + 1会被设置成 1 * window.devicePixelRatio, 如果结果小于1就会被判定成+ 0, 所以需要保证每次变化的值大于1
                const radios = parseFloat((1 / window.devicePixelRatio).toFixed(2)) + 0.01;
                con3box.scrollLeft = con3box.scrollLeft + radios;
            }
        }
    }
    xunhuan();


    //排行版经过变化效果
    //1.获取对象
    var con1top = this.document.querySelector('#top');
    var con1top_lis = con1top.querySelectorAll('.pointer');
    var cont1_lis = this.document.querySelector('#top_content').querySelectorAll('li')
    //2.添加监听
    con1top_lis[0].addEventListener('mouseenter', function () {
        cont1_lis[0].innerHTML = '<font>01</font>《肉蒲团》女星诱惑裙装集锦';
        cont1_lis[1].innerHTML = '<font>02</font> 范玮琪撞衫第一夫人彩条裙';
        cont1_lis[2].innerHTML = '<font>03</font> 何洁牵手释小龙甜美搭惹人爱';
        cont1_lis[3].innerHTML = '<font>04</font> 30款名媛轻熟搭打造气场衣橱';
        cont1_lis[4].innerHTML = '<font>05</font> “心计”美人林心如穿衣经';
        cont1_lis[5].innerHTML = '<font>06</font> 牛仔加点儿“红”今季最流行';
        cont1_lis[6].innerHTML = '<font>07</font> 蕾丝镂空装！若隐若现最妩媚';
        cont1_lis[7].innerHTML = '<font>08</font> 17个简约chic装搭出清新格调';
        cont1_lis[8].innerHTML = '<font>09</font> Dior新设计总监人选尘埃落定';
        cont1_lis[9].innerHTML = '<font>10</font> 亮色衣实搭功率调动春夏热情';
    })
    con1top_lis[1].addEventListener('mouseenter', function () {
        cont1_lis[0].innerHTML = '<font>01</font> 瑞丽网美容频道改版有奖调查';
        cont1_lis[1].innerHTML = '<font>02</font> 美白OK 小S热辣呛腔林志玲';
        cont1_lis[2].innerHTML = '<font>03</font> 文青至爱 小清新护肤品';
        cont1_lis[3].innerHTML = '<font>04</font> 香气性感带热榜 让诱惑升级';
        cont1_lis[4].innerHTML = '<font>05</font> 探密性格 找到专属香氛标签';
        cont1_lis[5].innerHTML = '<font>06</font> 明星最失败妆容 惨不忍睹';
        cont1_lis[6].innerHTML = '<font>07</font> 学8款最夯聚集女主角发型';
        cont1_lis[7].innerHTML = '<font>08</font> 新生代美女杨幂 时尚妆解约';
        cont1_lis[8].innerHTML = '<font>09</font> 《回家的诱惑》秋瓷炫发型';
        cont1_lis[9].innerHTML = '<font>10</font> 重口味美甲 比拼视觉冲击';
    })
    con1top_lis[2].addEventListener('mouseenter', function () {
        cont1_lis[0].innerHTML = '<font>01</font> Christofle流水线性家居艺术';
        cont1_lis[1].innerHTML = '<font>02</font> 自然元素壁纸会呼吸';
        cont1_lis[2].innerHTML = '<font>03</font> 初春家具糖果色来袭';
        cont1_lis[3].innerHTML = '<font>04</font> 条纹控！Diy初春给力装饰';
        cont1_lis[4].innerHTML = '<font>05</font> 给力柔美风 7款田园美餐厅';
        cont1_lis[5].innerHTML = '<font>06</font> 撞色小空间越“色”越出位';
        cont1_lis[6].innerHTML = '<font>07</font> 窗帘保养要看材质和款式';
        cont1_lis[7].innerHTML = '<font>08</font> “字母”大热百变装饰家都很精彩';
        cont1_lis[8].innerHTML = '<font>09</font> 早春选一款最“养眼”窗帘';
        cont1_lis[9].innerHTML = '<font>10</font> 威廉王子大婚甜蜜家饰走红';
    })
    con1top_lis[3].addEventListener('mouseenter', function () {
        cont1_lis[0].innerHTML = '<font>01</font> 十二星座变脸排行版';
        cont1_lis[1].innerHTML = '<font>02</font> 12星男对女人的非分之想';
        cont1_lis[2].innerHTML = '<font>03</font> 12星座隐婚的目的';
        cont1_lis[3].innerHTML = '<font>04</font> 会回去找前女友暧昧的星男';
        cont1_lis[4].innerHTML = '<font>05</font> 侯佩岑婚期比大S的好吗？';
        cont1_lis[5].innerHTML = '<font>06</font> 12星座五月运势早知道';
        cont1_lis[6].innerHTML = '<font>08</font> 猫石对话周运（4.18-4.24）';
        cont1_lis[7].innerHTML = '<font>09</font> 琼女郎与黄志忠为何离婚？';
        cont1_lis[8].innerHTML = '<font>07</font> 谁是值得嫁的星座好老公？';
        cont1_lis[9].innerHTML = '<font>10</font> 从梦境看内心最孤寂的八种人';
    })
    con1top_lis[4].addEventListener('mouseenter', function () {
        cont1_lis[0].innerHTML = '<font>01</font> 未来一个月你的运势多少分？';
        cont1_lis[1].innerHTML = '<font>02</font> 素颜时你勾引功力有多强？';
        cont1_lis[2].innerHTML = '<font>03</font> 单身的你最缺少什么？';
        cont1_lis[3].innerHTML = '<font>04</font> 婚后的你是哪种主妇命？';
        cont1_lis[4].innerHTML = '<font>05</font> 婚后你的身价会跌多少？';
        cont1_lis[5].innerHTML = '<font>06</font> 你是他眼中的西施吗？';
        cont1_lis[6].innerHTML = '<font>07</font> 你有被暗恋的潜质吗？';
        cont1_lis[7].innerHTML = '<font>08</font> 这辈子你老公会偷吃几次？';
        cont1_lis[8].innerHTML = '<font>09</font> 你会放错电钓错鱼吗？';
        cont1_lis[9].innerHTML = '<font>10</font> 你“抢钱”能力有多强？';
    })
    //3.离开时默认第一个
    con1top.addEventListener('mouseleave', function () {
        cont1_lis[0].innerHTML = '<font>01</font>《肉蒲团》女星诱惑裙装集锦';
        cont1_lis[1].innerHTML = '<font>02</font> 范玮琪撞衫第一夫人彩条裙';
        cont1_lis[2].innerHTML = '<font>03</font> 何洁牵手释小龙甜美搭惹人爱';
        cont1_lis[3].innerHTML = '<font>04</font> 30款名媛轻熟搭打造气场衣橱';
        cont1_lis[4].innerHTML = '<font>05</font> “心计”美人林心如穿衣经';
        cont1_lis[5].innerHTML = '<font>06</font> 牛仔加点儿“红”今季最流行';
        cont1_lis[6].innerHTML = '<font>07</font> 蕾丝镂空装！若隐若现最妩媚';
        cont1_lis[7].innerHTML = '<font>08</font> 17个简约chic装搭出清新格调';
        cont1_lis[8].innerHTML = '<font>09</font> Dior新设计总监人选尘埃落定';
        cont1_lis[9].innerHTML = '<font>10</font> 亮色衣实搭功率调动春夏热情';
    })


    //content_1 右侧部分滑动变化效果
    //1.获取对象
    var con1right = this.document.querySelector("#right_2");
    var con1right_lis = con1right.querySelectorAll('li');
    var con1right_img = con1right.querySelector('img')
    var con1right_p1 = con1right.querySelector('.title');
    var con1right_p2 = con1right.querySelector('.content');
    //3.被选中 添加类名.chosen
    for (var i = 0; i < con1right_lis.length; i++) {
        con1right_lis[i].addEventListener('mouseenter', function () {
            //排他思想
            for (var j = 0; j < con1right_lis.length; j++) {
                con1right_lis[j].className = '';
            }
            this.className = 'chosen'
        })
    }
    //4.经过触发
    con1right_lis[0].addEventListener('mouseenter', function () {
        con1right_img.src = 'images/20110325143756sd.jpg';
        con1right_p1.innerHTML = '《瑞丽时尚先锋》';
        con1right_p2.innerHTML = '《瑞丽时尚先锋》5月号4月16日全国上市······'
    })
    con1right_lis[1].addEventListener('mouseenter', function () {
        con1right_img.src = 'images/20110330202924ss.jpg';
        con1right_p1.innerHTML = '4月号《瑞丽时尚先锋》有奖调查';
        con1right_p2.innerHTML = '只要认真填写问卷，就有机会获得精美礼品'
    })
    con1right_lis[2].addEventListener('mouseenter', function () {
        con1right_img.src = 'images/201101061405491.jpg';
        con1right_p1.innerHTML = '瑞丽阳光基金';
        con1right_p2.innerHTML = '瑞丽阳光基金“对话希望”公益图片展成功举行······'
    })


    //滚动函数animate（竖直滚动）
    function animateY(obj, target, callback) {
        //先清除定时器
        clearInterval(obj.timer);
        // console.log(obj.offsetTop);
        obj.timer = setInterval(function () {
            //步长
            var step = Math.ceil(target - obj.offsetTop) / 10;
            // console.log(step);
            //判断步长正负
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            //如果当前位置==target，取消定时器
            if (obj.offsetTop == target) {
                clearInterval(obj.timer);
                callback && callback();
            }
            //赋值，记得加px
            obj.style.top = obj.offsetTop + step + 'px';
        }, 30)
    }

    //content_1_center 轮播图
    //1.获取对象
    var con1date = this.document.querySelector("#date_right").querySelector('div');
    var con1dateul = con1date.querySelector('ul');
    //用于控制到最后一个，回到第一个
    var index = 0;
    //动画实现
    //2.自动轮播
    var timerY = this.setInterval(function () {
        if (index == con1dateul.children.length - 1) {
            con1dateul.style.top = 0;
            index = 0;
        }
        index++;
        animateY(con1dateul, -index * con1date.offsetHeight);
    }, 2000)
    //3.当鼠标停在某一条小li上，停止滚动
    var con1dateli = con1dateul.querySelectorAll('li');
    for (var k = 0; k < con1dateli.length; k++) {
        con1dateli[k].addEventListener('mouseenter', function () {
            clearInterval(timerY);
        })
        con1dateli[k].addEventListener('mouseleave', function () {
            timerY = setInterval(function () {
                if (index == con1dateul.children.length - 1) {
                    con1dateul.style.top = 0;
                    index = 0;
                }
                index++;
                animateY(con1dateul, -index * con1date.offsetHeight);
            }, 3000)
        })
    }


    //content_1_left实现轮播图
    //1.获取对象
    var con1bianhua = this.document.querySelector('.bianhua1');
    var con1img = con1bianhua.querySelectorAll('img');
    var con1lis = con1bianhua.querySelectorAll('li');
    var con1contents = con1bianhua.querySelectorAll(".img_content");
    var number = 0
    //5.计时器
    var timeX = this.setInterval(function () {
        //当运动到最后一张照片时候，number=0
        number++;
        if (number == 8) {
            number = 0;
        }
        $('.img img').eq(number).stop().show("nomal", "linear", function () {
            $('.img img').eq(number - 1).css('display', 'none')
        });
        //6.此时的li和content跟着图片而变化
        for (var k = 0; k < con1lis.length; k++) {
            con1lis[k].className = '';
            con1contents[k].style.display = 'none';
        }
        con1lis[number].className = 'checked';
        con1contents[number].style.display = 'block';
    }, 2000)
    //2.当点击某个li时获得 .checked类css变化
    for (var i = 0; i < con1lis.length; i++) {
        //3.为点击事件的li获取其索引号
        con1lis[i].setAttribute('index', i)
        con1lis[i].addEventListener('click', function () {
            var index = this.getAttribute('index');
            number = index;
            //排他思想
            for (var k = 0; k < con1lis.length; k++) {
                con1lis[k].className = '';
                //4.根据点击的li的索引号，更改img和content的内容
                con1img[k].style.display = 'none';
                con1contents[k].style.display = 'none';
            }
            this.className = 'checked';
            con1img[index].style.display = 'block';
            con1contents[index].style.display = 'block';
            clearInterval(timeX);
            timeX = setInterval(function () {
                //当运动到最后一张照片时候，number=0
                number++;
                if (number == 8) {
                    number = 0;
                }
                $('.img img').eq(number).stop().show("nomal", "linear", function () {
                    $('.img img').eq(number - 1).css('display', 'none')
                });
                //6.此时的li和content跟着图片而变化
                for (var k = 0; k < con1lis.length; k++) {
                    con1lis[k].className = '';
                    con1contents[k].style.display = 'none';
                }
                con1lis[number].className = 'checked';
                con1contents[number].style.display = 'block';
            }, 2000)
        })
    }


    //Model模特图片显示轮播图的代码
    //1.获取对象
    var box = this.document.querySelector('#box');
    var box3 = box.querySelector("#bianhua3")
    var box_img = box3.querySelectorAll('.box_img')
    var box_lis = box.querySelectorAll("li");
    var paixu = 0;
    //4.计时器
    var time = this.setInterval(function () {
        paixu++;
        if (paixu == 2) {
            paixu = 0
        }
        $('#bianhua3 .box_img').eq(paixu - 1).css('display', 'none')
        $('#bianhua3 .box_img').eq(paixu).stop().show("slow", "linear");
        for (var k = 0; k < box_lis.length; k++) {
            box_lis[k].className = '';
            box_img[k].style.display = 'none'
        }
        box_lis[paixu].className = 'chosen';
        box_img[paixu].style.display = 'block';
    }, 1500)
    //2.当点击标签1,2时，添加chosen样式
    for (var i = 0; i < box_lis.length; i++) {
        //3.为其添加索引号
        box_lis[i].setAttribute('index', i);
        box_lis[i].addEventListener('click', function () {
            var index = this.getAttribute('index');
            for (var k = 0; k < box_lis.length; k++) {
                box_lis[k].className = '';
                box_img[k].style.display = 'none'
            }
            this.className = 'chosen';
            box_img[index].style.display = 'block';
            clearInterval(time);
            paixu = index;
            time = setInterval(function () {
                paixu++;
                if (paixu == 2) {
                    paixu = 0
                }
                $('#bianhua3 .box_img').eq(paixu - 1).css('display', 'none')
                $('#bianhua3 .box_img').eq(paixu).stop().show("slow", "linear");
                for (var k = 0; k < box_lis.length; k++) {
                    box_lis[k].className = '';
                    box_img[k].style.display = 'none'
                }
                box_lis[paixu].className = 'chosen';
                box_img[paixu].style.display = 'block';
            }, 1500)
        })
    }
})

