# ⚙️ 注意事项

> &nbsp;&nbsp; ⚠️ **重要声明**
> 1. **仅供个人学习使用**  
>    本仓库提供的所有资源（包括代码、文档等）仅限个人学习、研究和实验使用。严禁用于任何商业或盈利性目的。
> 2. **禁止转载或发布至平台**  
>    本仓库的资源不得以任何形式转载、分享或发布至任何国内平台，包含但不限于社交媒体、博客、技术论坛、代码托管平台等。未经授权的转载行为将视为侵权。
> 3. **未经授权的传播行为自负后果**  
>    未经授权，任何转载或传播本仓库资源的行为将由行为人自行承担法律责任。由此产生的任何争议、损失或其他后果，均与本仓库及维护者无关。
> 4. **遵守相关开源协议**  
>    如果本仓库中包含第三方开源资源或依赖，请遵循相关开源许可证。请确保对所使用的外部资源进行合法合规的使用。
> 5. **免责声明**  
>    本仓库中的所有资源和代码仅供参考，使用者需自行承担风险。本仓库及其维护者不对任何因使用本资源而导致的直接或间接损失负责，包括但不限于数据丢失、系统崩溃等。

<br>
<br>
<br>

# 一、工具推荐
本仓库主要提供适配 Shadowrocket (简称小火箭) 和 Quantumult X (简称 QX ) 的模块/重写和分流规则，方便新手快速上手和进阶MitM功能，发掘更多代理之外的乐趣。

使用之前请确认小火箭或 QX 已成功生成、安装证书并完成信任。相关步骤可参考网络教程，这里不再赘述。后续资源链接，请复制到对应 APP 中完成安装。

<br>
  
## 🧩插件中心转换器

得益于可莉及社区热心开发者的努力，插件中心已积累了丰富的资源。本工具通过重写将 [可莉插件中心](https://hub.kelee.one) 的 Loon 插件借用 Script-Hub 或 资源解析器 无缝转换为 小火箭 或 QX 支持的模块/重写格式。
>
> &nbsp;&nbsp; **❗前置要求**：小火箭请提前安装 **Script-Hub** 模块， QX请提前配置 **资源解析器**
>
> 1. **安装转换器**：[Shadowrocket 安装](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/PluginHub2Rocket.srmodule) , [Quantumult X 安装](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/PluginHub2QX.snippet)
> 
> 2. **使用方法**：安装后访问 [可莉插件中心](https://hub.kelee.one)，直接点击安装即可。使用过程请注意遵守可莉[授权说明](https://t.me/ibilibili/1498)
> 
> 3. **致谢**：感谢 [可莉](https://github.com/luestr) 、[资源解析器](https://github.com/KOP-XIAO) 及 [Script-Hub](https://github.com/Script-Hub-Org) 的付出
> 
此外，我们制作了自带 **Script-Hub** 的[集成版转换器](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/Plugin2Rocket.srmodule)，方便新手小白直装体验，如有侵权可联系我们立马删除。


<br>

## 🎨 Shadowrocket 配色主题

众所周知 QX 的颜值遥遥领先，小火箭的原生态配色相比之下逊色不少，这里提供由 [LOWRERTOP](https://github.com/LOWERTOP) 设计的配色主题 (本人协助制作快捷指令) ，让你的小火箭界面焕然一新。
>
> **· 配色主题**: [LOWERTOP 配色仓库](https://github.com/LOWERTOP/Shadowrocket-First?tab=readme-ov-file#shadowrocket-配色文件)
> 
> **· 配色示例**: ![小火箭配色主题](https://github.com/iab0x00/ProxyRules/blob/main/Resource/ShadowrocketColorTheme.png)
> 
> **· 恢复默认**：设置 → 颜色 → 重设颜色

<br>
<br>
<br>

# 二、自用模块与规则集
除插件中心丰富的插件资源外，下面列出自己维护且在使用的模块及分流规则留作备份。如您有需求亦可参考。

*`友情提示：如您使用的 APP 有去广告需求，不建议频繁升级版本以免去广告模块/重写失效`*

## 📦自用模块

### 📺 YouTube 去广告

> **功能**：去除视频广告及界面推广，移除 Shorts 短视频
> 
> **备注**：小火箭安装后点击模块编辑参数进行配置；QX 请点击链接查看说明使用解析器实现参数编辑效果
>
> **Shadowrocket 模块**：[复制链接安装](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/YouTubeNoAd.sgmodule)
> **Quantumult X 重写**：[复制链接安装](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/YouTubeNoAd.snippet)

<br>

### 🐦 微博轻享版去广告

> **功能**：移除开屏广告及应用内时间线推广
>
> **Shadowrocket 模块**：[复制链接安装](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/WeiboIntl.sgmodule)
> **Quantumult X 重写**：[复制链接安装](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/WeiboIntl.snippet)

<br>

### 🚖 滴滴出行去广告

> **功能**：精简底部标签栏，去除开屏与应用内广告
>
> **Shadowrocket 模块**：[复制链接安装](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/DiDiClean.sgmodule)
> **Quantumult X 重写**：[复制链接安装](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/DiDiClean.snippet)

<br>

### 🌍 国际版哔哩净化

> **功能**：移除热搜、搜索发现，精简 “我的” 页面布局
>
> **Shadowrocket 模块**：[复制链接安装](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/BiliIntlClean.sgmodule)
> **Quantumult X 重写**：[复制链接安装](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/BiliIntlClean.snippet)

<br>

### 📕 小红书去广告及水印

> **功能**：移除首页瀑布流和搜索框广告，移除图片/视频保存水印 (不包含评论区图片水印)
> 
> **备注**：优选在 HTTP 代理模式下使用以获得最佳效果
>
> **Shadowrocket 模块**：[复制链接安装](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/RedBook.srmodule)
> **Quantumult X 重写**：[复制链接安装](https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rewrite/RedBook.snippet)

<br>

## 📜 自用规则集 

**配置说明**：添加规则时，规则类型请选择 `RULE-SET`，QX 注意启用资源解析器

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

---

💡 **提示**：可根据个人使用环境或偏好自行调整模块加载顺序与规则优先级。

<br>
<br>
<br>

# 三、小火箭IP信息查询

通过快捷指令快速查询当前IP的定位、组织、属性（广播/原生）和风险评分。点击添加 [IPPure测试](https://www.icloud.com/shortcuts/6ae49d67efef4eb898185d3b4cc8cf13) 快捷指令后运行，使用说明参考快捷指令内部注释。
> **· 查询示例**: ![IPPure信息查询](https://github.com/iab0x00/ProxyRules/blob/main/Resource/ippuretest.png)

<br>
<br>
<br>

# 四、特别鸣谢
感谢 **可莉插件仓库** 制作整理的大量资源 [*@可莉*](https://github.com/luestr) 

感谢 **资源解析器** [*@资源解析器*](https://github.com/KOP-XIAO) 和 **Script-Hub**[*@Script-Hub*](https://github.com/Script-Hub-Org) 

感谢好友 **LOWERTOP** 在项目中提供的支持和建议[*@LOWRERTOP*](https://github.com/LOWERTOP) 
