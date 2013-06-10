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
        attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-id: "trader", data-ur-infinite: "disabled")
        $("./ul[@id='first-carousel']"){
          attributes(data-ur-carousel-component: "scroll_container", style: "width: 1900px;")
          $("./script"){
            remove()
          }
          $("./li"){
            attributes(data-ur-carousel-component: "item", class: "_item")
          }
          
        }
      }
    }
//*[@id="first-carousel"]/li[1]/div[2]/p
    $("./div[4]"){
      add_class("_feature")
      $("./div[@class='future_product']"){
        attributes(data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-id: "feature",  data-ur-infinite: "disabled") 
        $("./ul"){
          attributes(data-ur-carousel-component: "scroll_container")
          $("./li"){
            attributes(data-ur-carousel-component: "item", class: "_item")
            $("./div[2]/a[1]"){
              add_class("_featurePrice")
            }
            $("./div[2]/span[1]"){
              remove()
            }
            $("./div[2]/p"){
              remove()
            }
            $("./div[2]/ul[@class='add_wishlist']"){
              remove()
            }
          }
        }

      }      
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
  

