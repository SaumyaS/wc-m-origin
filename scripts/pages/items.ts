
# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$$(".product_social_icons"){
	remove()
}

$$(".product-more-info"){
	attribute("data-ur-set", "toggler")
	$("./h2[1]"){
		attributes(data-ur-toggler-component: "button", data-ur-id: "1")
	}

	$("./h2[2]"){
		attributes(data-ur-toggler-component: "button", data-ur-id: "2")
	}
	$("./h2[3]"){
		attributes(data-ur-toggler-component: "button", data-ur-id: "3")
	}

	$("./p"){
		attributes(data-ur-toggler-component: "content", data-ur-id: "1")
	}
	$("./ul[1]"){
		attributes(data-ur-toggler-component: "content", data-ur-id: "2")
	}
	$("./ul[2]"){
		attributes(data-ur-toggler-component: "content", data-ur-id: "3")
	}


}

$$(".product-info"){
	inner(){
		replace(/Pricing/, "Pricing <br>")
	}
}