var typed = new Typed(".typing",{
    strings:["Web Designer","web developer","Web Deployer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

function sendMail() {
    var datas = {
        from_name: document.getElementById("username").value,
        email: document.getElementById("email").value,
        sub: document.getElementById("subject").value,
        message: document.getElementById("message").value 
    }
    emailjs.send("service_vkoedv3","template_fkpujyc",datas);
    alert("Your message was successfully sended..!");
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
}