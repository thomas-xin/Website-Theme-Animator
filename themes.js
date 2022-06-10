var tick_delay = 60,
	period = 8000,
	hues = [0, 0.333, 0.667, 1],
	sats = [1],
	lums = [1],
	counter = 0;
function interp(a, i) {
	if (a.length == 1) return a[0];
	var x = Math.floor(i);
	var y = i - x;
	if (x >= a.length - 1) return a[x] * (1 - y) + (a[0] + 1) * y;
	return a[x] * (1 - y) + a[x + 1] * y;
}
function luma(c) {
	return c[0] * 0.299 + c[1] * 0.587 + c[2] * 0.114;
}
setInterval(function () {
	var body = document.body,
		html = document.documentElement;
	var width = Math.max(
		body.scrollWidth,
		body.offsetWidth,
		html.clientWidth,
		html.scrollWidth,
		html.offsetWidth,
	);
	var height = Math.max(
		body.scrollHeight,
		body.offsetHeight,
		html.clientHeight,
		html.scrollHeight,
		html.offsetHeight,
	);
	var objects = document.getElementsByTagName("*");
	for (var i = 0; i < objects.length; i++) {
		var obj = objects[i];
		if (obj.x_luma == -1) continue;
		if (!obj.x_luma) {
			var cs = window.getComputedStyle(obj)["background-color"];
			var col = cs.substring(cs.indexOf("(") + 1, cs.length - 1).split(",");
			if (col.length > 3) {
				if (col[3] == 0) {
					obj.luma = -1;
					continue;
				}
				obj.x_alpha = col[3];
			}
			obj.x_luma = luma(col.slice(0, 3));
		}
		var rect = obj.getBoundingClientRect();
		var offs = 2 - Math.abs((rect.x + rect.width / 2) / width - 0.5) - (rect.y + rect.height / 2) / height;
		var index = (counter / period + offs) % 1;
		var hue = interp(hues, index * (hues.length - 1));
		var sat = interp(sats, index * (sats.length - 1));
		var lum = interp(lums, index * (lums.length - 1));
		lum = obj.x_luma / 255 * (lum * 0.667 + 0.167);
		var hsl = hue * 360 + "," + sat * 100 + "%," + lum * 100 + "%";
		if (obj.x_alpha) {
			var cs = "hsla(" + hsl + "," + obj.x_alpha + ")";
		}
		else {
			var cs = "hsl(" + hsl + ")";
		}
		objects[i].style.backgroundColor = cs;
	}
	counter += tick_delay;
}, tick_delay);
