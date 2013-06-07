$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$$("#Search_Advanced_Header"){
	insert_bottom("hr")
}

$$("#WC_CatalogSearchForm_div_2"){
	$("./label[6]"){
		insert_after("br")
	}

	$("./div[1]"){
		attribute("style", "float: left; padding-bottom: 5px;")
	}
}

//*[@id="WC_CatalogSearchForm_div_2"]/div[1]