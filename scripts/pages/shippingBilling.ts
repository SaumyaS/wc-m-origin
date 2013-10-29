$("/html/body"){
	$(".//span[@class='breadcrumbs']"){
		remove()
	}
	$$(".main_container"){
		add_class("_shippingBilling")
		$("./a[@id='WC_UnregisteredCheckout_links_4']"){
			add_class("expand")
		}
		$(".//a[@id='shippingBillingPageNext']"){
			add_class("expand")
		}
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

$("//*[@id='shippingAddressDisplayArea']/span"){
	insert_after("br")
}

$("//*[@id='WC_CheckoutPaymentsAndBillingAddressf_div_2_1']/label"){
	insert_after("br")
	$("../input[4]"){
		attributes(style: "margin-bottom: 10px;")
	}
}

$$(".card_info"){
	$("./div[@id='payment-cc']"){
		remove_text_nodes()
		$("./label[@for='expire_month_1']"){
			remove_text_nodes()
			insert("span", "Expiration Date: ")
		}
		$("./span[@class='visaCVV2']"){
			$("./span[@id='CVVDetailsSection']"){
				attributes(data-ur-set: "toggler")
				$("./span[@class='order_link']"){
					attributes(data-ur-toggler-component: "button")
					add_class("_CVV_Link")
				}
				$("./span[contains(@id, 'CVVDetails_1_span_2')]"){
					attributes(style: "")
					add_class("_box-shadow")
					attributes(data-ur-toggler-component: "content")
				}
			}
		}
	}
}