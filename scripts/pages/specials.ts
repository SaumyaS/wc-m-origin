
# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$("//*[@id='main_content_wrapper']/div/div"){
	add_class("_specials")
	
	$(".//div[@id='WC_ContentAreaESpot_div_22_1']/div[1]"){
		attributes(style: "", class: "_specialText")
	}


	$(".//div[@id='WC_ContentAreaESpot_div_22_1']/div[2]"){
		add_class("_scpeicalsScroller")
		# Removeing blank rows
		$("./div[1]"){
			remove()
		}
		$("./div[1]"){
			remove()
		}
		$("./div[3]"){
			remove()
		}
		$("./div[4]"){
			remove()
		}
		$("./div[6]"){
			remove()
		}
		$("./div[7]"){
			remove()
		}
		$("./div[9]"){
			remove()
		}
		$("./div[10]"){
			remove()
		}
		$("./div[12]"){
			remove()
		}

		# Restructuring each of the rows
		insert_top("div", class: "_carousel4")
		insert_top("div", class: "_carousel3")
		insert_top("div", class: "_carousel2")
		insert_top("div", class: "_carousel1")

		$("./div[@class='_carousel1']"){
			move_here("../div[5]")
			move_here("../div[5]")
		}
		$("./div[5]"){
			move_to("../div[1]", position("after"))
		}

		$("./div[@class='_carousel2']"){
			move_here("../div[6]")
			move_here("../div[6]")
		}
		$("./div[6]"){
			move_to("../div[3]", position("after"))
		}

		$("./div[@class='_carousel3']"){
			move_here("../div[7]")
			move_here("../div[7]")
		}
		$("./div[7]"){
			move_to("../div[5]", position("after"))
		}

		$("./div[@class='_carousel4']"){
			move_here("../div[8]")
			move_here("../div[8]")
		}


		# Making rows suitable for carousel
		$("./div[@class='_carousel1']"){
			insert("div", class: "_firstCarousel"){
				move_here("../div[1]/div[1]")
				move_here("../div[2]/div[1]")
			}
			insert("div", class: "_firstCarousel"){
				move_here("../div[1]/div[1]")
				move_here("../div[2]/div[1]")
			}
			insert("div", class: "_firstCarousel"){
				move_here("../div[1]/div[1]")
				move_here("../div[2]/div[1]")
			}
			insert("div", class: "_firstCarousel"){
				move_here("../div[1]/div[1]")
				move_here("../div[2]/div[1]")
			}
			$("./div[1]"){
				remove()
			}
			$("./div[1]"){
				remove()
			}
			wrap("div"){
				attributes(class: "_container1")
			}
		}

		$("./div[@class='_carousel2']"){
			insert("div", class: "_secondCarousel"){
				move_here("../div[1]/div[1]")
				move_here("../div[2]/div[1]")
			}
			insert("div", class: "_secondCarousel"){
				move_here("../div[1]/div[1]")
				move_here("../div[2]/div[1]")
			}
			insert("div", class: "_secondCarousel"){
				move_here("../div[1]/div[1]")
				move_here("../div[2]/div[1]")
			}
			insert("div", class: "_secondCarousel"){
				move_here("../div[1]/div[1]")
				move_here("../div[2]/div[1]")
			}
			$("./div[1]"){
				remove()
			}
			$("./div[1]"){
				remove()
			}
			wrap("div"){
				attributes(class: "_container2")
			}
		}

		$("./div[@class='_carousel3']"){
			insert("div", class: "_thirdCarousel"){
				move_here("../div[1]/div[1]")
				move_here("../div[2]/div[1]")
			}
			insert("div", class: "_thirdCarousel"){
				move_here("../div[1]/div[1]")
				move_here("../div[2]/div[1]")
			}
			insert("div", class: "_thirdCarousel"){
				move_here("../div[1]/div[1]")
				move_here("../div[2]/div[1]")
			}
			insert("div", class: "_thirdCarousel"){
				move_here("../div[1]/div[1]")
				move_here("../div[2]/div[1]")
			}
			$("./div[1]"){
				remove()
			}
			$("./div[1]"){
				remove()
			}
			wrap("div"){
				attributes(class: "_container3")
			}
		}

		$("./div[@class='_carousel4']"){
			insert("div", class: "_fourthCarousel"){
				move_here("../div[1]/div[1]")
				move_here("../div[2]/div[1]")
			}
			insert("div", class: "_fourthCarousel"){
				move_here("../div[1]/div[1]")
				move_here("../div[2]/div[1]")
			}
			insert("div", class: "_fourthCarousel"){
				move_here("../div[1]/div[1]")
				move_here("../div[2]/div[1]")
			}
			insert("div", class: "_fourthCarousel"){
				move_here("../div[1]/div[1]")
				move_here("../div[2]/div[1]")
			}
			$("./div[1]"){
				remove()
			}
			$("./div[1]"){
				remove()
			}
			wrap("div"){
				attributes(class: "_container4")
			}
		}

		# Creating the Carousel Attributes
		$("./div[@class='_container1']"){
      		attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-id: "firstCarousel", data-ur-autoscroll: "disabled", data-ur-center: "enabled", data-ur-infinite: "disabled")
      		$("./div"){
      			attributes(data-ur-carousel-component: "scroll_container")
      			$("./div"){
      				attributes(data-ur-carousel-component: "item", style: "float: left;")
      			}
      		}
		}

		$("./div[@class='_container2']"){
      		attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-id: "secondCarousel", data-ur-autoscroll: "disabled", data-ur-center: "enabled", data-ur-infinite: "disabled")
      		$("./div"){
      			attributes(data-ur-carousel-component: "scroll_container")
      			$("./div"){
      				attributes(data-ur-carousel-component: "item", style: "float: left;")
      			}
      		}
		}

		$("./div[@class='_container3']"){
      		attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-id: "thirdCarousel", data-ur-autoscroll: "disabled", data-ur-center: "enabled", data-ur-infinite: "disabled")
      		$("./div"){
      			attributes(data-ur-carousel-component: "scroll_container")
      			$("./div"){
      				attributes(data-ur-carousel-component: "item", style: "float: left;")
      			}
      		}
		}

		$("./div[@class='_container4']"){
      		attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-id: "fourthCarousel", data-ur-autoscroll: "disabled", data-ur-center: "enabled", data-ur-infinite: "disabled")
      		$("./div"){
      			attributes(data-ur-carousel-component: "scroll_container")
      			$("./div"){
      				attributes(data-ur-carousel-component: "item", style: "float: left;")
      			}
      		}
		}
	}


	$(".//div[@id='WC_ContentAreaESpot_div_22_1']/div[3]"){
		add_class("_specialsBottom")
		$("div[1]"){
			remove()
		}
		$("div[3]"){
			remove()
		}
		$("./div[2]"){
			add_class("_specialsTextBottom")
		}
	}
	$(".//div[@id='WC_ContentAreaESpot_div_22_1']/p"){
		remove()
	}
}

//*[@id="WC_ContentAreaESpot_div_22_1"]/div[2]

# $("//div[@id='WC_ContentAreaESpot_div_22_1']/div[2]/div[1]"){
# 	remove()
# }