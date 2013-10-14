
# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$$(".main_wrapper"){
	$("./div[@class='main_container']"){
		add_class("_brands")
		attributes(data-ur-set: "toggler")

		$("./h1[1]"){
			attributes(class: "_topTitle")
		}
		$("./h1[2]"){
			attributes(class: "_bottomTitle")
		}






	}
}