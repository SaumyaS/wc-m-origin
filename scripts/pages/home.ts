# Place holder/example file

# Place holder/example file

#Add our meta tags



$$("body"){
  
  add_class("_home")
  table_dump(".//table")


 

  $$("div.bt_pagination"){
  	remove()
  }

 

  # Removes breadcrumbs
  $$("#breadcrumb"){
    remove()
  }

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


  

  $$("#WC_ContentAreaESpot_div_1_17106"){
    remove()
  }

  # Backward button for banner
  $$(".backward"){
    remove()
  }

  

  $$(".subscribe_wrapper"){
    insert("h1", "Join Mailing List: ", id: "emailText")
    $$("input"){

    }

  }



  $$("#emailText"){
    move_to("//div[@class='subs_imput_box']", "before")
  }

  $$("#ad_17601"){
    move_here("//div[@id='_icons_bar']")
  }

  

