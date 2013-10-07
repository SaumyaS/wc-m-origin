
# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$$(".product_social_icons"){
	remove()
}

$$(".main-col"){
	$("./div[@class='gallery']"){
		insert_before("div", class: "_mainInfo")
	}
	$("./div[@class='_mainInfo']"){
		move_here("../div[@class='gallery']")
	}
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

	$("./a[@id='login_modal_link']"){
		attributes(href: "/webapp/wcs/stores/servlet/AjaxLogonForm?catalogId=11101&myAcctMain=1&langId=-1&storeId=11301")
	}
}