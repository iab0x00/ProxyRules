# ProxyRules

自用 Surge / Shadowrocket / Quantumult X / sing-box 的分流规则、去广告重写与脚本等。

## 目录结构

```
ProxyRules/
├── Rule/           # 通用分流规则（.txt）
├── Sing/           # sing-box 规则（.json 源格式 + .srs 编译格式）
├── Rewrite/        # 重写 / 去广告模块（.sgmodule / .snippet / .srmodule）
├── Script/         # 脚本（.js）
├── Resource/       # 资源文件
└── Mock/           # Mock 文件
```

## 免责声明

- 本仓库资源仅供个人学习、研究与实验使用，严禁用于任何商业或盈利目的。
- 禁止以任何形式转载、分享或发布至国内平台（含社交媒体、博客、论坛、代码托管平台等）。
- 所有资源仅供参考，使用者自行承担风险，维护者不对任何直接或间接损失承担责任。

## 快速开始

- 使用重写 / 模块前请确认已完成证书生成、安装与信任。
- 添加规则时，规则类型选择 `RULE-SET`；Quantumult X 需启用资源解析器。
- Shadowrocket 推荐使用 HTTP 代理模式；去广告模块不建议频繁更新 App。

## 文本规则集

| 规则 | 适用场景 | 链接 |
| :--- | :--- | :--- |
| AI | OpenAI / Claude / Gemini 等聚合 AI | [Rule/AI.txt](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/AI.txt) |
| AINA | 聚合 AI（不含 Apple） | [Rule/AINA.txt](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/AINA.txt) |
| Apple | Apple 服务 | [Rule/Apple.txt](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/Apple.txt) |
| AppleIntelligence | Apple AI | [Rule/AppleIntelligence.txt](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/AppleIntelligence.txt) |
| BiliCN | 哔哩哔哩国内域名 | [Rule/BiliCN.txt](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/BiliCN.txt) |
| Block | 轻量去广告 | [Rule/Block.txt](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/Block.txt) |
| Crypto | 加密货币交易所 | [Rule/Crypto.txt](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/Crypto.txt) |
| DeepSeek | DeepSeek | [Rule/DeepSeek.txt](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/DeepSeek.txt) |
| Direct | 直连 | [Rule/Direct.txt](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/Direct.txt) |
| Google | Google 服务 | [Rule/Google.txt](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/Google.txt) |
| IPCheck | IP 查询网站 | [Rule/IPCheck.txt](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/IPCheck.txt) |
| LAN | 局域网直连 | [Rule/LAN.txt](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/LAN.txt) |
| Line | LINE | [Rule/Line.txt](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/Line.txt) |
| Microsoft | 微软服务 | [Rule/Microsoft.txt](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/Microsoft.txt) |
| Netflix | Netflix | [Rule/Netflix.txt](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/Netflix.txt) |
| OneDrive | OneDrive | [Rule/OneDrive.txt](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/OneDrive.txt) |
| PayPal | PayPal | [Rule/PayPal.txt](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/PayPal.txt) |
| Proxy | 常用代理 | [Rule/Proxy.txt](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/Proxy.txt) |
| Spotify | Spotify | [Rule/Spotify.txt](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/Spotify.txt) |
| Talkatone | Talkatone | [Rule/Talkatone.txt](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/Talkatone.txt) |
| Teams | Teams 分流 | [Rule/Teams.txt](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/Teams.txt) |
| Telegram | Telegram | [Rule/Telegram.txt](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/Telegram.txt) |
| X | X (Twitter) | [Rule/X.txt](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/X.txt) |
| YouTube | YouTube | [Rule/YouTube.txt](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/YouTube.txt) |
| cn_domain | 国内域名直连 | [Rule/cn_domain.txt](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/cn_domain.txt) |
| cn_ip | 国内 IP 直连 | [Rule/cn_ip.txt](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/cn_ip.txt) |

## sing-box 规则

`Sing/` 提供同规则集的 sing-box 版本：`.json` 为源格式（可直接 `rule_set` 引用），`.srs` 为编译格式（本地/远程加载）。

