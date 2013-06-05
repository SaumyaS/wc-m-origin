$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$("//*[@id='main_content_wrapper']/div/div"){
	$("./div"){
		attribute("class", "_location")
	}

	$("//*[@id='WC_ContentAreaESpot_div_1_18101']/hr"){
		insert_after("div", class: "_map")
	}

	$("./div[@class='_location']"){
		$("./div[@id='WC_ContentAreaESpot_div_1_18101']"){
			$("./div[@class='_map']"){
				insert("div", id: "_localContainer", data-ur-set: "tabs", "Store Locator")


				$("./div[@id='_localContainer']"){
					insert("div", id: "map_details", data-ur-set: "map")
					$("./div[@id='map_details']"){
						insert("div", data-ur-map-component: "user_location")
						insert("div", data-ur-map-component: "canvas", id: "map_canvas")
						insert("div", data-ur-map-component: "address", "501 W Church Street, Orlando, FL")
					}
				}

			}



		}
	}
}

