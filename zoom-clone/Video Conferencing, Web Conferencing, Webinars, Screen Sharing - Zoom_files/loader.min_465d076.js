function loadScript(d,g,c,f){var e=document.getElementsByTagName("head")[0];
var a=document.createElement("script");
var b=false;
var h=null;
if(f){h=window.setTimeout(function(){if(!b){a.onload=null;
a.onerror=null;
a.onreadystatechange=null;
e.removeChild(a);
if(c){c()
}}},f)
}a.onload=function(){b=true;
if(h){window.clearTimeout(h)
}if(g){g()
}};
a.onreadystatechange=function(){if(a.readyState=="loaded"){b=true;
a.onreadystatechange=null;
if(h){window.clearTimeout(h)
}if(g){g()
}}};
a.onerror=function(){if(h){window.clearTimeout(h)
}if(c){c()
}};
a.type="text/javascript";
a.async="async";
a.src=d;
e.appendChild(a)
};