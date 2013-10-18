
# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$$(".main_container"){
	add_class("_products")

	$(".//div[@class='search-sidebar']"){

		$("./h2"){
			insert_after("div", class:"_resultContent"){
				insert("div", class: "_tabWidget"){
					move_here("../../ul")
				}
			}
		}

		attribute("data-ur-set", "toggler")
		$("./h2"){
			attributes(data-ur-toggler-component: "button", data-ur-toggler-id: "search")
		}
		$("./div"){
			attributes(data-ur-toggler-component: "content", data-ur-toggler-id: "search")
		}

		$(".//div[@class='_tabWidget']"){
			attributes(data-ur-set: "tabs", data-ur-closeable: "true")
			$("ul[1]"){
				$("./li/h4"){
					attributes(data-ur-tabs-component: "button", data-ur-tab-id: "price")
				}
				$("./li/ul"){
					attributes(data-ur-tabs-component: "content", data-ur-tab-id: "price")
				}
			}
			$("ul[2]"){
				$("./li/h4"){
					attributes(data-ur-tabs-component: "button", data-ur-tab-id: "mfg")
				}
				$("./li/ul"){
					attributes(data-ur-tabs-component: "content", data-ur-tab-id: "mfg")
				}
			}
		}	
	}

	$(".//div[@class='search-main']"){
		$(".//div[@class='search_based']/span[@class='fright']"){
			$("./select[@id='sortBy']/option"){
				attribute("value"){
					value(){
						rewrite_link()
					}
				}
			}

			$("./select[@id='sortBy']/option[1]"){
				attributes(selected: "selected")
			}
			$("./select[@id='sortBy']/option[3]"){
				attributes(selected: "")
			}

			$("./select[@id='orderBy']/option"){
				attribute("value"){
					value(){
						rewrite_link()
					}
				}
			}
		}
	}
}



$$(".pricingLoginSearch"){
	$("./a"){
		attributes(style: "", href: "/webapp/wcs/stores/servlet/AjaxLogonForm?catalogId=11101&myAcctMain=1&langId=-1&storeId=11301", onclick: "")
	}
}

