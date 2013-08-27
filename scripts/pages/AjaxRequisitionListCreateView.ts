

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
					attributes(class: "_name", style: "margin-left: 204px;")
					$("./font/div[2]/div[1]"){
						remove()
					}
					$("./font/div[2]/div[1]"){
						attributes(style: "width: 90%")
					}
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
					attributes(class: "_price", style: "margin-left: 204px;")
				}
				$("./div[6]"){
					attributes(class: "_manufacturer", style: "margin-left: 204px;")
				}
				$("./div[7]"){
					attributes(class: "_remove")
				}


				




				insert_top("div", class: "_manufacturerContainer"){
					attributes(style: "line-height: 1;")
					move_here("../div[@class='_manufacturer']"){
						insert_before("label", "Manufacturer:", class: "_manufacturerLabel"){
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
					insert_before("div", class: "_featureButton", "Features"){
						wrap("div", class: "_togglerContainer"){
							//attributes(style: "margin-top:30px;")
						}
						attributes(style: "padding: 5px; 
											border: 1px solid #555; 
											background-color: #aaa;
											font-weight: bold;
											margin-right: 10px;
											margin-bottom: 0px;
											margin-top: 91px;
											text-align: center;
											width: 100px;")
						
						
						
						insert_after("div", class: "_featureText"){
							move_here("../../div[@class='_nameContainer']/div[@class='_name']/font/div[3]/div[2]/div[2]"){
								attributes(style: "background-color: #bbb; margin-bottom: 10px;")
							}
							attributes(style: "background-color: #bbb; margin-bottom: 10px; padding: 10px;")
						}
					}
				}

				




				
				

				insert_top("div", class: "_info"){
					attributes(style: "display: block;")
					move_here("../div[@class='_nameContainer']")
					move_here("../div[@class='_skuContainer']")
					move_here("../div[@class='_quantityContainer']")
					move_here("../div[@class='_priceContainer']")
					move_here("../div[@class='_manufacturerContainer']")
					insert_after("br")

				}
				insert_top("div", class: "testImg"){
					attributes(style: "float: left; margin-top: 5px; margin-bottom: 139px; margin-right: 10px")
					move_here("../div[@class='_image']"){
						$(".//img"){
							attributes(style: "border: 2px solid #777;")
						}
					}
				}

				
			}
		}
	}
}




$("//div[@class='_togglerContainer']"){
	$("ancestor::div[@class='mw_was_tbody']"){
		$("./div[@class='mw_was_tr']"){
			attributes(data-ur-set: "toggler")
			$counter = "feature_" + index()
			$("./div[@class='_togglerContainer']"){
				
				$("./div[@class='_featureButton']"){
					attributes(data-ur-toggler-component: "button", data-ur-id: $counter)
				}
				$("./div[@class='_featureText']"){
					attributes(data-ur-toggler-component: "content", data-ur-id: $counter)
				}
			}
		}
	}
}
