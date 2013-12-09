$$(".mw_was_thead"){
	remove()
} 

$$(".order-product-info"){
	add_class("test")
	$("./div[1]"){
		insert_before("h4", "SKU: ", class: "_titleHead")
	}
	$("./div[2]"){
		insert_before("h4", "Name: ", class: "_titleHead")
	}
	$("./div[3]"){
		insert_before("h4", "QTY:  ", class: "_titleHead")
	}
	$("./div[4]"){
		attribute("class", "_remove")
	}
}