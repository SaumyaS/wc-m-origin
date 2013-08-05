
# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}


$$(".register"){
	#checkout container 1
	$("./div[1]"){
		$("./label[2]"){
			insert_before("br")
		}
		$("./label[3]"){
			insert_before("br")
		}


	}
	# checkout container 2
	$("./div[2]"){
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

	$("./a[1]"){
		attribute("style", "margin-left: 10px;")
	}
}
