//alert('Hello');
function ageInDays(){
    var age = prompt('Enter your year of birth');
    var convertedAge = (2020 - age) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are '+convertedAge+' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flexBoxResult').appendChild(h1);
}
function reset(){
    document.getElementById('ageInDays').remove();
}