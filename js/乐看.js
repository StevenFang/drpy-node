var rule = {
  类型: '影视',
  title: '乐看视频',
  host: 'https://lkvlog.cn/',
  url: '/show/fyclass--------fypage---/',
  searchUrl: '/search/**----------fypage---/',
  searchable: 1,
  quickSearch: 0,
  filterable: 0,
  double: true,
  play_parse: true,
  timeout: 5000,
  filter_url: '',
  filter: '',
  filter_def: '',
  class_name: '电影&电视剧&综艺&动漫&纪录片&短剧',
  class_url: '1&2&3&4&5&34',
  headers: { 'User-Agent': 'MOBILE_UA' },
  lazy: async function (flag, id, flags) {
    let { input, pdfa, pdfh, pd } = this;
    let html = await request(input);
    html = JSON.parse(html.match(/r player_.*?=(.*?)</)[1]);
    let url = html.url;
    if (html.encrypt == "1") {
      url = unescape(url)
      return { parse: 0, url: url }
    } else if (html.encrypt == "2") {
      url = unescape(base64Decode(url))
      return { parse: 0, url: url }
    }
    if (/m3u8|mp4/.test(url)) {
      return {
        jx: 0,
        url: url,
        parse: 0
      }
    } else {
      var MacPlayerConfig = {};
      eval((await request(HOST + '/static/js/playerconfig.js')).replace('var Mac', 'Mac'));
      var jx = MacPlayerConfig.player_list[from].parse.replace('\t', '');
      if (jx == '') {
        jx = MacPlayerConfig.parse
      }
      if (/qq|mgtv|iqiyi|youku/.test(from)) {
        return {
          jx: 0,
          url: 'https://jx.xmflv.cc/?url=' + url,
          parse: 1
        }
      } else {
        function decryptedDataToString(data, key, iv) {
          return CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
            "iv": CryptoJS.enc.Utf8.parse(iv),
            "mode": CryptoJS.mode.CBC,
            "padding": CryptoJS.pad.Pkcs7
          }).toString(CryptoJS.enc.Utf8);
        }
        var psrc = await request(jx + url);
        log('***psrc****' + psrc);
        var pdata = psrc.match(/data = {[\s\S]*?}/)[0];
        log(pdata)
        var data = {};
        eval(pdata + '",}')
        log(data.Video)
        let play = decryptedDataToString(data.Video, "ASD010QNC636LJY9", "C636LJY9ASD010QN")
        let purl = JSON.parse(play).url
        return {
          jx: 0,
          url: purl,
          parse: 0
        }
      }
    }
  },
  推荐: async function () {
    let { input, pdfa, pdfh, pd } = this;
    let html = await request(input);
    let d = [];
    let data = pdfa(html, '.module-items.module-poster-items-base a');
    data.forEach((it) => {
      d.push({
        title: pdfh(it, 'a&&title'),
        pic_url: pd(it, '.lazyload&&data-original'),
        desc: pdfh(it, '.module-item-note&&Text'),
        url: pd(it, 'a&&href'),
      })
    });
    return setResult(d)
  },
  一级: async function () {
    let { input, pdfa, pdfh, pd } = this;
    let html = await request(input);
    let d = [];
    let data = pdfa(html, '.module-items.module-poster-items-base a');
    data.forEach((it) => {
      d.push({
        title: pdfh(it, 'a&&title'),
        pic_url: pd(it, '.lazyload&&data-original'),
        desc: pdfh(it, '.module-item-note&&Text'),
        url: pd(it, 'a&&href'),
      })
    });
    return setResult(d)
  },
  二级: async function () {
    let { input, pdfa, pdfh, pd } = this;
    let html = await request(input);
    let VOD = {};
    VOD.vod_name = pdfh(html, 'h1&&Text');
    VOD.type_name = pdfh(html, '.module-info-tag-link:eq(-1)&&Text');
    VOD.vod_pic = pd(html, '.lazyload&&data-original||data-src||src');
    VOD.vod_content = pdfh(html, '.module-info-introduction&&Text');
    VOD.vod_remarks = pdfh(html, '.module-info-item:eq(-2)&&Text');
    VOD.vod_year = pdfh(html, '.module-info-tag-link&&Text');
    VOD.vod_area = pdfh(html, '.module-info-tag-link:eq(1)&&Text');
    VOD.vod_actor = pdfh(html, '.module-info-item:eq(2)&&Text');
    VOD.vod_director = pdfh(html, '.module-info-item:eq(1)&&Text');
    let playlist = pdfa(html, '.module-play-list')
    let tabs = pdfa(html, '.module-tab-item');
    let playmap = {};
    tabs.map((item, i) => {
      const form = pdfh(item, 'Text')
      const list = playlist[i]
      const a = pdfa(list, 'body&&a')
      a.map((it) => {
        let title = pdfh(it, 'a&&Text')
        let urls = pd(it, 'a&&href', input)
        if (!playmap.hasOwnProperty(form)) {
          playmap[form] = [];
        }
        playmap[form].push(title + "$" + urls);
      });
    });
    VOD.vod_play_from = Object.keys(playmap).join('$$$');
    const urls = Object.values(playmap);
    const playUrls = urls.map((urllist) => {
      return urllist.join("#")
    });
    VOD.vod_play_url = playUrls.join('$$$');
    return VOD
  },
  搜索: async function () {
    let { input, pdfa, pdfh, pd } = this;
    let html = await request(input);
    let d = [];
    let data = pdfa(html, 'body .module-item');
    data.forEach((it) => {
      d.push({
        title: pdfh(it, '.module-card-item-title&&Text'),
        pic_url: pd(it, '.lazyload&&data-original'),
        desc: pdfh(it, '.module-item-note&&Text'),
        url: pd(it, 'a&&href'),
        content: pdfh(it, '.module-info-item-content&&Text'),
      })
    });
    return setResult(d)
  }
}
