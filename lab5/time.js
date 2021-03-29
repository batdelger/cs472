window.onload = function () {
    let displayDTime = function (element, dateTime) {
        let year = dateTime.getFullYear();
        let month = dateTime.getMonth() + 1;
        let day = dateTime.getDate();
        let hour = dateTime.getHours();
        let min = dateTime.getMinutes();
        let sec = dateTime.getSeconds();

        year = ("" + year).padStart(4, "0");
        month = ("" + month).padStart(2, "0");
        day = ("" + day).padStart(2, "0");
        hour = ("" + hour).padStart(2, "0");
        min = ("" + min).padStart(2, "0");
        sec = ("" + sec).padStart(2, "0");

        element.innerHTML = `${year}-${month}-${day} ${hour}:${min}:${sec}`;
    }

    let element = document.getElementById('clock');
    displayDTime(element, new Date());
    setInterval(function () {
        displayDTime(element, new Date());
    }, 1000);

}