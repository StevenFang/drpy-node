var rule = {
  类型: "影视",
  title: "饺子影院",
  author: "源动力唯一官方 https://sourcepower.top",
  host: "https://molicp.com/",
  url: "/search.php?page=fypage&searchtype=5&tid=fyclass&fyfilter",
  searchUrl: "/search.php?page=fypage&searchkey=**&searchtype=",
  headers: { "User-Agent": PC_UA },
  searchable: 1,
  quickSearch: 1,
  double: true,
  timeout: 10000,
  play_parse: true,
  filterable: 1,
  filter_url: "area={{fl.area}}&year={{fl.year}}",
  hostJs: async function () {
    const { HOST } = this;
    const html = await request(HOST, { headers: this.headers });
    const it = jsp.pdfa(html, "ul li a");
    const hosts = it
      .map((item) => {
        const name = jsp.pdfh(item, "a&&Text");
        const url = jsp.pdfh(item, "a&&href");
        if (/^(https?:\/\/)/.test(url)) return { name, url };
        else return null;
      })
      .filter(Boolean);
    const defaultHost = "https://www.jiaozi.me/";
    if (hosts.length === 0) return defaultHost;
    const bestHost = hosts.filter((item) => item.name.includes("推荐"))?.[0]
      ?.url;
    return bestHost;
  },
  预处理: async function () {
    return [];
  },
  class_parse: async function () {
    const { input, pdfa, pdfh, pd } = this;
    const filters = {};
    const html = await request(input, { headers: this.headers });
    // 类处理
    const data = pdfa(html, ".myui-header__menu li.hidden-sm");
    const classes = data
      .map((it) => {
        const type_id = pdfh(it, "a&&href").replace(
          /.*?\/mlist\/index(.*).html/g,
          "$1"
        );
        const type_name = pdfh(it, "a&&Text");
        if (["首页", "留言"].includes(type_name)) return null;
        return { type_id, type_name };
      })
      .filter(Boolean);

    // 筛选处理
    const htmlUrl = classes.map((item) => ({
      url: `${this.host}/mlist/index${item.type_id}.html`,
      options: { timeout: this.timeout, headers: this.headers },
    }));
    const htmlArr = await batchFetch(htmlUrl);
    htmlArr.map((it, i) => {
      const type_id = classes[i].type_id;
      const data = pdfa(it, ".myui-screen__list");
      const categories = [
        { key: "area", name: "地区" },
        { key: "year", name: "年份" },
      ];
      filters[type_id] = categories
        .map((category) => {
          const filteredData =
            data.filter((item) => pdfh(item, "a&&Text") === category.name)[0] ||
            [];
          if (filteredData.length === 0) return null;
          const values = pdfa(filteredData, "a")
            .map((it) => {
              const nv = pdfh(it, "a&&Text");
              if (nv === category.name) return null;
              return {
                n: nv || "全部",
                v: nv === "全部" ? "" : nv,
              };
            })
            .filter(Boolean);
          return { key: category.key, name: category.name, value: values };
        })
        .filter(Boolean);
    });
    return { class: classes, filters };
  },
  推荐: async function (tid, pg, filter, extend) {
    const homeFn = rule.一级.bind(this);
    return await homeFn();
  },
  一级: async function (tid, pg, filter, extend) {
    const { input, pdfa, pdfh } = this;
    const html = await request(input, { headers: this.headers });
    const data = pdfa(html, ".myui-panel-box ul.myui-vodlist li");
    const d = data.map((it) => {
      return {
        vod_id: pdfh(it, ".myui-vodlist__detail h4 a&&href").replace(
          /.*?\/movie\/index(.*).html/g,
          "$1"
        ),
        vod_name: pdfh(it, ".myui-vodlist__detail h4 a&&Text"),
        vod_pic: pdfh(it, ".myui-vodlist__thumb&&data-original"),
        vod_remarks: pdfh(it, ".myui-vodlist__thumb .pic-text&&Text"),
      };
    });
    return d;
  },
  二级: async function (ids) {
    const { pdfa, pdfh } = this;
    const html = await request(`${this.host}/movie/index${ids[0]}.html`, {
      headers: this.headers,
    });
    const VOD = {
      vod_id: ids[0],
      vod_name: pdfh(html, ".myui-content__detail h1.title--font&&Text").trim(),
      vod_pic: pdfh(html, ".myui-content__thumb a img&&data-original"),
      vod_director: pdfh(
        pdfa(html, ".myui-content__detail p").filter((item) =>
          item.includes("导演")
        )?.[0],
        "p--span&&Text"
      ).trim(),
      vod_actor: (() => {
        const it = pdfa(html, ".myui-content__detail p").filter((item) =>
          item.includes("演员")
        )?.[0];
        if (!it) return "";
        return pdfa(it, "a")
          .map((item) => pdfh(item, "a&&Text"))
          .join("|");
      })(),
      vod_douban_score: pdfh(
        html,
        ".myui-content__detail .score .branch&&Text"
      ),
      vod_score: pdfh(html, ".myui-content__detail .score .branch&&Text"),
      vod_remarks: pdfh(html, ".myui-content__detail h1 font&&Text"),
      vod_content: pdfh(
        html,
        ".row .padding-0 .myui-panel .myui-panel-box p:eq(0)--b--font&&Text"
      ),
      vod_year: (() => {
        const it = pdfa(html, ".myui-content__detail p").filter((item) =>
          item.includes("年份")
        )?.[0];
        if (!it) return "";
        return it.match(/年份：<\/span>(\d{4})/)?.[1] || "";
      })(),
      type_name: (() => {
        const it = pdfa(html, ".myui-content__detail p").filter((item) =>
          item.includes("分类：")
        )?.[0];
        if (!it) return "";
        return it.match(/分类：<\/span>([^，\s]+)/)?.[1] || "";
      })(),
      vod_area: (() => {
        const it = pdfa(html, ".myui-content__detail p").filter((item) =>
          item.includes("地区")
        )?.[0];
        if (!it) return "";
        return it.match(/地区：<\/span>(\S+)/)?.[1] || "";
      })(),
      vod_play_from: pdfa(html, "ul.nav.active li")
        .map((item) => pdfh(item, "a&&Text"))
        .join("$$$"),
      vod_play_url: (() => {
        const playlists = pdfa(html, ".tab-content .tab-pane");
        return playlists
          .map((item) => {
            const playlist = pdfa(item, "ul li");
            return playlist
              .map((it) => {
                const lineName = pdfh(it, "a&&Text");
                const lineId = pdfh(it, "a&&href").replace(
                  /\/play\/(.*).html/g,
                  "$1"
                );
                return `${lineName}$${lineId}`;
              })
              .join("#");
          })
          .join("$$$");
      })(),
    };
    return VOD;
  },
  搜索: async function (wd, quick, pg) {
    let { input, pdfa, pdfh } = this;
    let html = await request(input, { headers: this.headers });
    let data = pdfa(html, ".myui-panel-box ul.myui-vodlist__media li");
    const d = data.map((it) => {
      return {
        vod_id: pdfh(it, ".detail h4 a&&href").replace(
          /.*?\/movie\/index(.*).html/g,
          "$1"
        ),
        vod_name: pdfh(it, ".detail h4 a&&Text"),
        vod_pic: pdfh(it, ".thumb a&&data-original"),
        vod_remarks: "",
      };
    });
    return d;
  },
  lazy: async function (flag, id, flags) {
    const originalUrl = `${this.host}/play/${id}.html`;
    const headers = {};
    try {
      // 1. 从接口获取播放地址
      const [vid, vfrom, vpart] = id.split("-");
      const timestamp = new Date().getTime();
      const jsonpCallback =
        "jQuery" + (Math.random() + "").replace(".", "") + "_" + timestamp;
      const params = {
        url: "dp",
        vid,
        vfrom,
        vpart,
        cb: jsonpCallback,
        _: timestamp + 1,
      };
      const apiResp = await request(
        `${this.host}/ass.php?${qs.stringify(params)}`,
        { headers: this.headers }
      );
      globalThis[jsonpCallback] = (data) => {
        return data;
      };
      const apiData = eval(apiResp);
      const apiDataUrl = apiData.s.video[vpart];

      // 2. 解析播放地址
      const jxMap = {
        线路1: "https://v.damoli.pro/v/",
        线路4: "/api/webvideo.php?url=",
        线路5: "/api/webvideo_ty.php?url=",
      };
      let playurl = `${jxMap[flag] || ""}${apiDataUrl}`;
      if (playurl.indexOf("/webvideo") > -1 || playurl.indexOf("/?url=") > -1) {
        playurl += "&type=json&t=" + new Date().getTime();
      }
      let realUrl;
      if (playurl.indexOf("?url=") > -1 || playurl.indexOf("?uid=") > -1) {
        const parseHtml = await request(`${this.host}${playurl}`, {
          headers: this.headers,
        });
        const parseJson = JSON.parse(parseHtml);
        function ldg_decode(str) {
          const key = "ItLdg666";
          const decodedData = base64Decode(str);
          const keyLength = key.length;
          let result = "";
          for (let i = 0; i < decodedData.length; i++) {
            const keyIndex = i % keyLength;
            result += String.fromCharCode(
              decodedData.charCodeAt(i) ^ key.charCodeAt(keyIndex)
            );
          }
          return base64Decode(result);
        }
        realUrl = ldg_decode(parseJson.url);
      } else {
        realUrl = playurl;
        headers["Referer"] = this.host;
      }

      // 3. 处理播放地址
      if (/m3u8|mp4|mpd|flv|/.test(realUrl)) {
        return { parse: 0, url: realUrl, header: headers };
      } else {
        return { parse: 1, url: originalUrl };
      }
    } catch {
      return { parse: 1, url: originalUrl };
    }
  },
};
