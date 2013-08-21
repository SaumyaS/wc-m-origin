
$(".//label"){
	attributes(style: "font-weight: bold;display: inline-block; min-width: 100px;")
	insert_before("br")
}
$("//input[@type='text']"){
	attributes(style: "margin: 5px 0px;padding: 4px;background: #ccc;border: 1px solid #aaa;box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.4) inset;")
	insert_after("br")
}



$("//div[@class='info_content']"){
	# insert_after("br")
}
$("//p"){
	attributes(style: "margin-top: 10px;")

}

$$("#requisitionListType"){
	attributes(style: "width: 172px;")
}

$$("#WC_RequisitionListDetailsAddForm_div_1"){
	attributes(style: "width: 345px;")
	insert_after("hr", class: "test")
	$("./br"){
		remove()
	}
	remove_text_nodes()

	$("./input[1]"){
		insert_before("label", "SKU: "){
			attributes(style: "display: inline-block")
		}
		insert_after("br")
	}
	$("./input[2]"){
		insert_after("br")
		insert_before("label", "QTY: "){
			attributes(style: "display: inline-block")
			insert_before("div")
			insert_before("font", "*"){
				attributes(style: "color: red;")
			}
		}
	}
	$("./a"){
		attributes(style: "width: 150px;margin: 5px auto;")
		insert_after("br")

	}

	


}

$$(".test"){
	attributes(style: "display: block; background-color: #fc0; height: 2px; border: none; margin: 10px 0px;")
}

$("//br[1]"){
	remove()
}



$$(".btn-gray"){
	attributes(style: "float:right")
}

$$("#RequisitionListDetailTableDisplay_Widget"){
	$("./div[@class='mw_was_table']"){
		$("./div[@class='mw_was_thead']"){
			remove()
		}
		$("./div[@class='mw_was_tbody']"){
			attributes(style: "margin-bottom: 5px;")
			$("./div"){
				attributes(style: "background-color: #eee;padding: 5px;")
				


				$("./div[1]"){
					attributes(class: "_name")
				}
				$("./div[2]"){
					attributes(class: "_image")
				}
				$("./div[3]"){
					attributes(class: "_sku")
				}
				$("./div[4]"){
					attributes(class: "_quantity")
				}
				$("./div[5]"){
					attributes(class: "_price")
				}
				$("./div[6]"){
					attributes(class: "_partNumber")
				}
				$("./div[7]"){
					attributes(class: "_remove")
				}





				insert_top("div", class: "_partContainer"){
					move_here("../div[@class='_partNumber']"){
						insert_before("label", "Part Number:", class: "_partLabel"){
					 		attributes(style: "display: inline-block; float: left;")
					 	}
					}
				}
				insert_top("div", class: "_priceContainer"){
					move_here("../div[@class='_price']"){
						insert_before("label", "Price:", class: "_priceLabel"){
					 		attributes(style: "display: inline-block; float: left;")
					 	}
					}
					
				}
				insert_top("div", class: "_quantityContainer"){
					move_here("../div[@class='_quantity']"){
						insert_before("label", "Quantity:", class: "_quantityLabel"){
							attributes(style: "display: inline-block; float: left;")
						}
					}
				}
				insert_top("div", class: "_skuContainer"){
					move_here("../div[@class='_sku']"){
						insert_before("label", "SKU:", class: "_skuLabel"){
					 		attributes(style: "display: inline-block; float: left;")
					 	}
					}
				}
				insert_top("div", class: "_nameContainer"){
					move_here("../div[@class='_name']"){
						insert_before("label", "Name:", class: "_nameLable"){
					 		attributes(style: "display: inline-block; float: left;")
					 	}
					 	$("./a"){
					 		attributes(style: "color: #505050; text-decoration: underline;")
					 	}
					}
				}
				$("./div[@class='_remove']"){
					insert_after("hr")
					insert_after("br")
					insert_before("div", class: "_descriptionButton", "Description"){
						wrap("div", class: "_togglerContainer")
						attributes(style: "padding: 5px; 
											border: 1px solid #555; 
											background-color: #aaa;
											font-weight: bold;
											margin: 10px;
											text-align: center;
											width: 100px;", onlclick: "test()")
						
						
						
						insert_after("div", class: "_descriptionText"){
							move_here("../../div[@class='_nameContainer']/div[@class='_name']/font/div[3]/p")
							attributes(style: "background-color: #bbb;")
						}
					}
				}

				




				
				

				insert_top("div", class: "_info"){
					attributes(style: "width: 320px; float: left;")
					move_here("../div[@class='_nameContainer']")
					move_here("../div[@class='_skuContainer']")
					move_here("../div[@class='_quantityContainer']")
					move_here("../div[@class='_priceContainer']")
					move_here("../div[@class='_partContainer']")

				}
			}
		}
	}
}



# $("//div[@class='_togglerContainer']"){
	
# 	$("./div[@class='_description']"){
# 		attributes(data-ur-toggler-component: "button", data-ur-id: "description")
# 	}
# 	$("./div[@class='_descriptionText']"){
# 		attributes(data-ur-toggler-component: "content", data-ur-id: "description")
# 	}
# }