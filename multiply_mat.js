function myFunction() {
    var in1 = document.getElementById("inp1").value
    var t1 = in1.split("#");
    var in2 = document.getElementById("inp2").value
    var t2 = in2.split("#");

    if (t1[0] != parseInt(t1[0]) || t1[1] != parseInt(t1[1]) || t1[2] != parseInt(t1[2]) || t2[0] != parseInt(t2[0]) || t2[1] != parseInt(t2[1]) || t2[2] != parseInt(t2[2]) || t1.length > 3) {
        alert("Please give valid input... e.g.-3#4#5")
    }
    else if (t1[0] < 1 || t1[1] < 1 || t2[0] < 1 || t2[1] < 1) {
        alert("Number of Rows and Column should be greater than 0");
    }

    else {
        var result = document.getElementById("result");
        var result_alert = document.getElementById("err_msg");
        result_alert.innerHTML = "";
        result.innerHTML = "";
        var table = "<table>";

        if (t1[0] == t2[0] && t1[1] == t2[1]) {
            var arry = [];
            let val1 = t1[2];
            let mul = 1;
            for (let i = 0; i < t1[0]; i++) {
                table += "<tr>";
                for (let j = 0; j < t1[1]; j++) {
                    arry.push((val1 * mul));
                    table += "<td>" + (val1 * mul) + "</td>";
                    val1++;
                }
                val1 = t1[2];
                mul++;
                table += "</tr>";
            }
            table += "</table>";

            table += "<table>";
            let val2 = t2[2];
            let m = 0;
            let mul2 = 1;
            for (let i = 0; i < t2[0]; i++) {
                table += "<tr>";
                for (let j = 0; j < t2[1]; j++) {
                    arry[m] = arry[m] * (val2 * mul2);
                    m++;
                    table += "<td>" + (val2 * mul2) + "</td>";
                    val2++;
                }
                mul2++;
                val2 = t2[2];
                table += "</tr>";
            }
            table += "</table>";

            table += "<table id = 'multiply'>";
            let m1 = 0;
            for (let i = 0; i < t2[0]; i++) {
                table += "<tr>";
                for (let j = 0; j < t2[1]; j++) {
                    table += "<td>" + arry[m1] + "</td>";
                    m1++
                }
                table += "</tr>";
            }
            table += "</table>";
        }

        else {
            
            result_alert.innerHTML += "Can't generate result matrix with given inputs...";

            let val1 = t1[2];
            let mul = 1;
            for (let i = 0; i < t1[0]; i++) {
                table += "<tr>";
                for (let j = 0; j < t1[1]; j++) {
                    table += "<td>" + (val1 * mul) + "</td>";
                    val1++;
                }
                val1 = t1[2];
                mul++;
                table += "</tr>";
            }
            table += "</table>";

            table += "<table>";

            let val2 = t2[2];
            let mul2 = 1;
            for (let i = 0; i < t2[0]; i++) {
                table += "<tr>";
                for (let j = 0; j < t2[1]; j++) {
                    table += "<td>" + (val2 * mul2) + "</td>";
                    val2++;
                }
                val2 = t2[2];
                mul2++;
                table += "</tr>";
            }
            table += "</table>";
        }

        result.innerHTML += table;

        var tab = document.getElementsByTagName("table");

        for (let i = 0; i < tab.length; i++) {
            tab[i].style['margin'] = '30px';
        }

        let content = document.getElementById("multiply").getElementsByTagName("td");

        var newcolor = [];
        for (col = 0; col < (t1[0] * t1[1]); col++) {
            var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            // console.log(randomColor);
            newcolor.push(randomColor);
        }

        var c = 0;
        for (let i = 0; i < (t1[0] * t1[1]); i++) {
            if (content[i].style.backgroundColor.length > 0) {
                continue;
            }
            else {
                for (let j = i + 1; j < (t1[0] * t1[1]); j++) {

                    if ((content[i].textContent) == (content[j].textContent)) {
                        content[i].style.backgroundColor = newcolor[c];
                        content[j].style.backgroundColor = newcolor[c];
                    }
                }
                c++;
            }
        }
    }
}