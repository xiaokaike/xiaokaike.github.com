

(function(){
	window.onscroll = function(){ 
	    var t = document.documentElement.scrollTop || document.body.scrollTop;  
	    var siteBg = document.getElementById('siteBg'); 
	    if( t >= 100 ) { 
	        addClass(siteBg, 'blur');
	    } else { 
	        removeClass(siteBg, 'blur');
	    } 
	} 

})();


function hasClass(elements, cName){ 
	return !!elements.className.match( new RegExp( '(\\s|^)' + cName + '(\\s|$)') ); 
	// ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断 
}
function addClass(elements, cName){ 
	if( !hasClass(elements, cName) ){ 
		elements.className += ' ' + cName; 
	} 
}

function removeClass(elements, cName){ 
	if( hasClass(elements, cName) ){ 
		elements.className = elements.className.replace( new RegExp( '(\\s|^)' + cName + '(\\s|$)' ),' ' ); 
		// replace方法是替换 
	} 
}