
# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$("//*[@id='main_content_wrapper']/div/div"){
	$("./div"){
		attribute("class", "_contact")
	}
}