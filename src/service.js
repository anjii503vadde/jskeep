var cardsData = function getAllCardsData() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/lists',
            contentType: 'application/json',
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

}

var saveData = function saveModalData(cardData) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/lists',
            contentType: 'application/json',
            data: JSON.stringify(cardData),
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
}

var deleteCardData = function deleteData(length) {
    var i;
    var resolvedPromisesArray = [];
    for (i = 1; i <= length; i++) {
        resolvedPromisesArray.push(
            new Promise(function (resolve, reject) {
                $.ajax({
                    type: 'DELETE',
                    url: 'http://localhost:3000/lists/' + i,
                    contentType: 'application/json',
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

}

var deleteCurrentCard = function deleteCurrentCard(id) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: 'DELETE',
            url: 'http://localhost:3000/lists/' + id,
            contentType: 'application/json',
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
}

var updateCardData = function updateCardsData(id, cardData) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: 'PUT',
            url: 'http://localhost:3000/lists/' + id,
            contentType: 'application/json',
            data: JSON.stringify(cardData),
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

}

export { cardsData, saveData, deleteCardData, deleteCurrentCard, updateCardData };