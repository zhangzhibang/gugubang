var now = new Date();
function createtime() {
    // 当前时间
    now.setTime(now.getTime() + 1000);
    var start = new Date("08/01/2022 00:00:00"); // 旅行者1号开始计算的时间
    var dis = Math.trunc(23400000000 + ((now - start) / 1000) * 17); // 距离=秒数*速度 记住转换毫秒
    var unit = (dis / 149600000).toFixed(6);  // 天文单位
    var grt = new Date("12/19/2024 00:00:00");	// 网站诞生时间
    var days = (now - grt) / 1e3 / 60 / 60 / 24,
        dnum = Math.floor(days),
        hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum,
        hnum = Math.floor(hours);
    1 == String(hnum).length && (hnum = "0" + hnum);
    var minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum,
        mnum = Math.floor(minutes);
    1 == String(mnum).length && (mnum = "0" + mnum);
    var seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum,
        snum = Math.round(seconds);
    1 == String(snum).length && (snum = "0" + snum);
    let currentTimeHtml = "";
    (currentTimeHtml =
        hnum < 18 && hnum >= 9
            ? `<img class='boardsign' src='https://img.shields.io/badge/-营业中-6adea8?style=social&logo=cakephp' title='什么时候能够实现财富自由呀~'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${dis} 千米，约为 ${unit} 个天文单位 🚀</div>`
            : `<img class='boardsign' src='https://img.shields.io/badge/-打烊了-6adea8?style=social&logo=coffeescript' title='下班了就该开开心心地玩耍~'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${dis} 千米，约为 ${unit} 个天文单位 🚀</div>`),
    document.getElementById("workboard") &&
    (document.getElementById("workboard").innerHTML = currentTimeHtml);
}
// 设置重复执行函数，周期1000ms
setInterval(() => {
    createtime();
}, 1000);


function whenDOMReady() {

    let lastSayHello = "";
   // if (location.pathname.startsWith('/about/')) meuicat.comments(), meuicat.Introduction(), meuicat.runtimen(), meuicat.fiftyonela();
  //评论条数
   if (location.pathname.startsWith('/about/'))
       var commentElements = document.querySelectorAll('.N_comments');
    commentElements.forEach(element => {
        if (element.classList.contains('N_comments')) {
            element.innerText ='5条评论';
        }
    });
    //个人介绍
    const e = [
            "🤖️ 数码科技爱好者",
            "🔍 分享与热心帮助",
            "🏠 智能家居小能手",
            "🔨 设计开发一条龙",
            "📷 人文摄影的坚定者",
            "🏃 脚踏实地行动派",
            "📚 热爱阅读的书虫迷",
            "🎵 薛之谦七年热爱粉",
            "🏋️‍♀️ 坚韧不拔的健身达人",
            "🍜 走哪吃哪的美食迷",
            "🎮 Minecraft骨灰级玩家",
            "👨‍🍳 一位爱做饭的程序猿",
        ],
        t = document.getElementById("Introduction");
    let o = e[Math.floor(Math.random() * e.length)];
    for (; o === lastSayHello;) o = e[Math.floor(Math.random() * e.length)];
    (t.textContent = o), (lastSayHello = o);
    //访问数
    let title = ['今日人数', '今日访问', '昨日人数', '昨日访问', '本月访问']
    let num = [5, 5, 5, 5, 5];
    let statisticEl = document.getElementById('statistic')
    for (let i = 0; i < title.length; i++) {
        if (!statisticEl) return
        if (i == 0 || i == num.length - 1) continue;
        statisticEl.innerHTML += '<div><span class="tips">' + title[i - 1] + '</span><span id=' + title[i - 1] + '>' + num[i] + '</span></div>'
    }

    let t1 = new Date("2024/12/15 00:00:00")
                .getTime(),
            n = new Date()
                .getTime(),
            a = Math.round((n - t1) / 1e3),
            l = (a / 7884e4)
                .toFixed(2);
        let c = document.getElementById("run-time");
        c && (c.innerHTML = `已稳定运行 ${l} 坤年 🏀`),
            setTimeout(null, 1e3);
}

whenDOMReady() // 打开网站先执行一次
document.addEventListener("pjax:complete", whenDOMReady) // pjax加载完成（切换页面）后再执行一次

