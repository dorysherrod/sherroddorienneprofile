function submit_by_tag() {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
if (validation()) // Calling validation function
{
var x = document.getElementsByTagName("form");
x[0].submit(); //form submission
alert(" Name : " + name + " \n Email : " + email + " \n Form Tag : <form>\n\n Form Submitted Successfully......");
}
}
var x =var x = document.createElement("INPUT");
x.setAttribute("type", "submit");
