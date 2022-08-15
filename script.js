function validate() {
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var father_name = document.getElementById("FatherName").value;
    var phone = document.getElementById("Phone").value;
    var city = document.getElementById("City").value;
    var age = document.getElementById("Age").value;
    var Study = document.getElementById("study").value;
    var pwd = document.getElementById("password").value;
    if (name == null || name == "") {
        alert("Please enter the Name.");
        return false;
    }
    if (pwd == null || pwd == "") {
        alert("Please enter the Password.");
        return false;
    }
    if (email == null || email == "") {
        alert("Please enter the Email.");
        return false;
    }
    if (father_name == null || father_name == "") {
        alert("Please enter Father Name.");
        return false;
    }
    if (phone == null || phone == "") {
        alert("Please enter the Phone Number.");
        return false;
    }
    if (city == null || pcity == "") {
        alert("Please enter the City of Residence.");
        return false;
    }
    if (Study == null || Study == "") {
        alert("Please enter the Qualification.");
        return false;
    }
    if (age == null || age == "") {
        alert("Please enter the Age.");
        return false;
    } 
    document.write('Login successful');
    
} 