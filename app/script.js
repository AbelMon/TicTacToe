$("td").click(function() {
	var td = $(this)

	var tdContent = td.text()

	if (tdContent === "X") {
		td.text("O")
		return
	}

	if (tdContent === "O") {
		td.text("-")
		return
	}

	td.text("X")
})

$("button").click(function() {
	$("td").text("-")
})

