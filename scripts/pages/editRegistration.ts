
# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}


$$("#Register"){

	$("./div[1]"){
		
	}
	$("./div[2]"){
		
	}
	$("./div[3]"){
		
	}


	#checkout container 1
	$("./div[1]"){
		add_class("_personalInfoForm")
	}
	# checkout container 2

	$("./div[2]"){
		add_class("_loginCreds")
		move_to("../div[1]", position("before"))
		$("./div[1]"){
			attribute("style", "min-width: 400px; float: left;")
			$("./label[2]"){
				insert_before("br")
			}
			$("./label[3]"){
				insert_before("br")
			}
			$("./label[4]"){
				insert_before("br")
			}
			$("./label[5]"){
				
				insert_before("br")
			}
			$("./label[6]"){
				insert_before("br")
			}
			$("./input[@id='WC_UserRegistrationAddForm_AddressEntryForm_FormInput_address2_1']"){
				attribute("style", "margin-left: 124px !important;")
				insert_before("br")			
			}
		}
		$("./div[2]"){
			attribute("style", "width: 300px; float: left; margin-top: 23px;")
			$("./label[2]"){
				insert_before("br")
			}
			$("./label[3]"){
				insert_before("br")
			}
			$("./input[@id='receiveEmailChkBox']"){
				insert_before("br")
			}
			$("./label[4]"){
				attribute("style", "font-weight: bold; margin-left: 5px;")
			}
		}
	}

	#checkout container 3
	$("./div[3]"){
		add_class("_companyInfoForm")
		$("./ol"){
			$("./li"){
				insert_before("br")
				$("./input"){
					insert_before("br")
				}
			}
			$("./br[1]"){
				remove()
			}
		}
	}

	$("./h1[2]"){
		add_class("_companyInfoTitle")
		insert_before("div", class: "_companyInfoContainer")
	}
	$("./div[@class='_companyInfoContainer']"){
		attributes(data-ur-set: "toggler")
		move_here("../h1[2]")
		move_here("../div[4]")
		$("./h1"){
			attributes(data-ur-toggler-component: "button")
		}
		$("./div"){
			attributes(data-ur-toggler-component: "content")
		}
	}

	$("//*[@for='promos']") {
		attributes(style: "")
		attributes(for: "receiveEmailChkBox") # change the for attr so the label click/tap will check/uncheck the promos checkbox
		add_class("for-checkbox")
	}

	$$("#WC_UserRegistrationAddForm_links_1") {
		add_class("expand")
	}

	$("//*[@id='WC_UserRegistrationAddForm_links_2']") {
		remove()
	}

	$$(".checkout-container > .sub-col") {
		attributes(style: "")
	}

	$$("input[name='address2']") {
		add_class("input-second-line")
		attributes(style: "")
	}

	$("./a[@class='btn']"){
		add_class("expand")
	}
	$("./a[@class='btn-gray']"){
		add_class("expand")
	}
}
