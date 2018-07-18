import { cardsData, saveData, deleteCardData, updateCardData, deleteCurrentCard } from "./service.js";


var onload = $(document).ready(function () {
    cardsData().then(function (allCardsData) {
        var mainPrimaryDiv = document.querySelector("#primary");

        for (var i in allCardsData) {
            var cardDiv = document.createElement('div');
            cardDiv.className += 'card dragzones col-md-3';
            cardDiv.style.margin = "5px 5px 5px 5px";
            var cardBodyDiv = document.createElement('div');
            cardBodyDiv.className += 'card-body';
            cardBodyDiv.style.padding = "0.5rem";
            var cardTitle = document.createElement('h4');
            cardTitle.className += "card-title bg-success text-white text-center "
            cardTitle.innerHTML = allCardsData[i].title;
            var mainUlItems = document.createElement("ul");
            mainUlItems.className += "selectormain";
            mainUlItems.style.paddingLeft = "0";
            var cardText = document.createElement('p');
            cardText.className += "card-text";
            for (var j in allCardsData[i].data) {
                var liItem1 = document.createElement("li");
                liItem1.style.display = "block";
                var outputElement = document.createElement("output")
                outputElement.innerHTML = allCardsData[i].data[j].itemName;
                outputElement.style.width = "65%";
                var checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.name = "slct[]";
                checkbox.checked = allCardsData[i].data[j].itemStatus;
                checkbox.style.width = "10%";
                liItem1.appendChild(outputElement);
                liItem1.appendChild(checkbox);
                var outputElementDate = document.createElement("output");
                outputElementDate.innerHTML = allCardsData[i].data[j].itemCompletedDt;
                outputElementDate.style.width = "25%";
                liItem1.appendChild(outputElementDate);
                mainUlItems.appendChild(liItem1);
                cardText.appendChild(mainUlItems);
            }
            cardBodyDiv.appendChild(cardTitle);
            cardBodyDiv.appendChild(cardText);
            var hiddenId = document.createElement("input");
            hiddenId.type = "hidden";
            hiddenId.name = "hiddenId";
            hiddenId.value = allCardsData[i].id;
            cardBodyDiv.appendChild(hiddenId);
            var button = document.createElement("button")
            button.style.backgroundColor = "red";
            var t = document.createTextNode("Delete");
            button.className = "remove";
            button.style.marginLeft = "40%";
            button.appendChild(t);
            cardBodyDiv.appendChild(button);

            cardDiv.appendChild(cardBodyDiv);

            mainPrimaryDiv.appendChild(cardDiv);
            $(".selectormain").sortable({
                items: "> li",
                // connectWith: ".selectormain",
                update: function (event, ui) {
                    readCardData($(this));
                },

            }).disableSelection();
            var selectormainitems = $(".selectormain").sortable("option", "items");
            $(".selectormain").sortable("option", "items", "> li");
            $("#primary").sortable({
                items: "> div",
                //connectWith: "#primary",
                update: function (event, ui) {
                    readMainElements();
                },

            }).disableSelection();
            var primaryitems = $("#primary").sortable("option", "items");
            $("#primary").sortable("option", "items", "> div");
        }
    }).catch(function (msg) {
        console.log(msg);
    });

});

