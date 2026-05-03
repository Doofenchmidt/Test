function openModal(src) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalImg").src = src;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeModal();
    }
});
function showCode(type) {
    let code = "";

    if (type === "html") {
        code = `<h1>Hello World</h1>
<p>Ini contoh HTML</p>`;
    }

    if (type === "css") {
        code = `body {
    background: black;
    color: white;
}`;
    }

    if (type === "js") {
        code = `function hello(){
    console.log("Hello World");
}`;
    }

    document.getElementById("codeContent").textContent = code;
}