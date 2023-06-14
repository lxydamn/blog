<template><div><hr>
<p>在做完这个AI对抗游戏之后，对整体项目的一个复盘</p>
<!-- more -->
<hr>
<h2 id="前端逻辑复现" tabindex="-1"><a class="header-anchor" href="#前端逻辑复现" aria-hidden="true">#</a> 前端逻辑复现</h2>
<h3 id="主体逻辑" tabindex="-1"><a class="header-anchor" href="#主体逻辑" aria-hidden="true">#</a> 主体逻辑</h3>
<pre><code>![逻辑图](https://img1.imgtp.com/2023/05/05/sGYp2jdF.png)
</code></pre>
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
<p>后端基于三个模块，backend、botrunningsystem和matchingsystem</p>
<p>主体流程图</p>
<p><img src="https://img1.imgtp.com/2023/05/05/xM4359UG.png" alt="循环结构流程图.png"></p>
<h3 id="jwt验证登录" tabindex="-1"><a class="header-anchor" href="#jwt验证登录" aria-hidden="true">#</a> JWT验证登录</h3>
<p>待写...</p>
</div></template>