var readCardData = function readCardElementsData(current) {
    if (current.parent().parent().parent().get(0).hasChildNodes) {

        var cardDatalocal = {}, myjsonlocal = [];
        var childCardBodyParentElement = current.parent().parent().get(0).parentNode;
        var childCardBodyElement = childCardBodyParentElement.childNodes;
        var childsDiv = childCardBodyElement[0].childNodes;

        cardDatalocal["title"] = childsDiv[0].innerHTML;

        var ulElement = childsDiv[1].children;
        if (ulElement[0].hasChildNodes) {
            var liElements = ulElement[0].childNodes;
            for (var j in liElements) {
                if (liElements[j].hasChildNodes) {
                    var jsonDatalocal = {};
                    var dataItems = liElements[j].childNodes;
                    jsonDatalocal["itemName"] = dataItems[0].innerHTML;
                    jsonDatalocal["itemStatus"] = dataItems[1].checked;
                    if (dataItems[1].checked && $.isEmptyObject(dataItems[2].innerHTML)) {
                        jsonDatalocal["itemCompletedDt"] = new Date().toLocaleDateString();;
                    } else {
                        jsonDatalocal["itemCompletedDt"] = dataItems[2].innerHTML;
                    }

                    myjsonlocal.push(jsonDatalocal);
                }
            }
        }
        cardDatalocal["data"] = myjsonlocal;
        updateCardData(childsDiv[2].value, cardDatalocal).then(function () {
            console.log();
        }).catch(function (msg) {
            console.log(msg);
        });

    }
}
var readMainElements = function readMainElementsData() {
    var primaryDivElements = document.querySelector("#primary");
    var cardData = {}, myjson = [];
    var lists = [];
    if (primaryDivElements.hasChildNodes) {
        var cardElements = primaryDivElements.children;
        for (var i in cardElements) {
            cardData = {};
            if (cardElements[i].hasChildNodes) {
                var cardBodyElements = cardElements[i].children;
                if (cardBodyElements[0].hasChildNodes) {
                    var childCardBodyElements = cardBodyElements[0].children;
                    cardData["title"] = childCardBodyElements[0].innerHTML;
                    var ulElement = childCardBodyElements[1].children;
                    if (ulElement[0].hasChildNodes) {
                        var liElements = ulElement[0].childNodes;
                        for (var j in liElements) {
                            if (liElements[j].hasChildNodes) {
                                var jsonData = {};
                                var dataItems = liElements[j].childNodes;
                                jsonData["itemName"] = dataItems[0].innerHTML;
                                jsonData["itemStatus"] = dataItems[1].checked;
                                if (dataItems[1].checked && $.isEmptyObject(dataItems[2].innerHTML)) {
                                    jsonData["itemCompletedDt"] = new Date().toLocaleDateString();;
                                } else {
                                    jsonData["itemCompletedDt"] = dataItems[2].innerHTML;
                                }

                                myjson.push(jsonData);
                            }
                        }
                    }
                    cardData["data"] = myjson;
                    myjson = [];
                }
            }
            if (!($.isEmptyObject(cardData))) {
                lists.push(cardData);
            }
        }
    }
    deleteCardData(lists.length).then(function () {
        for (var i in lists) {
            saveData(lists[i]).then(function () {
                console.log();
            }).catch(function (msg) {
                console.log(msg);
            });
        }
    }).catch(function (msg) {
        console.log(msg);
    });

}

