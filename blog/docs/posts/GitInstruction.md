---
layout: Post  # 必须
title: Git团队协作  # 博客标题（必须）
subtitle: git & github 的团队开发  # 博客副标题（可选）
date: 2023-06-02  # 博客发表日期（可选）
author: 李幸洋  # 博客作者（可选，不填的话会使用 `themeConfig.personalInfo.name`）
useHeaderImage: true  # 是否在博客中显示封面图（可选，默认{.inline-code}：false）
headerImage: /img/posts/git/107.png  # 博客封面图（必须，即使上一项选了 false，因为图片也需要在首页显示）
headerMask: rgba(40, 57, 101, .4)  # 封面图遮罩（可选）

giscus: false  # 启用/禁用当前页的 Giscus 评论（可选，默认{.inline-code}：true）

tags:  # 博客标签（可选）
  - 教学
  - git
  - github
---
---

在学生学业发展与评价系统中，对于五人协作开发的一些指导

<!-- more -->

--- 

## 基本操作

拉取项目到本地 `git clone git@github.com:lxycxy/student-develop-sys.git`

提交修改到暂存区 `git add .``.` 为针对所有修改的文件，也可以使用`文件名`代替 `.`

暂存区提交到版本库 `git commit -m "备注信息"`  最好是简要描述一下完成的功能

提交代码 `git push`

## 团队协作

---
***写在前面***

此处教程只有简单dev分支操作，但个人分支的开发也需要准从一定的规范，下面的链接可作参考

[git 团队开发规范](https://juejin.cn/post/6969090738961432613)


---

1. 创建个人开发分支，名字格式如图，姓名首字母加dev

    ![图片](/img/posts/git/1.png "图片")

    创建成功

    ![图片](/img/posts/git/2.png "图片")

2. 本地切换或拉取新分支

    **如果在创建分支前已经拉取了项目，则先`git pull`；反正则直接拉取项目**

    `git clone git@github.com:lxycxy/student-develop-sys.git`

    ![图片](/img/posts/git/3.png "图片")

    切换分支 `git checkout <分支名>`

    ![图片](/img/posts/git/4.png "图片")

3. 提交代码(**注意一定是在自己的分支**)

    完成自己的功能开发后即可提交

    ![图片](/img/posts/git/5.png "图片")

    发起合并请求

    ![图片](/img/posts/git/6.png "图片")


    ![图片](/img/posts/git/7.png "图片")

    合并到master分支成功

    ![图片](/img/posts/git/8.png "图片")




## Git

### git基本概念

工作区：仓库的目录。工作区是独立于各个分支的。

暂存区：数据暂时存放的区域，类似于工作区写入版本库前的缓存
区。暂存区是独立于各个分支的。

版本库：存放所有已经提交到本地仓库的代码版本

版本结构：树结构，树中每个节点代表一个代码版本。

### git常用命令

`git config --global user.name xxx`：设置全局用户名，信息记录在~/.gitconfig文件中

`git config --global user.email xxx@xxx.com`：设置全局邮箱地址，信息记录在~/.gitconfig文件中

`git init`：将当前目录配置成git仓库，信息记录在隐藏的.git文件夹中

`git add XX`：将XX文件添加到暂存区

`git add .`：将所有待加入暂存区的文件加入暂存区

`git rm --cached XX`：将文件从仓库索引目录中删掉

`git commit -m "给自己看的备注信息"`：将暂存区的内容提交到当前分支

`git status`：查看仓库状态

`git diff XX`：查看XX文件相对于暂存区修改了哪些内容

`git log`：查看当前分支的所有版本

`git reflog`：查看HEAD指针的移动历史（包括被回滚的版本）

`git reset --hard HEAD^` 或 `git reset --hard HEAD~`：将代码库回滚到上一个版本

`git reset --hard HEAD^^`：往上回滚两次，以此类推

`git reset --hard HEAD~100`：往上回滚100个版本

`git reset --hard 版本号`：回滚到某一特定版本

`git checkout — XX或git restore XX`：将XX文件尚未加入暂存区的修改全部撤销

`git remote add origin git@git.acwing.com:xxx/XXX.git`：将本地仓库关联到远程仓库

`git push -u (第一次需要-u以后不需要)`：将当前分支推送到远程仓库

`git push origin branch_name`：将本地的某个分支推送到远程仓库

`git clone git@git.acwing.com:xxx/XXX.git`：将远程仓库XXX下载到当前目录下

`git checkout -b branch_name`：创建并切换到branch_name这个分支

`git branch`：查看所有分支和当前所处分支

`git checkout branch_name`：切换到branch_name这个分支

`git merge branch_name`：将分支branch_name合并到当前分支上

`git branch -d branch_name`：删除本地仓库的branch_name分支

`git branch branch_name`：创建新分支

`git push --set-upstream origin branch_name`：设置本地的branch_name分支对应远程仓库的branch_name分支

`git push -d origin branch_name`：删除远程仓库的branch_name分支

`git pull`：将远程仓库的当前分支与本地仓库的当前分支合并

`git pull origin branch_name`：将远程仓库的branch_name分支与本地仓库的当前分支合并

`git branch --set-upstream-to=origin/branch_name1 branch_name2`：将远程的branch_name1分支与本地的branch_name2分支对应

`git checkout -t origin/branch_name` 将远程的branch_name分支拉取到本地

`git stash`：将工作区和暂存区中尚未提交的修改存入栈中

`git stash apply`：将栈顶存储的修改恢复到当前分支，但不删除栈顶元素

`git stash drop`：删除栈顶存储的修改

`git stash pop`：将栈顶存储的修改恢复到当前分支，同时删除栈顶元素

`git stash list`：查看栈中所有元素

## 冲突解决

`git stash` 保存贮藏

`git pull` 拉取

`git stash pop` 弹出贮藏 （此时会将更新的代码和自己写的代码合并，可能会有冲突，需要手动解决冲突）
