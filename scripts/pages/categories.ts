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
	$("./body//div[@class='topcat_right_content']"){
		# attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-id: "feat_icons", data-ur-center: "enabled", data-ur-autoscroll: "disabled", data-ur-infinite: "disabled")
		# $("./div[@class='topcat_right_content_main']"){
		# 	attributes(data-ur-carousel-component: "scroll_container")
		# 	$("./div[@class='topcat_right_content-product']"){
		# 		attributes(data-ur-carousel-component: "item")
		# 	}

		# }
		move_to("../../div/div[@class='topcat_left_content']/div[2]", position("after"))
	}
}

$$(".topcat_narrow_row"){
	$("./ul/li/div[1]"){
		add_class("_imageDiv")
	}
}




