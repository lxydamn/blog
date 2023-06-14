---
layout: Post  # 必须
title: Kob 复盘  # 博客标题（必须）
subtitle: AI小蛇双人回合制对抗游戏  # 博客副标题（可选）
date: 2023-05-5  # 博客发表日期（可选）
author: lxy  # 博客作者（可选，不填的话会使用 `themeConfig.personalInfo.name`）
useHeaderImage: true  # 是否在博客中显示封面图（可选，默认：false）
headerImage: /img/posts/kob/KOB-review.jpg  # 博客封面图（必须，即使上一项选了 false，因为图片也需要在首页显示）
headerMask: rgba(40, 57, 101, .4)  # 封面图遮罩（可选）

catalog: true  # 启用/禁用当前页的右侧目录，会覆写 `themeConfig.catalog`（可选，默认：true）
giscus: false  # 启用/禁用当前页的 Giscus 评论（可选，默认：true）

tags:  # 博客标签（可选）
  - AI
  - Springboot
---
---

在做完这个AI对抗游戏之后，对整体项目的一个复盘

<!-- more -->

--- 

## 前端逻辑复现

### 主体逻辑

![逻辑图](https://img1.imgtp.com/2023/05/05/sGYp2jdF.png)

### 技术选型

- Vue3
- Bootstrap
- Convas
- Ajax
- ...

### 实现ACGameObject作为游戏绘图基类

``` js
const AC_GAME_OBJECTS = []; // 将需要绘制的对象放入

export class AcGameObject {
    constructor() {
        AC_GAME_OBJECTS.push(this);
        this.timedelta = 0;
        this.has_called_start = false;
    }

    start() {  // 只执行一次
    }

    update() {  // 每一帧执行一次，除了第一帧之外

    }

    on_destroy() {  // 删除之前执行

    }

    destroy() {
        this.on_destroy();

        for (let i in AC_GAME_OBJECTS) {
            const obj = AC_GAME_OBJECTS[i];
            if (obj === this) {
                AC_GAME_OBJECTS.splice(i);
                break;
            }
        }
    }
}

let last_timestamp;  // 上一次执行的时刻
const step = timestamp => {
    for (let obj of AC_GAME_OBJECTS) {
        if (!obj.has_called_start) {
            obj.has_called_start = true;
            obj.start();
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }

    last_timestamp = timestamp;
    requestAnimationFrame(step)
}

requestAnimationFrame(step)
    
```

### 实现 地图 --> 墙 --> 蛇 的绘制 

![绘图对象](https://img1.imgtp.com/2023/05/05/4rTTaBb2.png)


### JWT 登陆/注册方案

主体逻辑图

![20201106155457436.png](https://img1.imgtp.com/2023/05/05/FvBEZFSQ.png)


## 后端逻辑复现

### 主体逻辑
后端基于三个模块，backend、botrunningsystem和matchingsystem

主体流程图

![循环结构流程图.png](https://img1.imgtp.com/2023/05/05/xM4359UG.png)

### 技术选型

- SpringBoot 2.x
- Mybatis-plus
- Spring Security + JWT
- ... 


### JWT验证登录

待写...

[SpringBoot + JWT登录验证方案](https://blog.csdn.net/qq_44709990/article/details/123082560)

### 匹配系统

单开一个线程，每当一个玩家请求匹配游戏，则将其入匹配池。匹配池按照积分计算规则进行玩家的匹配

匹配成功后，反馈两名玩家信息以及Bot信息返回，并开启一局游戏

### 游戏系统

每当开启一局游戏，系统生成一份地图，并生成两个玩家的起始位置，随后进行玩家移动以及输赢的检测

采用WebSocket通信协议，前后端进行通信，当玩家选择使用AI进行游戏时，后端会将Bot的代码运行结果作为蛇的前进方向，否则，检测玩家键盘 `wasd` 四个键位作为蛇的方向进行传递

### 代码运行系统

该系统目前只能支持Java代码的运行,并且编写代码有极大的限制，后续考虑使用docker来制作一套多种代码的运行方案

### 聊天系统

~~这个游戏体量比较小，对局的聊天系统难以发挥作用~~

亟待后续开发加入聊天系统...

