# Associated Sass file: _reLogin.scss

# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$("//*[@id='content_wrapper_border']/div"){
	add_class("_reLogin")

	$(".//span[@id='WC_AjaxAddressBookForm_div_19']"){
		insert_before("br")
	}
	$(".//b"){
		name(){
			set("strong")
		}
	}
	$(".//a[@class='btn']"){
		attributes(style: "", href: "/webapp/wcs/stores/servlet/AjaxLogonForm?catalogId=11101&myAcctMain=1&langId=-1&storeId=11301")
		add_class("expand")
	}
}
