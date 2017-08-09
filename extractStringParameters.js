function urlArgs() {
	var args = {};
	query = "mod=viewthread&tid=6191";
	var pairs = query.split("&");
	for (var i = 0; i < pairs.length; i++) {
		var pos = pairs[i].indexOf('=');
		if (pos == -1) {
			continue;
		} else {
			var name = pairs[i].substring(0,pos);
			var value = pairs[i].substring(pos+1);
			value = decodeURIComponent(value);
			args[name] = value;
		}
	}
	return args;
}
console.log(urlArgs());