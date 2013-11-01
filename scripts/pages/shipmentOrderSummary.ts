# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$("/html/body"){
	$("//*[@id='page']/div[4]/div"){
		attributes(style: "background-color: #fff;")
		add_class("_reviewPage")
	}

	$(".//div[@id='order-info']"){
		$("./div[@class='col-1']/div[1]/span"){
			insert_after("br")
		}
		$("./div[@class='col-1']/div[1]"){
			insert("hr")
		}
		$("./div[@class='col-1']/div[2]/label"){
			insert_before("br")
			insert("br")
		}
		$("./div[@class='col-1']/div[2]/br[1]"){
			remove()
		}

		$("./div[@class='col-2']/div[1]/span"){
			insert_after("br")
		}
		$("./div[@class='col-2']/div[1]"){
			insert("hr")
		}
		$("./div[@class='col-2']/div[2]/label"){
			insert_before("br")
			insert("br")
		}
		$("./div[@class='col-2']/div[2]/br[1]"){
			remove()
		}
	}
	$(".//div[@id='order-summary']"){
		# $("./div[@class='dijitContentPane']"){
		# 	text(){
		# 		replace(/Product/, "")
		# 	}
		# }
		$("./div[@id='order-total']"){
			$("./div[1]"){
				add_class("_taxInfo")
				insert("br")
			}
			$("./div[2]"){
				add_class("_order_total")
			}
		}
		$("./p/a"){
			add_class("expand")
		}
	}
}