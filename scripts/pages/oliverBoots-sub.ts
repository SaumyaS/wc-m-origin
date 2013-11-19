# Moves header icons back to the header
$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}


$(".//div[@class='main_container']"){
	add_class("_construction-boot")
	$(".//img"){
			attributes(height: "")
		}
	$(".//div[@id='WC_ContentAreaESpot_div_22_1']"){
		$("./div/div[@class='mw_was_tr']"){
			$("./div"){
				attributes(style: "")
				$(".//h1"){
					match(text()){
						with(/All/){
							$(".."){
								attributes(class: "_allTerrian")
							}
						}
						with(/Select/){
							$(".."){
								add_class("_selectSize")
								attributes(data-ur-set: "toggler")
								inner_wrap("div", class: "_sizeContent")

								move_here("./div[@class='_sizeContent']/h1", "top")
								$("./h1"){
									attributes(data-ur-toggler-component: "button")

	                            }
								$("./div[@class='_sizeContent']"){
									attributes(data-ur-toggler-component: "content")
									$("./img"){
										insert_after("div", class:"_listContent"){
											move_here("../h2[2]")
											move_here("../div[contains(@class, 'select-size')]")
										}
									}
									$("./div[@class='_listContent']"){
										attributes(data-ur-set: "toggler")
										move_here("../h2", "top")
										$("./h2"){
											attributes(data-ur-toggler-component: "button")
										}
										$("./div"){
											attributes(data-ur-toggler-component: "content")
											$(".//a"){
												attribute("href"){
													value(){
														rewrite_link()
													}
												}
											}
										}
									}
								}
							}
						}
						with(/Lace/){
							$(".."){
								add_class("_laceUpBoot")
								attributes(style: "", data-ur-set: "toggler")
							}
							attributes(data-ur-toggler-component: "button")
							insert_after("div", class: "_laceUpBootContent"){
								attributes(data-ur-toggler-component: "content")
								move_here("../div")
								move_here("../p")
							}
						}
						with(/LACE/){
							$(".."){
								add_class("_laceUpBoot")
								attributes(style: "", data-ur-set: "toggler")
							}
							attributes(data-ur-toggler-component: "button")
							insert_after("div", class: "_laceUpBootContent"){
								attributes(data-ur-toggler-component: "content")
								move_here("../div")
								move_here("../p")
							}
						}
						with(/Safety/){
							$(".."){
								add_class("_laceUpBoot")
								attributes(style: "", data-ur-set: "toggler")
							}
							attributes(data-ur-toggler-component: "button")
							insert_after("div", class: "_laceUpBootContent"){
								attributes(data-ur-toggler-component: "content")
								move_here("../div")
								move_here("../p")
							}
						}
						with(/Industries/){
							$(".."){
								add_class("_IandF")
								attributes(data-ur-set: "toggler")
								inner_wrap("div", class: "_IandFContent")
								move_here("./div[@class='_IandFContent']/h1", "top")
								$("./h1"){
									attributes(data-ur-toggler-component: "button")
								}
								$("./div[@class='_IandFContent']"){
									inner_wrap("div", class: "_IandFDetail")
									attributes(data-ur-toggler-component: "content")
									$("./div[@class='_IandFDetail']/div[1]"){
										$("./div[@class='mw_was_tr']"){
											insert_before("div", class: "_industries"){
												move_here("../div[@class='mw_was_tr']/div[@class='mw_was_td']")
												$("./div"){
													add_class("_industriesItem")
												}
											}
											remove()
										}

									}
									$("./div[@class='_IandFDetail']"){
										$("./h3"){
											match(text()){
												with(/Suitable/){
													add_class("_IndustiresTitle")
													text(){
														set("Suitable Industries")
													}
												}
												with(/Footwear/){
													add_class("_Footware")
												}
											}
										}
										$("./div[1]"){
											attributes(class: "_IndustiresContent")
										}
										$("./div[2]"){
											attributes(class: "_FootwearContent")
											move_here("./div[@class='mw_was_tr']/div[@class='mw_was_td']")
											$("./div[@class='mw_was_tr']"){
												remove()
											}
										}
										insert_top("div", class: "_industriesContainer"){
											move_here("../h3[@class='_IndustiresTitle']")
											move_here("../div[@class='_IndustiresContent']")
											insert_after("div", class: "_footwareContainer"){
												move_here("../h3[@class='_Footware']")
												move_here("../div[@class='_FootwearContent']")
											}
										}

										$("./div[@class='_industriesContainer']"){
											attributes(data-ur-set: "toggler")
											$("./h3"){
												attributes(data-ur-toggler-component: "button")
											}
											$("./div"){
												attributes(data-ur-toggler-component: "content")
											}
										}
										$("./div[@class='_footwareContainer']"){
											insert_bottom("div", class: "_scrollContainer"){
												attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-autoscroll: "enabled", data-ur-infinite: "enabled")
												move_here("../div[@class='_FootwearContent']")
												$("./div[@class='_FootwearContent']"){
													attributes(data-ur-carousel-component: "scroll_container")
													$("./div"){
														attributes(data-ur-carousel-component: "item")
													}
												}
											}
											
										}
									}
								}
							}
						}
					}
				}
				$("./div[@class='mw_was_td']"){
					attributes(style: "")

				}
			}
		}
	}

}