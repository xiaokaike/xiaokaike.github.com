---
layout: post
title:  "git ssh key配置"
date:   2014-08-15 00:00:00
published: true
categories: blog
tags: [ git ]
---


一、Windows环境下生成SSH key且连接GitHub第一步、看看是否存在SSH密钥(keys)
首先，我们需要看看是否看看本机是否存在SSH keys,打开Git Bash,并运行:

```bash
$cd ~/.ssh
# 检查你本机用户home目录下是否存在.ssh目录
```

如果，不存在此目录，则进行第二步操作，否则，你本机已经存在ssh公钥和私钥，可以略过第二步，直接进入第三步操作。
第二步、创建一对新的SSH密钥(keys)
输入如下命令：

```bash
$ssh-keygen -t rsa -C "your_email@example.com"
#这将按照你提供的邮箱地址，创建一对密钥
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/you/.ssh/id_rsa): [Press enter]
```

直接回车，则将密钥按默认文件进行存储。此时也可以输入特定的文件名，比如`/c/Users/you/.ssh/github_rsa`
接着，根据提示，你需要输入密码和确认密码。相关提示如下：

```bash
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]
```

输入完成之后，屏幕会显示如下信息：

```bash
Your identification has been saved in /c/Users/you/.ssh/id_rsa.
Your public key has been saved in /c/Users/you/.ssh/id_rsa.pub.
The key fingerprint is:01:0f:f4:3b:ca:85:d6:17:a1:7d:f0:68:9d:f0:a2:db 
```

your_email@example.com第三步、在GitHub账户中添加你的公钥
运行如下命令，将公钥的内容复制到系统粘贴板(clipboard)中。

```bash
clip < ~/.ssh/id_rsa.pub
```

接着：

  1. 登陆GitHub,进入你的Account Settings. 

  2. 在左边菜单，点击"SSH Keys". 

  3. 点击"Add SSH key"按钮.

  4. 粘贴你的密钥到key输入框中.

  5. 点击"Add Key"按钮。

  6. 再弹出窗口，输入你的GitHub密码，点击确认按钮。
  7. 到此，大功告成了！

第四步、测试
为了确认我们可以通过SSH连接GitHub，我们输入下面命令。输入后，会要求我们提供验证密码，输入之前创建的密码就ok了。

```bash
$ssh -T git@github.com
```

你可能会看到告警信息，如下：

```bash
The authenticity of host 'github.com (207.97.227.239)' can't be established.
RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
Are you sure you want to continue connecting (yes/no)?
```

不用担心，直接输入yes。
如果看到下面信息，就说明一切完美！
Hi username! You've successfully authenticated, but GitHub does not provide shell access.二、Mac环境下生成SSH key且连接GitHub第一步、看看是否存在SSH密钥(keys)
首先，我们需要看看是否看看本机是否存在SSH keys,打开终端(Terminal),并运行:

```bash
$cd ~/.ssh
# 检查你本机用户home目录下是否存在.ssh目录
```

如果，不存在此目录，则进行第二步操作，否则，你本机已经存在ssh公钥和私钥，可以略过第二步，直接进入第三步操作。
第二步、创建一对新的SSH密钥(keys)
输入如下命令：

```bash
$ssh-keygen -t rsa -C "your_email@example.com"
#这将按照你提供的邮箱地址，创建一对密钥
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]
```

直接回车，则将密钥按默认文件进行存储。此时也可以输入特定的文件名，比如/Users/you/.ssh/github_rsa
接着，根据提示，你需要输入密码和确认密码。相关提示如下：

```bash
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]
```

输入完成之后，屏幕会显示如下信息：

```bash
Your identification has been saved in /Users/you/.ssh/id_rsa.
Your public key has been saved in /Users/you/.ssh/id_rsa.pub.
The key fingerprint is:01:0f:f4:3b:ca:85:d6:17:a1:7d:f0:68:9d:f0:a2:db 
```

your_email@example.com第三步、在GitHub账户中添加你的公钥
运行如下命令，将公钥的内容复制到系统粘贴板(clipboard)中。

```bash
pbcopy < ~/.ssh/id_rsa.pub
```

接着：

  1. 登陆GitHub,进入你的Account Settings. 

  2. 在左边菜单，点击"SSH Keys". 

  3. 点击"Add SSH key"按钮.

  4. 粘贴你的密钥到key输入框中.

  5. 点击"Add Key"按钮。

  6. 再弹出窗口，输入你的GitHub密码，点击确认按钮。
  7. 到此，大功告成了！

第四步、测试
为了确认我们可以通过SSH连接GitHub，我们输入下面命令。输入后，会要求我们提供验证密码，输入之前创建的密码就ok了。

```bash
$ ssh -T git@github.com
```

你可能会看到告警信息，如下：

```bash
The authenticity of host 'github.com (207.97.227.239)' can't be established.
RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
Are you sure you want to continue connecting (yes/no)?
```

不用担心，直接输入yes。
如果看到下面信息，就说明一切完美！

```bash
Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```

【注意】

如果前面没有将生成的密钥存放在默认的文件id_rsa中（而是my_rsa中）,那么

```bash
ssh -T git@github.com
```

命令就需要添加参数来执行。如下：

```bash
$ ssh -T -i my_rsa git@github.com
```

三、单机如何控制不同的SSH Keys连不同的Git环境?
其实，一套SSH密钥是可以用在不同的SSH环境的.
但是如果由于某种要求，需要用不同的SSH密钥连接不同的Git环境。假设具体场景是，已经建了密钥github_rsa，还需要创建work_rsa连接工作环境git仓库，那么，可以按下面操作进行：
1. 创建另一对密钥work_rsa.$ssh-keygen -t rsa -C "work@mail.com"#保存密钥为work_rsa2. 添加新身份信息

```bash
$ssh-add ～/.ssh/work_rsa3. 
```

配置.ssh/config
我们需要通过Host别名，将不同的账号区分开来。

```bash
Host me.github.com    
HostName github.com    
PreferredAuthentications publickey    
IdentityFile ~/.ssh/github_rsaHost work.comp.com    
HostName comp.com    
PreferredAuthentications publickey    
IdentityFile ~/.ssh/work_rsa
```

参考文档:GitHub官方文档Generating SSH Keys