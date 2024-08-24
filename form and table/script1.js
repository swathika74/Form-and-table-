document.addEventListener("DOMContentLoaded", function() {
    let currentEditRow = null;

    window.addOrUpdateRow = function() {
        const name = document.getElementById("name").value;
        const designation = document.getElementById("designation").value;
        const phone = document.getElementById("Phonenumber").value;

       if (name === "" || designation === "" || phone === "") {
            alert("All fields are required!");
            return;
        }


        const table = document.getElementById("employeeTableBody");

        if (currentEditRow) {
            // Update the row
            currentEditRow.cells[0].innerHTML = name;
            currentEditRow.cells[1].innerHTML = designation;
            currentEditRow.cells[2].innerHTML = phone;
            currentEditRow = null;
            document.getElementById("button").innerText = "Add";
        } else {
            // Add a new row
            const newRow = table.insertRow();
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            const cell4 = newRow.insertCell(3);

            cell1.innerHTML = name;
            cell2.innerHTML = designation;
            cell3.innerHTML = phone;
            cell4.innerHTML = '<button onclick="editRow(this)">Edit</button> <button onclick="deleteRow(this)">Delete</button>';
        }

        document.getElementById("form").reset();
    };

    window.editRow = function(button) {
        currentEditRow = button.parentNode.parentNode;
        document.getElementById("name").value = currentEditRow.cells[0].innerHTML;
        document.getElementById("designation").value = currentEditRow.cells[1].innerHTML;
        document.getElementById("Phonenumber").value = currentEditRow.cells[2].innerHTML;
        document.getElementById("button").innerText="Update";
    };

    window.deleteRow = function(button) {
        const row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    };
});
