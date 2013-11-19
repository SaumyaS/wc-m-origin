$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$(".//div[@class='main_container']"){
	add_class("_oliverBoots")
	$(".//div[@class='ad_product']"){
		$("./img[@name='OliverHero']"){
			attributes(height: "")
		}
		$("./div[1]"){
			attributes(class: "_oliverBootsTable")
			$("./div[1]"){
				attributes(class: "_bootsCarousel")
				$("./div[1]/div[1]"){
					attributes(class: "_bootsScrollContainer")
					move_here(".//a")
					$("./div[@class='mw_was_tr']"){
						remove()
					}
					wrap("div"){
						add_class("_bootsViewContainer")
					}
					$(".//img"){
						attributes(height: "236", width: "236")
					}
				}
			}
			$(".//div[@class='_bootsViewContainer']"){
				attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-center: "enabled")
				$("./div[@class='_bootsScrollContainer']"){
					attributes(data-ur-carousel-component: "scroll_container")
					$("./a"){
						attributes(data-ur-carousel-component: "item")
					}
				}
				insert_bottom("div", class: "_dots", data-ur-carousel-component: "dots")
			}
			$("./div[@data-mw-id='mw_dump_tr13']"){
				attributes(class: "_features-Month")
				$("./div/div/div"){
					$("./h1"){
						match(text()){
							with(/Available/){
								wrap("div"){
									attributes(class: "_available")
									move_here("../div[@data-mw-id='mw_dump_table21']")
									$("./div[@data-mw-id='mw_dump_table21']"){
										attributes(class: "_availableScroll")
										move_here("./div/div[@class='mw_was_td']")
										$("./div[@class='mw_was_tr']"){
											remove()
										}
										wrap("div"){
											attributes(class: "_availableView")
										}
									}
								}
							}
							with(/Month/){
								wrap("div"){
									attributes(class: "_month")
									move_here("../div[@data-mw-id='mw_dump_table49']")
									$("./div[@data-mw-id='mw_dump_table49']"){
										attributes(class: "_monthContent")
									}
								}
							}
						}
					}
					$("./div[@class='_available']"){
						$("./div[@class='_availableView']"){
							attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-center: "enabled", data-ur-infinite: "disabled", data-ur-autoscroll: "enabled")
							$("./div[@class='_availableScroll']"){
								attributes(data-ur-carousel-component: "scroll_container")
								$("./div"){
									attributes(data-ur-carousel-component: "item")
								}
							}
						}
					}
				}
			}
			$("./div[@data-mw-id='mw_dump_tr55']"){
				attributes(class: "_bottomContent")
			}
		}
	}
}