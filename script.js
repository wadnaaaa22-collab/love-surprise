function checkPassword(){

    const password = document.getElementById("password").value;

    if(password === "2000"){

        window.location.href = "welcome.html";

    }else{

        document.getElementById("error").innerText = "รหัสไม่ถูกนะ 😢";

    }

}
