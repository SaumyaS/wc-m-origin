$("//label[1]"){
	attributes(style: "display: inline-block;padding-left: 5px;")
}

$$("#requisition_list_table"){
	$("./div[@class='mw_was_table']/thread"){
		remove()
	}

	$("./div[@class='mw_was_table']/div[@class='mw_was_tbody']"){
		$("./div[@class='mw_was_tr']"){
			
			$("div[5]"){
				attributes(style: "margin-bottom: 10px;")
				insert_after("hr")
			}
			$("div[4]"){
				insert_before("label", "Last Updated:"){
					attributes(style: "display: inline-block; float: left;")
				}
				attributes(style: "margin-bottom: 5px;")
			}
			$("div[3]"){
				insert_before("label", "Type:"){
					attributes(style: "display: inline-block; float: left;")
				}
			}
			$("div[2]"){
				insert_before("label", "Created By:"){
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