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
		$("./ul/li/h4"){
			attributes(data-ur-tabs-component: "button", data-ur-tab-id: "price")
		}
		$("./ul/li/ul"){
			attributes(data-ur-tabs-component: "content", data-ur-tab-id: "price")
		}
	}

	
}

$$(".search-main"){
	$("./div/div/div/ul"){
		remove()
	}


}
