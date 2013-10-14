

$$("#ad_17601"){
	move_here("//div[@id='_icons_bar']")
}

$$("#requisition_list_popup_main_div"){
  	attributes(style: "display:none;")
}

$$("body"){
  	add_class("_home")
  	table_dump(".//table")
}

$("./head"){
	insert("meta", name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=2.0, minimum-scale=1, user-scalable=no")
}

$("/html"){
  #remove(".//script[contains(@src,'jcarousel.min.js')]")
  remove(".//script[contains(@src,'navigation.js')]")

  	$("./body"){
		# Removes all the breakpoints
		$$("br"){
			remove()
		}

		# Removes breadcrumbs
		$$("#breadcrumb"){
			remove()
		}

		$$("#sessionTimeoutModalDiv"){
			remove()
		}

		$(".//div[@id='MessageArea']"){

		}

		$(".//div[@class='header_wrapper']"){
			wrap("div"){
			  	attributes(class: "header_widget", data-ur-set: "tabs", data-ur-closeable: "true")
			  	move_here("../div[@class='nav_wrapper']")
			}		
		}

	$(".//li[@class='MyAccountURLSep']"){
		move_to("../../ul[@class='cart_menu']", position("top"))
		$("./a[1]"){
		  attributes(onclick: "", href: "/webapp/wcs/stores/servlet/AjaxLogonForm?catalogId=11101&myAcctMain=1&langId=-1&storeId=11301")
		}
	}
  }
}

# Creates toggler for Navigation 
$$(".nav_wrapper"){
	$("./div/ul"){
		$("li[1]"){
			attribute("id", "menu1")
		}
	}

	$$(".nav-primary"){
		attributes(data-ur-toggler-component: "content")
		$$(">li"){
			attribute("class", "col")

			$$(">a"){
				attributes(class: "_category")
			}
		}
		$("./li[1]"){
			attributes(class: "_accordian")
		}
	}

	$$("#menu1"){
		attribute("data-ur-set", "toggler")
		$$(">a"){
		  attributes(data-ur-toggler-component: "button", data-ur-id: "submenu")
		}
		  
		$$(".subnav"){
			attributes(data-ur-toggler-component: "content", data-ur-id: "submenu")
			$$("a"){
				attribute("class", "_sub2")
			}
		}
	}
}

$$("#msgpopup1_x"){
	remove()
}

# Creates the menu buttons
$$(".checkout_wrapper"){
	insert("div", class: "_accountURL"){
		move_here("../ul[@class='cart_menu']"){
		  	$(".//li[@class='MyAccountURLSep']"){
				attributes(data-ur-tabs-component: "content", data-ur-tab-id:"user") 
		  	}
		}
	}
	insert("div", id: "_icons_bar"){
		insert("div", id: "image-user", data-ur-tab-id: "user", data-ur-tabs-component: "button")

		insert("div", id: "image-cart"){
		  	copy_here("//*[@id='shopping-cart']"){
		  		$(".//a[@id='shoppingCartBar']"){
					wrap_text_children("span") {
						match(text()) {
							with(/Empty/){
								$("../img") {
									remove()
								}
						 		# insert("div", class: "_cartEmpty")
						 		insert("img", src: asset("images/cart-empty.png"), id: "cart-image")
							}	
							with(/Checkout/){
						  		$("../img") {
									remove()
						  		}
						  		# insert("div", class: "_cartFull")
						  		insert("img", src: asset("images/cart-full.png"), id: "cart-image")
							}
						}
						remove_text_nodes()
					}
				}
		  	}
		  	add_class("_cart") 
		}
		insert("div", id: "image-menu")
	}

	$$("#image-menu"){
		insert("img", src: asset("images/menu.png"))
	}    

	$$("#image-user"){
		insert("img", src: asset("images/user.png"))
	}
}

$$("a#headerAdvancedSearch"){
	# move_to("//div[@id='autoSuggest_Container']", "after")
	attributes(style: "display: none;")
}

$$("form#CatalogSearchForm"){
	wrap("div") {
		attributes(id: "search_bar")
		move_here("../a[@id='headerAdvancedSearch']")
		$(".//a[@id='WC_CachedHeaderDisplay_button_1']"){
			add_class("btn-gray")
			text(){
				set("Search")
			}
			$("./input"){
				remove()
			}
		}
	}
}

$$("#search_overlay"){
	attribute("value") {
		value("Search")
	}
}

$("//*[@id='MiniShoppingCart']"){
	attribute("onmouseover", "")
}


$("//*[@class='free_gifts_popup_main_div']"){
	attributes(style: "display: none;")
}

$("./body"){
	match($path){
		with(/AutoSuggestView/){}
		with(/AjaxLogonFormCenterLinksDisplayView/){}
		with(/AjaxAddressBookForm/){}
		with(/AjaxRequisitionListDisplayView/){}
		with(/AjaxRequisitionListCreateView/){}
		with(/AjaxRequisitionListDetailView/){}
		with(/AjaxTrackOrderStatus/){}
		with(/AjaxCouponWallet/){}
		with(/WillCallModalView/){}
		with(/AjaxQuickCartDisplay/){}
		else (){
			inner_wrap("div", id: "body-content"){
				insert_bottom("div", id: "pers-nav-mask")
				insert_before("div", id: "pers-nav"){
					copy_here("//div[@class='nav_wrapper']")
				}
			}
			$("./div[@id='pers-nav']"){
				$(".//ul[@class='nav-primary']"){
					attributes(data-ur-state: "enabled")
					$("./li"){
						$("./a"){
							add_class("_box-shadow")
							
						}
					}
					$("./li[@id='menu1']"){
						$("./a"){
							
							attributes(data-ur-id: "pers-nav-menu")
						}
						$("./ul[@class='subnav']"){
							attributes(data-ur-id: "pers-nav-menu")
						}	
					}
				}
			}
		}
	}
}

$$(".checkout_wrapper"){
	$(".//a[@id='shoppingCartBar']"){
		$("./img"){
			remove()
		}
	}
}