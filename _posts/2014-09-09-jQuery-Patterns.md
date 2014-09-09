---
layout: post
title:  "jQuery Patterns"
date:   2014-09-09 00:00:00
published: true
categories: blog
tags: [ js ]
---
> jquery patterns


#### **requery** - avoid requery by using jQuery chaining

```js

/* Title: requery
 * Description: avoid requery by using jQuery chaining
 */

// antipattern
// create and append your element
$(document.body).append("<div class='baaron' />");
// requery to bind stuff
$("div.baaron").click(function () {
});


// preferred
// swap to appendTo to hold your element
$("<div class='baaron' />")
		.appendTo(document.body)
		.click(function () {
		});


// References
// http://paulirish.com/2009/perf/

```

#### **append** - use string concatenate and set innerHTML

```js

/* Title: append
 * Description: use string concatenate and set innerHTML
 */

// antipattern
// appending inside
$.each(reallyLongArray, function (count, item) {
	var newLI = '<li>' + item + '</li>';
	$('#ballers').append(newLI);
});

// documentFragment off-DOM
var frag = document.createDocumentFragment();
$.each(reallyLongArray, function (count, item) {
	var newLI = $('<li>' + item + '</li>');
	frag.appendChild(newLI[0]);
});
$('#ballers')[0].appendChild(frag);

// string concatenate and set innerHTML
var myhtml = '';
$.each(reallyLongArray, function (count, item) {
	myhtml += '<li>' + item + '</li>';
});
$('#ballers').html(myhtml);

// References
// http://paulirish.com/2009/perf/

```

#### **data** - pattern and antipattern of using data

```js 

/* Title: data
 * Description: pattern and antipattern of using data
 */

// antipattern
$(elem).data(key, value);


// preferred
$.data(elem, key, value);


// References
// http://paulirish.com/2009/perf/

```

#### **context and find** - use find over context

```js

/* Title: context and find
 * Description: better to choose `find` over `context` 
 */


var arms = $('div.robotarm', '#container');
$('.reply_form', $(this).closest('.comment')).hide();

// no performance gain over doing this, but a preferred pattern for readability reason
var arms = $('#container').find('div.robotarm');
$(this).closest('.comment').find('.reply_form').hide();


// References
// http://paulirish.com/2009/perf/

```

#### **detach** - take element off the DOM while manipulating them

```js

/* Title: detach
 * Description: take element off the DOM while manipulating them
 */

var table = $('#some-table');
var parent = table.parent();

table.detach();
table.addLotsAndLotsOfRows();
parent.append(table);


// References
// http://paulirish.com/2009/perf/

```

#### **event delegation** - event delegation pattern and antipattern
```js

/* Title: event delegation
 Description: event delegation pattern and antipattern
 */

// antipattern
$('a.trigger', $('#container')[0]).live('click', handlerFn);


// preferred
$('#container').on('click', 'a.trigger', handlerFn);

// .bind()
// .live() - best used for simple scenario, it functions the best with a supply selector only, it's not chainable
// .delegate() - it gives you a more focused way, it can better filter the elements, for example, table row


// References
// http://paulirish.com/2009/perf/

```

#### **selector cache** - using selector cache to avoid requery
```js
/* Title: selector cache
 Description: using selector cache to avoid requery
 */

// antipattern
$('.list-item').click(function () {
	$('.photo').hide();
});


// preferred
var $photo;
// prefix the cache with $ to help identify it as a selector cache later
$('.list-item').click(function () {
	$photo = $photo || $('.photo');
	$photo.hide();
});


// References
// http://ejohn.org/blog/learning-from-twitter/

```

#### **window scroll event** - avoid attaching handlers to the window scroll event
```js
/* Title: window scroll event
 * Description: avoid attaching handlers to the window scroll event
 */

// antipattern
$(window).scroll(function () {
	$('.foo').something();
});


// preferred
var outerPane = $details.find(".details-pane-outer"),
		didScroll = false;
$(window).scroll(function () {
	didScroll = true;
});

setInterval(function () {
	if (didScroll) {
		didScroll = false;
		// Check your page position and then
		// Load in more results
		// outerPane.html();
	}
}, 250);


// preferred v2, timeout instead of interval - no unnecessary ticks
var scrollTimeout;  // global for any pending scrollTimeout
var outerPane = $details.find(".details-pane-outer");

$(window).scroll(function () {
	if (scrollTimeout) {
		// clear the timeout, if one is pending
		clearTimeout(scrollTimeout);
		scrollTimeout = null;
	}
	scrollTimeout = setTimeout(scrollHandler, 250);
});

scrollHandler = function () {
	// Check your page position and then
	// Load in more results
	// outerPane.html();
};

// References
// http://ejohn.org/blog/learning-from-twitter/

```

### Selector
----------
#### **Left and Right** - specific on the right, light on the left
```js

/* Title: Left and Right
 * Description: specific on the right, light on the left
 */

// antipattern
$('div.data .brad')


// preferred
$('.data td.brad')


// References
// http://paulirish.com/2009/perf/

```
#### **Decending from id** - be more specific
```js

/* Title: Decending from id
 * Description: be more specific, better to descend from an id
 */

// antipattern
var arms = $('.container div.robotarm');


// better
var arms = $('#container div.robotarm');


// preferred
var arms = $('#container').find('div.robotarm');


// References
// http://paulirish.com/2009/perf/

```
#### **Universal Selector** - use of universal selector
```js
/* Title: Universal Selector
 * Description: better use of universal selector
 */

// antipattern 1
$('.buttons > *')


// preferred 1
$('.buttons').children()


// antipattern 2
$('.gender :radio')
$('.gender *:radio')


// preferred 2
$('.gender input:radio')


// References
// http://paulirish.com/2009/perf/
```
#### **Be Specific when Needed** - be specific only when needed
```js
/* Title: Be Specific when Needed
 * Description: no need to be over-specific
 */

// antipattern
var arms = $('.data table.attendees td.brad');


// preferred
var arms = $('.data td.brad');


// References
// http://paulirish.com/2009/perf/s

```
### Publish–subscribe
#### **Method 1** - custom events using .on() and .off()
```js


```

#### **Method 2** - using jQuery 1.7's $.Callbacks() feature
#### **Method 3** - using jQuery UI $.Observable
#### **Method 4** - third-party plugins
