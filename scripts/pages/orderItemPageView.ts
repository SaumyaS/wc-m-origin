$(".//div[contains(@class, 'order-summary')]"){
	$(".//div[contains(@class, 'order-product-info')]"){
		insert_before("hr")
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
			wrap("div"){
				insert_top("label", "Quantity:", class: "_quantity")
				attribute("class", "_Quantity")
			}
			
		}
		$("./div[6]"){
			add_class("_colEach")
			wrap("div"){
				attribute("class", "_eachDiv")
				insert_bottom("div", "Each: ", class: "_each")
			}
		}
		$("./div[7]"){
			add_class("_colTotal")
			wrap("div"){
				attribute("class", "_totalDiv")
				insert_bottom("div", "Total: ", class: "_total")
			}
		}

		$$("._colInStock"){
			insert_after("div", class: "info")
		}
	}
	$(".//div[contains(@class, 'order-product-last')]"){
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
			add_class("_delete")
		}
		$("./div[5]"){
			add_class("_delete")
		}
		$("./div[6]"){
			add_class("_delete")
		}
	}
	$(".//hr[1]"){
		remove()
	}
}