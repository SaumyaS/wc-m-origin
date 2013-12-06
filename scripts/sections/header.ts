# Replace the logo with one without a tagline:
$$(".logo #WC_ContentAreaESpot_links_7_1") {
	$("./img"){
		remove()
	}
	insert("div", class: "Icons-white-cap-logo-no-tagline")

}


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
	insert("link", rel: "apple-touch-icon", sizes: "72x72", href: "image-url(images/WhiteCap.png)")
	insert("link", rel: "apple-touch-icon", sizes: "114x114", href: "image-url(images/WhiteCap.png)")
}

$("/html"){
  # remove(".//script[contains(@src,'jcarousel.min.js')]")
  remove(".//script[contains(@src,'navigation.js')]")

  	$("./body"){
		# Removes all the breakpoints
		match($path){
			with(/Footer_Terms_Conditions/){}
			with(/OrderShippingBillingView/){}
			with(/SingleShipmentOrderSummaryView/){}
			with(/OrderShippingBillingConfirmationView/){}
			else(){
				log("--> this is not the footer")
				$$("br"){
					remove()
				}
			}
		}

		# Removes breadcrumbs
		$$("#breadcrumb"){
			attributes(style: "display: none;")
		}

		$$("#sessionTimeoutModalDiv"){
			remove()
		}

		$(".//div[@id='MessageArea']"){
			
		}

		$(".//div[@class='header_wrapper']"){
			attributes(id: "moovweb-header")
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
		$("./li[@id='menu1']"){
			attributes(class: "_accordian")
		}
		$("./li[@id='menu6']"){
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
	$(".//li[@id='menu6']"){
		attribute("data-ur-set", "toggler")
		$$(">a"){
		  attributes(data-ur-toggler-component: "button", data-ur-id: "submenu2")
		}

		$$(".subnav"){
			attributes(data-ur-toggler-component: "content", data-ur-id: "submenu2")
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
						 		insert("div", id: "cart-image")
							}
							with(/Checkout/){
						  		$("../img") {
									remove()
						  		}
						  		insert("div", id: "cart-image")
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
		attributes(class: "Icons-menu")
	}

	$$("#image-user"){
		attributes(class: "Icons-male_user")
	}
}

$$("a#headerAdvancedSearch"){
	# move_to("//div[@id='autoSuggest_Container']", "after")
	attributes(style: "display: none;")
}

$$("form#CatalogSearchForm"){
	wrap("div") {
		attributes(id: "search_bar")
		# move_here("../a[@id='headerAdvancedSearch']")
		$(".//a[@id='WC_CachedHeaderDisplay_button_1']"){
			attributes(onmouseover: "", onmouseout: "")
			add_class("btn")
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
		with(/AjaxCatalogSearchResultView/){}
		with(/SearchBasedNavigationCategoryResultDisplayView/){}
		with(/AddToCartModalView/){}
		with(/AjaxOrderChangeServiceItemAdd/){}
		with(/editRegistration/){}
		with(/AjaxTrackOrderStatus/){}
		with(/OrderStatusTableDetailsHelper/){}
		with(/AjaxOrderDetail/){}
		with(/ShopCartDisplayView/){}
		with(/AjaxOrderChangeServiceItemUpdate/){}
		with(/Standard/){}
		with(/BillingAddressDisplayView_1/){}
		with(/AddressEditView/){}
		with(/POSnippetDisplay/){}
		with(/ShopCartPageView/){}
		with(/OrderProcessServiceOrderPrepare/){}
		with(/ShippingAddressDisplayView/){}
		with(/AjaxAddressDisplayView/){}
		with(/AjaxOrderChangeServiceShipInfoUpdate/){}
		with(/AjaxUpdateUserAddress/){}
		with(/AjaxOrderChangeServiceItemAdd/){}
		with(/QuickOrderCartDisplayView/){}
		with(/OrderItemPageView/){}
		with(/AjaxAccountAddressForm/){}
		with(/OrderStatusTableDetailsDisplay/){}
		else (){
			inner_wrap("div", id: "body-content"){
				insert_bottom("div", id: "pers-nav-mask")
				insert_before("div", id: "pers-nav"){
					copy_here("//div[@class='nav_wrapper']")
					insert("div", class: "_hdsupplyLogo"){
						insert("div", class: "Icons-HDSupply-Logo")
					}
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