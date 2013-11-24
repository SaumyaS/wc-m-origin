$$("#shopcartAddressForm"){
	add_class("_editAddress")
	$("./div[@class='body']"){
		move_here("./div[@id='centered_single_column_form']/h1", "top")
		$("./div[@id='centered_single_column_form']"){
			$("./label"){
				insert_before("br")
			}
			$("./br[1]"){
				remove()
			}
			$("./span[@class='checkbox']"){
				insert_before("br")
			}
		}

	}
	$("./a"){
		add_class("expand")
	}
}