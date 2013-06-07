
# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$$("#Search_Advanced_Header"){
	insert_bottom("hr")
}

$$("#WC_CatalogSearchForm_div_2"){
	
	# Price Range Labels
	$("./label[6]"){
		insert_after("br")
	}
	$("./label[7]"){
		attribute("style", "min-width: 0; padding-right: 5px;")
	}
	$("./label[8]"){
		attribute("style", "min-width: 0; padding-right: 5px;")
	}

	# # of results
	$("./div[1]"){
		attribute("style", "float: left; padding-bottom: 5px;")
	}
}

//*[@id="WC_CatalogSearchForm_div_2"]/div[1]