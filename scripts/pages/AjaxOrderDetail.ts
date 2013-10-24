$("/html"){
	inner_wrap("div"){
		attributes(class: "_orderDetails")
	}
	$(".//div[@id='ad_63001']"){
		$("./input"){
			add_class("expand")
		}
	}
	$(".//div[@id='box']/div[@class='my_account']"){

		$("./div[@class='sub-col']"){
			$("./p"){
				match(text()){
					with(/You/){
						$(".."){
							add_class("_orderInfo")
						}
					}
				}
			}
			$("./label[2]"){
				insert_before("br")
			}
			$("./h3"){
				match(text()){
					with(/Billing/){
						$(".."){
							add_class("_paymentInfo")
						}
					}
				}
			}

		}
	}
}