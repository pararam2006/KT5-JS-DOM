"use strict";
document.getElementById("cardForm").addEventListener("input", function(event) {
    const cardNumber = document.getElementById("cardNumber").value;
    const cardHolder = document.getElementById("cardHolder").value;
    const expiryMonth = document.getElementById("expiryMonth").value;
    const expiryYear = document.getElementById("expiryYear").value;

    document.getElementById("previewCardNumber").textContent = cardNumber.replace(/\d{4}(?=.)/g, "$& ");
    document.getElementById("previewCardHolder").textContent = cardHolder;
    document.getElementById("previewExpiryDate").textContent = `${expiryMonth}/${expiryYear}`;
});
// Проверка номера карты
document.getElementById("cardNumber").addEventListener("input", function(event) {
    let input = event.target.value;
    let numbersOnly = input.replace(/\D/g, "");
    let cardNumber = numbersOnly.substring(0, 16);
    let formattedNumber = cardNumber.match(/.{1,4}/g);
    if (formattedNumber) {
        formattedNumber = formattedNumber.join(" ");
    }
    event.target.value = formattedNumber;
});
// Проверка месяца
document.getElementById("expiryMonth").addEventListener("input", function(event) {
    let expiryMonth = event.target.value;
    if(expiryMonth < 10) {event.target.value = `0${expiryMonth}`}
});
document.getElementById("bankName").addEventListener("change", function() {
    document.getElementById("bankLogo").src = this.value;
});
document.getElementById("paymentSystem").addEventListener("change", function() {
    document.getElementById("paymentSystemLogo").src = this.value;
});
// Добавление новых данных в таблицу
document.getElementById("cardForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const bankLogo = document.getElementById("bankLogo").src;
    const paymentSystemLogo = document.getElementById("paymentSystemLogo").src;
    const cardNumber = document.getElementById("cardNumber").value;
    const cardHolder = document.getElementById("cardHolder").value;
    const expiryMonth = document.getElementById("expiryMonth").value;
    const expiryYear = document.getElementById("expiryYear").value;
    if (cardNumber.replace(/\s/g, "").length !== 16 || cardNumber.length !== 19) {
        alert("Введите полный номер карты, состоящий из 16 цифр");
        return;
    }
    const row = `<tr>
        <td class="align-middle"><img src="${bankLogo}" id="bankLogo"></td>
        <td class="align-middle"><img src="${paymentSystemLogo}" id="paymentSystemLogo"></td>
        <td class="align-middle">${cardNumber}</td>
        <td class="align-middle">${cardHolder}</td>
        <td class="align-middle">${expiryMonth}/${expiryYear}</td>
    </tr>`;
    document.getElementById("cardData").innerHTML += row;
    document.getElementById("cardForm").reset();
    document.getElementById("bankLogo").src = "";
    document.getElementById("previewCardNumber").textContent = "";
    document.getElementById("previewCardHolder").textContent = "";
    document.getElementById("previewExpiryDate").textContent = "";
    document.getElementById("paymentSystemLogo").src = "";
});
