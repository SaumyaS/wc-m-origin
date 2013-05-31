$$(".product_social_icons"){
	remove()
}

$$(".product-more-info"){
	attribute("data-ur-set", "toggler")
	$("./h2[1]"){
		attributes(data-ur-toggler-component: "button", data-ur-id: "des")
	}

	$("./h2[2]"){
		attributes(data-ur-toggler-component: "button", data-ur-id: "spe")
	}
	$("./p"){
		attributes(data-ur-toggler-component: "content", data-ur-id: "des")
	}

	$("./ul"){
		attributes(data-ur-toggler-component: "content", data-ur-id: "spe")
	}


}