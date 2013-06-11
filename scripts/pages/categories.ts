$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}


$("/html"){
	$("./body/div/div/div/div/div/div/div"){
		$("./div[2]"){
			wrap("div"){
				attributes(class: "_catView", data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-id: "cat_icons")
				$("./div"){
					attributes(data-ur-carousel-component: "scroll_container", class: "_catContainer")
					$("./div"){
						
						add_class("_catType")
					}
					
					$("./div[1]"){
				        attributes(data-ur-carousel-component: "item", alt: "1")
				    }
				    $("./div[2]"){
				        attributes(data-ur-carousel-component: "item", alt: "2")
				    }
				    $("./div[3]"){
				        attributes(data-ur-carousel-component: "item", alt: "3")
				    }
				}
			}
		}
		

	

		
	}
}
