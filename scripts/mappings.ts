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
      with(/SearchDisplay/){
        log("--> Importing Search")
        @import pages/search.ts
      }
      with(/Store_Locations/){
        log("--> Importing Store_Locations")
        @import pages/location.ts
      }
      with(/Navigation_Contact_Us/){
        log("--> Importing contact us")
        @import pages/contactus.ts
      }
      with(/Navigation_Specials/){
        log("--> Importing specials")
        @import pages/specials.ts
      }
      with(/QuickOrderView/){
        log("--> Importing Quick Order")
        @import pages/quickOrder.ts
      }
      with(/UserRegistrationForm/){
        log("--> Importing Register code")
        @import pages/register.ts
      }
      with(/AjaxCatalogSearchView/){
        log("--> Importing AdvancedSearch")
        @import pages/advancedSearch.ts
      }
      with(/AjaxLogonForm/){
        log("--> Importing Login")
        @import pages/login.ts
      }
      with(/forgetpassword/){
        log("--> Importing forgetpassword")
        @import pages/forgetpassword.ts
      }
      with(/ResetPasswordForm/){
        log("--> Importing ResetPasswordForm")
        @import pages/forgetpassword.ts
      }
      with(/LogonForm/){
        log("--> Importing LogonForm")
        @import pages/logonForm.ts
      }
      with(/OrderShippingBillingView/){
        log("--> Importing ShippingBilling")
        @import pages/shippingBilling.ts
      }
      with(/AddToCartModalView/){
        log("--> Importing AddtoCart")
        @import pages/addtocart.ts
      }
      with(/ShopCartDisplayView/){
        log("--> Importing order change")
        @import pages/orderChange.ts
      }
      with(/AjaxQuickCartDisplay/){
        log("--> Importing quickCart")
        @import pages/quickCart.ts
      }
      with(/SingleShipmentOrderSummaryView/){
        log("--> Importing Shipment Order Summary Info")
        @import pages/shipmentOrderSummary.ts
      }
      with(/BrandsCategoryLandingDisplayView/){
        log("--> Importing Brand Category Page")
        @import pages/brandCategoryDisplay.ts
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
