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
		attributes(data-ur-set: "toggler", data-ur-id: "bill")
		$("./h3[@class='_BillingInfo']"){
			attributes(data-ur-toggler-component: "button", data-ur-id: "bill")
		}
		$("./div[@class='_content']"){
			attributes(data-ur-toggler-component: "content", data-ur-id: "bill")
		}
	}
	$("./div[@class='_togglerShipContainer']"){
		attributes(data-ur-set: "toggler", data-ur-id: "ship")
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
	attributes(data-ur-set: "toggler", data-ur-id: "order")
	$("./h3"){
		match(text()){
			with(/Order/){
				attributes(class: "_orderSummaryTitle", data-ur-toggler-component: "button", data-ur-id: "order")
			}
		}
	}


	$(".//div[contains(@class, 'order-summary')]"){
		$("./div[@class='mw_was_thead']"){
			remove()
		}
		$(".//div[contains(@class, 'order-product-info')]"){
			insert_before("hr")
			$("./div[2]"){
				add_class("_colTitle")
			}
			$("./div[3]"){
				add_class("_colWeight")
			}
			$("./div[4]"){
				add_class("_colInStock")
			}
			$("./div[5]"){
				add_class("_colQuantity")
				wrap("div"){
					insert_top("span", "Quantity:", class: "_quantity")
					attribute("class", "_Quantity")
				}
				
			}
			$("./div[6]"){
				add_class("_colEach")
				wrap("div"){
					attribute("class", "_eachDiv")
					insert_bottom("div", "Each: ", class: "_each")
				}
			}
			$("./div[7]"){
				add_class("_colTotal")
				wrap("div"){
					attribute("class", "_totalDiv")
					insert_bottom("div", "Total: ", class: "_total")
				}
			}

			$$("._colInStock"){
				insert_after("div", class: "info")
			}
		}
		$(".//div[contains(@class, 'order-product-last')]"){
			$("./div[1]"){
				add_class("_sku")
			}
			$("./div[2]"){
				add_class("_delete")
			}
			$("./div[3]"){
				add_class("_delete")
			}
			$("./div[4]"){
				add_class("_delete")
			}
			$("./div[5]"){
				add_class("_delete")
			}
			$("./div[6]"){
				add_class("_delete")
			}
		}
		$(".//hr[1]"){
			remove()
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
		# attribute("onclick"){
		# 	# append("Ur.setup(\"._togglerBillContainer\");Ur.setup(\"._togglerShipContainer\");Ur.setup(\"._orderSummaryContainer\");")
		# }
		add_class("expand")
	}
}