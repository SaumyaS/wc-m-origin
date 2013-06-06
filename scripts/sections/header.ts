# $('./body') {
#   insert_top("header", class: "_header") {
#     Move stuff here
#   }
# }

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
  remove(".//script[contains(@src,'navigation.js')]")
  
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
  	remove()
  }

    # 
  $$("#sessionTimeoutModalDiv"){
    remove()
	}
  
   $$("div.dijitDialog"){
  	remove()
  }

  $$(".header_wrapper"){
  	wrap("div"){
  		attributes(class: "header_widget", data-ur-set: "tabs", data-ur-closeable: "true")
  		move_here("../div[@class='nav_wrapper']")
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



