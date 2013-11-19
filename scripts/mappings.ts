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
	with(/301/){
		log("--> status: 301")
	}

	with(/200/) {
		log("--> STATUS: 200")

		# Search/PLP
		$$(".search-container"){
			log("this is getting refined")
			@import pages/search.ts
		}
		# Product Subcategories
		$$(".topcat_header"){
			@import pages/categories.ts
		}
		# PDP
		$$(".product-detail-content"){
			@import pages/items.ts
		}
		# Brands Page
		$$(".brand-gallery"){
			log("--> Importing Brands")
			@import pages/brands.ts
		}
		#Brands Category Page
		$$(".brand-categories"){
			log("--> Importing Brand Category Page")
			@import pages/brandCategoryDisplay.ts
		}

		match($path) {
			with(/TopCategoriesDisplay/){
				log("--> Importing pages/new.ts in mapping.ts")
				log("--> Importing pages/home.ts in mappring.ts")
				@import pages/new.ts
				@import pages/home.ts
			}
			# with(/brands/){
			# 	log("--> Importing Brands")
			# 	@import pages/brands.ts
			# }
			# with(/CategoryDisplay/){
			# 	log("--> Importing Category")
			# 	@import pages/categories.ts
			# 	@import pages/products.ts
			# }
			# with(/ProductDisplay/){

			# 	log("--> Importing Product")
			# 	@import pages/items.ts
			# }
			with(/Footer_Catalog_Request/){
				log("--> Importing Catalog Reuest Form")
				@import pages/catalogRequestForm.ts
			}
			with(/Download_Safety_Catalog/){
				log("--> Importing Safety Catalog")
				@import pages/safetyCatalog.ts
			}
			with(/lp-woc/){
				log("--> Importing WOC")
				@import pages/woc.ts
			}
			# with(/SearchDisplay/){
			# 	log("--> Importing Search")
			# 	@import pages/search.ts
			# }
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
			with(/personalInformation/){
				log("--> Importing UserRegistrationForm")
				# @import pages/personalInfo.ts
				@import pages/editRegistration.ts
			}
			with(/editRegistration/){
				@import pages/editRegistration.ts
			}
			with(/UserRegistrationForm/){
				log("--> Importing Register code")
				@import pages/register.ts
			}

			with(/AjaxCatalogSearchView/){
				log("--> Importing AdvancedSearch")
				@import pages/advancedSearch.ts
			}
			with(/AjaxLogonFormCenterLinksDisplayView/){
				log("--> Importing Account Summary")
				@import pages/accountSummary.ts
			}
			with(/ReLogonFormView/){
				log("--> Importing Relogin")
				@import pages/reLogin.ts
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
			with(/Logon/){
				log("--> Importing ResetPassword")
				@import pages/logon.ts
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
			# with(/BrandsCategoryLandingDisplayView/){
			# 	log("--> Importing Brand Category Page")
			# 	@import pages/brandCategoryDisplay.ts
			# }
			with(/OrderShippingBillingConfirmationView/){
				log("--> Importing Confirmation View Page")
				@import pages/orderConfirmation.ts
			}
			with(/home/){
				log("--> Importing pages/new.ts in mapping.ts")
				@import pages/new.ts
				@import pages/home.ts
			}
			with(/cartItemPopulatedDivView/){
				log("--> Importing cart Item populated")
				@import pages/cartItemPopulated.ts
			}
			with(/AjaxAddressBookForm/){
				log("--> importing AjaxAddressBookForm")
				@import pages/ajaxAddressBookForm.ts
			}
			with(/BillingAddressDisplayView/){
				log("--> Importing BillingAddressDisplayView")
				@import pages/billingAddressDisplayView.ts
			}
			with(/EmailModalView/){
				log("--> Importing EmailModalView")
				@import pages/emailModalView.ts
			}
			with(/ProcessedOrders/){
				log("--> Importing processed Orders")
				@import pages/processedOrders.ts
			}
			with(/AjaxRequisitionListDisplayView/){
				log("--> Importing ReQListDisplay")
				@import pages/AjaxRequisitionListDisplayView.ts
			}
			with(/AjaxRequisitionListCreateView/){
				@import pages/AjaxRequisitionListCreateView.ts
			}
			with(/AjaxRequisitionListDetailView/){
				@import pages/AjaxRequisitionListDetailView.ts
			}
			with(/WillCallModalView/){
				log("--> Importing WillCallModalView")
				@import pages/WillCallModalView.ts
			}
			with(/SearchBasedNavigationCategoryResultDisplayView/){
				log("--> Importing SearchBasedNavigationCategoryResultDisplayView")
				@import pages/SearchBasedNavigationCategoryResultDisplayView.ts
			}
			with(/AjaxOrderDetail/){
				log("--> Importing Account OrderDetails transformation")
				@import pages/AjaxOrderDetail.ts
			}
			with(/Standard/){
				log("--> Importing Standard Creditcard form")
				@import pages/standardCreditCard.ts
			}
			with(/AddressEditView/){
				log("--> importing AddressEditView")
				@import pages/AddressEditView.ts
			}
			with(/AjaxCatalogSearchResultView/){
				log("--> importing the ajax call for search results")
				@import pages/AjaxCatalogSearchResultView.ts
			}
			with(/Footer_Terms_Conditions/){
				log("--> improrting pages for terms&conditions")
				@import pages/termsConditions.ts
			}
			with(/Footer_Privacy_Policy/){
				log("--> importing pages for privacy policy")
				@import pages/privacyPolicy.ts
			}
			with(/Trader/){
				log("--> importing pages for trader")
				@import pages/trader.ts
			}
			with(/Footer_Email_Subscribe/){
				log("--> importing pages for email subscribe")
				@import pages/footer-email.ts
			}
			with(/lp-construction-boot/){
				log("--> importing pages for lp-construction-boot")
				@import pages/oliverBoots-sub.ts
			}
			with(/lp-gumboot/){
				log("--> importing pages for lp-gumboot")
				@import pages/oliverBoots-sub.ts
			}
			with(/lp-high-rise/){
				log("--> importing pages for lp-high-rise")
				@import pages/oliverBoots-sub.ts
			}
			with(/lp-low-rise-boot/){
				log("--> importing pages for lp-low-rise-boot")
				@import pages/oliverBoots-sub.ts
			}
			with(/lp-mining/){
				log("--> importing pages for lp-mining")
				@import pages/oliverBoots-sub.ts
			}
			with(/Video/){
				log("--> Importing Video pages")
				@import pages/video.ts
			}
			with(/lp-oliverboots/){
				log("--> Importing Oliver Boots")
				@import pages/oliverBoots.ts
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
