$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}



$$(".order-confirm"){
	$(".//div[@id='order-summary']"){
		$$(".mw_was_thead"){
			attribute("style", "display: none;")
		}

		$$(".order-product-info"){
			$("./div[2]"){
				add_class("_colTitle")
			}
			$("./div[3]"){
				add_class("_colWeight")
			}
			$("./div[4]"){
				add_class("_colInStock")
			}
			$("./div[5]"){
				attribute("class", "_colQuantity")
			}
			$("./div[6]"){
				add_class("_colEach")
			}
			$("./div[7]"){
				add_class("_colTotal")
			}
			insert_after("div", class: "info", "hello", id: "itemInfo")


		}

		
	}
}

$$("#itemInfo"){
	move_here("//div[@class='_colQuantity']")
}