$$("#cart-total"){
	$("./div[1]"){
		attributes(style: "", class: "_promo")
		$(".//input[@id='promoCode']"){
			insert_after("br")
			insert_before("br")
		}
	}
	$("./div[2]"){
		attributes(style: "", class: "_shipping")
		insert_after("div", class: "_tax")
		$(".//input[@id='shippingAndTaxZipCode']"){
			insert_after("br")
			insert_before("br")
		}
		$("h2"){
			insert_after("h2", "Shipping")
			remove()
		}
	}
	$("./div[3]"){
		insert("h2", "Estimated Tax")
		move_here("../div[@class='_shipping']/div")
		$("./div"){
			attribute("style", "")

			$("./label[2]"){
				insert_before("br")
			}
			$("./label[3]"){
				insert_before("br")
			}
			$("./label[4]"){
				insert_before("br")
			}
			$("./font"){
				insert_before("br")
			}

		}
	}
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
				add_class("_colQuantity")
				$("./label"){
					attributes(style: "display: block;", value: "Quantity:")
					text(){
						set("Quantity:")
					}
				}
			}
			$("./div[6]"){
				add_class("_colEach")
				wrap("div"){
					attribute("class", "_eachDiv")
					insert_top("div", "Each: ", class: "_each", style: "float:left; padding-left: 100px;")
				}
			}
			$("./div[7]"){
				add_class("_colTotal")
				wrap("div"){
					attribute("class", "_totalDiv")
					insert_top("div", "Total: ", class: "_total", style: "float:left; padding-left: 100px;")
				}
			}

			$$("._colInStock"){
				insert_after("div", class: "info")
			}

			


		}
		$$(".order-product-last"){
			$("./div[1]"){
				add_class("_sku")
			}
			$("./div[2]"){
				add_class("_delete")
			}
			$("./div[3]"){
				add_class("_delete")
			}
			$("./div[4]"){
				add_class("_remove")
			}
			$("./div[5]"){
				add_class("_delete")
			}
			$("./div[6]"){
				add_class("_delete")
			}
		}