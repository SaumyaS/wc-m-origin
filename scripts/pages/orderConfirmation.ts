# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$("/html/body"){
	$("//*[@id='content_wrapper']/div"){
		attributes(style: "background-color: #fff;")
		add_class("_reviewPage")
	}

	$("./div[@id='thankyou']"){
		$("./div[@class='order-details']"){
			$("./label[2]"){
				insert_before("br")
			}
		}
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
		$("./div[@class='dijitContentPane']"){
			text(){
				replace(/Product/, "")
			}
		}
		$("./div[@id='order-total']"){
			$("./div[1]"){
				add_class("_order_total")
				insert("br")
			}
		}
		$("./p"){
			
		}
	}
}