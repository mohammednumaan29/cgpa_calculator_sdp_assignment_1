function addRow() {
    const tableBody = document.getElementById("tableBody");

    const row = document.createElement("tr");

    row.innerHTML = `
        <td><input type="text" placeholder="Subject Name"></td>
        <td><input type="number" min="1" class="credit"></td>
        <td>
            <select class="grade">
                <option value="10">O</option>
                <option value="9">A+</option>
                <option value="8">A</option>
                <option value="7">B+</option>
                <option value="6">B</option>
                <option value="5">C</option>
                <option value="0">F</option>
            </select>
        </td>
        <td><button onclick="removeRow(this)">Delete</button></td>
    `;

    tableBody.appendChild(row);
}

function removeRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

function calculateCGPA() {
    const credits = document.querySelectorAll(".credit");
    const grades = document.querySelectorAll(".grade");

    let totalCredits = 0;
    let totalPoints = 0;

    for (let i = 0; i < credits.length; i++) {
        const credit = parseFloat(credits[i].value);
        const grade = parseFloat(grades[i].value);

        if (!isNaN(credit)) {
            totalCredits += credit;
            totalPoints += credit * grade;
        }
    }

    let cgpa = 0;

    if (totalCredits > 0) {
        cgpa = totalPoints / totalCredits;
    }

    document.getElementById("cgpa").textContent = cgpa.toFixed(2);
}
