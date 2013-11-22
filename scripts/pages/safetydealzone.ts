# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$(".//div[@class='main_container']"){
	add_class("_safetydealzone")
	$(".//h1"){
		match(text()){
			with(/Featured/){
				insert_after("div", class: "_brand-scroll"){
					move_here("../div[@class='promo-box']")
					wrap("div"){
						attributes(class: "_brand-view")
					}
				}
			}
		}
	}
	$(".//div[@class='_brand-view']"){
		attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-center: "enabled")
		$("./div[@class='_brand-scroll']"){
			attributes(data-ur-carousel-component: "scroll_container")
			$("./div[@class='promo-box']"){
				attributes(data-ur-carousel-component: "item")
			}
		}
		insert_bottom("div", class: "_dots", data-ur-carousel-component: "dots")
	}
}