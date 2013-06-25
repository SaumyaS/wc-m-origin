$$("#billing_address_id_1"){
	attributes(style: "width: 120px")
}

$$(".billing_address"){
	$("./div[@id='billingAddressDisplayArea_1']"){
		$("./span"){
			insert_after("br")
		}
	}
}
