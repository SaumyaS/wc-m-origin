# $("./body") {
#   insert_bottom("footer", class: "_footer") {
#     Move stuff here
#   }
# }

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
