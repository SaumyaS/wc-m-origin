# Change password
# Associated Sass file: _changePassword.scss


# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$$(".resetpassword_main_container"){
	add_class("_changePassword")
	$(".//form[@id='PasswordResetForm']"){
		$("./label[1]"){
			attributes(class: "_currentPass")
		}
		$("./label[2]"){
			insert_before("br")
			attributes(class: "_newPass")
		}
		$("./label[3]"){
			insert_before("br")
			attributes(class: "_verifyPass")
		}
		$("./label"){
			attributes(style: "")
		}
		$("./btn"){
			insert_before("br")
		}
	}
}