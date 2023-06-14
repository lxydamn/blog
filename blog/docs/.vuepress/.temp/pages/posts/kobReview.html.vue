<template><div><hr>
<p>在做完这个AI对抗游戏之后，对整体项目的一个复盘</p>
<!-- more -->
<hr>
<h2 id="前端逻辑复现" tabindex="-1"><a class="header-anchor" href="#前端逻辑复现" aria-hidden="true">#</a> 前端逻辑复现</h2>
<h3 id="主体逻辑" tabindex="-1"><a class="header-anchor" href="#主体逻辑" aria-hidden="true">#</a> 主体逻辑</h3>
<p><img src="https://img1.imgtp.com/2023/05/05/sGYp2jdF.png" alt="逻辑图"></p>
<h3 id="技术选型" tabindex="-1"><a class="header-anchor" href="#技术选型" aria-hidden="true">#</a> 技术选型</h3>
<ul>
<li>Vue3</li>
<li>Bootstrap</li>
<li>Convas</li>
<li>Ajax</li>
<li>...</li>
</ul>
<h3 id="实现acgameobject作为游戏绘图基类" tabindex="-1"><a class="header-anchor" href="#实现acgameobject作为游戏绘图基类" aria-hidden="true">#</a> 实现ACGameObject作为游戏绘图基类</h3>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">AC_GAME_OBJECTS</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 将需要绘制的对象放入</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AcGameObject</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token constant">AC_GAME_OBJECTS</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>timedelta <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>has_called_start <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 只执行一次</span>
    <span class="token punctuation">}</span>

    <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 每一帧执行一次，除了第一帧之外</span>

    <span class="token punctuation">}</span>

    <span class="token function">on_destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 删除之前执行</span>

    <span class="token punctuation">}</span>

    <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on_destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> <span class="token constant">AC_GAME_OBJECTS</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token constant">AC_GAME_OBJECTS</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token constant">AC_GAME_OBJECTS</span><span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> last_timestamp<span class="token punctuation">;</span>  <span class="token comment">// 上一次执行的时刻</span>
<span class="token keyword">const</span> <span class="token function-variable function">step</span> <span class="token operator">=</span> <span class="token parameter">timestamp</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> obj <span class="token keyword">of</span> <span class="token constant">AC_GAME_OBJECTS</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>obj<span class="token punctuation">.</span>has_called_start<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            obj<span class="token punctuation">.</span>has_called_start <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            obj<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            obj<span class="token punctuation">.</span>timedelta <span class="token operator">=</span> timestamp <span class="token operator">-</span> last_timestamp<span class="token punctuation">;</span>
            obj<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    last_timestamp <span class="token operator">=</span> timestamp<span class="token punctuation">;</span>
    <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>step<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>step<span class="token punctuation">)</span>
    
</code></pre></div><h3 id="实现-地图-墙-蛇-的绘制" tabindex="-1"><a class="header-anchor" href="#实现-地图-墙-蛇-的绘制" aria-hidden="true">#</a> 实现 地图 --&gt; 墙 --&gt; 蛇 的绘制</h3>
<p><img src="https://img1.imgtp.com/2023/05/05/4rTTaBb2.png" alt="绘图对象"></p>
<h3 id="jwt-登陆-注册方案" tabindex="-1"><a class="header-anchor" href="#jwt-登陆-注册方案" aria-hidden="true">#</a> JWT 登陆/注册方案</h3>
<p>主体逻辑图</p>
<p><img src="https://img1.imgtp.com/2023/05/05/FvBEZFSQ.png" alt="20201106155457436.png"></p>
<h2 id="后端逻辑复现" tabindex="-1"><a class="header-anchor" href="#后端逻辑复现" aria-hidden="true">#</a> 后端逻辑复现</h2>
<h3 id="主体逻辑-1" tabindex="-1"><a class="header-anchor" href="#主体逻辑-1" aria-hidden="true">#</a> 主体逻辑</h3>
<p>后端基于三个模块，backend、botrunningsystem和matchingsystem</p>
<p>主体流程图</p>
<p><img src="https://img1.imgtp.com/2023/05/05/xM4359UG.png" alt="循环结构流程图.png"></p>
<h3 id="技术选型-1" tabindex="-1"><a class="header-anchor" href="#技术选型-1" aria-hidden="true">#</a> 技术选型</h3>
<ul>
<li>SpringBoot 2.x</li>
<li>Mybatis-plus</li>
<li>Spring Security + JWT</li>
<li>...</li>
</ul>
<h3 id="jwt验证登录" tabindex="-1"><a class="header-anchor" href="#jwt验证登录" aria-hidden="true">#</a> JWT验证登录</h3>
<p>待写...</p>
<p><a href="https://blog.csdn.net/qq_44709990/article/details/123082560" target="_blank" rel="noopener noreferrer">SpringBoot + JWT登录验证方案</a></p>
<h3 id="匹配系统" tabindex="-1"><a class="header-anchor" href="#匹配系统" aria-hidden="true">#</a> 匹配系统</h3>
<p>单开一个线程，每当一个玩家请求匹配游戏，则将其入匹配池。匹配池按照积分计算规则进行玩家的匹配</p>
<p>匹配成功后，反馈两名玩家信息以及Bot信息返回，并开启一局游戏</p>
<h3 id="游戏系统" tabindex="-1"><a class="header-anchor" href="#游戏系统" aria-hidden="true">#</a> 游戏系统</h3>
<p>每当开启一局游戏，系统生成一份地图，并生成两个玩家的起始位置，随后进行玩家移动以及输赢的检测</p>
<p>采用WebSocket通信协议，前后端进行通信，当玩家选择使用AI进行游戏时，后端会将Bot的代码运行结果作为蛇的前进方向，否则，检测玩家键盘 <code>wasd</code> 四个键位作为蛇的方向进行传递</p>
<h3 id="代码运行系统" tabindex="-1"><a class="header-anchor" href="#代码运行系统" aria-hidden="true">#</a> 代码运行系统</h3>
<p>该系统目前只能支持Java代码的运行,并且编写代码有极大的限制，后续考虑使用docker来制作一套多种代码的运行方案</p>
<h3 id="聊天系统" tabindex="-1"><a class="header-anchor" href="#聊天系统" aria-hidden="true">#</a> 聊天系统</h3>
<p><s>这个游戏体量比较小，对局的聊天系统难以发挥作用</s></p>
<p>亟待后续开发加入聊天系统...</p>
</div></template>
