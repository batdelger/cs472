window.onload = function () {
    const divParent = document.getElementById('divParent');
    
    divParent.addEventListener('click', function (e) {
        console.log(`Click Event handled by ${this.tagName}#${this.id}`);
        console.log(`But actual clicked element is ${e.target.tagName}#${e.target.id}`);
    });

    // document.addEventListener('click', (e) => {
    //      console.log(`Click Event handled by ${this.tagName}#${this.id}`);
    //      console.log(`But actual clicked element is ${e.target.tagName}#${e.target.id}`);
    // });
}



// const myLink = document.getElementById('myLink');
    
    // myLink.addEventListener('click', (event) => {
    //     console.log('myLink is clicked #1');

    //     event.preventDefault();
    //     event.stopPropagation();
    //     event.returnValue = false; // = event.preventDefault();
    //     return false; // does nothing here.
    // });

    // myLink.onclick = (event) => {
    //     // event.preventDefault();
    //     // event.stopPropagation();
    //     console.log('myLink is clicked #2');
    //     return false; // = event.preventDefault();
    // };