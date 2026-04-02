# ⚙️ 注意事项

本仓库所有资源仅供**个人学习、研究与实验使用**，严禁用于任何商业或盈利目的。 
> 
> - **禁止转载**：禁止以任何形式将本仓库资源转载、分享或发布至任何国内平台（含社交媒体、博客、论坛、代码托管平台等），违者须自行承担法律责任，与本仓库及维护者无关。
> - **风险声明**：所有资源仅供参考，使用者自行承担风险。维护者不对任何直接或间接损失（包括但不限于数据丢失、网络故障等）承担责任。

<br>

*`💡使用前请确认已在小火箭/QX中完成证书生成、安装与信任操作`*

  
## 🧩插件中心转换器

通过重写将 [可莉插件中心](https://hub.kelee.one) 的 Loon 插件借助 Script-Hub 或资源解析器，无缝转换为小火箭或 QX 支持的格式。 
> **环境要求**：小火箭需安装 [**Script-Hub**](https://github.com/Script-Hub-Org)模块；QX 需配置 [**资源解析器**](https://github.com/KOP-XIAO)
>
> 1. **安装转换器**：[Shadowrocket 安装](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/PluginHub2Rocket.srmodule) , [Quantumult X 安装](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/PluginHub2QX.snippet)
> 
> 2. **使用方法**：安装后访问 [可莉插件中心](https://hub.kelee.one) ，点击跳转安装即可。如遇跳转异常，请尝试清理浏览器缓存或开启无痕模式
> 3. 使用过程请注意遵守可莉 [授权说明](https://t.me/ibilibili/1498)
> 
此外提供内置 Script-Hub 的小火箭 [集成版转换器](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/Plugin2Rocket.srmodule)，方便直装体验，如有侵权可联系删除。

<br>

## 🌐 小火箭IP信息查询

快速查询当前IP的定位、组织、属性（广播/原生）和风险评分，仅供参考。
> **使用方法**: 点击添加 [快捷指令](https://www.icloud.com/shortcuts/6ae49d67efef4eb898185d3b4cc8cf13) ，使用说明参考快捷指令内部注释。
> 
> **查询示例**: ![IP信息查询通知](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Resource/ippuretest.png)
> 

<br>

## 📜 自用模块及规则集

*`💡小火箭推荐使用HTTP代理模式，如遇失效可考虑使用前述插件中心转换器，如有去广告需求不建议频繁更新APP`*
| 模块名称 | 适用场景 | 链接 |
| :--- | :--- | :--- |
| 📺 **YouTube 去广告** | Youtube去广告, QX参考说明可实现编辑参数 | [小火箭链接](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/YouTubeNoAd.sgmodule), [QX链接](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/YouTubeNoAd.snippet) |
|🌍 **国际版哔哩净化** | 移除热搜、搜索发现，精简 “我的” 页面布局 | [小火箭链接](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/BiliIntlClean.sgmodule), [QX链接](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/BiliIntlClean.snippet) |
|🐦 **微博轻享版去广告** | 移除开屏广告及应用内时间线推广 | [小火箭链接](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/WeiboIntl.sgmodule), [QX链接](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/WeiboIntl.snippet) |
|🚖 **滴滴出行去广告** | 精简底部标签栏，去除开屏与应用内广告 | [小火箭链接](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/DiDiClean.sgmodule), [QX链接](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/DiDiClean.snippet) |
|📕 **小红书去广告及水印** | 移除首页瀑布流和搜索框广告，移除图片/视频保存水印 | [小火箭链接](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/RedBook.srmodule), [QX链接](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/RedBook.snippet) |

<br>

*`💡添加规则时，规则类型请选择 `RULE-SET`，QX 注意启用资源解析器`*
| 规则名称 | 适用场景 | 链接 |
| :--- | :--- | :--- |
| 🍎 **Apple AI** | 苹果 AI 相关规则 | [复制链接](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/AppleIntelligence.txt) |
| 🤖 **AI** | OpenAI, Claude, Gemini等聚合规则 | [复制链接](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/AI.txt) |
| 🚫 **Block** | 轻量去广告规则 | [复制链接](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/Block.txt) |
| 💰 **Crypto** | 加密货币交易所聚合规则 | [复制链接](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/Crypto.txt) |
| 🌍 **IPCheck** | IP 查询网站规则 | [复制链接](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/IPCheck.txt) |
| 💳 **PayPal** | PayPal 应用规则 | [复制链接](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/PayPal.txt) |
| 🎵 **Spotify** | Spotify 应用规则 | [复制链接](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/Spotify.txt) |
| ☎️ **Talkatone** | Talkatone 应用规则 | [复制链接](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/Talkatone.txt) |
| 👥 **Teams** | Teams 应用分流 | [复制链接](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/Teams.txt) |

<br>

## 🎨 小火箭配色主题

推荐 [LOWRERTOP](https://github.com/LOWERTOP) 设计的配色主题 ，如需恢复默认配色：设置 → 颜色 → 重设颜色 。
>
> **· 配色主题**: [配色仓库](https://github.com/LOWERTOP/Shadowrocket-First?tab=readme-ov-file#shadowrocket-配色文件)
> 
> **· 配色示例**: ![小火箭配色主题](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Resource/ShadowrocketColorTheme.png)
> 

<br>


# 🫶🏻特别鸣谢

感谢 [*@可莉*](https://github.com/luestr) 、 [*@资源解析器*](https://github.com/KOP-XIAO) 、 [*@Script-Hub*](https://github.com/Script-Hub-Org) 

感谢好友 [*@LOWRERTOP*](https://github.com/LOWERTOP) 在项目中提供的支持和建议
