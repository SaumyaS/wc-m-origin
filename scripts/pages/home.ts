# Place holder/example file

# Place holder/example file

#Add our meta tags




  
  


 
$("/html/body/div[@id='page']/div[@id='main_content_wrapper']/div[@id='content_wrapper_box']/div[@class='main_wrapper']"){
  $("./div/ul"){
    attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-id: "trader_icons", data-ur-autoscroll: "enabled")
    insert_top("div", class: "_container", data-ur-carousel-component: "scroll_container"){
      move_here("../li")
    }
    insert_bottom("div", class: "_dots", data-ur-carousel-component: "dots")
    $("./div/li[3]"){
      attribute("class", "type1")
    }
    $("./div/li[1]"){
      attributes(data-ur-carousel-component: "item", alt: "1")
    }
    $("./div/li[2]"){
      attributes(data-ur-carousel-component: "item", alt: "2")
    }
    $("./div/li[3]"){
      attributes(data-ur-carousel-component: "item", alt: "3")
    }
  }
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


  

 

  # Backward button for banner
  $$(".backward"){
    remove()
  }

  

  $$(".subscribe_wrapper"){
    insert("h4", "Join Mailing List: ", id: "emailText")
    $$("input"){

    }

  }



  $$("#emailText"){
    move_to("//div[@class='subs_imput_box']", "before")
  }

  $$("#ad_17601"){
    move_here("//div[@id='_icons_bar']")
  }

  

