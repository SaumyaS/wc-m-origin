$(".//div[@class='checkout-container']"){
	add_class("_myOrders")
	$("./h3"){
		match(text()){
			with(/Previously/){
				add_class("_prev")
			}
			with(/Waiting/){
				add_class("_waiting")
			}
		}
	}
}

$(".//div[@class='mw_was_thead']"){
	remove()
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
	insert_after("hr")


}
