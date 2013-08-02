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

	$("./div/div[2]/input[@id='WC_UserRegistrationUpdateForm_FormInput_email_In_Register_1']"){
		insert_after("br")
	}
	$("./div/div/label"){
		insert_before("br")
	}
	$("./div/div[1]/input[@id='WC_UserRegistrationUpdateForm_AddressEntryForm_FormInput_address1_1']"){
		insert_after("br")
	}

	$("./div/div[1]/input[@id='WC_UserRegistrationAddForm_AddressEntryForm_FormInput_address2_1']"){
		attribute("style", "margin-left: 114px !important;")
	}
	
	$("./div/div[2]"){
		attribute("style", "float: left;")
	}

}


