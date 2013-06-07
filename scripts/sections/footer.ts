

  # Removes unneeded footer items
  $$(".footer_nav_wrapper"){
    remove()
  }

  # Removes the Entrust logo
  $$(".intrust"){
    remove()
  }

  # Removes the credit card logos
  $$(".copyright_right_box"){
    remove()
  }

  $$(".box3"){
    remove()
  }

  $$(".copyright_container"){
    add_class("_copyright")
  }

  $$("#ad_13352"){
    add_class("_info")
    $("./h3"){
      name("a")
    }

    $("./a"){
      attributes(href: "/webapp/wcs/stores/servlet/ContentDisplayView?catalogId=11101&langId=-1&storeId=11301&page=Navigation_Contact_Us")
    }
    insert_top("a", "Sign In", href: "/webapp/wcs/stores/servlet/AjaxLogonForm?catalogId=11101&myAcctMain=1&langId=-1&storeId=11301")
    insert("a", "View Site", href: "http://www.whitecap.com")
  }

  $$(".foot_contact"){
    remove()
  }

 $$("#WC_ContentAreaESpot_div_1_17106"){
    remove()
  }