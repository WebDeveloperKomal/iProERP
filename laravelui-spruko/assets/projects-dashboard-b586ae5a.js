var e = document.getElementById("projectAnalysis");
if (e !== null) {
    e.innerHTML = "";
    var t = { series: [{ name: "Projects", type: "column", data: [1.8, 2.5, 2.5, 1.5, 2.5, 2.8, 3.8] }, { name: "Tasks", type: "column", data: [1.1, 2.2, 3.1, 4, 4.1, 4.9, 6.5] }, { name: "Revenue", type: "line", data: [20, 29, 37, 35, 44, 43, 50] }], chart: { toolbar: { show: !1 }, height: 300, type: "line", stacked: !1, fontFamily: "Poppins, Arial, sans-serif" }, grid: { borderColor: "#f5f4f4", strokeDashArray: 3 }, dataLabels: { enabled: !1 }, title: { text: void 0 }, xaxis: { categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] }, yaxis: [{ show: !0, axisTicks: { show: !0 }, axisBorder: { show: !1, color: "#4eb6d0" }, labels: { style: { colors: "#4eb6d0" } }, title: { text: void 0 }, tooltip: { enabled: !0 } }, { seriesName: "Projects", opposite: !0, axisTicks: { show: !0 }, axisBorder: { show: !1 }, labels: { style: { colors: "#00E396" } }, title: { text: void 0 } }, { seriesName: "Revenue", opposite: !0, axisTicks: { show: !0 }, axisBorder: { show: !1 }, labels: { show: !1 }, title: { text: void 0 } }], tooltip: { enabled: !0 }, legend: { show: !0, position: "top", offsetX: 40, fontSize: "13px", fontWeight: "normal", labels: { colors: "#acb1b1" }, markers: { width: 10, height: 10 } }, stroke: { width: [0, 0, 1.5], curve: "straight", dashArray: [0, 0, 0] }, plotOptions: { bar: { columnWidth: "35%", borderRadius: 3 } }, colors: ["rgb(132, 90, 223)", "#ededed", "#23b7e5"] },
        i = new ApexCharts(document.querySelector("#projectAnalysis"), t);
    i.render()
}
var e = document.getElementById("user1");
if (e !== null) {
    e.innerHTML = "";
    var s = { chart: { type: "line", height: 20, width: 80, sparkline: { enabled: !0 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 0, left: 0, blur: 3, color: "#000", opacity: .1 } }, grid: { show: !1, xaxis: { lines: { show: !1 } }, yaxis: { lines: { show: !1 } } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { gradient: { enabled: !1 } }, series: [{ name: "Value", data: [54, 38, 56, 24, 65] }], yaxis: { min: 0, show: !1 }, xaxis: { show: !1, axisTicks: { show: !1 }, axisBorder: { show: !1 } }, yaxis: { axisBorder: { show: !1 } }, colors: ["#09ad95"] },
        s = new ApexCharts(document.querySelector("#user1"), s);
    s.render()
}
var e = document.getElementById("user2");
if (e !== null) {
    e.innerHTML = "";
    var a = { chart: { type: "line", height: 20, width: 80, sparkline: { enabled: !0 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 0, left: 0, blur: 3, color: "#000", opacity: .1 } }, grid: { show: !1, xaxis: { lines: { show: !1 } }, yaxis: { lines: { show: !1 } } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { gradient: { enabled: !1 } }, series: [{ name: "Value", data: [24, 54, 15, 42, 16] }], yaxis: { min: 0, show: !1 }, xaxis: { show: !1, axisTicks: { show: !1 }, axisBorder: { show: !1 } }, yaxis: { axisBorder: { show: !1 } }, colors: ["#fb6b27"] },
        a = new ApexCharts(document.querySelector("#user2"), a);
    a.render()
}
var e = document.getElementById("user3");
if (e !== null) {
    e.innerHTML = "";
    var r = { chart: { type: "line", height: 20, width: 80, sparkline: { enabled: !0 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 0, left: 0, blur: 3, color: "#000", opacity: .1 } }, grid: { show: !1, xaxis: { lines: { show: !1 } }, yaxis: { lines: { show: !1 } } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { gradient: { enabled: !1 } }, series: [{ name: "Value", data: [15, 42, 16, 44, 24] }], yaxis: { min: 0, show: !1 }, xaxis: { show: !1, axisTicks: { show: !1 }, axisBorder: { show: !1 } }, yaxis: { axisBorder: { show: !1 } }, colors: ["#1170e4"] },
        r = new ApexCharts(document.querySelector("#user3"), r);
    r.render()
}
var e = document.getElementById("user4");
if (e !== null) {
    e.innerHTML = "";
    var l = { chart: { type: "line", height: 20, width: 80, sparkline: { enabled: !0 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 0, left: 0, blur: 3, color: "#000", opacity: .1 } }, grid: { show: !1, xaxis: { lines: { show: !1 } }, yaxis: { lines: { show: !1 } } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { gradient: { enabled: !1 } }, series: [{ name: "Value", data: [54, 38, 56, 24, 65] }], yaxis: { min: 0, show: !1 }, xaxis: { show: !1, axisTicks: { show: !1 }, axisBorder: { show: !1 } }, yaxis: { axisBorder: { show: !1 } }, colors: ["#e82646"] },
        l = new ApexCharts(document.querySelector("#user4"), l);
    l.render()
}
var e = document.getElementById("user5");
if (e !== null) {
    e.innerHTML = "";
    var o = { chart: { type: "line", height: 20, width: 80, sparkline: { enabled: !0 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 0, left: 0, blur: 3, color: "#000", opacity: .1 } }, grid: { show: !1, xaxis: { lines: { show: !1 } }, yaxis: { lines: { show: !1 } } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { gradient: { enabled: !1 } }, series: [{ name: "Value", data: [15, 42, 16, 44, 24] }], yaxis: { min: 0, show: !1 }, xaxis: { show: !1, axisTicks: { show: !1 }, axisBorder: { show: !1 } }, yaxis: { axisBorder: { show: !1 } }, colors: ["#f7b731"] },
        o = new ApexCharts(document.querySelector("#user5"), o);
    o.render()
}