$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}


$("/html"){
	$("./body/div/div/div/div/div/div/div"){
		# topcat_promo2
		$("./div[2]"){
			wrap("div"){
				attributes(class: "_catView", data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-id: "cat_icons")
			}
			attributes(class: "yo", data-ur-carousel-component: "scroll_container")
			$("./div"){
				attributes(class: "_catType", data-ur-carousel-component: "item")
			}
		}
		

	

		
	}
}
