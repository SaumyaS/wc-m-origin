$$("#MyAccountCenterLinkDisplay_Widget"){
	$("./h1"){
		attributes(style: "background-color: gold;")
	}
}

$("//*[@id='Register']"){
	add_class("register")
	$("../h1"){
		attributes(class: "_personalInfoTitle")
	}
	$("../h2"){
		attributes(style: "padding: 5px;")
	}
}


