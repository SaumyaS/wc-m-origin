$("/html/body"){
	$("./h1"){
		attributes(class: "test")
	}
	$("./select"){
		
		wrap("div"){
			attributes(class: "_users")
			insert("br")
			move_here("../a[1]")

			move_here("../a[1]")
		}
	}

	$("./div[@class='checkout-container']"){
		$(".//div[@class='sub-col']"){
			$("./input"){
				insert_after("br")
			}
		}
	}
}