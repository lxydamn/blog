<template><div><hr>
<p>web项目完成的总过程，包括其中的问题...</p>
<!-- more -->
<hr>
<p>[TOC]</p>
<h2 id="写在前面" tabindex="-1"><a class="header-anchor" href="#写在前面" aria-hidden="true">#</a> 写在前面</h2>
<p><em>由于本网站又或者是我的博客都采用的是静态的图片（因为图床很容易失效），所以所有文章都是没有图片的，这一点只有等我找到一个稳定的图床或者自己开发一个图床后再做优化了</em></p>
<p><em>由于文章篇幅比较长，我认为再贴入代码会影响观感，所以这里只能贴入极少代码。下次一定要优化加入一个代码折叠框</em></p>
<p>web项目仓库地址：<a href="https://github.com/lxycxy/social-web" target="_blank" rel="noopener noreferrer">https://github.com/lxycxy/social-web</a></p>
<p>JavaScript &amp; TypeScript总结 ：<a href="https://lxycxy.github.io/posts/jsts.html" target="_blank" rel="noopener noreferrer">https://lxycxy.github.io/posts/jsts.html</a></p>
<p>HTML &amp; CSS 总结: <a href="https://lxycxy.github.io/posts/htmlcss.html" target="_blank" rel="noopener noreferrer">https://lxycxy.github.io/posts/htmlcss.html</a></p>
<p><strong>更好的阅读体验</strong> WEB 项目总结: <a href="https://lxycxy.github.io/posts/web.html" target="_blank" rel="noopener noreferrer">https://lxycxy.github.io/posts/web.html</a></p>
<h2 id="web主题" tabindex="-1"><a class="header-anchor" href="#web主题" aria-hidden="true">#</a> web主题</h2>
<p>在2023年4月初，就计划制作一个web形式的有聊天、写文章等功能的个人网站，恰巧选修的《web应用基础》需要做这么一个网站来作为结业项目。</p>
<p>整个项目的功能可以总结为如下几条</p>
<ul>
<li>可与用户线上或线下聊天</li>
<li>可以写文章并将文章发布到一个文章广场</li>
<li>可以搜索用户、文章</li>
<li>可以在文章广场里面查看文章</li>
</ul>
<h2 id="技术选择" tabindex="-1"><a class="header-anchor" href="#技术选择" aria-hidden="true">#</a> 技术选择</h2>
<p>整个项目整体来讲肯定需要使用到数据库，其中需要存储用户、文章以及聊天消息等等。所以需要使用到后台来做动态的数据处理，并且最近刚刚了解到了Django这样的一个框架，于是便选择了Django</p>
<p>BootStrap是来自twitter的一个前端框架或者说是一个组件库，选择Bootstrap来对简化化一些HTML&amp;CSS的内容</p>
<p>对于在线聊天的这样一个功能，我能想到的解决方案就是使用websocket来实现，websocket足够的快，可以满足在线聊天时的即时性，但Django本身并不支持websocket，所以引入了一个库——channels。</p>
<p>项目引入的更多组件会在后面再做解释</p>
<h3 id="django简介" tabindex="-1"><a class="header-anchor" href="#django简介" aria-hidden="true">#</a> <a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">Django</a>简介</h3>
<p>Django是python的一个框架，它拥有M（Model）T（Template）C（Controller）模式，是为快速制作web应用而生的一个架构。它简单易用，可以让开发者专注于业务逻辑，在项目结构、项目部署等工作上做了很高程度的封装。并且Django内置了数据库和SQL，所以开发者可以更轻松的操作数据</p>
<h3 id="channles" tabindex="-1"><a class="header-anchor" href="#channles" aria-hidden="true">#</a> <a href="https://channels.readthedocs.io/en/stable/" target="_blank" rel="noopener noreferrer">channles</a></h3>
<p>由于Django本身是不支持websocket的，所以为了更优雅的完成我的聊天功能，引入了这样一个组件，下面是它的原文简介</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>Channels is a project that takes Django and extends its abilities beyond HTTP - to handle WebSockets, chat protocols, IoT protocols, and more. It’s built on a Python specification called ASGI.

