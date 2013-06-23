# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$$(".main_container"){
	add_class("_brandsDisplay")

	$("./div[@class='brand-promos']"){
		attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-id: "brandsCarousel", data-ur-center: "enabled")
		insert("div", class: "_scrollC"){
			attributes(data-ur-carousel-component: "scroll_container")
			move_here("../div[@class='promo-box']")
			$("./div"){
				attributes(data-ur-carousel-component: "item")
			}
		}
	}

}