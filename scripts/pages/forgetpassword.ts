# Moves header icons back to the header
$$("#ad_17601") {
	move_here("//div[@id='_icons_bar']")
}

$("/html/body") {
	$("//div[@class='main_container']") {
		add_class("_forgetPassword")
	}
	$(".//div[@class='error_msg']"){
		remove()
	}
}

$$(".btn") {
	add_class("expand")
}
