function displayData() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var birthdate = document.getElementById("birthdate").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var city = document.getElementById("city").value;
    var address = document.getElementById("address").value;

    var languages = [];
    var languageCheckboxes = document.querySelectorAll('input[name="languages"]:checked');
    for (var i = 0; i < languageCheckboxes.length; i++) {
        languages.push(languageCheckboxes[i].value);
    }
    var tableHtml = "<h2>Ваші дані:</h2>";
    tableHtml += "<table border='1'>";
    tableHtml += "<tr><td>Ім'я</td><td>" + firstName + "</td></tr>";
    tableHtml += "<tr><td>Прізвище</td><td>" + lastName + "</td></tr>";
    tableHtml += "<tr><td>Дата народження</td><td>" + birthdate + "</td></tr>";
    tableHtml += "<tr><td>Стать</td><td>" + (gender ? gender.value : "") + "</td></tr>";
    tableHtml += "<tr><td>Місто</td><td>" + city + "</td></tr>";
    tableHtml += "<tr><td>Адреса</td><td>" + address + "</td></tr>";
    tableHtml += "<tr><td>Мови</td><td>" + languages.join(", ") + "</td></tr>";
    tableHtml += "</table>";

    document.getElementById("tableContainer").innerHTML = tableHtml;
}
