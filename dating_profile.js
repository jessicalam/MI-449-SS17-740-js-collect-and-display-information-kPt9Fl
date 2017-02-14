var firstnameInput = document.getElementById('firstname')
var lastnameInput = document.getElementById('lastname')
var descriptionInput = document.getElementById('description')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var paragraphInput = document.getElementById('generated-paragraph').getElementById('htmled-paragraph')
/* var codedparagraphInput = document.getElementById('htmled-paragraph') */

var updateParagraphInput = function () {
  var firstname = firstnameInput.value
  var lastname = lastnameInput.value
  var description = descriptionInput.value
  var email = emailInput.value
  var phone = phoneInput.value

  paragraphInput.innerHTML.textContent =
    '<h1>Hi, my name is ' + firstname + ' ' + lastname + '!</h1>' +
    '<p>\n' + description + '\n</p>' +
    'If you\'re interested in a date, you can email me at ' + '<a href="mailto:"' + email + '"" target=_blank">' + email + '</a>' +
    ' or give me a call at ' + '<a href="tel:"' + phone + '" target="_blank">' + phone + '</a>'

  /* codedparagraphInput.textContent =
    '<h1>Hi, my name is ' + firstname + ' ' + lastname + '!</h1>' +
    '<p>\n' + description + '\n</p>' +
    'If you\'re interested in a date, you can email me at ' + '<a href="mailto:"' + email + '"" target=_blank">' + email + '</a>' +
    ' or give me a call at ' + '<a href="tel:"' + phone + '" target="_blank">' + phone + '</a>' */
}
firstnameInput.addEventListener('input', updateParagraphInput)
lastnameInput.addEventListener('input', updateParagraphInput)
descriptionInput.addEventListener('input', updateParagraphInput)
emailInput.addEventListener('input', updateParagraphInput)
phoneInput.addEventListener('input', updateParagraphInput)
