# Moves header icons back to the header
  $$("#ad_17601"){
    move_here("//div[@id='_icons_bar']")
  }

  $("/html/body"){
  	$(".//div[@class='main_container']"){
  		add_class("_logonForm")
  	}
  }

$("//div[@class='login-box']"){
	$(".//form[@id='Logon']"){
		$("./label[@for='password']"){
			insert_before("br")
		}
		$("./a[@id='WC_AccountDisplay_links_1']"){
			insert_before("br")
			insert_after("br")
		}
	}
}

$("//*[@class='btn']") {
	add_class("expand")
}