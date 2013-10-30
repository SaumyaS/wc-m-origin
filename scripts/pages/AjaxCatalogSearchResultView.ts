$("//div[@class='search_based']/span[@class='fright']"){
	$("./select[@id='sizeBy']/option"){
		attribute("value"){
			value(){
				rewrite_link()
			}
		}
	}
	$("./select[@id='orderBy']/option"){
		attribute("value"){
			value(){
				rewrite_link()
			}
		}
	}
}
$("//div[contains(@class, 'result-item')]"){
	$("./a"){
		add_class("_productImage")
	}
	$("./div[contains(@class, 'item-description ')]"){
		move_to("../a", position("before"))
		insert_after("div", class: "_SKUList", "")
	}
	$(".//span[@class='discount-price']/div[contains(@class, 'offerprice')]"){
		$("./span[contains(@class, 'price')]"){
			match(text()){
				with(/Call/){
					$(".."){
						attributes(style: "margin-bottom: 30px;")
					}
				}
			}
		}
	}
}
