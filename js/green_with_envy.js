/*
 *
 * Take some part of the page and make it green
 *
 */

document.onreadystatechange = function() {
    if (document.readyState === 'complete') {
        var newParagraph = document.createElement('p');
        newParagraph.textContent = "welp";
        newParagraph.id = "newParagraph";
        document.getElementsByTagName('body')[0].appendChild(newParagraph);
        document.getElementsByTagName('body')[0].style.backgroundColor = "green";
    }
}();