| 规则 | JSON | SRS |
| :--- | :--- | :--- |
| AI | [.json](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/AI.json) | [.srs](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/AI.srs) |
| AINA | [.json](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/AINA.json) | [.srs](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/AINA.srs) |
| Apple | [.json](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/Apple.json) | [.srs](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/Apple.srs) |
| AppleIntelligence | [.json](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/AppleIntelligence.json) | [.srs](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/AppleIntelligence.srs) |
| BiliCN | [.json](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/BiliCN.json) | [.srs](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/BiliCN.srs) |
| Block | [.json](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/Block.json) | [.srs](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/Block.srs) |
| Crypto | [.json](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/Crypto.json) | [.srs](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/Crypto.srs) |
| DeepSeek | [.json](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/DeepSeek.json) | [.srs](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/DeepSeek.srs) |
| Direct | [.json](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/Direct.json) | [.srs](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/Direct.srs) |
| Google | [.json](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/Google.json) | [.srs](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/Google.srs) |
| IPCheck | [.json](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/IPCheck.json) | [.srs](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/IPCheck.srs) |
| LAN | [.json](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/LAN.json) | [.srs](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/LAN.srs) |
| Line | [.json](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/Line.json) | [.srs](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/Line.srs) |
| Microsoft | [.json](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/Microsoft.json) | [.srs](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/Microsoft.srs) |
| Netflix | [.json](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/Netflix.json) | [.srs](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/Netflix.srs) |
| OneDrive | [.json](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/OneDrive.json) | [.srs](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/OneDrive.srs) |
| PayPal | [.json](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/PayPal.json) | [.srs](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/PayPal.srs) |
| Proxy | [.json](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/Proxy.json) | [.srs](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/Proxy.srs) |
| Spotify | [.json](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/Spotify.json) | [.srs](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/Spotify.srs) |
| Talkatone | [.json](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/Talkatone.json) | [.srs](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/Talkatone.srs) |
| Teams | [.json](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/Teams.json) | [.srs](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/Teams.srs) |
| Telegram | [.json](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/Telegram.json) | [.srs](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/Telegram.srs) |
| X | [.json](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/X.json) | [.srs](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/X.srs) |
| YouTube | [.json](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/YouTube.json) | [.srs](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/YouTube.srs) |
| cn_domain | [.json](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/cn_domain.json) | [.srs](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/cn_domain.srs) |
| cn_ip | [.json](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/cn_ip.json) | [.srs](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Sing/cn_ip.srs) |

## 重写模块

| 模块 | 适用场景 | 小火箭 | QX |
| :--- | :--- | :--- | :--- |
| YouTubeNoAd | YouTube 去广告 | [.sgmodule](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/YouTubeNoAd.sgmodule) | [.snippet](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/YouTubeNoAd.snippet) |
| BiliIntlClean | 国际版哔哩净化（移除热搜、搜索发现） | [.sgmodule](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/BiliIntlClean.sgmodule) | [.snippet](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/BiliIntlClean.snippet) |
| WeiboIntl | 微博轻享版去广告 | [.sgmodule](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/WeiboIntl.sgmodule) | [.snippet](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/WeiboIntl.snippet) |
| DiDiClean | 滴滴出行去广告 | [.sgmodule](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/DiDiClean.sgmodule) | [.snippet](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/DiDiClean.snippet) |
| RedBook | 小红书去广告及水印 | [.srmodule](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/RedBook.srmodule) | [.snippet](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/RedBook.snippet) |
| NodeSeek | NodeSeek Cookie 捕获 + 每日签到 | [.sgmodule](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/NodeSeek.sgmodule) | [推荐肥佬](https://raw.githubusercontent.com/ZenmoFeiShi/Qx/main/Nodeseek_NsCheckin.js) |


## 脚本

| 脚本 | 功能 | 链接 |
| :--- | :--- | :--- |
| NodeSeek.js | NodeSeek Cookie 捕获 + 每日签到 | [Script/NodeSeek.js](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Script/NodeSeek.js) |
| ippure.js | IP 信息查询 | [Script/ippure.js](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Script/ippure.js) |
| gpt-app.js | ChatGPT App（iOS 端） | [Script/gpt-app.js](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Script/gpt-app.js) |
| gpt-web.js | ChatGPT Web 合规检测 | [Script/gpt-web.js](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Script/gpt-web.js) |
| netflix.js | Netflix 分区检测 | [Script/netflix.js](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Script/netflix.js) |
| rednote.js | 小红书去水印 | [Script/rednote.js](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Script/rednote.js) |
| youtube.js | YouTube Premium 可用性检测 | [Script/youtube.js](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Script/youtube.js) |

## 插件中心转换器

将 [可莉插件中心](https://hub.kelee.one) 的 Loon 插件借助 Script-Hub 或资源解析器转换为 Shadowrocket / QX 支持的格式。

- 环境要求：Shadowrocket 需安装 [Script-Hub](https://github.com/Script-Hub-Org) 模块；Quantumult X 需配置 [资源解析器](https://github.com/KOP-XIAO)。
- 安装转换器：[Shadowrocket](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/PluginHub2Rocket.srmodule) / [Quantumult X](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/PluginHub2QX.snippet)。
- 使用方法：安装后访问 [可莉插件中心](https://hub.kelee.one)，点击跳转安装即可。如遇跳转异常，尝试清理浏览器缓存或开启无痕模式。
- 使用过程请遵守可莉 [授权说明](https://t.me/ibilibili/1498)。
- 另提供内置 Script-Hub 的 Shadowrocket [集成版转换器](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/Plugin2Rocket.srmodule)。

## IP 信息查询

快速查询当前 IP 的定位、组织、属性（广播/原生）与风险评分，仅供参考。

- 使用方法：添加 [快捷指令](https://www.icloud.com/shortcuts/6ae49d67efef4eb898185d3b4cc8cf13)，说明参考快捷指令内部注释。

  <img src="https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Resource/ippuretest.png" alt="IP 信息查询示例" width="50%">

## 特别鸣谢

- [@可莉](https://github.com/luestr)
- [@资源解析器](https://github.com/KOP-XIAO)
- [@Script-Hub](https://github.com/Script-Hub-Org)
- [@LOWRERTOP](https://github.com/LOWERTOP)
