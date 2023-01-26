const urlEntries = "https://api.github.com/repos/twbs/bootstrap/releases/latest"

$.ajax ({
	url: urlEntries,
	success: function (result) {
		console.log(result);
		$(".bv").text(result.name.slice(1));
	}
})

const urlEntries2 = "https://api.github.com/repos/jquery/jquery/releases/latest"

$.ajax ({
	url: urlEntries2,
	success: function (result) {
		console.log(result);
		$(".jv").text(result.tag_name);
	}
})

const urlEntries2 = "https://api.github.com/repos/sindresorhus/modern-normalize/releases/latest"

$.ajax ({
	url: urlEntries3,
	success: function (result) {
		console.log(result);
		$(".nv").text(result.tag_name);
	}
})