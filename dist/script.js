const urlEntries = "https://api.github.com/repos/twbs/bootstrap/releases/latest"
$.ajax ({
	url: urlEntries,
	success: function (result) {
		$(".bv").text(result.name.slice(1));
	}
})

const urlEntries2 = "https://api.github.com/repos/jquery/jquery/releases/latest"
$.ajax ({
	url: urlEntries2,
	success: function (result) {
		$(".jv").text(result.tag_name);
	}
})

const urlEntries3 = "https://api.github.com/repos/sindresorhus/modern-normalize/releases/latest"
$.ajax ({
	url: urlEntries3,
	success: function (result) {
		$(".nv").text(result.tag_name);
	}
})

const urlEntries4 = "https://api.github.com/repos/twbs/bootstrap/releases/latest"
$.ajax ({
	url: urlEntries4,
	success: function (result) {
		var bduDist = result.assets[0].browser_download_url;
		$(".bdu-dist").attr("href", bduDist);
	}
})

const urlEntries5 = "https://api.github.com/repos/twbs/bootstrap/releases/latest"
$.ajax ({
	url: urlEntries5,
	success: function (result) {
		var bduSrc = "https://github.com/twbs/bootstrap/archive/" + result.tag_name + ".zip";
		$(".bdu-src").attr("href", bduSrc);
	}
})

const urlEntries6 = "https://api.github.com/repos/Splidejs/splide/releases/latest"
$.ajax ({
	url: urlEntries6,
	success: function (result) {
		$(".sv").text(result.name.slice(1));
	}
})
