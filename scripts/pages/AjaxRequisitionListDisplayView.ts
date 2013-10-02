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
				attributes(style: "margin: 10px 0; border-bottom: 1px solid #ccc; padding-bottom: .5em;")
			}
			$("div[4]") {
				add_class("req-list-last-updated")
				insert_before("span", "Updated: ") {
					attributes(style: "font-weight: bold; font-size: 12px;")
				}
			}
			$("div[3]"){
				add_class("req-list-type")
				text() {
			      append(" | ")
			    }
				// insert_before("label", "Type:"){
				// 	attributes(style: "display: inline-block; float: left;")
				// }
			}
			$("div[2]"){
				insert_before("label", "Creator: "){
					add_class("req-list-creator")
				// 	attributes(style: "display: inline-block; float: left;")
				}
				add_class("req-list-creator-name")

				insert_after("br")
			}
			$("div[1]"){
				// insert_before("label", "Name:"){
				// 	attributes(style: "display: inline-block; float: left;")
				// }
				$("./a"){
					add_class("req-list-name")
					// attributes(style: "color: #505050; text-decoration: underline;")
				}
			}
		}
	}
}