---
layout: post
title:  "you think you know javascript"
date:   2014-09-05 00:00:00
published: ture
categories: blog
tags: [ JS ]
---

>Quick test for real understanding of JavaScript core beyond closures and scopes. Here five small scripts. Try to answer what will be alerted in each case without running them in the console. Then you could create a test file and easily check your answers. Ready?

from[Sydney](http://dmitry.baranovskiy.com/post/91403200)
and [汤姆大叔](http://www.cnblogs.com/TomXu/archive/2012/02/10/2342098.html)

```js
if (!("a" in window)) {
    var a = 1;
}
alert(a);
```

```js
var a = 1,
    b = function a(x) {
        x && a(--x);
    };
alert(a);
```
```js
function a(x) {
    return x * 2;
}
var a;
alert(a);
```

```js
function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);
```

```js
function a() {
    alert(this);
}
a.call(null);
```