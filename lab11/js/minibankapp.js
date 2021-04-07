/**
 * minibankapp.js
 */
"use strict";
$(function () {
    const allData = [{
        accountNo: '01-980-0001',
        customerName: 'James H. Karvill',
        accountType: 'Savings'
    },
    {
        accountNo: '01-980-0002',
        customerName: 'Anna Hernandez-Diaz',
        accountType: 'Checking',
    }];

    let filter = null; // Function(row: Account) => return boolean;

    const filteredData = () => {
        if (filter) {
            return allData.filter(filter);
        }
        return allData;
    }

    $("#formNewAccount").submit(event => {
        event.preventDefault();
        const $txtAccountNo = $("#txtAccountNo");
        const $txtCustomerName = $("#txtCustomerName");
        const $ddlAccountType = $("#ddlAccountType");
        const strAccountNo = $txtAccountNo.val();
        const strCustomerName = $txtCustomerName.val();
        const strAccountType = $ddlAccountType.val();
        addNewAccountDataRow(strAccountNo, strCustomerName, strAccountType);
        $txtAccountNo.val("");
        $txtCustomerName.val("");
        $ddlAccountType.val("");
        $txtAccountNo.focus();
    });

    $('#chkSavingsOnly').change(function () {
        if ($(this).prop('checked')) {
            filter = row => row.accountType === 'Savings';
        }
        else {
            filter = null;
        }
        displayTableData();
    });

    const addNewAccountDataRow = function (accountNo, customerName, accountType) {
        allData.push({
            accountNo,
            customerName,
            accountType
        });
        displayTableData();
    }

    const displayTableData = () => {
        const data = filteredData();
        const $tbody = $("#tblAccounts").find('tbody');
        $tbody
            .empty()
            .append(data.map((row, i) =>
                $('<tr>')
                    .append($('<td>').text(`${i + 1}.`))
                    .append($('<td>').text(`${row.accountNo}`))
                    .append($('<td>').text(`${row.customerName}`))
                    .append($('<td>').text(`${row.accountType}`))));

        $tbody.find('tr:even').addClass('table-even-row');
    }

    displayTableData();
});