var dialogImpl = $(function () {
    var dialog, form,
        itemName = $("#itemName"),
        ItemStatus = $("#ItemStatus"),
        jsonData = {},
        cardData = {},
        myjson = [];
    var parentDiv = document.querySelector("#itemsDilog");
    var ulItems = document.createElement("ul");
    ulItems.className += "selector";

    function addItemsToCard() {
        readElements();

        var mainPrimaryDiv = document.querySelector("#primary");

        var cardDiv = document.createElement('div');
        cardDiv.className += 'card dragzones col-md-3';
        cardDiv.style.margin = "5px 5px 5px 5px";

        var cardBodyDiv = document.createElement('div');
        cardBodyDiv.className += 'card-body';
        cardBodyDiv.style.padding = "0.5rem";
        var cardTitle = document.createElement('h4');
        cardTitle.className += "card-title bg-success text-white text-center ";        
        cardTitle.innerHTML = document.getElementById("cardtitle").value;
        cardData["title"] = document.getElementById("cardtitle").value;;
        var mainUlItems = document.createElement("ul");
        mainUlItems.className += "selectormain";
        mainUlItems.style.paddingLeft = "0";
        var cardText = document.createElement('p');
        cardText.className += "card-text";
        for (var i in myjson) {
            var liItem1 = document.createElement("li");
            liItem1.style.display = "block";
            var outputElement = document.createElement("output")
            outputElement.innerHTML = myjson[i]["itemName"];
            outputElement.style.width = "65%";
            var checkbox = document.createElement("input");

            checkbox.type = "checkbox";
            checkbox.name = "slct[]";
            checkbox.checked = myjson[i]["itemStatus"];
            checkbox.style.width = "10%";
            liItem1.appendChild(outputElement);
            liItem1.appendChild(checkbox);
            var outputElementDate = document.createElement("output");
            outputElementDate.innerHTML = myjson[i]["itemCompletedDt"];
            outputElementDate.style.width = "25%";
            liItem1.appendChild(outputElementDate);

            mainUlItems.appendChild(liItem1);
            cardText.appendChild(mainUlItems);

        }
        cardBodyDiv.appendChild(cardTitle);
        cardBodyDiv.appendChild(cardText);
        cardData["data"] = myjson;
        saveData(cardData).then(function (data) {
            var hiddenId = document.createElement("input");
            hiddenId.type = "hidden";
            hiddenId.name = "hiddenId";
            hiddenId.value = data.id;
            cardBodyDiv.appendChild(hiddenId);
            cardDiv.appendChild(cardBodyDiv);
            mainPrimaryDiv.appendChild(cardDiv);
            $(".selectormain").sortable({
                items: "> li",
                //connectWith: ".selectormain",
                update: function (event, ui) {
                    readCardData($(this));
                },
            }).disableSelection();
            var selectormainitems = $(".selectormain").sortable("option", "items");
            $(".selectormain").sortable("option", "items", "> li");


            $("#primary").sortable({
                items: "> div",
                //connectWith: "#primary",
                update: function (event, ui) {
                    readMainElements();
                },

            }).disableSelection();
            var primaryitems = $("#primary").sortable("option", "items");
            $("#primary").sortable("option", "items", "> div");
        }).catch(function (msg) {
            console.log(msg);
        });
        myjson = [];
        dialog.dialog("close");

    }


    dialog = $("#dialog-form").dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            "submit": addItemsToCard,
            Cancel: function () {
                dialog.dialog("close");
            }
        },
        close: function () {
            form[0].reset();
        }
    });


    $("#add-item").button().on("click", function () {


        var liItem1 = document.createElement("li");
        liItem1.style.display = "block";
        var outputElement = document.createElement("output")
        outputElement.innerHTML = itemName.val();
        outputElement.style.width = "65%";
        var checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.name = "slct[]";
        checkbox.style.width = "10%";
        liItem1.appendChild(outputElement);
        liItem1.appendChild(checkbox);
        var label = document.createElement("label");
        label.className = "delete";
        label.style.backgroundColor = "red";
        var t = document.createTextNode("x");
        label.appendChild(t);
        liItem1.appendChild(label);
        ulItems.appendChild(liItem1);
        parentDiv.appendChild(ulItems);
        $(".selector").sortable({
            items: "> li"
        });
        var selectoritems = $(".selector").sortable("option", "items");
        $(".selector").sortable("option", "items", "> li");

    });

    $(document).on("click", "label.delete", function () {
        $(this).parent().remove();
    });

    $(document).on("click", "button.remove", function () {

        var childCardBodyParentElement = $(this).parent().get(0).parentNode;
        var childCardBodyElement = childCardBodyParentElement.childNodes;
        var childsDiv = childCardBodyElement[0].childNodes;
        deleteCurrentCard(childsDiv[2].value).then(function () {           
        }).catch(function (msg) { console.log(msg) });
        $(this).parent().parent().remove();
    });

    form = dialog.find("form").on("submit", function (event) {
        event.preventDefault();
        addItemsToCard();
    });

    var readElements = function readElementsData() {
        var itemsDilogDiv = document.querySelector("#itemsDilog");
        if (itemsDilogDiv.hasChildNodes) {
            var ulElements = itemsDilogDiv.childNodes;
            for (var j in ulElements) {
                if (ulElements[j].hasChildNodes) {
                    var liElements = ulElements[j].childNodes;
                    for (var i in liElements) {
                        if (liElements[i].hasChildNodes) {
                            jsonData = {};
                            var dataItems = liElements[i].childNodes;
                            jsonData["itemName"] = dataItems[0].innerHTML;
                            jsonData["itemStatus"] = dataItems[1].checked;
                            if (dataItems[1].checked) {
                                jsonData["itemCompletedDt"] = new Date().toLocaleDateString();
                            } else {
                                jsonData["itemCompletedDt"] = "";
                            }
                            myjson.push(jsonData);
                        }
                    }
                }
            }

        }
    }

    $("#create-List").button().on("click", function () {
        myjson = [];
        ulItems = document.createElement("ul");
        ulItems.className += "selector";
        ulItems.style.paddingLeft = "0";
        ulItems.id = "dilogULItems";
        $(".selector").empty();
        dialog.dialog("open");
    });
});



export { onload, dialogImpl }