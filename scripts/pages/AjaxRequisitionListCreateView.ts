$("//div[@id='box']"){
	$("//div[@class='checkout-container']"){
		$(".//label"){
			attributes(style: "font-weight: bold;display: inline-block; min-width: 100px;")
		}
		$("./input[1]"){
			attributes(style: "margin: 5px 0px;padding: 4px;background: #ccc;border: 1px solid #aaa;box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.4) inset;")
			insert_after("br")
		}
		$("./div[@class='info_content']"){
			insert_after("br")
		}
	}	
}