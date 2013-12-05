$("/html/body"){
	$("./select"){
		wrap("div"){
			attributes(class: "_users")
			insert("br")
			move_here("../a[1]")

			move_here("../a[1]")
			insert_after("div", class: "_addressOptions"){
				move_here("../p[1]")
				move_here("../div[@class='align']")
			}
		}
	}

	$("./div[@class='content_footer']"){
		$("./div/a[@class='btn']"){
			add_class("expand")
		}
		$("./div/a[@class='btn-gray']"){
			add_class("expand")
		}
	}
}
$("//div[@class='checkout-container']"){
	add_class("_ajaxAddressBook")

	$(".//div[@class='form_2column']"){
		insert("div", class: "_addressInfo"){
			move_here("../div[@class='sub-col']"){
				$("./input"){
					insert_after("br")
				}
				$("./br"){
					remove()
				}
			}
		}
	}
}