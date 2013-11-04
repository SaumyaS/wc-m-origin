# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$(".//div[@class='main_container']"){
	add_class("_privacyPolicy")
	$(".//div[@id='WC_ContentAreaESpot_div_22_1']"){
		$("./br[1]"){
			remove()
		}
		$("./br[1]"){
			remove()
		}
		$("./strong"){
			insert_after("br")
			insert_before("br")
			insert_before("br")
		}
		$("./ul"){
			insert_after("br")
			insert_before("br")
		}
	}
}