
$(".//label"){
	attributes(style: "font-weight: bold;display: inline-block; min-width: 100px;")
	insert_before("br")
}
$("//input"){
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
			$("./div"){
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