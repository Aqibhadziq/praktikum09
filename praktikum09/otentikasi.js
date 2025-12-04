function login() {
    const userBenar = "aqib";
    const passBenar = "gantenk";

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === userBenar && password === passBenar) {
        alert("Login sukses!");

        let halamanBaru = window.open("", "_self");
        halamanBaru.document.write("<h1>Login Sukses</h1>");
    } else {
        alert("Login gagal! Username atau password salah.");
    }
}