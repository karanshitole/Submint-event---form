const cl = console.log;

const studForm = document.getElementById("studForm")
const studentInfo = document.getElementById("studentInfo ")
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const email = document.getElementById("email")
const contact = document.getElementById("contact")
const address =document.getElementById("address")


const templating =(arr) =>{
    let result='';
    arr.forEach((std, i) => {
        result += ` <tr>
                    <td>${i+1}<td>
                    <td>${std.fname}<td>
                    <td>${std.lname}<td>
                    <td>${std.email}<td>
                    <td>${std.contact}<td>
                    <td>${std.Address}<td>
                    </tr>
                     ` 
    })
    student.innerHTML = result;
}
const studSubmitForm =(eve) =>{
    eve.preventDefault();
    let studArr =[];

    let studObj = {
       fname: fname.value,
       lname: lname.value,
       email: email.value,
       contact: contact.value,
       address:address.value
    }
    studArr.push(studObj);
    cl(studArr);
    templating(studArr)
    eve.target.reset();
}

studForm.addEventListener("submit", studSubmitForm);








