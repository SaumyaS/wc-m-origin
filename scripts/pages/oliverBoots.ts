$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$(".//div[@class='main_container']"){
	add_class("_oliverBoots")
	$(".//div[@class='ad_product']"){
		$("./img[@name='OliverHero']"){
			attributes(height: "")
		}
		$("./div[1]"){
			attributes(class: "_oliverBootsTable")
			$("./div[1]"){
				attributes(class: "_bootsCarousel")
				$("./div[1]/div[1]"){
					attributes(class: "_bootsScrollContainer")
					move_here(".//a")
					$("./div[@class='mw_was_tr']"){
						remove()
					}
					wrap("div"){
						add_class("_bootsViewContainer")
					}
				}
			}
		}
	}
}