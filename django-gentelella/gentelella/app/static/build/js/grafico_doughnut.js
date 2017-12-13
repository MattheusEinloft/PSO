$(function(){

    var ip1 = document.getElementById("ip1Var").name;
    var ip2 = document.getElementById("ip2Var").name;
    var ip3 = document.getElementById("ip3Var").name;
    var ip4 = document.getElementById("ip4Var").name;
    var ip5 = document.getElementById("ip5Var").name;
    var ip6 = document.getElementById("ip6Var").name;
    var ip7 = document.getElementById("ip7Var").name;
    var ip8 = document.getElementById("ip8Var").name;
    var ip9 = document.getElementById("ip9Var").name;
    var ip10 = document.getElementById("ip10Var").name;

    var ip1Num = document.getElementById("ip1Var").value;
    var ip2Num = document.getElementById("ip2Var").value;
    var ip3Num = document.getElementById("ip3Var").value;
    var ip4Num = document.getElementById("ip4Var").value;
    var ip5Num = document.getElementById("ip5Var").value;
    var ip6Num = document.getElementById("ip6Var").value;
    var ip7Num = document.getElementById("ip7Var").value;
    var ip8Num = document.getElementById("ip8Var").value;
    var ip9Num = document.getElementById("ip9Var").value;
    var ip10Num = document.getElementById("ip10Var").value;

    var port1 = document.getElementById("port1Var").name;
    var port2 = document.getElementById("port2Var").name;
    var port3 = document.getElementById("port3Var").name;
    var port4 = document.getElementById("port4Var").name;
    var port5 = document.getElementById("port5Var").name;
    var port6 = document.getElementById("port6Var").name;
    var port7 = document.getElementById("port7Var").name;
    var port8 = document.getElementById("port8Var").name;
    var port9 = document.getElementById("port9Var").name;
    var port10 = document.getElementById("port10Var").name;

    var port1Quant = document.getElementById("port1Var").value;
    var port2Quant = document.getElementById("port2Var").value;
    var port3Quant = document.getElementById("port3Var").value;
    var port4Quant = document.getElementById("port4Var").value;
    var port5Quant = document.getElementById("port5Var").value;
    var port6Quant = document.getElementById("port6Var").value;
    var port7Quant = document.getElementById("port7Var").value;
    var port8Quant = document.getElementById("port8Var").value;
    var port9Quant = document.getElementById("port9Var").value;
    var port10Quant = document.getElementById("port10Var").value;

    //get the doughnut chart canvas
    var ctx1 = $("#doughnut-chartcanvas-1");
    var ctx2 = $("#doughnut-chartcanvas-2");

    //doughnut chart data
    var data1 = {
        labels: [ip1, ip2, ip3, ip4, ip5, ip6, ip7, ip8, ip9, ip10],
        datasets: [
            {
                label: "Top 10 Ips Fonte",
                data: [ip1Num, ip2Num, ip3Num, ip4Num, ip5Num, ip6Num, ip7Num, ip8Num, ip9Num, ip10Num],
                backgroundColor: [
                    "#3498DB",
                    "#1ABB9C",
                    "#9B59B6",
                    "#9CC2CB",
                    "#E74C3C",
                    "#34495E",
                    "#FEE04D",
                    "#F17286",
                    "#F97A25",
                    "#8B5F1D"
                ],
                borderColor: [
                    "#FFFFFF",
                    "#FFFFFF",
                    "#FFFFFF",
                    "#FFFFFF",
                    "#FFFFFF",
                    "#FFFFFF",
                    "#FFFFFF",
                    "#FFFFFF",
                    "#FFFFFF",
                    "#FFFFFF"
                ],
                borderWidth: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            }
        ]
    };

    //doughnut chart data
    var data2 = {
        labels: [port1, port2, port3, port4, port5, port6, port7, port8, port9, port10],
        datasets: [
            {
                label: "Top 10 Portas",
                data: [port1Quant, port2Quant, port3Quant, port4Quant, port5Quant, port6Quant, port7Quant, port8Quant, port9Quant, port10Quant],
                backgroundColor: [
                    "#3498DB",
                    "#1ABB9C",
                    "#9B59B6",
                    "#9CC2CB",
                    "#E74C3C",
                    "#34495E",
                    "#FEE04D",
                    "#F17286",
                    "#F97A25",
                    "#8B5F1D"
                ],
                borderColor: [
                    "#FFFFFF",
                    "#FFFFFF",
                    "#FFFFFF",
                    "#FFFFFF",
                    "#FFFFFF",
                    "#FFFFFF",
                    "#FFFFFF",
                    "#FFFFFF",
                    "#FFFFFF",
                    "#FFFFFF"
                ],
                borderWidth: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            }
        ]
    };

    //options
    var options = {
        responsive: true,
        title: {
            display: false,
            position: "top",
            text: "Doughnut Chart",
            fontSize: 18,
            fontColor: "#111"
        },
        legend: {
            display: false,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        }
    };

    //create Chart class object
    var chart1 = new Chart(ctx1, {
        type: "doughnut",
        data: data1,
        options: options
    });

    //create Chart class object
    var chart2 = new Chart(ctx2, {
        type: "doughnut",
        data: data2,
        options: options
    });
});
