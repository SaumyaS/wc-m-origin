$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$("//*[@id='main_content_wrapper']/div/div"){
	$("./div"){
		attribute("class", "_location")
	}



	$("//*[@id='WC_ContentAreaESpot_div_1_18101']/hr"){
		insert_after("div", class: "_map")
	}

	
}

$("//*[@id='WC_ContentAreaESpot_div_22_1']/iframe"){
	attributes(width: "300px", height: "600px;", scrolling: "no", frameborder: "0")
}

