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
	$("./div[@class='brand-categories']"){
		
		$("./div[@class='branding_double_cat']"){
			attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-id: "brandsCategoriesCarousel", data-ur-center: "enabled")
			
			insert_top("div", class: "_brandCategories"){
				attributes(data-ur-carousel-component: "scroll_container")
				move_here("//*[@id='branding-categories']/li/div/div[@class='category-item']")
				$("./div[@class='category-item']"){
					attributes(data-ur-carousel-component: "item")
				}
			}
			$("./div[2]"){
				remove()
			}
		}
		$("./div[@class='branding_single_cat']"){
			attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-id: "brands2CategoriesCarousel", data-ur-center: "enabled", data-ur-infinite: "disabled")
			
			$("./ul/li/div[@class='category-row']"){
				attributes(data-ur-carousel-component: "scroll_container")	
				$("./div[@class='category-item']"){
					attributes(data-ur-carousel-component: "item")
				}
			}
			$("./div[2]"){
				remove()
			}
		}
	}


}

$("/html"){
	remove(".//script[contains(@src,'jcarousel.min.js')]")
}