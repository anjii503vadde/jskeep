/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/*! exports provided: onload, dialogImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onload", function() { return onload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dialogImpl", function() { return dialogImpl; });
/* harmony import */ var _service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service.js */ "./src/service.js");


var onload = $(document).ready(function () {
    Object(_service_js__WEBPACK_IMPORTED_MODULE_0__["cardsData"])().then(function (allCardsData) {
        var mainPrimaryDiv = document.querySelector("#primary");

        for (var i in allCardsData) {
            var cardDiv = document.createElement('div');
            cardDiv.className += 'card dragzones col-md-3';
            cardDiv.style.margin = "5px 5px 5px 5px";
            var cardBodyDiv = document.createElement('div');
            cardBodyDiv.className += 'card-body';
            cardBodyDiv.style.padding = "0.5rem";
            var cardTitle = document.createElement('h4');
            cardTitle.className += "card-title bg-success text-white text-center ";
            cardTitle.innerHTML = allCardsData[i].title;
            var mainUlItems = document.createElement("ul");
            mainUlItems.className += "selectormain";
            mainUlItems.style.paddingLeft = "0";
            var cardText = document.createElement('p');
            cardText.className += "card-text";
            for (var j in allCardsData[i].data) {
                var liItem1 = document.createElement("li");
                liItem1.style.display = "block";
                var outputElement = document.createElement("output");
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
            var button = document.createElement("button");
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
                }

            }).disableSelection();
            var selectormainitems = $(".selectormain").sortable("option", "items");
            $(".selectormain").sortable("option", "items", "> li");
            $("#primary").sortable({
                items: "> div",
                //connectWith: "#primary",
                update: function (event, ui) {
                    readMainElements();
                }

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

        var cardDatalocal = {},
            myjsonlocal = [];
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
        Object(_service_js__WEBPACK_IMPORTED_MODULE_0__["updateCardData"])(childsDiv[2].value, cardDatalocal).then(function () {
            console.log();
        }).catch(function (msg) {
            console.log(msg);
        });
    }
};
var readMainElements = function readMainElementsData() {
    var primaryDivElements = document.querySelector("#primary");
    var cardData = {},
        myjson = [];
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
            if (!$.isEmptyObject(cardData)) {
                lists.push(cardData);
            }
        }
    }
    Object(_service_js__WEBPACK_IMPORTED_MODULE_0__["deleteCardData"])(lists.length).then(function () {
        for (var i in lists) {
            Object(_service_js__WEBPACK_IMPORTED_MODULE_0__["saveData"])(lists[i]).then(function () {
                console.log();
            }).catch(function (msg) {
                console.log(msg);
            });
        }
    }).catch(function (msg) {
        console.log(msg);
    });
};

var dialogImpl = $(function () {
    var dialog,
        form,
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
            var outputElement = document.createElement("output");
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
        Object(_service_js__WEBPACK_IMPORTED_MODULE_0__["saveData"])(cardData).then(function (data) {
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
                }
            }).disableSelection();
            var selectormainitems = $(".selectormain").sortable("option", "items");
            $(".selectormain").sortable("option", "items", "> li");

            $("#primary").sortable({
                items: "> div",
                //connectWith: "#primary",
                update: function (event, ui) {
                    readMainElements();
                }

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
        var outputElement = document.createElement("output");
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
        Object(_service_js__WEBPACK_IMPORTED_MODULE_0__["deleteCurrentCard"])(childsDiv[2].value).then(function () {}).catch(function (msg) {
            console.log(msg);
        });
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
    };

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



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");


/***/ }),

/***/ "./src/service.js":
/*!************************!*\
  !*** ./src/service.js ***!
  \************************/
/*! exports provided: cardsData, saveData, deleteCardData, deleteCurrentCard, updateCardData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardsData", function() { return cardsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveData", function() { return saveData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCardData", function() { return deleteCardData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCurrentCard", function() { return deleteCurrentCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCardData", function() { return updateCardData; });
var cardsData = function getAllCardsData() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/lists',
            contentType: 'application/json'
        }).done(function (data) {
            console.log('SUCCESS');
            resolve(data);
        }).fail(function (msg) {
            console.log('FAIL');
            reject(msg);
        }).always(function (msg) {
            console.log('ALWAYS');
        });
    });
};

var saveData = function saveModalData(cardData) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/lists',
            contentType: 'application/json',
            data: JSON.stringify(cardData)
        }).done(function (data) {
            console.log('SUCCESS');
            resolve(data);
        }).fail(function (msg) {
            console.log('FAIL');
            reject(msg);
        }).always(function (msg) {
            console.log('ALWAYS');
        });
    });
};

var deleteCardData = function deleteData(length) {
    var i;
    var resolvedPromisesArray = [];
    for (i = 1; i <= length; i++) {
        resolvedPromisesArray.push(new Promise(function (resolve, reject) {
            $.ajax({
                type: 'DELETE',
                url: 'http://localhost:3000/lists/' + i,
                contentType: 'application/json'
            }).done(function () {
                console.log('SUCCESS');
                resolve();
            }).fail(function (msg) {
                console.log('FAIL');
                reject(msg);
            }).always(function (msg) {
                console.log('ALWAYS');
            });
        }));
    }
    return Promise.all(resolvedPromisesArray);
};

var deleteCurrentCard = function deleteCurrentCard(id) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: 'DELETE',
            url: 'http://localhost:3000/lists/' + id,
            contentType: 'application/json'
        }).done(function () {
            console.log('SUCCESS');
            resolve();
        }).fail(function (msg) {
            console.log('FAIL');
            reject(msg);
        }).always(function (msg) {
            console.log('ALWAYS');
        });
    });
};

var updateCardData = function updateCardsData(id, cardData) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: 'PUT',
            url: 'http://localhost:3000/lists/' + id,
            contentType: 'application/json',
            data: JSON.stringify(cardData)
        }).done(function (data) {
            console.log('SUCCESS');
            resolve(data);
        }).fail(function (msg) {
            console.log('FAIL');
            reject(msg);
        }).always(function (msg) {
            console.log('ALWAYS');
        });
    });
};



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.mapion/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UuanMiXSwibmFtZXMiOlsib25sb2FkIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjYXJkc0RhdGEiLCJ0aGVuIiwiYWxsQ2FyZHNEYXRhIiwibWFpblByaW1hcnlEaXYiLCJxdWVyeVNlbGVjdG9yIiwiaSIsImNhcmREaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtYXJnaW4iLCJjYXJkQm9keURpdiIsInBhZGRpbmciLCJjYXJkVGl0bGUiLCJpbm5lckhUTUwiLCJ0aXRsZSIsIm1haW5VbEl0ZW1zIiwicGFkZGluZ0xlZnQiLCJjYXJkVGV4dCIsImoiLCJkYXRhIiwibGlJdGVtMSIsImRpc3BsYXkiLCJvdXRwdXRFbGVtZW50IiwiaXRlbU5hbWUiLCJ3aWR0aCIsImNoZWNrYm94IiwidHlwZSIsIm5hbWUiLCJjaGVja2VkIiwiaXRlbVN0YXR1cyIsImFwcGVuZENoaWxkIiwib3V0cHV0RWxlbWVudERhdGUiLCJpdGVtQ29tcGxldGVkRHQiLCJoaWRkZW5JZCIsInZhbHVlIiwiaWQiLCJidXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0IiwiY3JlYXRlVGV4dE5vZGUiLCJtYXJnaW5MZWZ0Iiwic29ydGFibGUiLCJpdGVtcyIsInVwZGF0ZSIsImV2ZW50IiwidWkiLCJyZWFkQ2FyZERhdGEiLCJkaXNhYmxlU2VsZWN0aW9uIiwic2VsZWN0b3JtYWluaXRlbXMiLCJyZWFkTWFpbkVsZW1lbnRzIiwicHJpbWFyeWl0ZW1zIiwiY2F0Y2giLCJtc2ciLCJjb25zb2xlIiwibG9nIiwicmVhZENhcmRFbGVtZW50c0RhdGEiLCJjdXJyZW50IiwicGFyZW50IiwiZ2V0IiwiaGFzQ2hpbGROb2RlcyIsImNhcmREYXRhbG9jYWwiLCJteWpzb25sb2NhbCIsImNoaWxkQ2FyZEJvZHlQYXJlbnRFbGVtZW50IiwicGFyZW50Tm9kZSIsImNoaWxkQ2FyZEJvZHlFbGVtZW50IiwiY2hpbGROb2RlcyIsImNoaWxkc0RpdiIsInVsRWxlbWVudCIsImNoaWxkcmVuIiwibGlFbGVtZW50cyIsImpzb25EYXRhbG9jYWwiLCJkYXRhSXRlbXMiLCJpc0VtcHR5T2JqZWN0IiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInB1c2giLCJ1cGRhdGVDYXJkRGF0YSIsInJlYWRNYWluRWxlbWVudHNEYXRhIiwicHJpbWFyeURpdkVsZW1lbnRzIiwiY2FyZERhdGEiLCJteWpzb24iLCJsaXN0cyIsImNhcmRFbGVtZW50cyIsImNhcmRCb2R5RWxlbWVudHMiLCJjaGlsZENhcmRCb2R5RWxlbWVudHMiLCJqc29uRGF0YSIsImRlbGV0ZUNhcmREYXRhIiwibGVuZ3RoIiwic2F2ZURhdGEiLCJkaWFsb2dJbXBsIiwiZGlhbG9nIiwiZm9ybSIsIkl0ZW1TdGF0dXMiLCJwYXJlbnREaXYiLCJ1bEl0ZW1zIiwiYWRkSXRlbXNUb0NhcmQiLCJyZWFkRWxlbWVudHMiLCJnZXRFbGVtZW50QnlJZCIsImF1dG9PcGVuIiwiaGVpZ2h0IiwibW9kYWwiLCJidXR0b25zIiwiQ2FuY2VsIiwiY2xvc2UiLCJyZXNldCIsIm9uIiwidmFsIiwibGFiZWwiLCJzZWxlY3Rvcml0ZW1zIiwicmVtb3ZlIiwiZGVsZXRlQ3VycmVudENhcmQiLCJmaW5kIiwicHJldmVudERlZmF1bHQiLCJyZWFkRWxlbWVudHNEYXRhIiwiaXRlbXNEaWxvZ0RpdiIsInVsRWxlbWVudHMiLCJlbXB0eSIsImdldEFsbENhcmRzRGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYWpheCIsInVybCIsImNvbnRlbnRUeXBlIiwiZG9uZSIsImZhaWwiLCJhbHdheXMiLCJzYXZlTW9kYWxEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImRlbGV0ZURhdGEiLCJyZXNvbHZlZFByb21pc2VzQXJyYXkiLCJhbGwiLCJ1cGRhdGVDYXJkc0RhdGEiXSwi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ZTtBQUNuQkMsb0JBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FrRSxtQkFBT3BFLEdBQVA7QUFDSCxTQVZELEVBVUcwRSxNQVZILENBVVUsVUFBVTFFLEdBQVYsRUFBZTtBQUNyQkMsb0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0gsU0FaRDtBQWFILEtBZE0sQ0FBUDtBQWVILENBaEJEOztBQWtCQSxJQUFJc0IsaUJBQWlCLFNBQVN5RCxlQUFULENBQXlCbEcsRUFBekIsRUFBNkI0QyxRQUE3QixFQUF1QztBQUN4RCxXQUFPLElBQUl1QyxPQUFKLENBQVksVUFBVUMsT0FBVixFQUFtQkMsTUFBbkIsRUFBMkI7QUFDMUM1SCxVQUFFNkgsSUFBRixDQUFPO0FBQ0gvRixrQkFBTSxLQURIO0FBRUhnRyxpQkFBSyxpQ0FBaUN2RixFQUZuQztBQUdId0YseUJBQWEsa0JBSFY7QUFJSHhHLGtCQUFNNkcsS0FBS0MsU0FBTCxDQUFlbEQsUUFBZjtBQUpILFNBQVAsRUFLRzZDLElBTEgsQ0FLUSxVQUFVekcsSUFBVixFQUFnQjtBQUNwQmtDLG9CQUFRQyxHQUFSLENBQVksU0FBWjtBQUNBaUUsb0JBQVFwRyxJQUFSO0FBQ0gsU0FSRCxFQVFHMEcsSUFSSCxDQVFRLFVBQVV6RSxHQUFWLEVBQWU7QUFDbkJDLG9CQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBa0UsbUJBQU9wRSxHQUFQO0FBQ0gsU0FYRCxFQVdHMEUsTUFYSCxDQVdVLFVBQVUxRSxHQUFWLEVBQWU7QUFDckJDLG9CQUFRQyxHQUFSLENBQVksUUFBWjtBQUNILFNBYkQ7QUFlSCxLQWhCTSxDQUFQO0FBa0JILENBbkJEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgY2FyZHNEYXRhLCBzYXZlRGF0YSwgZGVsZXRlQ2FyZERhdGEsIHVwZGF0ZUNhcmREYXRhLCBkZWxldGVDdXJyZW50Q2FyZCB9IGZyb20gXCIuL3NlcnZpY2UuanNcIjtcclxuXHJcblxyXG52YXIgb25sb2FkID0gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgY2FyZHNEYXRhKCkudGhlbihmdW5jdGlvbiAoYWxsQ2FyZHNEYXRhKSB7XHJcbiAgICAgICAgdmFyIG1haW5QcmltYXJ5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmltYXJ5XCIpO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpIGluIGFsbENhcmRzRGF0YSkge1xyXG4gICAgICAgICAgICB2YXIgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjYXJkRGl2LmNsYXNzTmFtZSArPSAnY2FyZCBkcmFnem9uZXMgY29sLW1kLTMnO1xyXG4gICAgICAgICAgICBjYXJkRGl2LnN0eWxlLm1hcmdpbiA9IFwiNXB4IDVweCA1cHggNXB4XCI7XHJcbiAgICAgICAgICAgIHZhciBjYXJkQm9keURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjYXJkQm9keURpdi5jbGFzc05hbWUgKz0gJ2NhcmQtYm9keSc7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5RGl2LnN0eWxlLnBhZGRpbmcgPSBcIjAuNXJlbVwiO1xyXG4gICAgICAgICAgICB2YXIgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgICAgICAgICAgY2FyZFRpdGxlLmNsYXNzTmFtZSArPSBcImNhcmQtdGl0bGUgYmctc3VjY2VzcyB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIFwiXHJcbiAgICAgICAgICAgIGNhcmRUaXRsZS5pbm5lckhUTUwgPSBhbGxDYXJkc0RhdGFbaV0udGl0bGU7XHJcbiAgICAgICAgICAgIHZhciBtYWluVWxJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgICAgICAgICAgbWFpblVsSXRlbXMuY2xhc3NOYW1lICs9IFwic2VsZWN0b3JtYWluXCI7XHJcbiAgICAgICAgICAgIG1haW5VbEl0ZW1zLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCIwXCI7XHJcbiAgICAgICAgICAgIHZhciBjYXJkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgY2FyZFRleHQuY2xhc3NOYW1lICs9IFwiY2FyZC10ZXh0XCI7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogaW4gYWxsQ2FyZHNEYXRhW2ldLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBsaUl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICAgICAgbGlJdGVtMS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgdmFyIG91dHB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3V0cHV0XCIpXHJcbiAgICAgICAgICAgICAgICBvdXRwdXRFbGVtZW50LmlubmVySFRNTCA9IGFsbENhcmRzRGF0YVtpXS5kYXRhW2pdLml0ZW1OYW1lO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0RWxlbWVudC5zdHlsZS53aWR0aCA9IFwiNjUlXCI7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tib3gubmFtZSA9IFwic2xjdFtdXCI7XHJcbiAgICAgICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gYWxsQ2FyZHNEYXRhW2ldLmRhdGFbal0uaXRlbVN0YXR1cztcclxuICAgICAgICAgICAgICAgIGNoZWNrYm94LnN0eWxlLndpZHRoID0gXCIxMCVcIjtcclxuICAgICAgICAgICAgICAgIGxpSXRlbTEuYXBwZW5kQ2hpbGQob3V0cHV0RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBsaUl0ZW0xLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuICAgICAgICAgICAgICAgIHZhciBvdXRwdXRFbGVtZW50RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvdXRwdXRcIik7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXRFbGVtZW50RGF0ZS5pbm5lckhUTUwgPSBhbGxDYXJkc0RhdGFbaV0uZGF0YVtqXS5pdGVtQ29tcGxldGVkRHQ7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXRFbGVtZW50RGF0ZS5zdHlsZS53aWR0aCA9IFwiMjUlXCI7XHJcbiAgICAgICAgICAgICAgICBsaUl0ZW0xLmFwcGVuZENoaWxkKG91dHB1dEVsZW1lbnREYXRlKTtcclxuICAgICAgICAgICAgICAgIG1haW5VbEl0ZW1zLmFwcGVuZENoaWxkKGxpSXRlbTEpO1xyXG4gICAgICAgICAgICAgICAgY2FyZFRleHQuYXBwZW5kQ2hpbGQobWFpblVsSXRlbXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhcmRCb2R5RGl2LmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5RGl2LmFwcGVuZENoaWxkKGNhcmRUZXh0KTtcclxuICAgICAgICAgICAgdmFyIGhpZGRlbklkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICBoaWRkZW5JZC50eXBlID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgaGlkZGVuSWQubmFtZSA9IFwiaGlkZGVuSWRcIjtcclxuICAgICAgICAgICAgaGlkZGVuSWQudmFsdWUgPSBhbGxDYXJkc0RhdGFbaV0uaWQ7XHJcbiAgICAgICAgICAgIGNhcmRCb2R5RGl2LmFwcGVuZENoaWxkKGhpZGRlbklkKTtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgICAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgIHZhciB0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJEZWxldGVcIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcInJlbW92ZVwiO1xyXG4gICAgICAgICAgICBidXR0b24uc3R5bGUubWFyZ2luTGVmdCA9IFwiNDAlXCI7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZCh0KTtcclxuICAgICAgICAgICAgY2FyZEJvZHlEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoY2FyZEJvZHlEaXYpO1xyXG5cclxuICAgICAgICAgICAgbWFpblByaW1hcnlEaXYuYXBwZW5kQ2hpbGQoY2FyZERpdik7XHJcbiAgICAgICAgICAgICQoXCIuc2VsZWN0b3JtYWluXCIpLnNvcnRhYmxlKHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBcIj4gbGlcIixcclxuICAgICAgICAgICAgICAgIC8vIGNvbm5lY3RXaXRoOiBcIi5zZWxlY3Rvcm1haW5cIixcclxuICAgICAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRDYXJkRGF0YSgkKHRoaXMpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB9KS5kaXNhYmxlU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHZhciBzZWxlY3Rvcm1haW5pdGVtcyA9ICQoXCIuc2VsZWN0b3JtYWluXCIpLnNvcnRhYmxlKFwib3B0aW9uXCIsIFwiaXRlbXNcIik7XHJcbiAgICAgICAgICAgICQoXCIuc2VsZWN0b3JtYWluXCIpLnNvcnRhYmxlKFwib3B0aW9uXCIsIFwiaXRlbXNcIiwgXCI+IGxpXCIpO1xyXG4gICAgICAgICAgICAkKFwiI3ByaW1hcnlcIikuc29ydGFibGUoe1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFwiPiBkaXZcIixcclxuICAgICAgICAgICAgICAgIC8vY29ubmVjdFdpdGg6IFwiI3ByaW1hcnlcIixcclxuICAgICAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRNYWluRWxlbWVudHMoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB9KS5kaXNhYmxlU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHZhciBwcmltYXJ5aXRlbXMgPSAkKFwiI3ByaW1hcnlcIikuc29ydGFibGUoXCJvcHRpb25cIiwgXCJpdGVtc1wiKTtcclxuICAgICAgICAgICAgJChcIiNwcmltYXJ5XCIpLnNvcnRhYmxlKFwib3B0aW9uXCIsIFwiaXRlbXNcIiwgXCI+IGRpdlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAobXNnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG52YXIgcmVhZENhcmREYXRhID0gZnVuY3Rpb24gcmVhZENhcmRFbGVtZW50c0RhdGEoY3VycmVudCkge1xyXG4gICAgaWYgKGN1cnJlbnQucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuZ2V0KDApLmhhc0NoaWxkTm9kZXMpIHtcclxuXHJcbiAgICAgICAgdmFyIGNhcmREYXRhbG9jYWwgPSB7fSwgbXlqc29ubG9jYWwgPSBbXTtcclxuICAgICAgICB2YXIgY2hpbGRDYXJkQm9keVBhcmVudEVsZW1lbnQgPSBjdXJyZW50LnBhcmVudCgpLnBhcmVudCgpLmdldCgwKS5wYXJlbnROb2RlO1xyXG4gICAgICAgIHZhciBjaGlsZENhcmRCb2R5RWxlbWVudCA9IGNoaWxkQ2FyZEJvZHlQYXJlbnRFbGVtZW50LmNoaWxkTm9kZXM7XHJcbiAgICAgICAgdmFyIGNoaWxkc0RpdiA9IGNoaWxkQ2FyZEJvZHlFbGVtZW50WzBdLmNoaWxkTm9kZXM7XHJcblxyXG4gICAgICAgIGNhcmREYXRhbG9jYWxbXCJ0aXRsZVwiXSA9IGNoaWxkc0RpdlswXS5pbm5lckhUTUw7XHJcblxyXG4gICAgICAgIHZhciB1bEVsZW1lbnQgPSBjaGlsZHNEaXZbMV0uY2hpbGRyZW47XHJcbiAgICAgICAgaWYgKHVsRWxlbWVudFswXS5oYXNDaGlsZE5vZGVzKSB7XHJcbiAgICAgICAgICAgIHZhciBsaUVsZW1lbnRzID0gdWxFbGVtZW50WzBdLmNoaWxkTm9kZXM7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogaW4gbGlFbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpRWxlbWVudHNbal0uaGFzQ2hpbGROb2Rlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBqc29uRGF0YWxvY2FsID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFJdGVtcyA9IGxpRWxlbWVudHNbal0uY2hpbGROb2RlcztcclxuICAgICAgICAgICAgICAgICAgICBqc29uRGF0YWxvY2FsW1wiaXRlbU5hbWVcIl0gPSBkYXRhSXRlbXNbMF0uaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgICAgIGpzb25EYXRhbG9jYWxbXCJpdGVtU3RhdHVzXCJdID0gZGF0YUl0ZW1zWzFdLmNoZWNrZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFJdGVtc1sxXS5jaGVja2VkICYmICQuaXNFbXB0eU9iamVjdChkYXRhSXRlbXNbMl0uaW5uZXJIVE1MKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqc29uRGF0YWxvY2FsW1wiaXRlbUNvbXBsZXRlZER0XCJdID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKTs7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAganNvbkRhdGFsb2NhbFtcIml0ZW1Db21wbGV0ZWREdFwiXSA9IGRhdGFJdGVtc1syXS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBteWpzb25sb2NhbC5wdXNoKGpzb25EYXRhbG9jYWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhcmREYXRhbG9jYWxbXCJkYXRhXCJdID0gbXlqc29ubG9jYWw7XHJcbiAgICAgICAgdXBkYXRlQ2FyZERhdGEoY2hpbGRzRGl2WzJdLnZhbHVlLCBjYXJkRGF0YWxvY2FsKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coKTtcclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAobXNnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59XHJcbnZhciByZWFkTWFpbkVsZW1lbnRzID0gZnVuY3Rpb24gcmVhZE1haW5FbGVtZW50c0RhdGEoKSB7XHJcbiAgICB2YXIgcHJpbWFyeURpdkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmltYXJ5XCIpO1xyXG4gICAgdmFyIGNhcmREYXRhID0ge30sIG15anNvbiA9IFtdO1xyXG4gICAgdmFyIGxpc3RzID0gW107XHJcbiAgICBpZiAocHJpbWFyeURpdkVsZW1lbnRzLmhhc0NoaWxkTm9kZXMpIHtcclxuICAgICAgICB2YXIgY2FyZEVsZW1lbnRzID0gcHJpbWFyeURpdkVsZW1lbnRzLmNoaWxkcmVuO1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gY2FyZEVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgIGNhcmREYXRhID0ge307XHJcbiAgICAgICAgICAgIGlmIChjYXJkRWxlbWVudHNbaV0uaGFzQ2hpbGROb2Rlcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNhcmRCb2R5RWxlbWVudHMgPSBjYXJkRWxlbWVudHNbaV0uY2hpbGRyZW47XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FyZEJvZHlFbGVtZW50c1swXS5oYXNDaGlsZE5vZGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkQ2FyZEJvZHlFbGVtZW50cyA9IGNhcmRCb2R5RWxlbWVudHNbMF0uY2hpbGRyZW47XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZERhdGFbXCJ0aXRsZVwiXSA9IGNoaWxkQ2FyZEJvZHlFbGVtZW50c1swXS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVsRWxlbWVudCA9IGNoaWxkQ2FyZEJvZHlFbGVtZW50c1sxXS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodWxFbGVtZW50WzBdLmhhc0NoaWxkTm9kZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpRWxlbWVudHMgPSB1bEVsZW1lbnRbMF0uY2hpbGROb2RlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiBsaUVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGlFbGVtZW50c1tqXS5oYXNDaGlsZE5vZGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGpzb25EYXRhID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFJdGVtcyA9IGxpRWxlbWVudHNbal0uY2hpbGROb2RlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uRGF0YVtcIml0ZW1OYW1lXCJdID0gZGF0YUl0ZW1zWzBdLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uRGF0YVtcIml0ZW1TdGF0dXNcIl0gPSBkYXRhSXRlbXNbMV0uY2hlY2tlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YUl0ZW1zWzFdLmNoZWNrZWQgJiYgJC5pc0VtcHR5T2JqZWN0KGRhdGFJdGVtc1syXS5pbm5lckhUTUwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzb25EYXRhW1wiaXRlbUNvbXBsZXRlZER0XCJdID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKTs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganNvbkRhdGFbXCJpdGVtQ29tcGxldGVkRHRcIl0gPSBkYXRhSXRlbXNbMl0uaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlqc29uLnB1c2goanNvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmREYXRhW1wiZGF0YVwiXSA9IG15anNvbjtcclxuICAgICAgICAgICAgICAgICAgICBteWpzb24gPSBbXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoISgkLmlzRW1wdHlPYmplY3QoY2FyZERhdGEpKSkge1xyXG4gICAgICAgICAgICAgICAgbGlzdHMucHVzaChjYXJkRGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkZWxldGVDYXJkRGF0YShsaXN0cy5sZW5ndGgpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gbGlzdHMpIHtcclxuICAgICAgICAgICAgc2F2ZURhdGEobGlzdHNbaV0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKG1zZykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKG1zZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbnZhciBkaWFsb2dJbXBsID0gJChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZGlhbG9nLCBmb3JtLFxyXG4gICAgICAgIGl0ZW1OYW1lID0gJChcIiNpdGVtTmFtZVwiKSxcclxuICAgICAgICBJdGVtU3RhdHVzID0gJChcIiNJdGVtU3RhdHVzXCIpLFxyXG4gICAgICAgIGpzb25EYXRhID0ge30sXHJcbiAgICAgICAgY2FyZERhdGEgPSB7fSxcclxuICAgICAgICBteWpzb24gPSBbXTtcclxuICAgIHZhciBwYXJlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2l0ZW1zRGlsb2dcIik7XHJcbiAgICB2YXIgdWxJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIHVsSXRlbXMuY2xhc3NOYW1lICs9IFwic2VsZWN0b3JcIjtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRJdGVtc1RvQ2FyZCgpIHtcclxuICAgICAgICByZWFkRWxlbWVudHMoKTtcclxuXHJcbiAgICAgICAgdmFyIG1haW5QcmltYXJ5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmltYXJ5XCIpO1xyXG5cclxuICAgICAgICB2YXIgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNhcmREaXYuY2xhc3NOYW1lICs9ICdjYXJkIGRyYWd6b25lcyBjb2wtbWQtMyc7XHJcbiAgICAgICAgY2FyZERpdi5zdHlsZS5tYXJnaW4gPSBcIjVweCA1cHggNXB4IDVweFwiO1xyXG5cclxuICAgICAgICB2YXIgY2FyZEJvZHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjYXJkQm9keURpdi5jbGFzc05hbWUgKz0gJ2NhcmQtYm9keSc7XHJcbiAgICAgICAgY2FyZEJvZHlEaXYuc3R5bGUucGFkZGluZyA9IFwiMC41cmVtXCI7XHJcbiAgICAgICAgdmFyIGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICAgICAgY2FyZFRpdGxlLmNsYXNzTmFtZSArPSBcImNhcmQtdGl0bGUgYmctc3VjY2VzcyB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIFwiOyAgICAgICAgXHJcbiAgICAgICAgY2FyZFRpdGxlLmlubmVySFRNTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZHRpdGxlXCIpLnZhbHVlO1xyXG4gICAgICAgIGNhcmREYXRhW1widGl0bGVcIl0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmR0aXRsZVwiKS52YWx1ZTs7XHJcbiAgICAgICAgdmFyIG1haW5VbEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgICAgIG1haW5VbEl0ZW1zLmNsYXNzTmFtZSArPSBcInNlbGVjdG9ybWFpblwiO1xyXG4gICAgICAgIG1haW5VbEl0ZW1zLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCIwXCI7XHJcbiAgICAgICAgdmFyIGNhcmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNhcmRUZXh0LmNsYXNzTmFtZSArPSBcImNhcmQtdGV4dFwiO1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gbXlqc29uKSB7XHJcbiAgICAgICAgICAgIHZhciBsaUl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICBsaUl0ZW0xLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIHZhciBvdXRwdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm91dHB1dFwiKVxyXG4gICAgICAgICAgICBvdXRwdXRFbGVtZW50LmlubmVySFRNTCA9IG15anNvbltpXVtcIml0ZW1OYW1lXCJdO1xyXG4gICAgICAgICAgICBvdXRwdXRFbGVtZW50LnN0eWxlLndpZHRoID0gXCI2NSVcIjtcclxuICAgICAgICAgICAgdmFyIGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG5cclxuICAgICAgICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgICAgICAgY2hlY2tib3gubmFtZSA9IFwic2xjdFtdXCI7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBteWpzb25baV1bXCJpdGVtU3RhdHVzXCJdO1xyXG4gICAgICAgICAgICBjaGVja2JveC5zdHlsZS53aWR0aCA9IFwiMTAlXCI7XHJcbiAgICAgICAgICAgIGxpSXRlbTEuYXBwZW5kQ2hpbGQob3V0cHV0RWxlbWVudCk7XHJcbiAgICAgICAgICAgIGxpSXRlbTEuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG4gICAgICAgICAgICB2YXIgb3V0cHV0RWxlbWVudERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3V0cHV0XCIpO1xyXG4gICAgICAgICAgICBvdXRwdXRFbGVtZW50RGF0ZS5pbm5lckhUTUwgPSBteWpzb25baV1bXCJpdGVtQ29tcGxldGVkRHRcIl07XHJcbiAgICAgICAgICAgIG91dHB1dEVsZW1lbnREYXRlLnN0eWxlLndpZHRoID0gXCIyNSVcIjtcclxuICAgICAgICAgICAgbGlJdGVtMS5hcHBlbmRDaGlsZChvdXRwdXRFbGVtZW50RGF0ZSk7XHJcblxyXG4gICAgICAgICAgICBtYWluVWxJdGVtcy5hcHBlbmRDaGlsZChsaUl0ZW0xKTtcclxuICAgICAgICAgICAgY2FyZFRleHQuYXBwZW5kQ2hpbGQobWFpblVsSXRlbXMpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FyZEJvZHlEaXYuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcclxuICAgICAgICBjYXJkQm9keURpdi5hcHBlbmRDaGlsZChjYXJkVGV4dCk7XHJcbiAgICAgICAgY2FyZERhdGFbXCJkYXRhXCJdID0gbXlqc29uO1xyXG4gICAgICAgIHNhdmVEYXRhKGNhcmREYXRhKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHZhciBoaWRkZW5JZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgaGlkZGVuSWQudHlwZSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgIGhpZGRlbklkLm5hbWUgPSBcImhpZGRlbklkXCI7XHJcbiAgICAgICAgICAgIGhpZGRlbklkLnZhbHVlID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgY2FyZEJvZHlEaXYuYXBwZW5kQ2hpbGQoaGlkZGVuSWQpO1xyXG4gICAgICAgICAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmRCb2R5RGl2KTtcclxuICAgICAgICAgICAgbWFpblByaW1hcnlEaXYuYXBwZW5kQ2hpbGQoY2FyZERpdik7XHJcbiAgICAgICAgICAgICQoXCIuc2VsZWN0b3JtYWluXCIpLnNvcnRhYmxlKHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBcIj4gbGlcIixcclxuICAgICAgICAgICAgICAgIC8vY29ubmVjdFdpdGg6IFwiLnNlbGVjdG9ybWFpblwiLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZENhcmREYXRhKCQodGhpcykpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSkuZGlzYWJsZVNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICB2YXIgc2VsZWN0b3JtYWluaXRlbXMgPSAkKFwiLnNlbGVjdG9ybWFpblwiKS5zb3J0YWJsZShcIm9wdGlvblwiLCBcIml0ZW1zXCIpO1xyXG4gICAgICAgICAgICAkKFwiLnNlbGVjdG9ybWFpblwiKS5zb3J0YWJsZShcIm9wdGlvblwiLCBcIml0ZW1zXCIsIFwiPiBsaVwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAkKFwiI3ByaW1hcnlcIikuc29ydGFibGUoe1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFwiPiBkaXZcIixcclxuICAgICAgICAgICAgICAgIC8vY29ubmVjdFdpdGg6IFwiI3ByaW1hcnlcIixcclxuICAgICAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRNYWluRWxlbWVudHMoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB9KS5kaXNhYmxlU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHZhciBwcmltYXJ5aXRlbXMgPSAkKFwiI3ByaW1hcnlcIikuc29ydGFibGUoXCJvcHRpb25cIiwgXCJpdGVtc1wiKTtcclxuICAgICAgICAgICAgJChcIiNwcmltYXJ5XCIpLnNvcnRhYmxlKFwib3B0aW9uXCIsIFwiaXRlbXNcIiwgXCI+IGRpdlwiKTtcclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAobXNnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbXlqc29uID0gW107XHJcbiAgICAgICAgZGlhbG9nLmRpYWxvZyhcImNsb3NlXCIpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgZGlhbG9nID0gJChcIiNkaWFsb2ctZm9ybVwiKS5kaWFsb2coe1xyXG4gICAgICAgIGF1dG9PcGVuOiBmYWxzZSxcclxuICAgICAgICBoZWlnaHQ6IDQwMCxcclxuICAgICAgICB3aWR0aDogMzUwLFxyXG4gICAgICAgIG1vZGFsOiB0cnVlLFxyXG4gICAgICAgIGJ1dHRvbnM6IHtcclxuICAgICAgICAgICAgXCJzdWJtaXRcIjogYWRkSXRlbXNUb0NhcmQsXHJcbiAgICAgICAgICAgIENhbmNlbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLmRpYWxvZyhcImNsb3NlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbG9zZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmb3JtWzBdLnJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoXCIjYWRkLWl0ZW1cIikuYnV0dG9uKCkub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICB2YXIgbGlJdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBsaUl0ZW0xLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgdmFyIG91dHB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3V0cHV0XCIpXHJcbiAgICAgICAgb3V0cHV0RWxlbWVudC5pbm5lckhUTUwgPSBpdGVtTmFtZS52YWwoKTtcclxuICAgICAgICBvdXRwdXRFbGVtZW50LnN0eWxlLndpZHRoID0gXCI2NSVcIjtcclxuICAgICAgICB2YXIgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcblxyXG4gICAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgICAgY2hlY2tib3gubmFtZSA9IFwic2xjdFtdXCI7XHJcbiAgICAgICAgY2hlY2tib3guc3R5bGUud2lkdGggPSBcIjEwJVwiO1xyXG4gICAgICAgIGxpSXRlbTEuYXBwZW5kQ2hpbGQob3V0cHV0RWxlbWVudCk7XHJcbiAgICAgICAgbGlJdGVtMS5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgIGxhYmVsLmNsYXNzTmFtZSA9IFwiZGVsZXRlXCI7XHJcbiAgICAgICAgbGFiZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICB2YXIgdCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwieFwiKTtcclxuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZCh0KTtcclxuICAgICAgICBsaUl0ZW0xLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgICAgICB1bEl0ZW1zLmFwcGVuZENoaWxkKGxpSXRlbTEpO1xyXG4gICAgICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZCh1bEl0ZW1zKTtcclxuICAgICAgICAkKFwiLnNlbGVjdG9yXCIpLnNvcnRhYmxlKHtcclxuICAgICAgICAgICAgaXRlbXM6IFwiPiBsaVwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHNlbGVjdG9yaXRlbXMgPSAkKFwiLnNlbGVjdG9yXCIpLnNvcnRhYmxlKFwib3B0aW9uXCIsIFwiaXRlbXNcIik7XHJcbiAgICAgICAgJChcIi5zZWxlY3RvclwiKS5zb3J0YWJsZShcIm9wdGlvblwiLCBcIml0ZW1zXCIsIFwiPiBsaVwiKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwibGFiZWwuZGVsZXRlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcImJ1dHRvbi5yZW1vdmVcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB2YXIgY2hpbGRDYXJkQm9keVBhcmVudEVsZW1lbnQgPSAkKHRoaXMpLnBhcmVudCgpLmdldCgwKS5wYXJlbnROb2RlO1xyXG4gICAgICAgIHZhciBjaGlsZENhcmRCb2R5RWxlbWVudCA9IGNoaWxkQ2FyZEJvZHlQYXJlbnRFbGVtZW50LmNoaWxkTm9kZXM7XHJcbiAgICAgICAgdmFyIGNoaWxkc0RpdiA9IGNoaWxkQ2FyZEJvZHlFbGVtZW50WzBdLmNoaWxkTm9kZXM7XHJcbiAgICAgICAgZGVsZXRlQ3VycmVudENhcmQoY2hpbGRzRGl2WzJdLnZhbHVlKS50aGVuKGZ1bmN0aW9uICgpIHsgICAgICAgICAgIFxyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChtc2cpIHsgY29uc29sZS5sb2cobXNnKSB9KTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9ybSA9IGRpYWxvZy5maW5kKFwiZm9ybVwiKS5vbihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGFkZEl0ZW1zVG9DYXJkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgcmVhZEVsZW1lbnRzID0gZnVuY3Rpb24gcmVhZEVsZW1lbnRzRGF0YSgpIHtcclxuICAgICAgICB2YXIgaXRlbXNEaWxvZ0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaXRlbXNEaWxvZ1wiKTtcclxuICAgICAgICBpZiAoaXRlbXNEaWxvZ0Rpdi5oYXNDaGlsZE5vZGVzKSB7XHJcbiAgICAgICAgICAgIHZhciB1bEVsZW1lbnRzID0gaXRlbXNEaWxvZ0Rpdi5jaGlsZE5vZGVzO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqIGluIHVsRWxlbWVudHMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1bEVsZW1lbnRzW2pdLmhhc0NoaWxkTm9kZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGlFbGVtZW50cyA9IHVsRWxlbWVudHNbal0uY2hpbGROb2RlcztcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIGxpRWxlbWVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpRWxlbWVudHNbaV0uaGFzQ2hpbGROb2Rlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganNvbkRhdGEgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhSXRlbXMgPSBsaUVsZW1lbnRzW2ldLmNoaWxkTm9kZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uRGF0YVtcIml0ZW1OYW1lXCJdID0gZGF0YUl0ZW1zWzBdLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzb25EYXRhW1wiaXRlbVN0YXR1c1wiXSA9IGRhdGFJdGVtc1sxXS5jaGVja2VkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFJdGVtc1sxXS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganNvbkRhdGFbXCJpdGVtQ29tcGxldGVkRHRcIl0gPSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc29uRGF0YVtcIml0ZW1Db21wbGV0ZWREdFwiXSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteWpzb24ucHVzaChqc29uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICQoXCIjY3JlYXRlLUxpc3RcIikuYnV0dG9uKCkub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbXlqc29uID0gW107XHJcbiAgICAgICAgdWxJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgICAgICB1bEl0ZW1zLmNsYXNzTmFtZSArPSBcInNlbGVjdG9yXCI7XHJcbiAgICAgICAgdWxJdGVtcy5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiMFwiO1xyXG4gICAgICAgIHVsSXRlbXMuaWQgPSBcImRpbG9nVUxJdGVtc1wiO1xyXG4gICAgICAgICQoXCIuc2VsZWN0b3JcIikuZW1wdHkoKTtcclxuICAgICAgICBkaWFsb2cuZGlhbG9nKFwib3BlblwiKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgb25sb2FkLCBkaWFsb2dJbXBsIH0iLCJ2YXIgY2FyZHNEYXRhID0gZnVuY3Rpb24gZ2V0QWxsQ2FyZHNEYXRhKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xpc3RzJyxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTVUNDRVNTJyk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAobXNnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGQUlMJyk7XHJcbiAgICAgICAgICAgIHJlamVjdChtc2cpO1xyXG4gICAgICAgIH0pLmFsd2F5cyhmdW5jdGlvbiAobXNnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBTFdBWVMnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbnZhciBzYXZlRGF0YSA9IGZ1bmN0aW9uIHNhdmVNb2RhbERhdGEoY2FyZERhdGEpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvbGlzdHMnLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShjYXJkRGF0YSksXHJcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU1VDQ0VTUycpO1xyXG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKG1zZykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRkFJTCcpO1xyXG4gICAgICAgICAgICByZWplY3QobXNnKTtcclxuICAgICAgICB9KS5hbHdheXMoZnVuY3Rpb24gKG1zZykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQUxXQVlTJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxudmFyIGRlbGV0ZUNhcmREYXRhID0gZnVuY3Rpb24gZGVsZXRlRGF0YShsZW5ndGgpIHtcclxuICAgIHZhciBpO1xyXG4gICAgdmFyIHJlc29sdmVkUHJvbWlzZXNBcnJheSA9IFtdO1xyXG4gICAgZm9yIChpID0gMTsgaSA8PSBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHJlc29sdmVkUHJvbWlzZXNBcnJheS5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9saXN0cy8nICsgaSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NVQ0NFU1MnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uIChtc2cpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRkFJTCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChtc2cpO1xyXG4gICAgICAgICAgICAgICAgfSkuYWx3YXlzKGZ1bmN0aW9uIChtc2cpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQUxXQVlTJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLmFsbChyZXNvbHZlZFByb21pc2VzQXJyYXkpO1xyXG5cclxufVxyXG5cclxudmFyIGRlbGV0ZUN1cnJlbnRDYXJkID0gZnVuY3Rpb24gZGVsZXRlQ3VycmVudENhcmQoaWQpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9saXN0cy8nICsgaWQsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTVUNDRVNTJyk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uIChtc2cpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZBSUwnKTtcclxuICAgICAgICAgICAgcmVqZWN0KG1zZyk7XHJcbiAgICAgICAgfSkuYWx3YXlzKGZ1bmN0aW9uIChtc2cpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FMV0FZUycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbnZhciB1cGRhdGVDYXJkRGF0YSA9IGZ1bmN0aW9uIHVwZGF0ZUNhcmRzRGF0YShpZCwgY2FyZERhdGEpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogJ1BVVCcsXHJcbiAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9saXN0cy8nICsgaWQsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGNhcmREYXRhKSxcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTVUNDRVNTJyk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAobXNnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGQUlMJyk7XHJcbiAgICAgICAgICAgIHJlamVjdChtc2cpO1xyXG4gICAgICAgIH0pLmFsd2F5cyhmdW5jdGlvbiAobXNnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBTFdBWVMnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IGNhcmRzRGF0YSwgc2F2ZURhdGEsIGRlbGV0ZUNhcmREYXRhLCBkZWxldGVDdXJyZW50Q2FyZCwgdXBkYXRlQ2FyZERhdGEgfTsiXSwic291cmNlUm9vdCI6IiJ9