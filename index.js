var test= ['<img src="./images/angry.png" alt="angry">', '<img src="./images/mad.png" alt="mad">', '<img src="./images/lost.png" alt="lost">', '<img src="./images/sad.png" alt="sad">', '<img src="./images/shock.png" alt="shock">', '<img src="./images/happy.png" alt="happy">']
document.getElementById("velgRange1").oninput = function () {
    var img = document.getElementById("velgRange1").value;

    if (img > 42) {
        document.getElementById("imge").innerHTML= test[0]
        console.log(test[0]);
    } if (img > 84) {
        console.log(test[1]);
        document.getElementById("imge").innerHTML= test[1]
        console.log(test[1]);
    } if (img > 126) {
        console.log(test[2]);
        document.getElementById("imge").innerHTML= test[2]
        console.log(test[2]);
    } if (img > 168) {
        console.log(test[3]);
        document.getElementById("imge").innerHTML= test[3]
        console.log(test[3]);
    } if (img > 210) {
        console.log(test[4]);
        document.getElementById("imge").innerHTML= test[4]
        console.log(test[4]);
    } if (img > 254) {
        console.log(test[5]);
        document.getElementById("imge").innerHTML= test[5]
        console.log(test[5]);
    }

};