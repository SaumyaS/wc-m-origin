$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}


$("/html"){
	$("./body//div[@class='topcat_left_content']"){
		# topcat_promo2
		$("./div[2]"){
			wrap("div"){
				attributes(class: "_catView", data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-id: "cat_icons", data-ur-center: "enabled", data-ur-autoscroll: "enabled")
				insert_bottom("div", data-ur-carousel-component: "dots", class: "_dots")
			}
			attributes(class: "yo", data-ur-carousel-component: "scroll_container")
			$("./div"){
				name(){
					set("li")
				}
				attributes(class: "_catType", data-ur-carousel-component: "item")
			}
		}
		

	

		
	}
}
