
# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$$(".main_wrapper"){
	$("./div[@class='main_container']"){
		add_class("_brands")
		attributes(data-ur-set: "toggler")

		$("./h1[1]"){
			attributes(class: "_topTitle")
		}
		$("./h1[2]"){
			attributes(class: "_bottomTitle")
		}
		$("./h2"){
			attributes(class: "_bottomTitleSub")
		}

		$("./h1[@class='_topTitle']"){
			attributes(data-ur-toggler-component: "button", data-ur-id: "topTitle")
		}

		$("./div[@class='brand-gallery']"){
			attributes(data-ur-toggler-component: "content", data-ur-id: "topTitle")
		}

		$("./h1[@class='_bottomTitle']"){
			attributes(data-ur-toggler-component: "button", data-ur-id: "bottomTitle")
			insert_after("div", id: "_bottomToggler"){
				attributes(data-ur-toggler-component: "content", data-ur-id: "bottomTitle")
				move_here("../h2[@class='_bottomTitleSub']")
				move_here("../div[@class='all-brands-alpha']")
			}
		}




		$("./div[@class='all-brands-alpha']"){
			
		}







	}
}