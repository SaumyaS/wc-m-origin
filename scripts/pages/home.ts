# Place holder/example file

# Place holder/example file

#Add our meta tags


# Moves header icons back to the header
  $$("#ad_17601"){
    move_here("//div[@id='_icons_bar']")
  }


$("/html/body/div[@id='page']"){
  
  $("./div[@class='header_widget']/div[@class='nav_wrapper']"){
    insert_before("div", class: "__banner"){
      move_here("../../div/div[@id='content_wrapper_box']/div[2]")
      move_here("../../div/div[@id='content_wrapper_box']/div[2]/div/ul")
    }
  }



  #$("/html/body/div[@id='page']/div[@id='main_content_wrapper']/div[@id='content_wrapper_box']/div[@class='main_wrapper']"){
  # Carousel Widget
  $("./div[@class='header_widget']"){
    $("./div/ul"){
      attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-id: "trader_icons", data-ur-autoscroll: "enabled", data-ur-center: "enabled")
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

  $("./div/div/div/div[@class='main_container']"){
    $("./div[2]"){
      remove()
    }

    $("./div[3]"){
      add_class("_trader")

      $$("lpadd_tocart"){
        add_class("btn")
      }
    }

    $("./div[3]"){
      $("./h3"){
        insert_after("div", class: "_traderCarousel"){
          move_here("../ul")
        }
      }
        
      
      $("./div[@class='_traderCarousel']"){
        attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-id: "trader")
        $("./ul[@id='first-carousel']"){
          attributes(data-ur-carousel-component: "scroll_container")
            $("./script"){
              remove()
            }
            $("./li[1]"){
              attributes(data-ur-carousel-component: "item", alt: "1")
            }
            $("./li[2]"){
              attributes(data-ur-carousel-component: "item", alt: "2")
            }
            $("./li[3]"){
              attributes(data-ur-carousel-component: "item", alt: "3")
            }
            $("./li[4]"){
              attributes(data-ur-carousel-component: "item", alt: "4")
            }
            $("./li[5]"){
              attributes(data-ur-carousel-component: "item", alt: "5")
            }
            $("./li[6]"){
              attributes(data-ur-carousel-component: "item", alt: "6")
            }
            $("./li[7]"){
              attributes(data-ur-carousel-component: "item", alt: "7")
            }
            $("./li[8]"){
              attributes(data-ur-carousel-component: "item", alt: "8")
            }
            $("./li[9"){
              attributes(data-ur-carousel-component: "item", alt: "9")
            }

          }
      }
    }

    $("./div[4]"){
      add_class("_feature")
    }
    $("./div/div[@class='future_product']/div"){
      attribute("class", "torwsfgssf")
    }

  }
 
}
  





  $$("#right_nav"){
    remove()
  }
  
  # Removes Product category section on the page
#  $$(".product_cat"){
#    remove()
#  }

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


$("//*[@id='content_wrapper_box']/div[2]/div/div[3]/div[2]/div"){
  insert_top("div", "gdfndfgjndfgsdfans")
}
  

