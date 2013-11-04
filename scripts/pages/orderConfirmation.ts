# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$("/html/body"){
	$("//*[@id='content_wrapper']/div"){
		attributes(style: "background-color: #fff;")
		add_class("_reviewPage")
	}

	$(".//div[@id='thankyou']"){
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

		$(".//div[contains(@class, 'order-summary')]"){
			$(".//div[contains(@class, 'order-product-info')]"){
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
						insert_top("label", "Quantity:", class: "_quantity")
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
		}

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
		$("./p/a"){
			add_class("expand")
		}
		$("./p/a[@id='WC_OrderShippingBillingConfirmationPage_Print_Link']"){
			remove()
		}
	}
}