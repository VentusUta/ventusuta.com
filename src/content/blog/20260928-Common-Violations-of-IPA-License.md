---
title: IPA授权字体的许可证问题
description: 即使在几乎不可能被追责的情况下，遵守许可证也是重要的。
pubDate: 2026-09-28
lang: zh-CN
tags:
  - 字体
  - 自由软件
---

## IPA字体和衍生家族

IPA系列字体是由日本“[文字信息技术促进理事会](https://moji.or.jp/)”（日文：<span lang="ja">文字情報技術促進協議会</span>）开发的[数款字体](https://moji.or.jp/ipafont/)。其过去由“[信息处理推进机构](https://www.ipa.go.jp/)”（日文：<span lang="ja">情報処理推進機構</span>）开发，此系列字体名称中的IPA指的就是它（Innovation Platform Agency），而非国际音标的IPA。

因原字体是日文字体，从字符覆盖和字形标准上不太利于中文地区使用，所以有许多字体爱好者为它扩充及修改了字符。最著名的衍生字体是落霞孤鹜（LXGW）开发的“晰致尚铭”（[霞鹜新晰黑](https://github.com/lxgw/LxgwNeoXiHei/)、[霞鹜晰黑](https://github.com/lxgw/LxgwXiHei/)、[霞鹜新致宋](https://github.com/lxgw/LxgwNeoZhiSong)、[霞鹜致宋](https://github.com/lxgw/LxgwZhiSong)等）系列；另外还有“致一黑体”“一点明体”等。

## 常见的许可证违反

与经典的SIL OFL一样，[IPA许可证](https://moji.or.jp/ipafont/license/)也是一个“传染性”授权，即所有基于此字体系列开发的字体均必须使用相同许可证。通常对字体来讲，这并非一个问题，因为此类许可证一般只涉及字体，嵌入它们不会导致整个软件被迫开源（使用GPL的字体除外）。

但IPA许可证有一个相较其他许可证来讲较为特殊的条款：

><span lang="en">It is required to also Redistribute means to enable recipients of the Derived Program to replace the Derived Program with the Licensed Program first released under this License (the “Original Program”). Such means may be to provide a difference file from the Original Program, or instructions setting out a method to replace the Derived Program with the Original Program.</span>

也就是**在软件中使用时，应允许用户恢复到原IPA字体**。对于在一般软件和网页字体使用的情况，若要合规，必须提供一个切换回原字体的方式（比如弄个选项）或者提供一个差异文件。

然而遗憾的是，许多在网页上加载IPA许可证字体的站长**完全无视了该项**，至今我也没有见到遵守许可证的中文站。