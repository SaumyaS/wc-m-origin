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

		$("./div/div"){
			$("./div[1]"){
				attribute("style", "float: left;")

			}
			$("./div[2]"){
				attribute("style", "float: left; margin-left: 40px; width: 100px;")

			}
			$("./div[3]"){
				attribute("style", "float: left;margin-left: 40px")

			}
			$("./div[4]"){
				attribute("style", "margin-left: 40px")

			}
		}

	}