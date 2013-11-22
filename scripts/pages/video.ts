# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$(".//div[@class='main_container']"){
	add_class("_video")
	$(".//div[@class='ad_product']"){
		$(".//iframe"){
			attributes(width: "100%", height: "")
			$(".."){
				attributes(width: "", height: "", style: "")
			}
		}
	}
	$(".//h1"){
		$(".."){
			move_here("./div//hr", "bottom")
		}
	}
	$(".//a[@class='btn']"){
		add_class("expand")
	}

	$(".//h3"){
		match(text()){
			with(/Multiplaz/){
				$(".."){
					$(".//div"){
						attributes(style: "")
					}
					$(".//object"){
						attributes(width: "100%", height: "")
						$("./embed"){
							attributes(width: "100%", height: "")
						}
					}
				}
			}
		}
	}
}