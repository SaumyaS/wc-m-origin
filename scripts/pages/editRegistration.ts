
# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$$("#Register"){
	add_class("register")
	#checkout container 1
	$("./div[1]"){
		add_class("_personalInfoForm")
		$("./div[1]"){
			$("./label[2]"){
				insert_before("br")
			}
			$("./label[3]"){
				insert_before("br")
			}
			$("./label[4]"){
				insert_before("br")
			}
			$("./input[@name='address2']"){
				insert_before("br")
				attributes(style: "")
			}
			$("./label[5]"){
				insert_before("br")
			}
			$("./label[6]"){
				insert_before("br")
			}
		}
		$("./div[2]"){
			$("./label[2]"){
				insert_before("br")
			}
			$("./label[3]"){
				insert_before("br")
			}
			$("./input[@id='receiveEmailChkBox']"){
				insert_before("br")
			}
			$("./input[@id='WC_UserRegistrationUpdateForm_FormInput_phoneNum_In_Register_1']"){
				insert_after("br")
			}
			$("./input[@name='sendMeEmail']"){
				insert_before("br")
			}
		}
	}
	# checkout container 2

	$("./div[2]"){
		add_class("_loginCreds")
		move_to("../div[1]", position("before"))
		$("./label[2]"){
			insert_before("br")
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