Channels builds upon the native ASGI support in Django. Whilst Django still handles traditional HTTP, Channels gives you the choice to handle other connections in either a synchronous or asynchronous style.

Channels is comprised of several packages:

- Channels, the Django integration layer
- Daphne, the HTTP and Websocket termination server
- asgiref, the base ASGI library
- channels_redis, the Redis channel layer backend (optional)

</code></pre></div><p>由于我的web项目体量较小，所以只使用到了它基本的用法加上Daphne</p>
<h2 id="开发过程以及问题" tabindex="-1"><a class="header-anchor" href="#开发过程以及问题" aria-hidden="true">#</a> 开发过程以及问题</h2>
<p>开发过程总体可以分为七大部分，内容如下</p>
<ol>
<li>整体架构，导航栏、路由等</li>
<li>登陆/注册，配置公开页面等</li>
<li>个人首页</li>
<li>文章编写、发布，文章广场实现</li>
<li>文章搜索</li>
<li>聊天功能</li>
<li>项目部署</li>
</ol>
<h3 id="整体架构" tabindex="-1"><a class="header-anchor" href="#整体架构" aria-hidden="true">#</a> 整体架构</h3>
<p>这里的整体架构采用的是经典的顶部导航栏、中部内容、底部作者信息的架构，在路由上面可以采用了Django中template自带的路由方式，在后端对未登录的用户做拦截。</p>
<p>这里的导航栏采用的是Bootstrap的响应式的导航栏，所以在这一步分内容上是比较简单，没有什么错误的。</p>
<p>但是我想要做到一个用户自定义主题的这样一个功能，但是我对于总体的css样式设计还不是特别的懂，这一点只能在以后慢慢实现了</p>
<h3 id="登录注册" tabindex="-1"><a class="header-anchor" href="#登录注册" aria-hidden="true">#</a> 登录注册</h3>
<p>Django有一套完善的登录注册方案，这一部分我只需完成登录、注册的表单以及提交后的逻辑处理即可，登录之后Django会自动的在请求之中加入用户的信息。另外，Django这一部分实现的本身就是一套安全的登录验证方案，所以并不用担心网页的安全性。</p>
<p>在样式这一部分，登陆的表单做了简单的响应式，在手机等小屏幕设置时会自动的调整登录/注册表单的大小,这里之贴出部分代码。</p>
<div class="language-CSS ext-CSS"><pre v-pre class="language-CSS"><code>sign-form {
	height: 55vh;
	width: 30%;
	padding: 1.5em;
	background-color: aliceblue;
	border-radius: 10px;
	margin: 0 auto;
	margin-top: 3em;
}


@media (max-width: 1000px) {
	.sign-form {
		width: 100%;
	}
}

