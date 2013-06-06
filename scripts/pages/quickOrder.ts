$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$("//*[@id='MQuickOrderForm']/div[1]/div"){
	$("./div[1]"){
		attribute("style", "padding-top:7px; padding-right: 3px; float:left")
	}
	$("./div[3]"){
		attribute("style", "padding-top:7px; padding-right: 5px; float:left")
	}
	$("./div[4]"){
		attribute("style", "float:left")
	}
}

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

$("//*[@id='ad_18351']"){
	
	$("./h3"){
		remove()
	}
	insert("h3", "Want to order product quickly and easly?")
	insert("br")
	insert("h3", "You can use our Quick Order feature to quickly add products and complete your purchase.")
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