$("//label"){
	attributes(style: "font-weight: bold;display: inline-block; min-width: 100px;")
}
$("//input[@type='text']"){
	attributes(style: "margin: 5px 0px;padding: 4px;background: #ccc;border: 1px solid #aaa;box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.4) inset;")
	
}
$("//div[@class='info_content']"){
	
}
$("//label"){
	insert_before("br")
}

$$(".btn-gray"){
	attributes(style: "float:right")
}

$$("#requisitionListType"){
	attributes(style: "width: 172px;")
}

$$("#WC_RequisitionListDetailsAddForm_div_1"){
	attributes(style: "width: 345px;")
	$("./br"){
		remove()
	}
	remove_text_nodes()

	$("./input[1]"){
		attributes(style: "margin: 5px 0px;padding: 4px;background: #ccc;border: 1px solid #aaa;box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.4) inset;")
		insert_before("label", "SKU: "){
			attributes(style: "display: inline-block")
		}
		insert_after("br")
	}
	$("./input[2]"){
		attributes(style: "margin: 5px 0px;padding: 4px;background: #ccc;border: 1px solid #aaa;box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.4) inset;")
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

$$("#RequisitionListDetailTableDisplay_Widget"){
	$("./div[@class='mw_was_table']"){
		$("./div[@class='mw_was_thead']"){
			remove()
		}
		$("./div[@class='mw_was_tbody']"){
			attributes(style: "margin-bottom: 5px;")
			$("./div"){
				attributes(style: "background-color: #eee;padding: 5px;")
				$("div[6]"){
					attributes(style: "margin-bottom: 10px;")
					$("./a"){
						attributes(style: "float: none;")
					}
					insert_after("hr")
				}
				$("div[5]"){
					insert_before("label", "Part Number:"){
						attributes(style: "display: inline-block; float: left;")
						insert_before("br")
					}
					attributes(style: "margin-bottom: 5px;")
				}
				$("div[4]"){
					insert_before("label", "Brand:"){
						attributes(style: "display: inline-block; float: left;")
					}
				}
				$("div[3]"){
					insert_before("label", "Quantity:"){
						attributes(style: "display: inline-block; float: left;")
					}
				}
				$("div[2]"){
					insert_before("label", "SKU:"){
						attributes(style: "display: inline-block; float: left;")
					}
				}
				$("div[1]"){
					insert_before("label", "Name:"){
						attributes(style: "display: inline-block; float: left;")
					}
					$("./a"){
						attributes(style: "color: #505050; text-decoration: underline;")
					}
				}
			}
		}

	}
}
