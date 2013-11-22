$("/html"){
    # Moves header icons back to the header
    $$("#ad_17601"){
            move_here("//div[@id='_icons_bar']")
    }

    $$(".main_container"){
            add_class("_search")

            $("./div[@id='search-content']"){
                $("./p[2]"){
                    inner(){
                        replace(/Try/, "<br>&#09;Try")
                    }
                }
                $("./div[@class='product_cat_01']"){

                    insert_before("div", "Categories", class: "_categoryToggle"){
                        insert_before("div", class: "_categoryTogglerContainer"){
                            attribute("data-ur-set", "toggler")
                        }
                        attributes(data-ur-toggler-component: "button", data-ur-toggler-id: "category")
                    }
                    attributes(data-ur-toggler-component: "content", data-ur-toggler-id: "category")
                }
                $("./div[@class='_categoryTogglerContainer']"){
                    move_here("../div[@class='_categoryToggle']")
                    move_here("../div[@class='product_cat_01']")
                }
                move_here("//*[@id='search-content']/div[1]/div[2]/ul/li/a")
                $("./a[@class='btn']"){
                    add_class("expand")
                }
            }

            $(".//div[@class='search-sidebar']"){
                $("./h2"){
                    insert_after("div", class:"_resultContent"){
                        insert("div", class: "_tabWidget"){
                            move_here("../../ul")
                        }
                    }
                }

                attribute("data-ur-set", "toggler")
                $("./h2"){
                    attributes(data-ur-toggler-component: "button", data-ur-toggler-id: "search")
                }
                $("./div"){
                    attributes(data-ur-toggler-component: "content", data-ur-toggler-id: "search")
                }

                $(".//div[@class='_tabWidget']"){
                    attributes(data-ur-set: "tabs", data-ur-closeable: "true")
                    $("ul[1]"){
                        $("./li/h4"){
                            attributes(data-ur-tabs-component: "button", data-ur-tab-id: "1")
                        }
                        $("./li/ul"){
                            attributes(data-ur-tabs-component: "content", data-ur-tab-id: "1")
                        }
                    }
                    $("ul[2]"){
                        $("./li/h4"){
                            attributes(data-ur-tabs-component: "button", data-ur-tab-id: "2")
                        }
                        $("./li/ul"){
                            attributes(data-ur-tabs-component: "content", data-ur-tab-id: "2")
                        }
                    }
                    $("ul[3]"){
                        $("./li/h4"){
                            attributes(data-ur-tabs-component: "button", data-ur-tab-id: "3")
                        }
                        $("./li/ul"){
                            attributes(data-ur-tabs-component: "content", data-ur-tab-id: "3")
                        }
                    }
                }
            }
            $(".//div[@class='search-main']"){
                $(".//div[@class='search_based']/span[@class='fright']"){
                    $("./select[@id='sizeBy']/option"){
                        attribute("value"){
                            value(){
                                rewrite_link()
                            }
                        }
                    }
                    $("./select[@id='sortBy']/option"){
                        attribute("value"){
                            value(){
                                rewrite_link()
                            }
                        }
                    }
                    $("./select[@id='orderBy']/option"){
                        attribute("value"){
                            value(){
                                rewrite_link()
                            }
                        }
                    }
                }
                $(".//div[contains(@class, 'result-item')]"){
                    $("./a"){
                        add_class("_productImage")
                    }
                    $("./div[contains(@class, 'item-description')]"){
                        move_to("../a", position("before"))
                        insert_after("div", class: "_SKUList", "")
                    }
                    $("./div[contains(@class, 'item-action ')]"){
                        $("./span[@class='discount-price']/div[contains(@class, 'offerprice')]"){
                            $("./span[contains(@class, 'price')]"){
                                match(text()){
                                    with(/Call/){
                                        $(".."){
                                            attributes(style: "margin-bottom: 30px;")
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
    }

    $$(".pricingLoginSearch"){
        $("./a"){
            attributes(style: "", href: "/webapp/wcs/stores/servlet/AjaxLogonForm?catalogId=11101&myAcctMain=1&langId=-1&storeId=11301", onclick: "")
        }
    }
}