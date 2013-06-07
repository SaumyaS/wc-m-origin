
# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$$(".search-sidebar"){

	$("./h2"){
		insert_after("div", class:"_resultContent")
	}

	$("./div"){
		insert("div", class: "_tabWidget")
	}



	$$("._tabWidget"){
		move_here("../../ul")
	}

	attribute("data-ur-set", "toggler")
	$("./h2"){
		attributes(data-ur-toggler-component: "button", data-ur-toggler-id: "search")
	}
	$("./div"){
		attributes(data-ur-toggler-component: "content", data-ur-toggler-id: "search")
	}

	$$("._tabWidget"){
		attributes(data-ur-set: "tabs", data-ur-closeable: "true")
		$("ul[1]"){
			$("./li/h4"){
				attributes(data-ur-tabs-component: "button", data-ur-tab-id: "1")
			}
			$("./li/ul"){
				attributes(data-ur-tabs-component: "content", data-ur-tab-id: "1")
			}
		}
		$("ul[2]"){
			$("./li/h4"){
				attributes(data-ur-tabs-component: "button", data-ur-tab-id: "2")
			}
			$("./li/ul"){
				attributes(data-ur-tabs-component: "content", data-ur-tab-id: "2")
			}
		}
		$("ul[3]"){
			$("./li/h4"){
				attributes(data-ur-tabs-component: "button", data-ur-tab-id: "3")
			}
			$("./li/ul"){
				attributes(data-ur-tabs-component: "content", data-ur-tab-id: "3")
			}
		}
	}

	
}



$$(".search-main"){
	$$(".pricingLoginSearch"){
		$("./a"){
			attributes(style: "", href: "/webapp/wcs/stores/servlet/AjaxLogonForm?catalogId=11101&myAcctMain=1&langId=-1&storeId=11301", onclick: "")
		}
	}
}