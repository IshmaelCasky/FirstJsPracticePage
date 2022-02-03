function play(e) {
    var audio = document.getElementById("audio");
    audio.play();
}

function verify(e) {
    var id = document.getElementsByTagName("button");
    var header = document.getElementById("header");
    if (id[0].value == "Yes") {
        id[0].remove();
        header.remove();
        var ctn = document.getElementById("container");
        var hd = document.createElement("h1");
        hd.innerHTML = "Get Trolled";
        ctn.appendChild(hd);
        var img = document.createElement("img");
        img.src = "Trollface_non-free.png";
        ctn.appendChild(img);
        play();
    } else {
        header.innerHTML = "Are you sure ?";
        var btn = id[0];
        btn.value = "Yes";
    }
}