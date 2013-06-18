

$$("#ad_17601"){
  move_here("//div[@id='_icons_bar']")
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
    $(".//li[@class='MyAccountURLSep']/a"){
      attributes(onclick: "", href: "/webapp/wcs/stores/servlet/AjaxLogonForm?catalogId=11101&myAcctMain=1&langId=-1&storeId=11301")
    }
  }

}

  # Removes all the breakpoints
  $$("br"){
    remove()
  }

  # Removes breadcrumbs
  $$("#breadcrumb"){
    remove()
  }
  
  # 
  $$("#MessageArea"){
    remove()
  }


  $$(".MyAccountURLSep"){
 	  move_to("../../ul[@class='cart_menu']", position("top"))
  }

    # 
  $$("#sessionTimeoutModalDiv"){
    remove()
	}
  
 
  $$(".header_wrapper"){
  	wrap("div"){
  		attributes(class: "header_widget", data-ur-set: "tabs", data-ur-closeable: "true")
  		move_here("../div[@class='nav_wrapper']")
  	}
  }

$$(".header_widget"){
  insert_top("div", class: "messagepop"){
    insert("a", "Go To Cart", class: "_gotocart"){
      attributes(href: "Orde%E2%80%A6DisplayView&orderId=.&langId=-1&storeId=11301&URL=AjaxOrderItemDisplayView")
    }
    insert("label", class: "_continueShop"){
      insert("a", href: "#", class: "_close", "Continue Shopping")
    }
  }
}



  $$(".nav_wrapper"){
    $("./div/ul"){
    	$("li[1]"){
    		attribute("id", "menu1")
        
    	}
    }

    $$(".nav-primary"){
      $$(">li"){
        attribute("class", "col")
        $$(">a"){
        	attribute("class", "_category")
        }
      }
      $("./li[1]"){
        attribute("class", "_accordian")
      }
    }



    $$("#menu1"){
      attribute("data-ur-set", "toggler")
      $$(">a"){
        attribute("data-ur-toggler-component", "button")
      }
        
      $$(".subnav"){
        attribute("data-ur-toggler-component", "content")
        $$("a"){
          attribute("class", "_sub2")
        }
      }
    }
  }

  
  $("//*[@id='shoppingCartBar']"){
    
  }


  $$(".checkout_wrapper"){
    insert("div", id: "_icons_bar"){
      insert("div", id: "image-menu", data-ur-tab-id: "menu", data-ur-tabs-component: "button")

      insert("div", id: "image-search", data-ur-tab-id: "search", data-ur-tabs-component: "button")
     
      insert("div", id: "image-cart", data-ur-tab-id: "cart", data-ur-tabs-component: "button")
    }

    $$("#image-menu"){
      insert("img", src: asset("images/menu.png"))
    }    
    
    $$("#image-search"){
      insert("img", src: asset("images/search.png"))
    }

    $$("#image-cart"){
      insert("img", src: asset("images/cart.png"))
    }

    $$("li.miniShopCartSep"){
      attributes(data-ur-tabs-component: "content", data-ur-tab-id: "cart")

      $$("a"){
        attribute("class", "_cart")
      }
    }    
  }

  $$("ul.nav-primary"){
	attributes(data-ur-tabs-component: "content", data-ur-tab-id: "menu")
  }

  $$("div#_icons_bar"){
    move_to("//ul[@class='cart_menu']", "before")
  }

  $$("a#headerAdvancedSearch"){
    move_to("//div[@id='autoSuggest_Container']", "after")
  }

  $$("form#CatalogSearchForm"){
    wrap("div") {
      attributes(id: "search_bar", data-ur-tabs-component: "content", data-ur-tab-id: "search")
      move_here("../a[@id='headerAdvancedSearch']")
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





