
# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$("/html/body"){
	$("//div[@class='main_container']"){
		add_class("_accountSummary")

		$("./div[@class='login-box']"){
			$("./div[@class='col-1']"){
				$("./form"){
					$("./label[2]"){
						insert_before("br")
					}
					# $("./a[@id='WC_AccountDisplay_links_1']"){
					# 	insert_before("br")
					# }
					$("./a"){
						insert_before("br")
					}
				}
			}
		}




		$("./div[@class='nav-secondary']"){
			insert_before("div", class: "_userInfo", "My Info"){
				
			}
		}
		$("./div[@class='_userInfo']"){
			attributes(data-ur-toggler-component: "button")
			wrap("div"){
				attributes(class: "_togglerWidget", data-ur-set: "toggler")
				move_here("../div[@class='nav-secondary']")
			}
			$("../div[@class='nav-secondary']"){
				attributes(data-ur-toggler-component: "content")
			}
		}
		$("./div[@class='account-col']"){
			$(".//div[@class='info']"){
				$("./a"){
					insert_after("br")
				}
			}
			$(".//div[@class='body']"){
				$("./div[1]"){
					attributes(style: "width: 333px;display: inline-block;float: left;margin-right: 10px;min-width: 320px;")
				}

			}
		}
		$(".//div[@id='OrderStatusTableDisplay_div_1']"){
			$(".//div[@class='mw_was_thead']"){
				remove()
			}
		}
		$(".//div[@class='mw_was_tbody']/div"){
		insert_top("div", class: "_totalPrice", "Total Price: ")
		insert_top("div", class: "_status", "Status: ")
		insert_top("div", class: "_purchaseOrder", "Purchase Order: ")
		insert_top("div", class: "_orderDate", "Order Date: ")
		insert_top("div", class: "_orderNumber", "Order Number: ")

		$("./div[6]"){
			move_to("../div[1]", position("after"))
		}
		$("./div[7]"){
			move_to("../div[3]", position("after"))
		}
		$("./div[9]"){
			move_to("../div[5]", position ("after"))
		}
		$("./div[10]"){
			move_to("../div[7]", position("after"))
		}

		$("./div[@class='_orderNumber']"){
			attributes(style: "float: left; font-weight: bold; min-width: 120px;")
		}
		$("./div[@class='_orderDate']"){
			attributes(style: "float: left; font-weight: bold; min-width: 120px;")
		}
		$("./div[@class='_purchaseOrder']"){
			attributes(style: "float: left; font-weight: bold; min-width: 120px;")
		}
		$("./div[@class='_status']"){
			attributes(style: "float: left; font-weight: bold; min-width: 120px;")
		}
		$("./div[@class='_totalPrice']"){
			attributes(style: "float: left; font-weight: bold; min-width: 120px;")
		}

		$("./div[13]"){
			wrap("div"){
				attributes(class: "_buttons", style: "margin-bottom: 40px;")
				move_here("../div[14]")
				$("./div[1]"){
					attributes(style: "float: left;")
				}
				$("./div[2]"){
					attributes(style: "float: right;")
				}
			}
		}


	}



	}
}