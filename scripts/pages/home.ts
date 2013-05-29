# Place holder/example file

# Place holder/example file

#Add our meta tags
  $("./head"){
    insert("meta", name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=2.0, minimum-scale=1, user-scalable=no")
    $("./script[9]"){
      remove()
    }

  }

$("/html"){
  remove(".//script[contains(@src,'navigation.js')]")
  remove(".//script[contains(@src,'LoginModalDialog.js')]")
}


$$("body"){
  
  add_class("_home")
  table_dump(".//table")


  # Removes all the breakpoints
  $$("br"){
    remove()
  }


  # Removes breadcrumbs
  $$("#breadcrumb"){
    remove()
  }

  # 
  $$("#sessionTimeoutModalDiv"){
    remove()
  }

  # Removes Content eSpot
  $$(".small_box"){
    remove()
  }

  $$("#right_nav"){
    remove()
  }
  
  # Removes Product category section on the page
  $$(".product_cat"){
    remove()
  }

  # Forward button for banner
  $$(".forward"){
    remove()
  }

  # Removes the main hero image
  $$(".banner_wrapper"){
    remove()
  }

  $$("#WC_ContentAreaESpot_div_1_17106"){
    remove()
  }

  # Backward button for banner
  $$(".backward"){
    remove()
  }

  $$(".nav_wrapper"){
    $$(".nav-primary"){
      $$(">li"){
        attribute("class", "col")
      }
    }

    $$(".col"){
      attribute("data-ur-set", "toggler")
      $$(">a"){
        attributes(class:"_category", data-ur-toggler-component: "button")
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
      insert("div", id: "image-account", data-ur-tab-id: "account", data-ur-tabs-component: "button")

      insert("div", id: "image-search", data-ur-tab-id: "search", data-ur-tabs-component: "button")
     
      insert("div", id: "image-cart", data-ur-tab-id: "cart", data-ur-tabs-component: "button")
    }

    $$("#image-account"){
      insert("img", src: asset("images/male_user.png"))
    }
    $$("li.MyAccountURLSep"){
      attributes(data-ur-tabs-component: "content", data-ur-tab-id: "account")


      $$("a"){
        # attribute("class", "_header_bar")
        # attributes(class: "_header_bar", href: "/webapp/wcs/stores/servlet/AjaxLogonForm?catalogId=11101&myAcctMain=1&langId=-1&storeId=11301")
        # copy_here("")
        remove()
      }
      insert("a", href: "/webapp/wcs/stores/servlet/AjaxLogonForm?catalogId=11101&myAcctMain=1&langId=-1&storeId=11301", class: "_header_bar", "Login Or Create An Account")


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

  $$(".subscribe_wrapper"){
    insert("h1", "Join Mailing List: ", id: "emailText")
    $$("input"){

    }

  }

  $$("#emailText"){
    move_to("//div[@class='subs_imput_box']", "before")
  }

  $$(".header_wrapper"){
    attributes(data-ur-set: "tabs", data-ur-closeable: "true")
  }



  $$("#ad_17601"){
    move_here("//div[@id='_icons_bar']")
  }

  

}