/*
  Mappings

  Mappings are matchers that we use to determine if we should execute a
  bit of Tritium during an execution. Aka, run something when we are
  are on a certain page.

  Example starting code:
*/

match($status) {

  with(/302/) {
    log("--> STATUS: 302") # redirect: just let it go through
  }

  with(/200/) {
    log("--> STATUS: 200")

    match($path) {
      with(/^\/$|^\/\?/) {
        log("--> Importing pages/home.ts in mappings.ts")
        @import pages/home.ts
      }
      with(/TopCategoriesDisplay/){
        log("--> Importing pages/new.ts in mapping.ts")
        @import pages/new.ts
        @import pages/home.ts
      }
      with(/BrandsCategoryLandingView/){
        log("--> Importing Brands")
        @import pages/brands.ts
      }
      with(/CategoryDisplay/){
        log("--> Importing Category")
        @import pages/categories.ts
        @import pages/products.ts
      }
      with(/ProductDisplay/){
         log("--> Importing Product")
        @import pages/items.ts
      }
      with(/AjaxOrderItemDisplayView/){
        log("--> Importing AjaxOrderItemDisplayView")
        @import pages/orderItemDisplay.ts
      }


      else() {
        log("--> No page match in mappings.ts")
      }
    }
  }

  else() {
    # not 200 or 302 response status
    log("--> STATUS: " + $status + " assuming its an error code pages/error.ts")
    @import pages/error.ts
  }

}