</code></pre></div><h3 id="个人主页" tabindex="-1"><a class="header-anchor" href="#个人主页" aria-hidden="true">#</a> 个人主页</h3>
<p>个人主页的内容比较多，主要分为两个部分，一部分是背景图片 + 头像 + 名字 + 个人简介，另一部分是个人所写的文章，具体的样式这里很难说清，可以转至主页查看。</p>
<p>这一部分有一个比较让我不满意的地方就是图片在小屏幕上无法完全展示，还有就是我认为文章的摆放没有设计感。这两点都是我目前无法解决的问题。</p>
<h3 id="文章编写" tabindex="-1"><a class="header-anchor" href="#文章编写" aria-hidden="true">#</a> 文章编写...</h3>
<p>文章编写是我认为这个网站可有可无的一个功能，加上这个功能的原因是因为网站只做聊天的话会太过单一。对于文章发布是没有什么好说的，只是内容保存数据库而已。对于编写和内容展示这一部分我并没有找到太好的markdown编辑解析器，只能使用<a href="https://pandao.github.io/editor.md/" target="_blank" rel="noopener noreferrer">editor.md</a>这一款编辑器，我认为这一款的编辑器样式不够现代化，但一时间没有找到好的。</p>
<p>文章内容展示这一部分，我想要完成一个目录的功能，但是目前还说还没有头绪</p>
<p>评论功能，我之所以开放一个文章广场功能，就是想要用户可以对别人的文章进行评论、点赞等，但是奈何时间不够，只能待到下一次。</p>
<p>文章广场延用了首页的文章样式，没有特别值得说的地方，文章搜索也是如此；用户搜索还引入了聊天跳转功能，这里是对聊天页面没有搜索功能的一个补充</p>
<h3 id="聊天功能" tabindex="-1"><a class="header-anchor" href="#聊天功能" aria-hidden="true">#</a> 聊天功能</h3>
<p>这个功能是我网站的主打功能，但是时间上太赶，没有办法做得像流行的社交应用一般。这里先聊一下它的逻辑</p>
<ol>
<li>用户打开聊天框 ==&gt; 前端、后端建立起一个websocket链接并携带聊天对象与自己的信息，并将这样一个链接加入连接池</li>
<li>链接建立后，监听用户发送消息按钮的点击事件</li>
<li>用户发送消息，websocket向后端发送消息，后端识别消息的接收者和发送者；随后去链接池中寻找接收者，如果接收者在线则通过websocket发送消息，反之则直接进入数据库，等待用户登录后查看消息。</li>
<li>用户接收消息，用户在线时会自动监测是否有消息过来，如果有则触发js中的函数，实时渲染出某用户发送过来的消息。</li>
</ol>
<p>如上就是整个聊天的大体逻辑，细节上我做了省略；同时这里是需要做并发的处理，我同样做了省略。</p>
<p>逻辑上的问题并不是很大，但是聊天功能不完善的点是它的前端并不是很好的支持响应式，我已经尽力的去优化它的样式了，但是一个页面就想把这个样式做的完美是不现实的，所以只能带着遗憾的把这一部分放在这里了。</p>
<h3 id="项目部署" tabindex="-1"><a class="header-anchor" href="#项目部署" aria-hidden="true">#</a> 项目部署</h3>
<p>Django的项目部署还是挺容易的，但是我引入的websocket所以在nginx上面需要做一些特殊的处理了。不过在前面提到的Daphne中，就是处理这个问题的。</p>
<p>对于这一部分我没有采用最优的方案，即在开发就建立虚拟环境，而后部署就会变得非常简单，这里是一点点的小缺陷。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>总结一下在这整个web项目中具体的不足和需要改进的地方</p>
<ol>
<li>整体的主题配置，对于设计来说这一部分有很大的欠缺，想设计出让人眼前一亮的网站可能真的需要很多付出</li>
<li>响应式，对于响应式这一部分，我觉得做的不够完美。在开发的期间我初开web课上学习，我也在网络上看过一部分响应式的教程，但大多数不完整又或者是卖课的体验。这一点上还是需要多看多学</li>
<li>对于一些我引入的组件，我认为开源的组件想要更好的适配自己的项目是真的需要花时间去看源码、去定制化自己的主题又或者是自己造一些可以提供自定义主题、样式的组件去开源，当然这就需要长足的努力了。</li>
</ol>
<p>总的来说，这个web项目还是完成了的，虽然完成度不高。其中我也收获了很多，后端抛开不谈，我在HTML &amp; CSS&amp; Js 中得到了很多的练习，知道了居中的多个方式、知道了如何让动效变得丝滑等等内容，也明白了其实自己有很多的不足。个人认为CSS在它们三个之中是灵活性最高的，也是内容最多的；如果想要成为一名优秀的前端开发者，单凭那些组件库、框架而不深入CSS是很难做出<strong>自己</strong>的东西的。</p>
</div></template>