// var meuicat = {
//     comments: function() {
//         fetch('/article.json')
//             .then(res => res.json())
//             .then(articleData => {
//                 const urls = Object.keys(articleData);
//
//                 fetch('{TWIKOO_LINK}', {
//                     method: "POST",
//                     body: JSON.stringify({ event: "GET_RECENT_COMMENTS", accessToken: "{YOUR_TOKEN}", includeReply: true, pageSize: -1 }),
//                     headers: { 'Content-Type': 'application/json' }
//                 })
//                     .then(res => res.json())
//                     .then(({ data }) => {
//                         const totalComments = data.length;
//                         const commentElements = document.querySelectorAll('.N_comments');
//                         commentElements.forEach(element => {
//                             if (element.classList.contains('N_comments')) {
//                                 element.innerText = totalComments + '条评论';
//                             } else {
//                                 console.log(`iCat提醒您：\n\n评论总数功能无法获取到正确的元素，请检查页面是否正常！\n\n教程地址：https://meuicat.com/blog/78/`);
//                             }
//                         });
//                     });
//             });
//     }, // 总评论数量
//     Introduction: function() {
//         const e = [
//                 "🤖️ 数码科技爱好者",
//                 "🔍 分享与热心帮助",
//                 "🏠 智能家居小能手",
//                 "🔨 设计开发一条龙",
//                 "📷 人文摄影的坚定者",
//                 "🏃 脚踏实地行动派",
//                 "📚 热爱阅读的书虫迷",
//                 "🎵 薛之谦七年热爱粉",
//                 "🏋️‍♀️ 坚韧不拔的健身达人",
//                 "🍜 走哪吃哪的美食迷",
//                 "🎮 Minecraft骨灰级玩家",
//                 "👨‍🍳 一位爱做饭的程序猿",
//             ],
//             t = document.getElementById("Introduction");
//         let o = e[Math.floor(Math.random() * e.length)];
//         for (; o === lastSayHello;) o = e[Math.floor(Math.random() * e.length)];
//         (t.textContent = o), (lastSayHello = o);
//     }, // about 个人介绍词
//     runtimen: function() {
//         let t = new Date("2024/12/15 00:00:00")
//                 .getTime(),
//             n = new Date()
//                 .getTime(),
//             a = Math.round((n - t) / 1e3),
//             l = (a / 7884e4)
//                 .toFixed(2);
//         let c = document.getElementById("run-time");
//         c && (c.innerHTML = `已稳定运行 ${l} 坤年 🏀`),
//             setTimeout(meuicat.runtime, 1e3);
//     }, // about 运行时间
//     fiftyonela: function() {
//         fetch('https://v6-widget.51.la/v6/{掩码ID}/quote.js')
//             .then(res => res.text())
//             .then((data) => {
//                 let title = ['今日人数', '今日访问', '昨日人数', '昨日访问', '本月访问']
//                 let num = data.match(/(<\/span><span>).*?(\/span><\/p>)/g)
//
//                 num = num.map((el) => {
//                     let val = el.replace(/(<\/span><span>)/g, '')
//                     let str = val.replace(/(<\/span><\/p>)/g, '')
//                     return str
//                 })
//
//                 let statisticEl = document.getElementById('statistic')
//                 // let activeVisitors = num[0]
//                 let activeVisitors =0
//
//                 // 添加最近活跃访客的内容
//                 let TBoxEl = document.querySelector('.T-box')
//                 if (TBoxEl) {
//                     TBoxEl.innerHTML = '最近活跃：' + activeVisitors + '&ensp;|&ensp;' + TBoxEl.innerHTML
//                 }
//
//                 // 自定义不显示哪个或者显示哪个，如下不显示总访问量
//                 for (let i = 0; i < num.length; i++) {
//                     if (!statisticEl) return
//                     if (i == 0 || i == num.length - 1) continue;
//                     statisticEl.innerHTML += '<div><span class="tips">' + title[i - 1] + '</span><span id=' + title[i - 1] + '>' + num[i] + '</span></div>'
//                 }
//             });
//     } // about 51la统计显示
// }

// 发现有时会和当前页面重复，加一个判断
// hexo.extend.generator.register('random', function (locals) {
//     const config = hexo.config.random || {}
//     const posts = []
//     for (const post of locals.posts.data) {
//         if (post.random !== false) posts.push(post.path)
//     }
//     return {
//         path: config.path || 'zhheo/random.js',
//         data: `var posts=${JSON.stringify(posts)};function toRandomPost(){window.open('/'+posts[Math.floor(Math.random() * posts.length)],"_self");};`
//     }
// })
