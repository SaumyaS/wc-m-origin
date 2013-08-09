
# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}


$$(".account-col-quick-order"){
	$("./div[@class='Quick-Order-eSpot']"){
		$("./div[@class='quick-order-po-number']"){
			insert_after("div", class: "_shipToQO"){
				move_here("../h3")
				move_here("../ul[@class='quick-order-orgs orgs']")
			}
		}
		$("./div[@class='_shipToQO']"){
			insert_after("div", class: "_addressQO"){
				move_here("../div[@class='erp-shipping-address']")
				move_here("../div[@class='erp-shipping-address-detail']")
			}
			insert_after("hr")
		}
		$("./div[@class='_addressQO']"){

		}
		$("./div[@id='WC_ContentAreaESpot_div_1_18351']"){
			insert_after("div", class: "_textQO"){
				move_here("../div[@id='WC_ContentAreaESpot_div_1_18351']/div[2]/h3")
			}
			$("./div[2]"){
				remove_text_nodes()

				$("./iframe"){
					insert_after("div", "See more help videos in our ")
				}

				$("./h3"){
					attributes(style: "display: none;")
				}
				$("./br"){
					remove()
				}
			}
			
			
		}

		$("./div[@class='clear_01']"){
			remove()
		}

	}

	$(".//form[@name='MQuickOrderForm']"){
		attributes(style: "margin-bottom:10px;")
		$("./div[1]/div"){
			
			$("./div[1]"){
				attribute("style", "padding-top:7px; padding-right: 3px; float:left")
			}
			$("./div[3]"){
				attribute("style", "padding-top:7px; padding-right: 5px; float:left")
			}
			$("./div[4]"){
				attribute("style", "margin-bottom:5px;")
				$("./input"){
					attributes(style: "width:149px;")
				}
			}
			$("./div[5]"){
				insert_after("br")
			}
		}
	}
}


//*[@id="MQuickOrderForm"]


$("//*[@id='ad_19601']"){
	$("./span[2]"){
		insert_before("br")
		insert_before("br")
		insert_after("br")
	}
	inner(){
		replace(/25	WCOM324515	WCXTS532/, "25	WCOM3245\<br\>15	WCXTS532")
	}
}




	$$("#order_details"){

		$$(".mw_was_thead"){
			remove()
		}
		
		$$(".order-product-info"){
			$("./div[1]"){
				insert_before("h4", "SKU: ", style: "float: left; font-weight: bold; margin-right: 10px;", class: "_SKU")
			}
			$("./div[2]"){
				insert_before("h4", "Name: ", style: "float: left; font-weight: bold; margin-right: 10px;", class: "_Name")
			}
			$("./div[3]"){
				insert_before("h4", "QTY:  ", style: "float: left; font-weight: bold; margin-right: 10px;", class: "_QTY")
			}
			$("./div[4]"){
				attribute("class", "_remove")
			}
		}

	}