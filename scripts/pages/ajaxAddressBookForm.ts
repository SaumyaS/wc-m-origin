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
			insert_after("div", class: "test"){
				move_here("../p[1]")
				move_here("../div[@class='align']")
			}
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