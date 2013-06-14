
# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$("/html/body"){
	$("//div[@class='main_container']"){
		add_class("_login")
		$("./div[@class='nav-secondary']"){
			insert_before("div", class: "_userInfo", "My Info"){
				
			}
		}
		$("./div[@class='_userInfo']"){
			attributes(data-ur-toggler-component: "button")
			wrap("div"){
				attributes(class: "_togglerWidget", data-ur-set: "toggler")
				move_here("../div[@class='nav-secondary']")
			}
			$("../div[@class='nav-secondary']"){
				attributes(data-ur-toggler-component: "content")
			}
		}		


	}
}