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
						add_class("_BillingInfo")
						attributes(style: "")
						$(".."){
							add_class("_paymentInfo")
						}
					}
					with(/Shipping/){
						add_class("_ShippingInfo")
						attributes(style: "")
					}
				}
			}
		}
	}
}

$$("._paymentInfo"){
	$("./hr"){
		remove()
	}
	
	$("./h3[@class='_BillingInfo']"){
		wrap("div"){
			attributes(class: "_togglerBillContainer")
		}
		insert_after("div", class: "_content"){
			move_here("../../div[2]")
			move_here("../../div[2]"){
				$("./label"){
					insert_before("br")
				}
				$("./br[1]"){
					remove()
				}
			}
		}
	}
	$("./h3[@class='_ShippingInfo']"){
		wrap("div"){
			attributes(class: "_togglerShipContainer")
		}
		insert_after("div", class: "_content"){
			move_here("../../div[3]")
			move_here("../../div[3]"){
				$("./label"){
					insert_before("br")
				}
				$("./br[1]"){
					remove()
				}
			}
		}
	}
	$("./div[@class='_togglerBillContainer']"){
		attributes(data-ur-set: "toggler")
		$("./h3[@class='_BillingInfo']"){
			attributes(data-ur-toggler-component: "button", data-ur-id: "bill")
		}
		$("./div[@class='_content']"){
			attributes(data-ur-toggler-component: "content", data-ur-id: "bill")
		}
	}
	$("./div[@class='_togglerShipContainer']"){
		attributes(data-ur-set: "toggler")
		$("./h3[@class='_ShippingInfo']"){
			attributes(data-ur-toggler-component: "button", data-ur-id: "ship")
		}
		$("./div[@class='_content']"){
			attributes(data-ur-toggler-component: "content", data-ur-id: "ship")
		}
	}
}

$$(".checkout-container"){
	add_class("_orderSummaryContainer")
	attributes(data-ur-set: "toggler")
	$("./h3"){
		match(text()){
			with(/Order/){
				attributes(class: "_orderSummaryTitle", data-ur-toggler-component: "button", data-ur-id: "order")
			}
		}
	}
	$("./div[@id='OrderConfirmPagingDisplay']"){
		attributes(data-ur-toggler-component: "content", data-ur-id: "order")
	}
	$(".//div[@id='order-total']"){
		$("./div[1]"){
			attributes(style: "")
			$("./label"){
				insert_before("br")
			}
			$("./br[1]"){
				remove()
			}
			$("./font"){
				insert_before("br")
			}
		}
	}
	$("./a[@id='WC_OrderDetailDisplay_Print_Link']"){
		remove()
	}
	$("./a"){
		match(text()){
			with(/Continue/){
				add_class("expand")
			}
		}
	}
	$("./a[@id='email_modal_link']"){
		add_class("expand")
	}
}