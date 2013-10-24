$("//*[@id='account-col']"){
	attributes(id: "box")
	$(".//div[@class='info']"){
		$("./a"){
			insert_after("br")
		}
	}
}

$$(".body"){
	add_class("_ajaxCalledAccount")
	
	$("./div[@class='checkout-container']"){
		add_class("_togglerInitialize")
		attributes(data-ur-set: "toggler")
		$("./div[@class='contentgrad_header']//h3"){
			attributes(data-ur-toggler-component: "button")
		}
		$("./div[@class='content']"){
			attributes(data-ur-toggler-component: "content")
		}

		$("./h3"){
			text(){
				set("Shipping")
			}
			match(text()){
				with(/Shipping/){
					log("this is a test")
					attributes(data-ur-toggler-component: "button")
					insert_after("div", class: "_shippingContent")
					$("../div[@class='_shippingContent']"){
						attributes(data-ur-toggler-component: "content")
						move_here("../ul[@class='orgs']")
						move_here("../div[@class='erp-shipping-address']")
						move_here("../div[@class='erp-shipping-address-detail']")
					}
				}
			}
		}

	}
}

$("//div[@id='OrderStatusTableDisplay_div_1']"){
	$(".//div[@class='mw_was_thead']"){
		remove()
	}
	$(".//div[@class='mw_was_tbody']/div"){
		insert_top("div", class: "_totalPrice", "Total Price: ")
		insert_top("div", class: "_status", "Status: ")
		insert_top("div", class: "_purchaseOrder", "Purchase Order: ")
		insert_top("div", class: "_orderDate", "Order Date: ")
		insert_top("div", class: "_orderNumber", "Order Number: ")

		$("./div[6]"){
			move_to("../div[1]", position("after"))
		}
		$("./div[7]"){
			move_to("../div[3]", position("after"))
		}
		$("./div[9]"){
			move_to("../div[5]", position ("after"))
		}
		$("./div[10]"){
			move_to("../div[7]", position("after"))
		}

		$("./div[@class='_orderNumber']"){
			attributes(style: "float: left; font-weight: bold; min-width: 120px;")
		}
		$("./div[@class='_orderDate']"){
			attributes(style: "float: left; font-weight: bold; min-width: 120px;")
		}
		$("./div[@class='_purchaseOrder']"){
			attributes(style: "float: left; font-weight: bold; min-width: 120px;")
		}
		$("./div[@class='_status']"){
			attributes(style: "float: left; font-weight: bold; min-width: 120px;")
		}
		$("./div[@class='_totalPrice']"){
			attributes(style: "float: left; font-weight: bold; min-width: 120px;")
		}

		$("./div[13]"){
			wrap("div"){
				attributes(class: "_buttons", style: "margin-bottom: 40px;")
				move_here("../div[14]")
				$("./div[1]"){
					attributes(style: "float: left;")
				}
				$("./div[2]"){
					attributes(style: "float: right;")
				}
			}
		}
	}
}

