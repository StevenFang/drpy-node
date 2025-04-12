var rule = {
  类型: "影视",
  title: "看看屋",
  author: "源动力+不告诉你 联合出品",
  logo: "https://i-blog.csdnimg.cn/blog_migrate/2621e710a94ab40ba66645d47f296aaf.gif",
  host: "https://www.kankanwu.vip",
  url: "/vodshow/fyfilter.html",
  searchUrl: "/vodsearch/**----------fypage---.html",
  searchable: 1,
  quickSearch: 1,
  timeout: 5000,
  play_parse: true,
  filterable: 1,
  class_name: "电影&电视剧&动漫&综艺",
  class_url: "1&2&4&3",
  filter_url:
    "{{fl.类型}}-{{fl.area}}-{{fl.by}}-{{fl.class}}-----fypage---{{fl.year}}",
  filter_def: {
    1: { 类型: "1" },
    2: { 类型: "2" },
    3: { 类型: "3" },
    4: { 类型: "4" },
  },
  filter: {
    "1":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"喜剧","v":"喜剧"},{"n":"爱情","v":"爱情"},{"n":"恐怖","v":"恐怖"},{"n":"动作","v":"动作"},{"n":"科幻","v":"科幻"},{"n":"剧情","v":"剧情"},{"n":"战争","v":"战争"},{"n":"警匪","v":"警匪"},{"n":"犯罪","v":"犯罪"},{"n":"动画","v":"动画"},{"n":"奇幻","v":"奇幻"},{"n":"武侠","v":"武侠"},{"n":"冒险","v":"冒险"},{"n":"枪战","v":"枪战"},{"n":"悬疑","v":"悬疑"},{"n":"惊悚","v":"惊悚"},{"n":"经典","v":"经典"},{"n":"青春","v":"青春"},{"n":"伦理","v":"伦理"},{"n":"文艺","v":"文艺"},{"n":"微电影","v":"微电影"},{"n":"古装","v":"古装"},{"n":"历史","v":"历史"},{"n":"运动","v":"运动"},{"n":"农村","v":"农村"},{"n":"儿童","v":"儿童"},{"n":"网络电影","v":"网络电影"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"美国","v":"美国"},{"n":"法国","v":"法国"},{"n":"英国","v":"英国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"德国","v":"德国"},{"n":"泰国","v":"泰国"},{"n":"印度","v":"印度"},{"n":"意大利","v":"意大利"},{"n":"西班牙","v":"西班牙"},{"n":"加拿大","v":"加拿大"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"2025"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
    "2":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"古装","v":"古装"},{"n":"战争","v":"战争"},{"n":"青春偶像","v":"青春偶像"},{"n":"喜剧","v":"喜剧"},{"n":"家庭","v":"家庭"},{"n":"犯罪","v":"犯罪"},{"n":"动作","v":"动作"},{"n":"奇幻","v":"奇幻"},{"n":"剧情","v":"剧情"},{"n":"历史","v":"历史"},{"n":"经典","v":"经典"},{"n":"乡村","v":"乡村"},{"n":"情景","v":"情景"},{"n":"商战","v":"商战"},{"n":"网剧","v":"网剧"},{"n":"其他","v":"其他"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"美国","v":"美国"},{"n":"法国","v":"法国"},{"n":"英国","v":"英国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"德国","v":"德国"},{"n":"泰国","v":"泰国"},{"n":"印度","v":"印度"},{"n":"意大利","v":"意大利"},{"n":"西班牙","v":"西班牙"},{"n":"加拿大","v":"加拿大"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"2025"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
    "3":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"选秀","v":"选秀"},{"n":"情感","v":"情感"},{"n":"访谈","v":"访谈"},{"n":"播报","v":"播报"},{"n":"旅游","v":"旅游"},{"n":"音乐","v":"音乐"},{"n":"美食","v":"美食"},{"n":"纪实","v":"纪实"},{"n":"曲艺","v":"曲艺"},{"n":"生活","v":"生活"},{"n":"游戏互动","v":"游戏互动"},{"n":"财经","v":"财经"},{"n":"求职","v":"求职"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"港台","v":"港台"},{"n":"欧美","v":"欧美"},{"n":"日韩","v":"日韩"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"2025"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
    "4":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"情感","v":"情感"},{"n":"科幻","v":"科幻"},{"n":"热血","v":"热血"},{"n":"推理","v":"推理"},{"n":"搞笑","v":"搞笑"},{"n":"冒险","v":"冒险"},{"n":"萝莉","v":"萝莉"},{"n":"校园","v":"校园"},{"n":"动作","v":"动作"},{"n":"机战","v":"机战"},{"n":"运动","v":"运动"},{"n":"战争","v":"战争"},{"n":"少年","v":"少年"},{"n":"少女","v":"少女"},{"n":"社会","v":"社会"},{"n":"原创","v":"原创"},{"n":"亲子","v":"亲子"},{"n":"益智","v":"益智"},{"n":"励志","v":"励志"},{"n":"其他","v":"其他"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"国产","v":"国产"},{"n":"欧美","v":"欧美"},{"n":"日本","v":"日本"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"2025"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
  },
  hostJs: async function () {
    const { HOST } = this;
    const html = await request(HOST);
    const host = jsp.pdfh(html, "ul&&li a:eq(1)&&href");
    return host;
  },
  预处理: async () => {
    return [];
  },
  推荐: async function (tid, pg, filter, extend) {
    const homeFn = rule.一级.bind(this);
    return await homeFn();
  },
  一级: async function (tid, pg, filter, extend) {
    const { input, pdfa, pdfh, pd } = this;
    const html = await request(input);
    const d = [];
    const data = pdfa(html, "ul.stui-vodlist li");
    data.forEach((it) => {
      d.push({
        title: pdfh(it, "a&&title"),
        pic_url: pd(it, ".lazyload&&data-original"),
        desc: pdfh(it, ".pic-text&&Text"),
        url: pd(it, "a&&href"),
      });
    });
    return setResult(d);
  },
  二级: async function (ids) {
    const { input, pdfa, pdfh, pd } = this;
    const html = await request(input);
    const playlist = pdfa(html, ".stui-content__playlist");
    const tabs = pdfa(html, ".stui-vodlist__head");
    let playmap = {};
    tabs.map((item, i) => {
      const form = pdfh(item, "Text");
      const list = playlist[i];
      const a = pdfa(list, "body&&a:not(:contains(排序))");
      a.map((it) => {
        let title = pdfh(it, "Text");
        let urls = pd(it, "a&&href", input);
        if (!playmap.hasOwnProperty(form)) {
          playmap[form] = [];
        }
        playmap[form].push(title + "$" + urls);
      });
    });
    const urls = Object.values(playmap);
    const playUrls = urls.map((urllist) => urllist.join("#"));
    const VOD = {
      vod_name: pdfh(html, "h1&&Text"), // 名称
      vod_actor: pdfh(html, ".stui-content__detail&&p:eq(4)&&Text"), // 演员
      vod_director: pdfh(html, ".stui-content__detail&&p:eq(5)&&Text"), // 导演
      vod_remarks: pdfh(html, ".stui-content__detail&&p:eq(3)&&Text"), // 备注
      vod_content: pdfh(html, "p.desc&&Text"), // 简介
      vod_play_from: Object.keys(playmap).join("$$$"), // 线路
      vod_play_url: playUrls.join("$$$"), // 播放地址
    };
    return VOD;
  },
  搜索: async function (wd, quick, pg) {
    const homeFn = rule.一级.bind(this);
    return await homeFn();
  },
  lazy: async function (flag, id, flags) {
    const { input, pdfa, pdfh, pd } = this;
    let url = input;

    // 1. 获取 player_aaa 参数
    const html = await request(url);
    const script = pdfa(html, ".stui-player__video script");
    const scriptContent = script.filter((e) => e.includes("player_aaaa"))[0];
    const scriptRegex = /var player_aaaa=({[^;]+})/;
    const scriptMatch = scriptContent.match(scriptRegex);
    if (!scriptMatch || !scriptMatch[1]) {
      return { parse: 1, url };
    }
    const player_aaaa = JSON.parse(scriptMatch[1]);
    console.warn(`player_aaaa`, player_aaaa);

    // 2.获取 api 参数
    const apiResp = await request(`${this.host}/kkwplayer/api.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        vid: player_aaaa.url,
      },
    });
    const apiRespJson = JSON.parse(apiResp);
    console.warn("apiRespJson", apiRespJson);

    // 3. 解密
    const Decode1 = {
      sign: function (val) {
        const url = this.customStrDecode(val);
        const parts = url.split("/");
        let result = "";
        for (let i = 0; i < parts.length; i++) {
          var _0x4958b7 = i + 1 === parts.length ? "" : "/";
          if (i === 0 || i === 1) {
          } else {
            result += parts[i] + _0x4958b7;
          }
        }
        const key1 = JSON.parse(base64Decode(parts[1]));
        const key2 = JSON.parse(base64Decode(parts[0]));
        const decoded = base64Decode(result);
        const res = this.deString(key1, key2, decoded);
        return res;
      },
      indexOfVal: function (array, value) {
        for (let i = 0; i < array.length; i++) {
          if (value === array[i]) return true;
        }
        return false;
      },
      customStrDecode: function (val) {
        let decoded = base64Decode(val);
        // const key = "098f6bcd4621d373cade4e832627b4f6";
        const key = md5("test");
        let result = "";
        for (let i = 0; i < decoded.length; i++) {
          result += String.fromCharCode(
            decoded.charCodeAt(i) ^ key.charCodeAt(i % key.length)
          );
        }
        return base64Decode(result);
      },
      deString: function (keyArray, valueArray, inputStr) {
        let result = "";
        for (let i = 0; i < inputStr.length; i++) {
          const char = inputStr.charAt(i);
          if (/^[a-zA-Z]$/.test(char)) {
            const index = keyArray.indexOf(char);
            if (index !== -1) {
              result += valueArray[index];
              continue;
            }
          }
          result += char;
        }
        return result;
      },
    };
    const Decode2 = (url) => {
      const key = "PXhw7UT1B0a9kQDKZsjIASmOezxYG4CHo5Jyfg2b8FLpEvRr3WtVnlqMidu6cN";
      url = atob(url);
      let result = "";
      for (let i = 1; i < url.length; ) {
        const index = key.indexOf(url[i]);
        let char;
        if (index === -1) char = url[i];
        else char = key[(index + 59) % 62];
        result += char;
        i = i + 3;
      }
      return result;
    };

    let decodeUrl;
    if (apiRespJson.data.urlmode === 1) {
      decodeUrl = Decode1.sign(apiRespJson.data.url);
    } else if (apiRespJson.data.urlmode === 2) {
      decodeUrl = Decode2(apiRespJson.data.url);
    }
    console.warn(`decodeUrl`, decodeUrl);

    if (/m3u8|mp4|flv|mpd/.test(decodeUrl)) {
      return { parse: 0, url: decodeUrl };
    } else {
      const pclick =
        'document.querySelector("#playleft iframe").contentWindow.document.querySelector("#start").click()';
      return { parse: 1, url, js: pclick, click: pclick };
    }
  },
};
