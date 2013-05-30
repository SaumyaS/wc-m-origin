


$("/html"){
	$("./body"){

		$$(".topcat_left_content"){
			$("div[contains(@class, 'topcat_promo2')]"){
				remove()
			}
		}

		$$("#image-menu"){
			attribute("data-ur-state", "disabled")
		}
	}
}
