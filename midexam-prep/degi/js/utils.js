var batFormUtils = (function () {
    const getInputValue = function (ctrl) {
        let data;

        switch (ctrl.type) {
            case "date":
                data = ctrl.valueAsDate;
                break;
            case "number":
                data = ctrl.valueAsNumber;
                break;
            case "checkbox":
                data = ctrl.checked ? 'YES' : 'NO';
                break;
            case "radio":
                data = [...ctrl.form.querySelectorAll(`input[name=${ctrl.name}]`)].find(c => c.checked).value;
                break;
            default:
                data = ctrl.value;
                break;
        }
        return data;
    }

    const getSelectValue = function (ctrl) {
        return ctrl.value;
    }

    const getControlValue = function (ctrl) {
        switch (ctrl.tagName) {
            case 'INPUT':
                return getInputValue(ctrl);
            case 'SELECT':
                return getSelectValue(ctrl);
        }

        return null;
    }

    const getFormData = function (form) {
        const controls = [...form.querySelectorAll('input,select')];

        const formData = {};

        controls.forEach(ctrl => {
            formData[ctrl.name] = getControlValue(ctrl);
        });
        return formData;
    }

    return {
        getFormData
    };
})();

var batTableUtils = (function () {
    const getMetaData = function (table) {
        const columns = [...table.querySelectorAll('thead th')].map(th => ({
            name: th.getAttribute('bat-bind'),
            type: th.getAttribute('bat-bind-type') || 'string'
        }))
        return { columns };
    }

    const getEmptyRow = function (colCount) {
        const tr = document.createElement('tr');
        const td = tr.insertCell(-1);
        td.className = "text-center text-muted";
        td.setAttribute('colspan', colCount);
        td.innerText = "No results...";
        return tr;
    }

    const formatValue = function (col, value) {
        if (value != null) {
            switch (col.type) {
                case 'date':
                    return value.toLocaleDateString()
                default:
                    return value;
            }
        }
        return '';
    }

    const populateData = function (tbody, metaData, data) {
        data.forEach(row => {
            const tr = tbody.insertRow(-1);
            metaData.columns.forEach(col => {
                const td = tr.insertCell(-1);
                // if (col.type === "number") {
                //     td.className = "text-right";
                // }
                td.innerText = formatValue(col, row[col.name]);
            });
        });
    }

    const fillDataTable = function (table, data) {
        const old_tbody = table.querySelector('tbody');
        var new_tbody = document.createElement('tbody');
        old_tbody.parentNode.replaceChild(new_tbody, old_tbody);
        const tableMeta = getMetaData(table);

        if (data.length === 0) {
            new_tbody.appendChild(getEmptyRow(4));
        }
        else {
            populateData(new_tbody, tableMeta, data);
        }
    }

    return {
        fillDataTable
    };
})();
