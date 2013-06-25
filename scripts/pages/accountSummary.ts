$$(".main_container"){
	add_class("_accountSummary")

	


}

$("//*[@id='account-col']"){
	attributes(id: "box")
	$(".//div[@class='info']"){
		$("./a"){
			insert_after("br")
		}
	}
}
