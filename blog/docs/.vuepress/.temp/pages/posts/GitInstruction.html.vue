<template><div><hr>
<p>在学生学业发展与评价系统中，对于五人协作开发的一些指导</p>
<!-- more -->
<hr>
<h2 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作" aria-hidden="true">#</a> 基本操作</h2>
<p>拉取项目到本地 <code>git clone git@github.com:lxycxy/student-develop-sys.git</code></p>
<p>提交修改到暂存区 <code>git add .``.</code> 为针对所有修改的文件，也可以使用<code>文件名</code>代替 <code>.</code></p>
<p>暂存区提交到版本库 <code>git commit -m &quot;备注信息&quot;</code>  最好是简要描述一下完成的功能</p>
<p>提交代码 <code>git push</code></p>
<h2 id="团队协作" tabindex="-1"><a class="header-anchor" href="#团队协作" aria-hidden="true">#</a> 团队协作</h2>
<hr>
<p><em><strong>写在前面</strong></em></p>
<p>此处教程只有简单dev分支操作，但个人分支的开发也需要准从一定的规范，下面的链接可作参考</p>
<p><a href="https://juejin.cn/post/6969090738961432613" target="_blank" rel="noopener noreferrer">git 团队开发规范</a></p>
<hr>
<ol>
<li>
<p>创建个人开发分支，名字格式如图，姓名首字母加dev</p>
<p><img src="/img/posts/git/1.png" alt="图片" title="图片"></p>
<p>创建成功</p>
<p><img src="/img/posts/git/2.png" alt="图片" title="图片"></p>
</li>
<li>
<p>本地切换或拉取新分支</p>
<p><strong>如果在创建分支前已经拉取了项目，则先<code>git pull</code>；反正则直接拉取项目</strong></p>
<p><code>git clone git@github.com:lxycxy/student-develop-sys.git</code></p>
<p><img src="/img/posts/git/3.png" alt="图片" title="图片"></p>
<p>切换分支 <code>git checkout &lt;分支名&gt;</code></p>
<p><img src="/img/posts/git/4.png" alt="图片" title="图片"></p>
</li>
<li>
<p>提交代码(<strong>注意一定是在自己的分支</strong>)</p>
<p>完成自己的功能开发后即可提交</p>
<p><img src="/img/posts/git/5.png" alt="图片" title="图片"></p>
<p>发起合并请求</p>
<p><img src="/img/posts/git/6.png" alt="图片" title="图片"></p>
<p><img src="/img/posts/git/7.png" alt="图片" title="图片"></p>
<p>合并到master分支成功</p>
<p><img src="/img/posts/git/8.png" alt="图片" title="图片"></p>
</li>
</ol>
<h2 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h2>
<h3 id="git基本概念" tabindex="-1"><a class="header-anchor" href="#git基本概念" aria-hidden="true">#</a> git基本概念</h3>
<p>工作区：仓库的目录。工作区是独立于各个分支的。</p>
<p>暂存区：数据暂时存放的区域，类似于工作区写入版本库前的缓存
区。暂存区是独立于各个分支的。</p>
<p>版本库：存放所有已经提交到本地仓库的代码版本</p>
<p>版本结构：树结构，树中每个节点代表一个代码版本。</p>
<h3 id="git常用命令" tabindex="-1"><a class="header-anchor" href="#git常用命令" aria-hidden="true">#</a> git常用命令</h3>
<p><code>git config --global user.name xxx</code>：设置全局用户名，信息记录在~/.gitconfig文件中</p>
<p><code>git config --global user.email xxx@xxx.com</code>：设置全局邮箱地址，信息记录在~/.gitconfig文件中</p>
<p><code>git init</code>：将当前目录配置成git仓库，信息记录在隐藏的.git文件夹中</p>
<p><code>git add XX</code>：将XX文件添加到暂存区</p>
<p><code>git add .</code>：将所有待加入暂存区的文件加入暂存区</p>
<p><code>git rm --cached XX</code>：将文件从仓库索引目录中删掉</p>
<p><code>git commit -m &quot;给自己看的备注信息&quot;</code>：将暂存区的内容提交到当前分支</p>
<p><code>git status</code>：查看仓库状态</p>
<p><code>git diff XX</code>：查看XX文件相对于暂存区修改了哪些内容</p>
<p><code>git log</code>：查看当前分支的所有版本</p>
<p><code>git reflog</code>：查看HEAD指针的移动历史（包括被回滚的版本）</p>
<p><code>git reset --hard HEAD^</code> 或 <code>git reset --hard HEAD~</code>：将代码库回滚到上一个版本</p>
<p><code>git reset --hard HEAD^^</code>：往上回滚两次，以此类推</p>
<p><code>git reset --hard HEAD~100</code>：往上回滚100个版本</p>
<p><code>git reset --hard 版本号</code>：回滚到某一特定版本</p>
<p><code>git checkout — XX或git restore XX</code>：将XX文件尚未加入暂存区的修改全部撤销</p>
<p><code>git remote add origin git@git.acwing.com:xxx/XXX.git</code>：将本地仓库关联到远程仓库</p>
<p><code>git push -u (第一次需要-u以后不需要)</code>：将当前分支推送到远程仓库</p>
<p><code>git push origin branch_name</code>：将本地的某个分支推送到远程仓库</p>
<p><code>git clone git@git.acwing.com:xxx/XXX.git</code>：将远程仓库XXX下载到当前目录下</p>
<p><code>git checkout -b branch_name</code>：创建并切换到branch_name这个分支</p>
<p><code>git branch</code>：查看所有分支和当前所处分支</p>
<p><code>git checkout branch_name</code>：切换到branch_name这个分支</p>
<p><code>git merge branch_name</code>：将分支branch_name合并到当前分支上</p>
<p><code>git branch -d branch_name</code>：删除本地仓库的branch_name分支</p>
<p><code>git branch branch_name</code>：创建新分支</p>
<p><code>git push --set-upstream origin branch_name</code>：设置本地的branch_name分支对应远程仓库的branch_name分支</p>
<p><code>git push -d origin branch_name</code>：删除远程仓库的branch_name分支</p>
<p><code>git pull</code>：将远程仓库的当前分支与本地仓库的当前分支合并</p>
<p><code>git pull origin branch_name</code>：将远程仓库的branch_name分支与本地仓库的当前分支合并</p>
<p><code>git branch --set-upstream-to=origin/branch_name1 branch_name2</code>：将远程的branch_name1分支与本地的branch_name2分支对应</p>
<p><code>git checkout -t origin/branch_name</code> 将远程的branch_name分支拉取到本地</p>
<p><code>git stash</code>：将工作区和暂存区中尚未提交的修改存入栈中</p>
<p><code>git stash apply</code>：将栈顶存储的修改恢复到当前分支，但不删除栈顶元素</p>
<p><code>git stash drop</code>：删除栈顶存储的修改</p>
<p><code>git stash pop</code>：将栈顶存储的修改恢复到当前分支，同时删除栈顶元素</p>
<p><code>git stash list</code>：查看栈中所有元素</p>
<h2 id="冲突解决" tabindex="-1"><a class="header-anchor" href="#冲突解决" aria-hidden="true">#</a> 冲突解决</h2>
<p><code>git stash</code> 保存贮藏</p>
<p><code>git pull</code> 拉取</p>
<p><code>git stash pop</code> 弹出贮藏 （此时会将更新的代码和自己写的代码合并，可能会有冲突，需要手动解决冲突）</p>
</div></template>
