$$(".search-sidebar"){
	attribute("data-ur-set", "toggler")
	$("./h2"){
		attributes(data-ur-toggler-component: "button", data-ur-toggler-id: "search")
	}
	$("./ul"){
		attributes(data-ur-toggler-component: "content", data-ur-toggler-id: "search")
	}

	$("ul[1]"){
		
		$("./li/h4"){
			attributes(data-ur-toggler-component: "button", data-ur-id: "price")
		}
		$("./li/ul"){
			attributes(data-ur-toggler-component: "content", data-ur-id: "price")
		}
	}

	$("ul[2]"){
		
		$("./li/h4"){
			attributes(data-ur-toggler-component: "button", data-ur-id: "mfg")
		}
		$("./li/ul"){
			attributes(data-ur-toggler-component: "content", data-ur-id: "mfg")
		}
	}

	
}

$$(".search-main"){
	$("./div/div/div/ul"){
		remove()
	}
}