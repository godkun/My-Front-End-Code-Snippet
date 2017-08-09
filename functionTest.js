if (element.addEventListener {
		// 在使用W3C方法之前检测它是否可用
		element.addEventListener("keydown", handler, false);
		element.addEventListener("keypress",handler, false);
	} else if(element.attachEvent) {
			// 在使用IE方法之前检测它
			element.attachEvent("onkeydown", handler);
			element.attachEvent("onkeypress", handler);
	} else{
		// 都不能用的时候，选择普遍支持的技术
		element.onkeydown = element.onkeypress = handler;
	}