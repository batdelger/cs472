$(function () {
    let data = [];

    const $tbody = $("#tblAccounts").find('tbody');

    const displayTableData = () => {
        // const data = filteredData();
        $tbody
            .empty()
            .append(data.map((row, i) =>
                $('<tr>')
                    .append($('<th scope="row">').text(`${i + 1}.`))
                    .append($('<td>').text(`${row.isbn}`))
                    .append($('<td>').text(`${row.title}`))
                    .append($('<td>').text(`${row.overdueFee}`))
                    .append($('<td>').text(`${row.publisher}`))
                    .append($('<td>').text(`${row.datePublished}`))));

    }

    const refreshData = function () {
        $tbody
            .empty();
        $tbody.append($(`<tr><td colspan="6" class="text-center text-info">Loading...</td></tr>`))
        fetch('https://elibraryrestapi.herokuapp.com/elibrary/api/book/list')
            .then(result => result.json())
            .then(resData => {
                data = resData;
                displayTableData();
            }).catch(error => {
                console.error(error);
            });

    }

    const $bookForm = $('#bookForm');
    $bookForm.submit((event) => {
        event.preventDefault();

        const book = {
            // "bookId": 
            "isbn": $('#inputISBN').val(),
            "title": $('#inputTitle').val(),
            "overdueFee": $('#inputOverdueFee').val(),
            "publisher": $('#inputPublisher').val(),
            "datePublished": $('#inputDatePublished').val()
        };

        $bookForm.find('fieldset').prop('disabled', true);
        fetch('https://elibraryrestapi.herokuapp.com/elibrary/api/book/add',
            {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(book),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(result => result.json())
            .then((resData) => {
                console.log(resData);
                $bookForm[0].reset();
                $('#myModal').modal('hide')
                $bookForm.find('fieldset').prop('disabled', false);
                refreshData();
            })
            .catch(error => {
                $bookForm.find('fieldset').prop('disabled', false);
                console.error(error);
            });

    });

    refreshData();
});