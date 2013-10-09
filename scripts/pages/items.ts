
# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$$(".product_social_icons"){
	remove()
}

$$(".product_spacing"){
	# $("./div[@")
}

$$(".main-col"){
	$("./div[@class='gallery']"){
		insert_before("div", class: "_mainInfo")
	}
	$("./div[@class='_mainInfo']"){
		move_here("../div[@class='gallery']")
		insert_after("div", class: "_item-info")
		insert_before("div", class: "_top-info")
	}
	$("./div[@class='_item-info']"){
		move_here("../div[@class='product-info']/span[1]")
		move_here("../div[@class='product-info']/h4[1]")
		move_here("../div[@class='product-info']/h2[1]")
		move_here("../div[@class='product-info']/label[1]")
		move_here("../div[@class='product-info']/input[@type='text']")
		insert("br")
		move_here("../div[@class='product-info']/a[@id='productPageAdd2Cart']")

	}

	$("./div[@class='_top-info']"){
		move_here("../div[@class='_mainInfo']")
		move_here("../div[@class='_item-info']")
		insert_after("div", class: "_product-info"){
			move_here("../div[@class='product-more-info']")
		}
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