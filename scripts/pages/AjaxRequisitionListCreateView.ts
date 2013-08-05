
$(".//label"){
	attributes(style: "font-weight: bold;display: inline-block; min-width: 100px;")
	insert_before("br")
}
$("//input[1]"){
	attributes(style: "margin: 5px 0px;padding: 4px;background: #ccc;border: 1px solid #aaa;box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.4) inset;")
	# insert_after("br")
}
$("//input[2]"){
	attributes(style: "margin: 5px 0px;padding: 4px;background: #ccc;border: 1px solid #aaa;box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.4) inset;")
	# insert_after("br")
}


$("//div[@class='info_content']"){
	# insert_after("br")
}
$("//p"){
	attributes(style: "margin-top: 10px;")

}

$$(".new_requisition_list_details"){
	$("./br"){
		remove()
	}
}

$("//br[1]"){
	remove()
}

$("//div[1]"){
	insert_top("br")
}

$$(".btn-gray"){
	attributes(style: "float:right")
}