var tick_delay=60,period=8e3,hues=[0,.333,.667],sats=[1],lums=[1],counter=0;function interp(a,d){if(1==a.length)return a[0];var b=Math.floor(d),c=d-b;return b>=a.length-1?a[b]*(1-c)+(a[0]+1)*c:a[b]*(1-c)+a[b+1]*c}function luma(a){return .299*a[0]+.587*a[1]+.114*a[2]}setInterval(function(){for(var d=document.body,b=document.documentElement,l=Math.max(d.scrollWidth,d.offsetWidth,b.clientWidth,b.scrollWidth,b.offsetWidth),m=Math.max(d.scrollHeight,d.offsetHeight,b.clientHeight,b.scrollHeight,b.offsetHeight),h=document.getElementsByTagName("*"),e=0;e<h.length;e++){var a=h[e];if(-1!=a.x_luma){if(!a.x_luma){var c=window.getComputedStyle(a)["background-color"],f=c.substring(c.indexOf("(")+1,c.length-1).split(",");if(f.length>3){if(0==f[3]){a.luma=-1;continue}a.x_alpha=f[3]}a.x_luma=luma(f.slice(0,3))}var g=a.getBoundingClientRect(),i=(counter/period+(2-Math.abs((g.x+g.width/2)/l-.5)-(g.y+g.height/2)/m))%1,n=interp(hues,i*hues.length),o=interp(sats,i*sats.length),j=interp(lums,i*lums.length);j=a.x_luma/255*(.667*j+.167);var k=360*n+","+100*o+"%,"+100*j+"%";if(a.x_alpha)var c="hsla("+k+","+a.x_alpha+")";else var c="hsl("+k+")";h[e].style.backgroundColor=c}}counter+=tick_delay},tick_delay)
