var friend=['farhad','robi','faysal','saiful','delower','saymon','robi','faysal','saiful','delower','saymon'];
var html='<ul>';
for (var i =0; i< friend.length; i++) {
	html=html+'<li>'+friend[i]+'</li>'
}

html=html+'</ul>';

var news=document.getElementById('news');
news.innerHTML=html;