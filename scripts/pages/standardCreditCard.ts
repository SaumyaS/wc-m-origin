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