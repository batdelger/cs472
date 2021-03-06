$(function () {
    $('#mainForm').on('submit', function (e) {
        try {
            e.preventDefault();
            let productNumber = $('#inputProductNumber').val();
            let name = $('#inputProductName').val();
            let unitPrice = $('#inputUnitPrice').val();
            let quantity = $('#inputQuantity').val();
            let supplier = $('#inputSupplier').val();
            let suppliedDate = $('#inputSuppliedDate').val();

            let $h = $(`<h3>`).text('Form Data');
            let $ul = $(`<ul>`);

            $ul.append(`<li>Product Number : ${productNumber}</li>`)
                .append(`<li>Name           : ${name}</li>`)
                .append(`<li>Unit Price     : ${unitPrice}</li>`)
                .append(`<li>Quantity       : ${quantity}</li>`)
                .append(`<li>Supplier       : ${supplier}</li>`)
                .append(`<li>Supplied Date  : ${suppliedDate.toLocaleString()}</li>`);

            $('#result')
                .empty()
                .append('<hr/>')
                .append($h)
                .append($ul);
        }
        catch (e) {
            console.error(e);
        }

    });
})