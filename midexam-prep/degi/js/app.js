window.onload = function () {
    let data = [
        {
            field1: 'field 1',
            field2: 'field 2',
            field3: 10.5,
            field4: new Date(),
        }
    ];

    const formPatient = document.getElementById('formPatient');
    const tableMain = document.getElementById('tableMain');

    formPatient.addEventListener('submit', function (e) {
        e.preventDefault();
        const obj = batFormUtils.getFormData(this);
        console.log(obj);
    })

    batTableUtils.fillDataTable(tableMain, data);
}