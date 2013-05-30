


$("/html"){
	$("./body"){

		$$(".topcat_left_content"){
			$("div[contains(@class, 'topcat_promo2')]"){
				remove()
			}
		}

		$$(".nav-primary"){
			attribute("data-ur-state", "disabled")
		}
	}
}
