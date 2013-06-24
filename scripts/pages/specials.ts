
# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$("//*[@id='main_content_wrapper']/div/div"){
	add_class("_specials")
	
	$(".//div[@id='WC_ContentAreaESpot_div_22_1']/div[1]"){
		attributes(style: "", class: "_specialText")
	}


	$(".//div[@id='WC_ContentAreaESpot_div_22_1']/div[2]"){
		$("./div[1]"){
			remove()
		}
		$("./div[1]"){
			remove()
		}
	}
}

//*[@id="WC_ContentAreaESpot_div_22_1"]/div[2]

# $("//div[@id='WC_ContentAreaESpot_div_22_1']/div[2]/div[1]"){
# 	remove()
# }