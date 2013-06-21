$("/html/body"){




	$(".//span[@class='breadcrumbs']"){
		remove()
	}
	$$(".main_container"){
		add_class("_shippingBilling")
	}

	$$(".shipping_method_content"){
		$("./div/label"){
			insert_after("br")
		}
		$("./label[2]"){
			inner(){
				replace(/Shipping:Comments/, "Shipping:<br>Comments")
			}
		}
	}

	$$("#create-account-container"){
		$("./label[2]"){
			inner(){
				replace(/ConfirmPassword:/, "Confirm<br>Password:")
			}
		}
	}

	

}

	# Moves header icons back to the header
	$$("#ad_17601"){
		move_here("//div[@id='_icons_bar']")
	}
$$(".visaCVV2"){
		# $("./span/script"){
		# 	remove()
		# }
		add_class("_test")
	}