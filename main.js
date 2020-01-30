//input class elements

var nineEL = document.getElementById(`9AM`)
var tenEL = document.getElementById(`10AM`)
var elevenEL = document.getElementById(`11AM`)
var twelveEL = document.getElementById(`12PM`)
var oneEL = document.getElementById(`1PM`)
var twoEL = document.getElementById(`2PM`)
var threeEL = document.getElementById(`3PM`)
var fourEL = document.getElementById(`4PM`)
var fiveEL = document.getElementById(`5PM`)

//save button elements

var nineSaveEl = document.getElementById(`9save`)
var tenSaveEl = document.getElementById(`10save`)
var elevenSaveEl = document.getElementById(`11save`)
var twelveSaveEl = document.getElementById(`12save`)
var oneSaveEl = document.getElementById(`1save`)
var twoSaveEl = document.getElementById(`2save`)
var threeSaveEl = document.getElementById(`3save`)
var fourSaveEl = document.getElementById(`4save`)
var fiveSaveEl = document.getElementById(`5save`)

//setting the schedule values

nineEL.value = localStorage.getItem(`nine`)
tenEL.value = localStorage.getItem(`ten`)
elevenEL.value = localStorage.getItem(`eleven`)
twelveEL.value = localStorage.getItem(`twelve`)
oneEL.value = localStorage.getItem(`one`)
twoEL.value = localStorage.getItem(`two`)
threeEL.value = localStorage.getItem(`three`)
fourEL.value = localStorage.getItem(`four`)
fiveEL.value = localStorage.getItem(`five`)

//making buttons save to local storage

nineSaveEl.addEventListener(`click`, function () {
    localStorage.setItem(`nine`, nineEL.value)
})

tenSaveEl.addEventListener(`click`, function () {
    localStorage.setItem(`ten`, tenEL.value)
})

elevenSaveEl.addEventListener(`click`, function () {
    localStorage.setItem(`eleven`, elevenEL.value)
})

twelveSaveEl.addEventListener(`click`, function () {
    localStorage.setItem(`twelve`, twelveEL.value)
})

oneSaveEl.addEventListener(`click`, function () {
    localStorage.setItem(`one`, oneEL.value)
})

twoSaveEl.addEventListener(`click`, function () {
    localStorage.setItem(`two`, twoEL.value)
})

threeSaveEl.addEventListener(`click`, function () {
    localStorage.setItem(`three`, threeEL.value)
})

fourSaveEl.addEventListener(`click`, function () {
    localStorage.setItem(`four`, fourEL.value)
})

fiveSaveEl.addEventListener(`click`, function () {
    localStorage.setItem(`five`, fiveEL.value)
})