var Jt = Object.defineProperty;
var Nt = (e, t, r) => t in e ? Jt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var H = (e, t, r) => (Nt(e, typeof t != "symbol" ? t + "" : t, r), r);
var f = document.getElementById("crm-main");
if (f !== null) { f.innerHTML = ""; var ke = { chart: { height: 127, width: 100, type: "radialBar" }, series: [48], colors: ["rgba(255,255,255,0.9)"], plotOptions: { radialBar: { hollow: { margin: 0, size: "55%", background: "#fff" }, dataLabels: { name: { offsetY: -10, color: "#4b9bfa", fontSize: ".625rem", show: !1 }, value: { offsetY: 5, color: "#4b9bfa", fontSize: ".875rem", show: !0, fontWeight: 600 } } } }, stroke: { lineCap: "round" }, labels: ["Status"] },
        Q = new ApexCharts(document.querySelector("#crm-main"), ke);
    Q.render() }
var f = document.getElementById("crm-total-customers");
if (f !== null) { f.innerHTML = ""; var j = { chart: { type: "line", height: 40, width: 100, sparkline: { enabled: !0 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { type: "gradient", gradient: { opacityFrom: .9, opacityTo: .9, stops: [0, 98] } }, series: [{ name: "Value", data: [20, 14, 19, 10, 23, 20, 22, 9, 12] }], yaxis: { min: 0, show: !1, axisBorder: { show: !1 } }, xaxis: { show: !1, axisBorder: { show: !1 } }, tooltip: { enabled: !1 }, colors: ["rgb(132, 90, 223)"] },
        j = new ApexCharts(document.querySelector("#crm-total-customers"), j);
    j.render() }

function Yt(e) { j.updateOptions({ colors: ["rgb(" + e + ")"] }) }
var f = document.getElementById("crm-total-revenue");
if (f !== null) { f.innerHTML = ""; var re = { chart: { type: "line", height: 40, width: 100, sparkline: { enabled: !0 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { type: "gradient", gradient: { opacityFrom: .9, opacityTo: .9, stops: [0, 98] } }, series: [{ name: "Value", data: [20, 14, 20, 22, 9, 12, 19, 10, 25] }], yaxis: { min: 0, show: !1, axisBorder: { show: !1 } }, xaxis: { show: !1, axisBorder: { show: !1 } }, tooltip: { enabled: !1 }, colors: ["rgb(35, 183, 229)"] },
        re = new ApexCharts(document.querySelector("#crm-total-revenue"), re);
    re.render() }
var f = document.getElementById("crm-conversion-ratio");
if (f !== null) { f.innerHTML = ""; var oe = { chart: { type: "line", height: 40, width: 100, sparkline: { enabled: !0 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { type: "gradient", gradient: { opacityFrom: .9, opacityTo: .9, stops: [0, 98] } }, series: [{ name: "Value", data: [20, 20, 22, 9, 14, 19, 10, 25, 12] }], yaxis: { min: 0, show: !1, axisBorder: { show: !1 } }, xaxis: { show: !1, axisBorder: { show: !1 } }, tooltip: { enabled: !1 }, colors: ["rgb(38, 191, 148)"] },
        oe = new ApexCharts(document.querySelector("#crm-conversion-ratio"), oe);
    oe.render() }
var f = document.getElementById("crm-total-deals");
if (f !== null) { f.innerHTML = ""; var ae = { chart: { type: "line", height: 40, width: 100, sparkline: { enabled: !0 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { type: "gradient", gradient: { opacityFrom: .9, opacityTo: .9, stops: [0, 98] } }, series: [{ name: "Value", data: [20, 20, 22, 9, 12, 14, 19, 10, 25] }], yaxis: { min: 0, show: !1, axisBorder: { show: !1 } }, xaxis: { show: !1, axisBorder: { show: !1 } }, tooltip: { enabled: !1 }, colors: ["rgb(245, 184, 73)"] },
        ae = new ApexCharts(document.querySelector("#crm-total-deals"), ae);
    ae.render() }
var f = document.getElementById("crm-revenue-analytics");
if (f !== null) { f.innerHTML = ""; var ke = { series: [{ type: "line", name: "Profit", data: [{ x: "Jan", y: 100 }, { x: "Feb", y: 210 }, { x: "Mar", y: 180 }, { x: "Apr", y: 454 }, { x: "May", y: 230 }, { x: "Jun", y: 320 }, { x: "Jul", y: 656 }, { x: "Aug", y: 830 }, { x: "Sep", y: 350 }, { x: "Oct", y: 350 }, { x: "Nov", y: 210 }, { x: "Dec", y: 410 }] }, { type: "line", name: "Revenue", chart: { dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 5, left: 0, blur: 3, color: "#000", opacity: .1 } }, data: [{ x: "Jan", y: 180 }, { x: "Feb", y: 620 }, { x: "Mar", y: 476 }, { x: "Apr", y: 220 }, { x: "May", y: 520 }, { x: "Jun", y: 780 }, { x: "Jul", y: 435 }, { x: "Aug", y: 515 }, { x: "Sep", y: 738 }, { x: "Oct", y: 454 }, { x: "Nov", y: 525 }, { x: "Dec", y: 230 }] }, { type: "area", name: "Sales", chart: { dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 5, left: 0, blur: 3, color: "#000", opacity: .1 } }, data: [{ x: "Jan", y: 200 }, { x: "Feb", y: 530 }, { x: "Mar", y: 110 }, { x: "Apr", y: 130 }, { x: "May", y: 480 }, { x: "Jun", y: 520 }, { x: "Jul", y: 780 }, { x: "Aug", y: 435 }, { x: "Sep", y: 475 }, { x: "Oct", y: 738 }, { x: "Nov", y: 454 }, { x: "Dec", y: 480 }] }], chart: { height: 350, animations: { speed: 500 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 8, left: 0, blur: 3, color: "#000", opacity: .1 } }, colors: ["rgb(132, 90, 223)", "rgba(35, 183, 229, 0.85)", "rgba(119, 119, 142, 0.05)"], dataLabels: { enabled: !1 }, grid: { borderColor: "#f1f1f1", strokeDashArray: 3 }, stroke: { curve: "smooth", width: [2, 2, 0], dashArray: [0, 5, 0] }, xaxis: { axisTicks: { show: !1 } }, yaxis: { labels: { formatter: function(r) { return "$" + r } } }, tooltip: { y: [{ formatter: function(r) { return r !== void 0 ? "$" + r.toFixed(0) : r } }, { formatter: function(r) { return r !== void 0 ? "$" + r.toFixed(0) : r } }, { formatter: function(r) { return r !== void 0 ? r.toFixed(0) : r } }] }, legend: { show: !0, customLegendItems: ["Profit", "Revenue", "Sales"], inverseOrder: !0 }, title: { text: "Revenue Analytics with sales & profit (USD)", align: "left", style: { fontSize: ".8125rem", fontWeight: "semibold", color: "#8c9097" } }, markers: { hover: { sizeOffset: 5 } } },
        Q = new ApexCharts(document.querySelector("#crm-revenue-analytics"), ke);
    Q.render() }

function Xt(e) { Q.updateOptions({ colors: ["rgba(" + e + ", 1)", "rgba(35, 183, 229, 0.85)", "rgba(119, 119, 142, 0.05)"] }) }
var f = document.getElementById("crm-profits-earned");
if (f !== null) { f.innerHTML = ""; var _t = { series: [{ name: "Profit Earned", data: [44, 42, 57, 86, 58, 55, 70] }, { name: "Total Sales", data: [34, 22, 37, 56, 21, 35, 60] }], chart: { type: "bar", height: 180, toolbar: { show: !1 } }, grid: { borderColor: "#f1f1f1", strokeDashArray: 3 }, colors: ["rgb(132, 90, 223)", "#e4e7ed"], plotOptions: { bar: { colors: { ranges: [{ from: -100, to: -46, color: "#ebeff5" }, { from: -45, to: 0, color: "#ebeff5" }] }, columnWidth: "60%", borderRadius: 5 } }, dataLabels: { enabled: !1 }, stroke: { show: !0, width: 2, colors: void 0 }, legend: { show: !1, position: "top" }, yaxis: { title: { style: { color: "#adb5be", fontSize: "13px", fontFamily: "poppins, sans-serif", fontWeight: 600, cssClass: "apexcharts-yaxis-label" } }, labels: { formatter: function(e) { return e.toFixed(0) + "" } } }, xaxis: { type: "week", categories: ["S", "M", "T", "W", "T", "F", "S"], axisBorder: { show: !0, color: "rgba(119, 119, 142, 0.05)", offsetX: 0, offsetY: 0 }, axisTicks: { show: !0, borderType: "solid", color: "rgba(119, 119, 142, 0.05)", width: 6, offsetX: 0, offsetY: 0 }, labels: { rotate: -90 } } },
        bt = new ApexCharts(document.querySelector("#crm-profits-earned"), _t);
    bt.render() }

function jt(e) { bt.updateOptions({ colors: ["rgba(" + e + ", 1)", "#ededed"] }) }
let N;

function Vt(e) { typeof N < "u" && N !== null && N.destroy(), Chart.defaults.elements.arc.borderWidth = 0, Chart.defaults.datasets.doughnut.cutout = "85%", N = new Chart(document.getElementById("leads-source"), { type: "doughnut", data: { datasets: [{ label: "My First Dataset", data: [32, 27, 25, 16], backgroundColor: [`rgb(${e})`, "rgb(35, 183, 229)", "rgb(245, 184, 73)", "rgb(38, 191, 148)"] }] }, plugins: [{ afterUpdate: function(t) { t.getDatasetMeta(0).data.forEach(function(o) { o.round = { x: (t.chartArea.left + t.chartArea.right) / 2, y: (t.chartArea.top + t.chartArea.bottom) / 2, radius: (o.outerRadius + o.innerRadius) / 2, thickness: (o.outerRadius - o.innerRadius) / 2, backgroundColor: o.options.backgroundColor } }) }, afterDraw: t => { const { ctx: r, canvas: o } = t;
                t.getDatasetMeta(0).data.forEach(l => { Math.PI / 2 - l.startAngle; const n = Math.PI / 2 - l.endAngle;
                    r.save(), r.translate(l.round.x, l.round.y), r.fillStyle = l.options.backgroundColor, r.beginPath(), r.arc(l.round.radius * Math.sin(n), l.round.radius * Math.cos(n), l.round.thickness, 0, 2 * Math.PI), r.closePath(), r.fill(), r.restore() }) } }] }) }
var yt = document.getElementById("earnings");
if (yt !== null) { yt.innerHTML = ""; var Ut = { series: [{ name: "Total Orders", data: [44, 42, 57, 86, 112, 55, 70, 43, 23, 54, 77, 34] }], chart: { type: "bar", height: 200 }, grid: { borderColor: "#f2f6f7" }, colors: ["rgba(132, 90, 223, 0.3)", "rgba(132, 90, 223, 0.3)", "rgba(132, 90, 223, 0.3)", "rgba(132, 90, 223, 0.3)", "rgb(132, 90, 223)", "rgba(132, 90, 223, 0.3)", "#e4e7ed", "#e4e7ed", "#e4e7ed", "#e4e7ed", "#e4e7ed", "#e4e7ed"], plotOptions: { bar: { columnWidth: "25%", distributed: !0, borderRadius: 7 } }, dataLabels: { enabled: !1 }, legend: { show: !1 }, yaxis: { title: { style: { color: "#adb5be", fontSize: "12px", fontFamily: "Montserrat, sans-serif", fontWeight: 500, cssClass: "apexcharts-yaxis-label" } }, labels: { formatter: function(e) { return e.toFixed(0) + "" } } }, xaxis: { type: "month", categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "sep", "oct", "nov", "dec"], axisBorder: { show: !0, color: "rgba(119, 119, 142, 0.05)", offsetX: 0, offsetY: 0 }, axisTicks: { show: !0, borderType: "solid", color: "rgba(119, 119, 142, 0.05)", width: 6, offsetX: 0, offsetY: 0 }, labels: { rotate: -90 } } },
        pt = new ApexCharts(document.querySelector("#earnings"), Ut);
    pt.render() }

function Kt(e) { pt.updateOptions({ colors: ["rgba(" + e + ", 0.3)", "rgba(" + e + ", 0.3)", "rgba(" + e + ", 0.3)", "rgba(" + e + ", 0.3)", "rgb(" + e + ")", "rgba(" + e + ", 0.3)", "#e4e7ed", "#e4e7ed", "#e4e7ed", "#e4e7ed", "#e4e7ed", "#e4e7ed"] }) }
var c = document.getElementById("crypto");
if (c !== null) { c.innerHTML = ""; var Qt = { series: [{ data: [{ x: new Date(15387786e5), y: [6629.81, 6650.5, 6623.04, 6633.33] }, { x: new Date(15387804e5), y: [6632.01, 6643.59, 6620, 6630.11] }, { x: new Date(15387822e5), y: [6630.71, 6648.95, 6623.34, 6635.65] }, { x: new Date(1538784e6), y: [6635.65, 6651, 6629.67, 6638.24] }, { x: new Date(15387858e5), y: [6638.24, 6640, 6620, 6624.47] }, { x: new Date(15387876e5), y: [6624.53, 6636.03, 6621.68, 6624.31] }, { x: new Date(15387894e5), y: [6624.61, 6632.2, 6617, 6626.02] }, { x: new Date(15387912e5), y: [6627, 6627.62, 6584.22, 6603.02] }, { x: new Date(1538793e6), y: [6605, 6608.03, 6598.95, 6604.01] }, { x: new Date(15387948e5), y: [6604.5, 6614.4, 6602.26, 6608.02] }, { x: new Date(15387966e5), y: [6608.02, 6610.68, 6601.99, 6608.91] }, { x: new Date(15387984e5), y: [6608.91, 6618.99, 6608.01, 6612] }, { x: new Date(15388002e5), y: [6612, 6615.13, 6605.09, 6612] }, { x: new Date(1538802e6), y: [6612, 6624.12, 6608.43, 6622.95] }, { x: new Date(15388038e5), y: [6623.91, 6623.91, 6615, 6615.67] }, { x: new Date(15388056e5), y: [6618.69, 6618.74, 6610, 6610.4] }, { x: new Date(15388074e5), y: [6611, 6622.78, 6610.4, 6614.9] }, { x: new Date(15388092e5), y: [6614.9, 6626.2, 6613.33, 6623.45] }, { x: new Date(1538811e6), y: [6623.48, 6627, 6618.38, 6620.35] }, { x: new Date(15388128e5), y: [6619.43, 6620.35, 6610.05, 6615.53] }, { x: new Date(15388146e5), y: [6615.53, 6617.93, 6610, 6615.19] }, { x: new Date(15388164e5), y: [6615.19, 6621.6, 6608.2, 6620] }, { x: new Date(15388182e5), y: [6619.54, 6625.17, 6614.15, 6620] }, { x: new Date(153882e7), y: [6620.33, 6634.15, 6617.24, 6624.61] }, { x: new Date(15388218e5), y: [6625.95, 6626, 6611.66, 6617.58] }, { x: new Date(15388236e5), y: [6619, 6625.97, 6595.27, 6598.86] }, { x: new Date(15388254e5), y: [6598.86, 6598.88, 6570, 6587.16] }, { x: new Date(15388272e5), y: [6588.86, 6600, 6580, 6593.4] }, { x: new Date(1538829e6), y: [6593.99, 6598.89, 6585, 6587.81] }, { x: new Date(15388308e5), y: [6587.81, 6592.73, 6567.14, 6578] }, { x: new Date(15388326e5), y: [6578.35, 6581.72, 6567.39, 6579] }, { x: new Date(15388344e5), y: [6579.38, 6580.92, 6566.77, 6575.96] }, { x: new Date(15388362e5), y: [6575.96, 6589, 6571.77, 6588.92] }, { x: new Date(1538838e6), y: [6588.92, 6594, 6577.55, 6589.22] }, { x: new Date(15388398e5), y: [6589.3, 6598.89, 6589.1, 6596.08] }, { x: new Date(15388416e5), y: [6597.5, 6600, 6588.39, 6596.25] }, { x: new Date(15388434e5), y: [6598.03, 6600, 6588.73, 6595.97] }, { x: new Date(15388452e5), y: [6595.97, 6602.01, 6588.17, 6602] }, { x: new Date(1538847e6), y: [6602, 6607, 6596.51, 6599.95] }, { x: new Date(15388488e5), y: [6600.63, 6601.21, 6590.39, 6591.02] }, { x: new Date(15388506e5), y: [6591.02, 6603.08, 6591, 6591] }, { x: new Date(15388524e5), y: [6591, 6601.32, 6585, 6592] }, { x: new Date(15388542e5), y: [6593.13, 6596.01, 6590, 6593.34] }, { x: new Date(1538856e6), y: [6593.34, 6604.76, 6582.63, 6593.86] }, { x: new Date(15388578e5), y: [6593.86, 6604.28, 6586.57, 6600.01] }, { x: new Date(15388596e5), y: [6601.81, 6603.21, 6592.78, 6596.25] }, { x: new Date(15388614e5), y: [6596.25, 6604.2, 6590, 6602.99] }, { x: new Date(15388632e5), y: [6602.99, 6606, 6584.99, 6587.81] }, { x: new Date(1538865e6), y: [6587.81, 6595, 6583.27, 6591.96] }, { x: new Date(15388668e5), y: [6591.97, 6596.07, 6585, 6588.39] }, { x: new Date(15388686e5), y: [6587.6, 6598.21, 6587.6, 6594.27] }, { x: new Date(15388704e5), y: [6596.44, 6601, 6590, 6596.55] }, { x: new Date(15388722e5), y: [6598.91, 6605, 6596.61, 6600.02] }, { x: new Date(1538874e6), y: [6600.55, 6605, 6589.14, 6593.01] }, { x: new Date(15388758e5), y: [6593.15, 6605, 6592, 6603.06] }, { x: new Date(15388776e5), y: [6603.07, 6604.5, 6599.09, 6603.89] }, { x: new Date(15388794e5), y: [6604.44, 6604.44, 6600, 6603.5] }, { x: new Date(15388812e5), y: [6603.5, 6603.99, 6597.5, 6603.86] }, { x: new Date(1538883e6), y: [6603.85, 6605, 6600, 6604.07] }, { x: new Date(15388848e5), y: [6604.98, 6606, 6604.07, 6606] }] }], chart: { type: "candlestick", borderRadius: 20, height: 280, toolbar: { show: !1 } }, plotOptions: { candlestick: { colors: { upward: "rgb(132, 90, 223)", downward: "rgba(132, 90, 223, 0.2)" } } }, title: { align: "left" }, grid: { borderColor: "#f2f6f7" }, xaxis: { type: "datetime", axisBorder: { show: !1, color: "rgba(119, 119, 142, 0.05)", offsetX: 0, offsetY: 0 }, axisTicks: { show: !1, borderType: "solid", color: "rgba(119, 119, 142, 0.05)", width: 6, offsetX: 0, offsetY: 0 } }, yaxis: { tooltip: { enabled: !0 } } },
        wt = new ApexCharts(document.querySelector("#crypto"), Qt);
    wt.render() }

function Zt(e) { wt.updateOptions({ plotOptions: { candlestick: { colors: { upward: "rgb(" + e + ")", downward: "rgba(" + e + ", 0.2)" } } } }) }
var c = document.getElementById("btc-chart");
if (c !== null) { c.innerHTML = ""; var le = { chart: { type: "line", height: 40, width: 120, sparkline: { enabled: !0 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 0, left: 0, blur: 3, color: "#000", opacity: .1 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { gradient: { enabled: !1 } }, series: [{ name: "Value", data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46] }], yaxis: { min: 0, show: !1 }, xaxis: { axisBorder: { show: !1 } }, yaxis: { axisBorder: { show: !1 } }, colors: ["#26bf94"] },
        le = new ApexCharts(document.querySelector("#btc-chart"), le);
    le.render() }
var c = document.getElementById("eth-chart");
if (c !== null) { c.innerHTML = ""; var ne = { chart: { type: "line", height: 40, width: 120, sparkline: { enabled: !0 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 0, left: 0, blur: 3, color: "#000", opacity: .1 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { gradient: { enabled: !1 } }, series: [{ name: "Value", data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46] }], yaxis: { min: 0, show: !1 }, xaxis: { axisBorder: { show: !1 } }, yaxis: { axisBorder: { show: !1 } }, colors: ["#26bf94"] },
        ne = new ApexCharts(document.querySelector("#eth-chart"), ne);
    ne.render() }
var c = document.getElementById("dash-chart");
if (c !== null) { c.innerHTML = ""; var se = { chart: { type: "line", height: 40, width: 120, sparkline: { enabled: !0 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 0, left: 0, blur: 3, color: "#000", opacity: .1 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { gradient: { enabled: !1 } }, series: [{ name: "Value", data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46] }], yaxis: { min: 0, show: !1 }, xaxis: { axisBorder: { show: !1 } }, yaxis: { axisBorder: { show: !1 } }, colors: ["#e6533c"] },
        se = new ApexCharts(document.querySelector("#dash-chart"), se);
    se.render() }
var c = document.getElementById("bitcoin-price-graph");
if (c !== null) { c.innerHTML = ""; var ie = { chart: { type: "line", height: 20, width: 120, sparkline: { enabled: !0 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 0, left: 0, blur: 3, color: "#000", opacity: .1 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { gradient: { enabled: !1 } }, tooltip: { enabled: !1 }, series: [{ name: "Value", data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46] }], yaxis: { min: 0, show: !1 }, xaxis: { axisBorder: { show: !1 } }, yaxis: { axisBorder: { show: !1 } }, colors: ["#26bf94"] },
        ie = new ApexCharts(document.querySelector("#bitcoin-price-graph"), ie);
    ie.render() }
var c = document.getElementById("etherium-price-graph");
if (c !== null) { c.innerHTML = ""; var ce = { chart: { type: "line", height: 20, width: 120, sparkline: { enabled: !0 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 0, left: 0, blur: 3, color: "#000", opacity: .1 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { gradient: { enabled: !1 } }, tooltip: { enabled: !1 }, series: [{ name: "Value", data: [0, 45, 54, 38, 56, 24, 65, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 31, 37, 39, 62, 51, 35, 41] }], yaxis: { min: 0, show: !1 }, xaxis: { axisBorder: { show: !1 } }, yaxis: { axisBorder: { show: !1 } }, colors: ["#e6533c"] },
        ce = new ApexCharts(document.querySelector("#etherium-price-graph"), ce);
    ce.render() }
var c = document.getElementById("dash-price-graph");
if (c !== null) { c.innerHTML = ""; var de = { chart: { type: "line", height: 20, width: 120, sparkline: { enabled: !0 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 0, left: 0, blur: 3, color: "#000", opacity: .1 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { gradient: { enabled: !1 } }, tooltip: { enabled: !1 }, series: [{ name: "Value", data: [61, 27, 54, 43, 19, 46, 31, 37, 39, 0, 45, 54, 38, 56, 24, 65, 35, 27, 93, 53, 62, 51, 35, 41] }], yaxis: { min: 0, show: !1 }, xaxis: { axisBorder: { show: !1 } }, yaxis: { axisBorder: { show: !1 } }, colors: ["#26bf94"] },
        de = new ApexCharts(document.querySelector("#dash-price-graph"), de);
    de.render() }
var c = document.getElementById("ripple-price-graph");
if (c !== null) { c.innerHTML = ""; var ue = { chart: { type: "line", height: 20, width: 120, sparkline: { enabled: !0 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 0, left: 0, blur: 3, color: "#000", opacity: .1 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { gradient: { enabled: !1 } }, tooltip: { enabled: !1 }, series: [{ name: "Value", data: [61, 27, 54, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31, 37, 39, 0, 45, 54, 38, 62, 51, 35, 41] }], yaxis: { min: 0, show: !1 }, xaxis: { axisBorder: { show: !1 } }, yaxis: { axisBorder: { show: !1 } }, colors: ["#26bf94"] },
        ue = new ApexCharts(document.querySelector("#ripple-price-graph"), ue);
    ue.render() }
var c = document.getElementById("iota-price-graph");
if (c !== null) { c.innerHTML = ""; var me = { chart: { type: "line", height: 20, width: 120, sparkline: { enabled: !0 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 0, left: 0, blur: 3, color: "#000", opacity: .1 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { gradient: { enabled: !1 } }, tooltip: { enabled: !1 }, series: [{ name: "Value", data: [61, 27, 54, 37, 39, 0, 45, 54, 38, 62, 51, 35, 41, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31] }], yaxis: { min: 0, show: !1 }, xaxis: { axisBorder: { show: !1 } }, yaxis: { axisBorder: { show: !1 } }, colors: ["#e6533c"] },
        me = new ApexCharts(document.querySelector("#iota-price-graph"), me);
    me.render() }
var c = document.getElementById("neo-price-graph");
if (c !== null) { c.innerHTML = ""; var he = { chart: { type: "line", height: 20, width: 120, sparkline: { enabled: !0 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 0, left: 0, blur: 3, color: "#000", opacity: .1 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { gradient: { enabled: !1 } }, tooltip: { enabled: !1 }, series: [{ name: "Value", data: [62, 51, 35, 41, 43, 19, 56, 24, 65, 35, 27, 93, 53, 46, 31, 61, 27, 54, 37, 39, 0, 45, 54, 38] }], yaxis: { min: 0, show: !1 }, xaxis: { axisBorder: { show: !1 } }, yaxis: { axisBorder: { show: !1 } }, colors: ["#e6533c"] },
        he = new ApexCharts(document.querySelector("#neo-price-graph"), he);
    he.render() }
var F = document.getElementById("subscriptionOverview");
if (F !== null) { F.innerHTML = ""; var qe = { series: [{ name: "Basic", data: [75, 78, 38, 39, 38, 73, 73, 53, 53, 16, 16, 53] }, { name: "Pro", data: [35, 35, 62, 63, 13, 13, 60, 60, 41, 41, 82, 82] }], chart: { toolbar: { show: !1 }, height: 285, type: "line", zoom: { enabled: !1 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 5, left: 0, blur: 3, color: "#000", opacity: .15 } }, grid: { borderColor: "#f1f1f1" }, dataLabels: { enabled: !1 }, stroke: { width: [2, 2], curve: ["smooth", "smooth"], lineCap: "butt", dashArray: [0, 0] }, title: { text: void 0 }, legend: { show: !0, position: "top", horizontalAlign: "center", fontWeight: 600, fontSize: "11px", tooltipHoverFormatter: function(e, t) { return e + " - " + t.w.globals.series[t.seriesIndex][t.dataPointIndex] }, labels: { colors: "#74767c" }, markers: { width: 7, height: 7, strokeWidth: 0, radius: 12, offsetX: 0, offsetY: 0 } }, markers: { discrete: [{ seriesIndex: 0, dataPointIndex: 5, fillColor: "#305cfc", strokeColor: "#fff", size: 4, shape: "circle" }, { seriesIndex: 0, dataPointIndex: 11, fillColor: "#305cfc", strokeColor: "#fff", size: 4, shape: "circle" }, { seriesIndex: 1, dataPointIndex: 10, fillColor: "#23b7e5", strokeColor: "#fff", size: 4, shape: "circle" }, { seriesIndex: 1, dataPointIndex: 4, fillColor: "#23b7e5", strokeColor: "#fff", size: 4, shape: "circle" }], hover: { sizeOffset: 6 } }, yaxis: { title: { style: { color: "#adb5be", fontSize: "14px", fontFamily: "poppins, sans-serif", fontWeight: 600, cssClass: "apexcharts-yaxis-label" } }, labels: { formatter: function(e) { return e.toFixed(0) + "" }, show: !0, style: { colors: "#8c9097", fontSize: "11px", fontWeight: 600, cssClass: "apexcharts-xaxis-label" } } }, xaxis: { type: "day", categories: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan"], axisBorder: { show: !0, color: "rgba(119, 119, 142, 0.05)", offsetX: 0, offsetY: 0 }, axisTicks: { show: !0, borderType: "solid", color: "rgba(119, 119, 142, 0.05)", width: 6, offsetX: 0, offsetY: 0 }, labels: { rotate: -90, style: { colors: "#8c9097", fontSize: "11px", fontWeight: 600, cssClass: "apexcharts-xaxis-label" } } }, tooltip: { y: [{ title: { formatter: function(e) { return e } } }, { title: { formatter: function(e) { return e } } }, { title: { formatter: function(e) { return e } } }] }, colors: ["rgb(132, 90, 223)", "#23b7e5"] },
        vt = new ApexCharts(document.querySelector("#subscriptionOverview"), qe);
    vt.render() }

function er(e) { vt.updateOptions({ colors: ["rgb(" + e + ")", "#23b7e5"] }) }
var F = document.getElementById("candidates-chart");
if (F !== null) { F.innerHTML = ""; var qe = { series: [1754, 1234], labels: ["Female", "Male"], chart: { height: 250, type: "donut" }, dataLabels: { enabled: !1 }, legend: { show: !1 }, stroke: { show: !0, curve: "smooth", lineCap: "round", colors: "#fff", width: 0, dashArray: 0 }, plotOptions: { pie: { expandOnClick: !1, donut: { size: "80%", background: "transparent", labels: { show: !0, name: { show: !0, fontSize: "20px", color: "#495057", offsetY: -4 }, value: { show: !0, fontSize: "18px", color: void 0, offsetY: 8, formatter: function(t) { return t + "%" } }, total: { show: !0, showAlways: !0, label: "Total", fontSize: "22px", fontWeight: 600, color: "#495057" } } } } }, colors: ["rgb(132, 90, 223)", "#23b7e5"] },
        xt = new ApexCharts(document.querySelector("#candidates-chart"), qe);
    xt.render() }

function tr(e) { xt.updateOptions({ colors: ["rgb(" + e + ")", "#23b7e5"] }) }
var z = document.getElementById("nft-balance-chart");
if (z !== null) { z.innerHTML = ""; var V = { chart: { type: "line", height: 40, sparkline: { enabled: !0 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 2.5, dashArray: 0 }, fill: { gradient: { enabled: !1 } }, series: [{ name: "Value", data: [20, 14, 19, 10, 25, 20, 22, 9, 12] }], yaxis: { min: 0, show: !1, axisBorder: { show: !1 } }, xaxis: { show: !1, axisBorder: { show: !1 } }, colors: ["rgb(132, 90, 223)"] },
        V = new ApexCharts(document.querySelector("#nft-balance-chart"), V);
    V.render() }

function rr(e) { V.updateOptions({ colors: ["rgb(" + e + ")"] }) }
var z = document.getElementById("nft-statistics");
if (z !== null) { z.innerHTML = ""; var or = { series: [{ name: "Price", data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80] }, { name: "Volume", data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89] }], chart: { height: 336, type: "line", zoom: { enabled: !1 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 5, left: 0, blur: 3, color: "#000", opacity: .1 } }, dataLabels: { enabled: !1 }, legend: { position: "top", horizontalAlign: "center", offsetX: -15, fontWeight: "bold" }, stroke: { curve: "smooth", width: "3", dashArray: [0, 5] }, grid: { borderColor: "#f2f6f7" }, colors: ["rgb(132, 90, 223)", "rgba(132, 90, 223, 0.3)"], yaxis: { title: { text: "Statistics", style: { color: "#adb5be", fontSize: "14px", fontFamily: "poppins, sans-serif", fontWeight: 600, cssClass: "apexcharts-yaxis-label" } } }, xaxis: { type: "month", categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], axisBorder: { show: !0, color: "rgba(119, 119, 142, 0.05)", offsetX: 0, offsetY: 0 }, axisTicks: { show: !0, borderType: "solid", color: "rgba(119, 119, 142, 0.05)", width: 6, offsetX: 0, offsetY: 0 }, labels: { rotate: -90 } } },
        St = new ApexCharts(document.querySelector("#nft-statistics"), or);
    St.render() }

function ar(e) { St.updateOptions({ colors: ["rgb(" + e + ")", "rgba(" + e + ", 0.3)"] }) }
typeof Swiper < "u" && new Swiper(".pagination-dynamic", { pagination: { el: ".swiper-pagination", dynamicBullets: !0, clickable: !0 }, loop: !0, autoplay: { delay: 1500, disableOnInteraction: !1 } });
var D = document.getElementById("salesOverview");
if (D !== null) { D.innerHTML = ""; var Ae = { series: [{ name: "Sales", data: [44, 42, 57, 86, 58, 55, 70, 43, 23, 54, 77, 34] }, { name: "OPEX Ratio", data: [74, 72, 87, 116, 88, 85, 100, 73, 53, 84, 107, 64] }, { name: "General & Admin", data: [84, 82, 97, 126, 98, 95, 110, 83, 63, 94, 117, 74] }, { name: "Marketing", data: [-34, -22, -37, -56, -21, -35, -60, -34, -56, -78, -89, -53] }], chart: { stacked: !0, type: "bar", height: 325 }, grid: { borderColor: "#f5f4f4", strokeDashArray: 5, yaxis: { lines: { show: !0 } } }, colors: ["rgb(132, 90, 223)", "rgba(132, 90, 223, 0.6)", "rgba(132, 90, 223, 0.3)", "#ebeff5"], plotOptions: { bar: { colors: { ranges: [{ from: -100, to: -46, color: "#ebeff5" }, { from: -45, to: 0, color: "#ebeff5" }] }, columnWidth: "20%" } }, dataLabels: { enabled: !1 }, legend: { show: !0, position: "top" }, yaxis: { title: { text: "Growth", style: { color: "#adb5be", fontSize: "14px", fontFamily: "Montserrat, sans-serif", fontWeight: 600, cssClass: "apexcharts-yaxis-label" } }, axisBorder: { show: !0, color: "rgba(119, 119, 142, 0.05)", offsetX: 0, offsetY: 0 }, axisTicks: { show: !0, borderType: "solid", color: "rgba(119, 119, 142, 0.05)", width: 6, offsetX: 0, offsetY: 0 }, labels: { formatter: function(e) { return e.toFixed(0) + "" } } }, xaxis: { type: "month", categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "sep", "oct", "nov", "dec"], axisBorder: { show: !1, color: "rgba(119, 119, 142, 0.05)", offsetX: 0, offsetY: 0 }, axisTicks: { show: !1, borderType: "solid", color: "rgba(119, 119, 142, 0.05)", width: 6, offsetX: 0, offsetY: 0 }, labels: { rotate: -90 } } },
        kt = new ApexCharts(document.querySelector("#salesOverview"), Ae);
    kt.render() }

function lr(e) { kt.updateOptions({ colors: ["rgb(" + e + ")", "rgba(" + e + ", 0.6)", "rgba(" + e + ", 0.3)", "#ebeff5"] }) }
var D = document.getElementById("sale-value");
if (D !== null) { D.innerHTML = ""; var Ae = { chart: { height: 229, type: "radialBar" }, series: [60], colors: ["rgb(132, 90, 223)"], plotOptions: { radialBar: { hollow: { margin: 0, size: "70%", background: "#fff" }, track: { dropShadow: { enabled: !0, top: 2, left: 0, blur: 2, opacity: .15 } }, dataLabels: { name: { offsetY: -10, color: "#4b9bfa", fontSize: "16px", show: !1 }, value: { color: "#4b9bfa", fontSize: "30px", show: !0 } } } }, stroke: { lineCap: "round" }, labels: ["Cart"] },
        qt = new ApexCharts(document.querySelector("#sale-value"), Ae);
    qt.render() }

function nr(e) { qt.updateOptions({ colors: ["rgb(" + e + ")"] }) }
if (typeof jsVectorMap < "u") { var sr = [{ name: "Usa", coords: [40.3, -101.38] }, { name: "India", coords: [20.5937, 78.9629] }, { name: "Vatican City", coords: [41.9, 12.45] }, { name: "Canada", coords: [56.1304, -106.3468] }, { name: "Mauritius", coords: [-20.2, 57.5] }, { name: "Singapore", coords: [1.3, 103.8] }, { name: "Palau", coords: [7.35, 134.46] }, { name: "Maldives", coords: [3.2, 73.22] }, { name: "SÃ£o TomÃ© and PrÃ­ncipe", coords: [.33, 6.73] }],
        D = document.getElementById("visitors-countries");
    D !== null && (D.innerHTML = "", new jsVectorMap({ map: "world_merc", selector: "#visitors-countries", markersSelectable: !0, zoomOnScroll: !1, zoomButtons: !1, onMarkerSelected(t, r, o) { console.log(t, r, o) }, labels: { markers: { render: function(t) { return t.name } } }, markers: sr, markerStyle: { hover: { stroke: "#DDD", strokeWidth: 3, fill: "#FFF" }, selected: { fill: "#ff525d" } }, markerLabelStyle: { initial: { fontFamily: "Poppins", fontSize: 13, fontWeight: 500, fill: "#35373e" } } })) }
var m = document.getElementById("analytics-users");
if (m !== null) { m.innerHTML = ""; var ye = { chart: { type: "line", height: 40, width: 120, sparkline: { enabled: !0 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 0, left: 0, blur: 3, color: "#000", opacity: .1 } }, grid: { show: !1, xaxis: { lines: { show: !1 } }, yaxis: { lines: { show: !1 } } }, stroke: { show: !0, curve: "straight", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { gradient: { enabled: !1 } }, series: [{ name: "Value", data: [0, 21, 54, 38, 56, 24, 65] }], yaxis: { min: 0, show: !1 }, xaxis: { show: !1, axisTicks: { show: !1 }, axisBorder: { show: !1 } }, yaxis: { axisBorder: { show: !1 } }, colors: ["#23b7e5"] },
        ye = new ApexCharts(document.querySelector("#analytics-users"), ye);
    ye.render() }
var m = document.getElementById("analytics-bouncerate");
if (m !== null) { m.innerHTML = ""; var U = { chart: { type: "line", height: 45, sparkline: { enabled: !0 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 0, left: 0, blur: 1, color: "#fff", opacity: .05 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 2, dashArray: 0 }, fill: { gradient: { enabled: !1 } }, series: [{ name: "Value", data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48] }], yaxis: { min: 0, show: !1 }, xaxis: { axisBorder: { show: !1 } }, yaxis: { axisBorder: { show: !1 } }, colors: ["rgba(132, 90, 223, 0.1)"], tooltip: { enabled: !1 } },
        U = new ApexCharts(document.querySelector("#analytics-bouncerate"), U);
    U.render() }

function ir(e) { U.updateOptions({ colors: ["rgba(" + e + ", 0.1)"] }) }
var m = document.getElementById("sessions");
if (m !== null) { m.innerHTML = ""; var I = { series: [1754, 1234, 878, 270], labels: ["Mobile", "Tablet", "Desktop", "Others"], chart: { height: 257, type: "donut" }, dataLabels: { enabled: !1 }, legend: { show: !1 }, stroke: { show: !0, curve: "smooth", lineCap: "round", colors: "#fff", width: 0, dashArray: 0 }, plotOptions: { pie: { expandOnClick: !1, donut: { size: "80%", background: "transparent", labels: { show: !0, name: { show: !0, fontSize: "20px", color: "#495057", offsetY: -4 }, value: { show: !0, fontSize: "18px", color: void 0, offsetY: 8, formatter: function(e) { return e + "%" } }, total: { show: !0, showAlways: !0, label: "Total", fontSize: "22px", fontWeight: 600, color: "#495057" } } } } }, colors: ["rgba(132, 90, 223, 1)", "rgba(35, 183, 229, 1)", "rgba(38, 191, 148, 1)", "rgba(245, 184, 73, 1)"] },
        At = new ApexCharts(document.querySelector("#sessions"), I);
    At.render() }

function cr(e) { At.updateOptions({ colors: ["rgba(" + e + ", 1)", "rgba(35, 183, 229, 1)", "rgba(38, 191, 148, 1)", "rgba(245, 184, 73, 1)"] }) }
var m = document.getElementById("audienceReport");
if (m !== null) { m.innerHTML = ""; var I = { series: [{ name: "Views", type: "column", data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 45, 35] }, { name: "Followers", type: "line", data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 27] }], chart: { toolbar: { show: !1 }, type: "line", height: 250 }, grid: { borderColor: "#f1f1f1", strokeDashArray: 3 }, labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dataLabels: { enabled: !1 }, stroke: { width: [1, 1.1], curve: ["straight", "smooth"] }, legend: { show: !0, position: "top" }, xaxis: { axisBorder: { color: "#e9e9e9" } }, plotOptions: { bar: { columnWidth: "20%", borderRadius: 2 } }, colors: ["rgba(132, 90, 223, 1)", "#23b7e5"] },
        Lt = new ApexCharts(document.querySelector("#audienceReport"), I);
    Lt.render() }

function dr(e) { Lt.updateOptions({ colors: ["rgba(" + e + ", 1)", "#23b7e5"] }) }
var m = document.getElementById("country-sessions");
if (m !== null) { m.innerHTML = ""; var I = { series: [{ name: "Session", data: [24, 23, 20, 25, 27, 26, 24, 23, 23, 25, 23, 23], type: "line" }, { name: "Bounce Rate", data: [20, 23, 26, 22, 20, 26, 28, 26, 22, 27, 25, 26], type: "bar" }], chart: { height: 308, zoom: { enabled: !1 } }, dataLabels: { enabled: !1, show: !0 }, grid: { borderColor: "#f1f1f1", strokeDashArray: 3 }, legend: { show: !0, position: "top" }, plotOptions: { bar: { borderRadius: 5, columnWidth: "40%", dataLabels: { position: "top" } } }, colors: ["rgb(132, 90, 223)", "#ededed"], stroke: { curve: ["smooth", "stepline"], width: [2, 0], columnWidth: "10%" }, xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], axisBorder: { color: "#e9e9e9" } } },
        Bt = new ApexCharts(document.querySelector("#country-sessions"), I);
    Bt.render() }

function ur(e) { Bt.updateOptions({ colors: ["rgb(" + e + ")", "#ededed"] }) }
var m = document.getElementById("session-users");
if (m !== null) { m.innerHTML = ""; var mr = { series: [{ name: "New Users", data: [32, 15, 63, 51, 36, 62, 99, 42, 78, 76, 32, 120] }, { name: "Sessions", data: [56, 58, 38, 50, 64, 45, 55, 32, 15, 63, 51, 136] }, { name: "Avg Session Duration", data: [48, 29, 50, 69, 20, 59, 52, 12, 48, 28, 17, 98] }], chart: { height: 387, type: "line", toolbar: { show: !1 }, background: "none", fill: "#fff" }, grid: { borderColor: "#f2f6f7" }, colors: ["rgb(132, 90, 223)", "#23b7e5", "#f5b849"], background: "transparent", dataLabels: { enabled: !1 }, stroke: { curve: "straight", width: 3 }, dataLabels: { enabled: !1 }, legend: { show: !0, position: "top" }, xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], show: !1, axisBorder: { show: !1, color: "rgba(119, 119, 142, 0.05)", offsetX: 0, offsetY: 0 }, axisTicks: { show: !1, borderType: "solid", color: "rgba(119, 119, 142, 0.05)", width: 6, offsetX: 0, offsetY: 0 }, labels: { rotate: -90 } }, yaxis: { show: !1, axisBorder: { show: !1 }, axisTicks: { show: !1 } }, tooltip: { x: { format: "dd/MM/yy HH:mm" } } },
        Et = new ApexCharts(document.querySelector("#session-users"), mr);
    Et.render() }

function hr(e) { Et.updateOptions({ colors: ["rgb(" + e + ")", "#23b7e5", "#f5b849"] }) }
var m = document.getElementById("analytics-followers");
if (m !== null) { m.innerHTML = ""; var I = { chart: { height: 120, width: 100, type: "radialBar" }, series: [48], colors: ["#23b7e5"], plotOptions: { radialBar: { hollow: { margin: 0, size: "50%", background: "#fff" }, dataLabels: { name: { offsetY: -10, color: "#4b9bfa", fontSize: "10px", show: !1 }, value: { offsetY: 5, color: "#4b9bfa", fontSize: "12px", show: !0, fontWeight: 800 } } } }, stroke: { lineCap: "round" }, labels: ["Followers"] },
        yr = new ApexCharts(document.querySelector("#analytics-followers"), I);
    yr.render() }
var m = document.getElementById("analytics-views");
if (m !== null) { m.innerHTML = ""; var I = { chart: { height: 120, width: 100, type: "radialBar" }, series: [65], colors: ["#f7b731"], plotOptions: { radialBar: { hollow: { margin: 0, size: "50%", background: "#fff" }, dataLabels: { name: { offsetY: -10, color: "#4b9bfa", fontSize: "10px", show: !1 }, value: { offsetY: 5, color: "#4b9bfa", fontSize: "12px", show: !0, fontWeight: 800 } } } }, stroke: { lineCap: "round" }, labels: ["Views"] },
        fr = new ApexCharts(document.querySelector("#analytics-views"), I);
    fr.render() }
var p = document.getElementById("projectAnalysis");
if (p !== null) { p.innerHTML = ""; var gr = { series: [{ name: "Projects", type: "column", data: [1.8, 2.5, 2.5, 1.5, 2.5, 2.8, 3.8] }, { name: "Tasks", type: "column", data: [1.1, 2.2, 3.1, 4, 4.1, 4.9, 6.5] }, { name: "Revenue", type: "line", data: [20, 29, 37, 35, 44, 43, 50] }], chart: { toolbar: { show: !1 }, height: 300, type: "line", stacked: !1, fontFamily: "Poppins, Arial, sans-serif" }, grid: { borderColor: "#f5f4f4", strokeDashArray: 3 }, dataLabels: { enabled: !1 }, title: { text: void 0 }, xaxis: { categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] }, yaxis: [{ show: !0, axisTicks: { show: !0 }, axisBorder: { show: !1, color: "#4eb6d0" }, labels: { style: { colors: "#4eb6d0" } }, title: { text: void 0 }, tooltip: { enabled: !0 } }, { seriesName: "Projects", opposite: !0, axisTicks: { show: !0 }, axisBorder: { show: !1 }, labels: { style: { colors: "#00E396" } }, title: { text: void 0 } }, { seriesName: "Revenue", opposite: !0, axisTicks: { show: !0 }, axisBorder: { show: !1 }, labels: { show: !1 }, title: { text: void 0 } }], tooltip: { enabled: !0 }, legend: { show: !0, position: "top", offsetX: 40, fontSize: "13px", fontWeight: "normal", labels: { colors: "#acb1b1" }, markers: { width: 10, height: 10 } }, stroke: { width: [0, 0, 1.5], curve: "straight", dashArray: [0, 0, 0] }, plotOptions: { bar: { columnWidth: "35%", borderRadius: 3 } }, colors: ["rgb(132, 90, 223)", "#ededed", "#23b7e5"] },
        It = new ApexCharts(document.querySelector("#projectAnalysis"), gr);
    It.render() }

function br(e) { It.updateOptions({ colors: ["rgb(" + e + ")", "#ededed", "#23b7e5"] }) }
var p = document.getElementById("user1");
if (p !== null) { p.innerHTML = ""; var fe = { chart: { type: "line", height: 20, width: 80, sparkline: { enabled: !0 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 0, left: 0, blur: 3, color: "#000", opacity: .1 } }, grid: { show: !1, xaxis: { lines: { show: !1 } }, yaxis: { lines: { show: !1 } } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { gradient: { enabled: !1 } }, series: [{ name: "Value", data: [54, 38, 56, 24, 65] }], yaxis: { min: 0, show: !1 }, xaxis: { show: !1, axisTicks: { show: !1 }, axisBorder: { show: !1 } }, yaxis: { axisBorder: { show: !1 } }, colors: ["#09ad95"] },
        fe = new ApexCharts(document.querySelector("#user1"), fe);
    fe.render() }
var p = document.getElementById("user2");
if (p !== null) { p.innerHTML = ""; var ge = { chart: { type: "line", height: 20, width: 80, sparkline: { enabled: !0 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 0, left: 0, blur: 3, color: "#000", opacity: .1 } }, grid: { show: !1, xaxis: { lines: { show: !1 } }, yaxis: { lines: { show: !1 } } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { gradient: { enabled: !1 } }, series: [{ name: "Value", data: [24, 54, 15, 42, 16] }], yaxis: { min: 0, show: !1 }, xaxis: { show: !1, axisTicks: { show: !1 }, axisBorder: { show: !1 } }, yaxis: { axisBorder: { show: !1 } }, colors: ["#fb6b27"] },
        ge = new ApexCharts(document.querySelector("#user2"), ge);
    ge.render() }
var p = document.getElementById("user3");
if (p !== null) { p.innerHTML = ""; var be = { chart: { type: "line", height: 20, width: 80, sparkline: { enabled: !0 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 0, left: 0, blur: 3, color: "#000", opacity: .1 } }, grid: { show: !1, xaxis: { lines: { show: !1 } }, yaxis: { lines: { show: !1 } } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { gradient: { enabled: !1 } }, series: [{ name: "Value", data: [15, 42, 16, 44, 24] }], yaxis: { min: 0, show: !1 }, xaxis: { show: !1, axisTicks: { show: !1 }, axisBorder: { show: !1 } }, yaxis: { axisBorder: { show: !1 } }, colors: ["#1170e4"] },
        be = new ApexCharts(document.querySelector("#user3"), be);
    be.render() }
var p = document.getElementById("user4");
if (p !== null) { p.innerHTML = ""; var pe = { chart: { type: "line", height: 20, width: 80, sparkline: { enabled: !0 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 0, left: 0, blur: 3, color: "#000", opacity: .1 } }, grid: { show: !1, xaxis: { lines: { show: !1 } }, yaxis: { lines: { show: !1 } } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { gradient: { enabled: !1 } }, series: [{ name: "Value", data: [54, 38, 56, 24, 65] }], yaxis: { min: 0, show: !1 }, xaxis: { show: !1, axisTicks: { show: !1 }, axisBorder: { show: !1 } }, yaxis: { axisBorder: { show: !1 } }, colors: ["#e82646"] },
        pe = new ApexCharts(document.querySelector("#user4"), pe);
    pe.render() }
var p = document.getElementById("user5");
if (p !== null) { p.innerHTML = ""; var we = { chart: { type: "line", height: 20, width: 80, sparkline: { enabled: !0 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 0, left: 0, blur: 3, color: "#000", opacity: .1 } }, grid: { show: !1, xaxis: { lines: { show: !1 } }, yaxis: { lines: { show: !1 } } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { gradient: { enabled: !1 } }, series: [{ name: "Value", data: [15, 42, 16, 44, 24] }], yaxis: { min: 0, show: !1 }, xaxis: { show: !1, axisTicks: { show: !1 }, axisBorder: { show: !1 } }, yaxis: { axisBorder: { show: !1 } }, colors: ["#f7b731"] },
        we = new ApexCharts(document.querySelector("#user5"), we);
    we.render() }
var $ = document.getElementById("performanceReport");
if ($ !== null) { $.innerHTML = ""; var Le = { series: [{ name: "Designing", data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43] }, { name: "Development", data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27] }, { name: "SEO", data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14] }], chart: { type: "bar", height: 310, stacked: !0, toolbar: { show: !0 }, zoom: { enabled: !0 } }, grid: { borderColor: "#f1f1f1", strokeDashArray: 3 }, responsive: [{ breakpoint: 480, options: { legend: { position: "bottom", offsetX: -10, offsetY: 0 } } }], colors: ["rgba(132, 90, 223, 1)", "rgba(132, 90, 223, 0.5)", "rgba(132, 90, 223, 0.2)"], legend: { show: !1, position: "top" }, plotOptions: { bar: { columnWidth: "20%" } }, dataLabels: { enabled: !1 }, xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] }, fill: { opacity: 1 } },
        Ct = new ApexCharts(document.querySelector("#performanceReport"), Le);
    Ct.render() }

function pr(e) { Ct.updateOptions({ colors: ["rgba(" + e + ", 1)", "rgba(" + e + ", 0.5)", "rgba(" + e + ", 0.2)"] }) }
var $ = document.getElementById("jobs-summary");
if ($ !== null) { $.innerHTML = ""; var Le = { series: [1754, 544, 682, 263], labels: ["Published", "Private", "Closed", "On Hold"], chart: { height: 250, type: "donut" }, dataLabels: { enabled: !1 }, legend: { show: !1 }, stroke: { show: !0, curve: "smooth", lineCap: "round", colors: "#fff", width: 0, dashArray: 0 }, plotOptions: { pie: { expandOnClick: !1, donut: { size: "70%", background: "transparent", labels: { show: !0, name: { show: !0, fontSize: "20px", color: "#495057", offsetY: -4 }, value: { show: !0, fontSize: "18px", color: void 0, offsetY: 8, formatter: function(t) { return t + "%" } }, total: { show: !0, showAlways: !0, label: "Total", fontSize: "22px", fontWeight: 600, color: "#495057" } } } } }, colors: ["rgb(132, 90, 223)", "rgba(132, 90, 223, 0.7)", "rgba(132, 90, 223,0.4)", "rgb(243, 246, 248)"] },
        Mt = new ApexCharts(document.querySelector("#jobs-summary"), Le);
    Mt.render() }

function wr(e) { Mt.updateOptions({ colors: ["rgb(" + e + ")", "rgba(" + e + ", 0.7)", "rgba(" + e + ", 0.4)", "rgb(243, 246, 248)"] }) }
var w = document.getElementById("total-invested");
if (w !== null) { w.innerHTML = ""; var K = { chart: { type: "line", height: 40, width: 100, sparkline: { enabled: !0 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { type: "gradient", gradient: { opacityFrom: .9, opacityTo: .9, stops: [0, 98] } }, series: [{ name: "Value", data: [20, 14, 19, 10, 23, 20, 22, 9, 12] }], yaxis: { min: 0, show: !1, axisBorder: { show: !1 } }, xaxis: { show: !1, axisBorder: { show: !1 } }, tooltip: { enabled: !1 }, colors: ["rgb(132, 90, 223)"] },
        K = new ApexCharts(document.querySelector("#total-invested"), K);
    K.render() }

function vr(e) { K.updateOptions({ colors: ["rgb(" + e + ")"] }) }
var w = document.getElementById("total-investments");
if (w !== null) { w.innerHTML = ""; var ve = { chart: { type: "line", height: 40, width: 100, sparkline: { enabled: !0 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { type: "gradient", gradient: { opacityFrom: .9, opacityTo: .9, stops: [0, 98] } }, series: [{ name: "Value", data: [20, 14, 19, 10, 23, 20, 22, 9, 12] }], yaxis: { min: 0, show: !1, axisBorder: { show: !1 } }, xaxis: { show: !1, axisBorder: { show: !1 } }, tooltip: { enabled: !1 }, colors: ["rgb(14, 168, 186)"] },
        ve = new ApexCharts(document.querySelector("#total-investments"), ve);
    ve.render() }
var w = document.getElementById("portfolio-value");
if (w !== null) { w.innerHTML = ""; var xe = { chart: { type: "line", height: 40, width: 100, sparkline: { enabled: !0 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { type: "gradient", gradient: { opacityFrom: .9, opacityTo: .9, stops: [0, 98] } }, series: [{ name: "Value", data: [20, 14, 19, 10, 23, 20, 22, 9, 12] }], yaxis: { min: 0, show: !1, axisBorder: { show: !1 } }, xaxis: { show: !1, axisBorder: { show: !1 } }, tooltip: { enabled: !1 }, colors: ["rgb(245, 184, 73)"] },
        xe = new ApexCharts(document.querySelector("#portfolio-value"), xe);
    xe.render() }
var w = document.getElementById("returns-rate");
if (w !== null) { w.innerHTML = ""; var Se = { chart: { type: "line", height: 40, width: 100, sparkline: { enabled: !0 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", colors: void 0, width: 1.5, dashArray: 0 }, fill: { type: "gradient", gradient: { opacityFrom: .9, opacityTo: .9, stops: [0, 98] } }, series: [{ name: "Value", data: [20, 14, 19, 10, 23, 20, 22, 9, 12] }], yaxis: { min: 0, show: !1, axisBorder: { show: !1 } }, xaxis: { show: !1, axisBorder: { show: !1 } }, tooltip: { enabled: !1 }, colors: ["rgb(38, 191, 148)"] },
        Se = new ApexCharts(document.querySelector("#returns-rate"), Se);
    Se.render() }
var w = document.getElementById("totalInvestmentsStats");
if (w !== null) { w.innerHTML = ""; var Be = { series: [{ name: "Invested", data: [
                    [13273596e5, 30.95],
                    [1327446e6, 31.34],
                    [13275324e5, 31.18],
                    [13276188e5, 31.05],
                    [1327878e6, 31],
                    [13279644e5, 30.95],
                    [13280508e5, 31.24],
                    [13281372e5, 31.29],
                    [13282236e5, 31.85],
                    [13284828e5, 31.86],
                    [13285692e5, 32.28],
                    [13286556e5, 32.1],
                    [1328742e6, 32.65],
                    [13288284e5, 32.21],
                    [13290876e5, 32.35],
                    [1329174e6, 32.44],
                    [13292604e5, 32.46],
                    [13293468e5, 32.86],
                    [13294332e5, 32.75],
                    [13297788e5, 32.54],
                    [13298652e5, 32.33],
                    [13299516e5, 32.97],
                    [1330038e6, 33.41],
                    [13302972e5, 33.27],
                    [13303836e5, 33.27],
                    [133047e7, 32.89],
                    [13305564e5, 33.1],
                    [13306428e5, 33.73],
                    [1330902e6, 33.22],
                    [13309884e5, 31.99],
                    [13310748e5, 32.41],
                    [13311612e5, 33.05],
                    [13312476e5, 33.64],
                    [13315068e5, 33.56],
                    [13315932e5, 34.22],
                    [13316796e5, 33.77],
                    [1331766e6, 34.17],
                    [13318524e5, 33.82],
                    [13321116e5, 34.51],
                    [1332198e6, 33.16],
                    [13322844e5, 33.56],
                    [13323708e5, 33.71],
                    [13324572e5, 33.81],
                    [13327128e5, 34.4],
                    [13327992e5, 34.63],
                    [13328856e5, 34.46],
                    [1332972e6, 34.48],
                    [13330584e5, 34.31],
                    [13333176e5, 34.7],
                    [1333404e6, 34.31],
                    [13334904e5, 33.46],
                    [13335768e5, 33.59],
                    [13339224e5, 33.22],
                    [13340088e5, 32.61],
                    [13340952e5, 33.01],
                    [13341816e5, 33.55],
                    [1334268e6, 33.18],
                    [13345272e5, 32.84],
                    [13346136e5, 33.84],
                    [13347e8, 33.39],
                    [13347864e5, 32.91],
                    [13348728e5, 33.06],
                    [1335132e6, 32.62],
                    [13352184e5, 32.4],
                    [13353048e5, 33.13],
                    [13353912e5, 33.26],
                    [13354776e5, 33.58],
                    [13357368e5, 33.55],
                    [13358232e5, 33.77],
                    [13359096e5, 33.76],
                    [1335996e6, 33.32],
                    [13360824e5, 32.61],
                    [13363416e5, 32.52],
                    [1336428e6, 32.67],
                    [13365144e5, 32.52],
                    [13366008e5, 31.92],
                    [13366872e5, 32.2],
                    [13369464e5, 32.23],
                    [13370328e5, 32.33],
                    [13371192e5, 32.36],
                    [13372056e5, 32.01],
                    [1337292e6, 31.31],
                    [13375512e5, 32.01],
                    [13376376e5, 32.01],
                    [1337724e6, 32.18],
                    [13378104e5, 31.54],
                    [13378968e5, 31.6],
                    [13382424e5, 32.05],
                    [13383288e5, 31.29],
                    [13384152e5, 31.05],
                    [13385016e5, 29.82],
                    [13387608e5, 30.31],
                    [13388472e5, 30.7],
                    [13389336e5, 31.69],
                    [133902e7, 31.32],
                    [13391064e5, 31.65],
                    [13393656e5, 31.13],
                    [1339452e6, 31.77],
                    [13395384e5, 31.79],
                    [13396248e5, 31.67],
                    [13397112e5, 32.39],
                    [13399704e5, 32.63],
                    [13400568e5, 32.89],
                    [13401432e5, 31.99],
                    [13402296e5, 31.23],
                    [1340316e6, 31.57],
                    [13405752e5, 30.84],
                    [13406616e5, 31.07],
                    [1340748e6, 31.41],
                    [13408344e5, 31.17],
                    [13409208e5, 32.37],
                    [134118e7, 32.19],
                    [13412664e5, 32.51],
                    [13414392e5, 32.53],
                    [13415256e5, 31.37],
                    [13417848e5, 30.43],
                    [13418712e5, 30.44],
                    [13419576e5, 30.2],
                    [1342044e6, 30.14],
                    [13421304e5, 30.65],
                    [13423896e5, 30.4],
                    [1342476e6, 30.65],
                    [13425624e5, 31.43],
                    [13426488e5, 31.89],
                    [13427352e5, 31.38],
                    [13429944e5, 30.64],
                    [13430808e5, 30.02],
                    [13431672e5, 30.33],
                    [13432536e5, 30.95],
                    [134334e7, 31.89],
                    [13435992e5, 31.01],
                    [13436856e5, 30.88],
                    [1343772e6, 30.69],
                    [13438584e5, 30.58],
                    [13439448e5, 32.02],
                    [1344204e6, 32.14],
                    [13442904e5, 32.37],
                    [13443768e5, 32.51],
                    [13444632e5, 32.65],
                    [13445496e5, 32.64],
                    [13448088e5, 32.27],
                    [13448952e5, 32.1],
                    [13449816e5, 32.91],
                    [1345068e6, 33.65],
                    [13451544e5, 33.8],
                    [13454136e5, 33.92],
                    [13455e8, 33.75],
                    [13455864e5, 33.84],
                    [13456728e5, 33.5],
                    [13457592e5, 32.26],
                    [13460184e5, 32.32],
                    [13461048e5, 32.06],
                    [13461912e5, 31.96],
                    [13462776e5, 31.46],
                    [1346364e6, 31.27],
                    [13467096e5, 31.43],
                    [1346796e6, 32.26],
                    [13468824e5, 32.79],
                    [13469688e5, 32.46],
                    [1347228e6, 32.13],
                    [13473144e5, 32.43],
                    [13474008e5, 32.42],
                    [13474872e5, 32.81],
                    [13475736e5, 33.34],
                    [13478328e5, 33.41],
                    [13479192e5, 32.57],
                    [13480056e5, 33.12],
                    [1348092e6, 34.53],
                    [13481784e5, 33.83],
                    [13484376e5, 33.41],
                    [1348524e6, 32.9],
                    [13486104e5, 32.53],
                    [13486968e5, 32.8],
                    [13487832e5, 32.44],
                    [13490424e5, 32.62],
                    [13491288e5, 32.57],
                    [13492152e5, 32.6],
                    [13493016e5, 32.68],
                    [1349388e6, 32.47],
                    [13496472e5, 32.23],
                    [13497336e5, 31.68],
                    [134982e7, 31.51],
                    [13499064e5, 31.78],
                    [13499928e5, 31.94],
                    [1350252e6, 32.33],
                    [13503384e5, 33.24],
                    [13504248e5, 33.44],
                    [13505112e5, 33.48],
                    [13505976e5, 33.24],
                    [13508568e5, 33.49],
                    [13509432e5, 33.31],
                    [13510296e5, 33.36],
                    [1351116e6, 33.4],
                    [13512024e5, 34.01],
                    [1351638e6, 34.02],
                    [13517244e5, 34.36],
                    [13518108e5, 34.39],
                    [135207e7, 34.24],
                    [13521564e5, 34.39],
                    [13522428e5, 33.47],
                    [13523292e5, 32.98],
                    [13524156e5, 32.9],
                    [13526748e5, 32.7],
                    [13527612e5, 32.54],
                    [13528476e5, 32.23],
                    [1352934e6, 32.64],
                    [13530204e5, 32.65],
                    [13532796e5, 32.92],
                    [1353366e6, 32.64],
                    [13534524e5, 32.84],
                    [13536252e5, 33.4],
                    [13538844e5, 33.3],
                    [13539708e5, 33.18],
                    [13540572e5, 33.88],
                    [13541436e5, 34.09],
                    [135423e7, 34.61],
                    [13544892e5, 34.7],
                    [13545756e5, 35.3],
                    [1354662e6, 35.4],
                    [13547484e5, 35.14],
                    [13548348e5, 35.48],
                    [1355094e6, 35.75],
                    [13551804e5, 35.54],
                    [13552668e5, 35.96],
                    [13553532e5, 35.53],
                    [13554396e5, 37.56],
                    [13556988e5, 37.42],
                    [13557852e5, 37.49],
                    [13558716e5, 38.09],
                    [1355958e6, 37.87],
                    [13560444e5, 37.71],
                    [13563036e5, 37.53],
                    [13564764e5, 37.55],
                    [13565628e5, 37.3],
                    [13566492e5, 36.9],
                    [13569084e5, 37.68],
                    [13570812e5, 38.34],
                    [13571676e5, 37.75],
                    [1357254e6, 38.13],
                    [13575132e5, 37.94],
                    [13575996e5, 38.14],
                    [1357686e6, 38.66],
                    [13577724e5, 38.62],
                    [13578588e5, 38.09],
                    [1358118e6, 38.16],
                    [13582044e5, 38.15],
                    [13582908e5, 37.88],
                    [13583772e5, 37.73],
                    [13584636e5, 37.98],
                    [13588092e5, 37.95],
                    [13588956e5, 38.25],
                    [1358982e6, 38.1],
                    [13590684e5, 38.32],
                    [13593276e5, 38.24],
                    [1359414e6, 38.52],
                    [13595004e5, 37.94],
                    [13595868e5, 37.83],
                    [13596732e5, 38.34],
                    [13599324e5, 38.1],
                    [13600188e5, 38.51],
                    [13601052e5, 38.4],
                    [13601916e5, 38.07],
                    [1360278e6, 39.12],
                    [13605372e5, 38.64],
                    [13606236e5, 38.89],
                    [136071e7, 38.81],
                    [13607964e5, 38.61],
                    [13608828e5, 38.63],
                    [13612284e5, 38.99],
                    [13613148e5, 38.77],
                    [13614012e5, 38.34],
                    [13614876e5, 38.55],
                    [13617468e5, 38.11],
                    [13618332e5, 38.59],
                    [13619196e5, 39.6]
                ] }], chart: { id: "area-datetime", fontFamily: "Roboto, Arial, sans-serif", type: "area", height: 320, zoom: { autoScaleYaxis: !0 }, toolbar: { show: !1 } }, grid: { borderColor: "#f3f3f3", strokeDashArray: 3 }, dataLabels: { enabled: !1 }, markers: { size: 0, style: "hollow" }, xaxis: { type: "datetime", min: new Date("01 Mar 2012").getTime(), tickAmount: 6 }, tooltip: { x: { format: "dd MMM yyyy" } }, colors: ["rgb(132, 90, 223)"], stroke: { width: [1.2], curve: ["smooth"] }, fill: { type: "gradient", gradient: { shadeIntensity: 1, opacityFrom: .5, opacityTo: .7, stops: [0, 100] } } },
        Dt = new ApexCharts(document.querySelector("#totalInvestmentsStats"), Be);
    Dt.render() }

function xr(e) { Dt.updateOptions({ colors: ["rgb(" + e + ")"] }) }
var w = document.getElementById("stocks-marketcap");
if (w !== null) { w.innerHTML = ""; var Be = { series: [{ data: [{ x: new Date(15387786e5), y: [6629.81, 6650.5, 6623.04, 6633.33] }, { x: new Date(15387804e5), y: [6632.01, 6643.59, 6620, 6630.11] }, { x: new Date(15387822e5), y: [6630.71, 6648.95, 6623.34, 6635.65] }, { x: new Date(1538784e6), y: [6635.65, 6651, 6629.67, 6638.24] }, { x: new Date(15387858e5), y: [6638.24, 6640, 6620, 6624.47] }, { x: new Date(15387876e5), y: [6624.53, 6636.03, 6621.68, 6624.31] }, { x: new Date(15387894e5), y: [6624.61, 6632.2, 6617, 6626.02] }, { x: new Date(15387912e5), y: [6627, 6627.62, 6584.22, 6603.02] }, { x: new Date(1538793e6), y: [6605, 6608.03, 6598.95, 6604.01] }, { x: new Date(15387948e5), y: [6604.5, 6614.4, 6602.26, 6608.02] }, { x: new Date(15387966e5), y: [6608.02, 6610.68, 6601.99, 6608.91] }, { x: new Date(15387984e5), y: [6608.91, 6618.99, 6608.01, 6612] }, { x: new Date(15388002e5), y: [6612, 6615.13, 6605.09, 6612] }, { x: new Date(1538802e6), y: [6612, 6624.12, 6608.43, 6622.95] }, { x: new Date(15388038e5), y: [6623.91, 6623.91, 6615, 6615.67] }, { x: new Date(15388056e5), y: [6618.69, 6618.74, 6610, 6610.4] }, { x: new Date(15388074e5), y: [6611, 6622.78, 6610.4, 6614.9] }, { x: new Date(15388092e5), y: [6614.9, 6626.2, 6613.33, 6623.45] }, { x: new Date(1538811e6), y: [6623.48, 6627, 6618.38, 6620.35] }, { x: new Date(15388128e5), y: [6619.43, 6620.35, 6610.05, 6615.53] }, { x: new Date(15388146e5), y: [6615.53, 6617.93, 6610, 6615.19] }, { x: new Date(15388164e5), y: [6615.19, 6621.6, 6608.2, 6620] }, { x: new Date(15388182e5), y: [6619.54, 6625.17, 6614.15, 6620] }, { x: new Date(153882e7), y: [6620.33, 6634.15, 6617.24, 6624.61] }, { x: new Date(15388218e5), y: [6625.95, 6626, 6611.66, 6617.58] }, { x: new Date(15388236e5), y: [6619, 6625.97, 6595.27, 6598.86] }, { x: new Date(15388254e5), y: [6598.86, 6598.88, 6570, 6587.16] }, { x: new Date(15388272e5), y: [6588.86, 6600, 6580, 6593.4] }, { x: new Date(1538829e6), y: [6593.99, 6598.89, 6585, 6587.81] }, { x: new Date(15388308e5), y: [6587.81, 6592.73, 6567.14, 6578] }, { x: new Date(15388326e5), y: [6578.35, 6581.72, 6567.39, 6579] }, { x: new Date(15388344e5), y: [6579.38, 6580.92, 6566.77, 6575.96] }, { x: new Date(15388362e5), y: [6575.96, 6589, 6571.77, 6588.92] }, { x: new Date(1538838e6), y: [6588.92, 6594, 6577.55, 6589.22] }, { x: new Date(15388398e5), y: [6589.3, 6598.89, 6589.1, 6596.08] }, { x: new Date(15388416e5), y: [6597.5, 6600, 6588.39, 6596.25] }, { x: new Date(15388434e5), y: [6598.03, 6600, 6588.73, 6595.97] }, { x: new Date(15388452e5), y: [6595.97, 6602.01, 6588.17, 6602] }, { x: new Date(1538847e6), y: [6602, 6607, 6596.51, 6599.95] }, { x: new Date(15388488e5), y: [6600.63, 6601.21, 6590.39, 6591.02] }, { x: new Date(15388506e5), y: [6591.02, 6603.08, 6591, 6591] }, { x: new Date(15388524e5), y: [6591, 6601.32, 6585, 6592] }, { x: new Date(15388542e5), y: [6593.13, 6596.01, 6590, 6593.34] }, { x: new Date(1538856e6), y: [6593.34, 6604.76, 6582.63, 6593.86] }, { x: new Date(15388578e5), y: [6593.86, 6604.28, 6586.57, 6600.01] }, { x: new Date(15388596e5), y: [6601.81, 6603.21, 6592.78, 6596.25] }, { x: new Date(15388614e5), y: [6596.25, 6604.2, 6590, 6602.99] }, { x: new Date(15388632e5), y: [6602.99, 6606, 6584.99, 6587.81] }, { x: new Date(1538865e6), y: [6587.81, 6595, 6583.27, 6591.96] }, { x: new Date(15388668e5), y: [6591.97, 6596.07, 6585, 6588.39] }, { x: new Date(15388686e5), y: [6587.6, 6598.21, 6587.6, 6594.27] }, { x: new Date(15388704e5), y: [6596.44, 6601, 6590, 6596.55] }, { x: new Date(15388722e5), y: [6598.91, 6605, 6596.61, 6600.02] }, { x: new Date(1538874e6), y: [6600.55, 6605, 6589.14, 6593.01] }, { x: new Date(15388758e5), y: [6593.15, 6605, 6592, 6603.06] }, { x: new Date(15388776e5), y: [6603.07, 6604.5, 6599.09, 6603.89] }, { x: new Date(15388794e5), y: [6604.44, 6604.44, 6600, 6603.5] }, { x: new Date(15388812e5), y: [6603.5, 6603.99, 6597.5, 6603.86] }, { x: new Date(1538883e6), y: [6603.85, 6605, 6600, 6604.07] }, { x: new Date(15388848e5), y: [6604.98, 6606, 6604.07, 6606] }] }], chart: { type: "candlestick", borderRadius: 20, height: 350, toolbar: { show: !1 } }, plotOptions: { candlestick: { colors: { upward: "rgb(132, 90, 223)", downward: "rgb(35, 183, 229)" } } }, title: { align: "left" }, grid: { borderColor: "#f1f1f1", strokeDashArray: 3 }, xaxis: { type: "datetime", axisBorder: { show: !1, color: "rgba(119, 119, 142, 0.05)", offsetX: 0, offsetY: 0 }, axisTicks: { show: !1, borderType: "solid", color: "rgba(119, 119, 142, 0.05)", width: 6, offsetX: 0, offsetY: 0 } }, yaxis: { tooltip: { enabled: !0 } } },
        Tt = new ApexCharts(document.querySelector("#stocks-marketcap"), Be);
    Tt.render() }

function Sr(e) { Tt.updateOptions({ plotOptions: { candlestick: { colors: { upward: "rgb(" + e + ")", downward: "rgb(35, 183, 229)" } } } }) }
var W = document.getElementById("courses-earnings");
if (W !== null) { W.innerHTML = ""; var kr = { series: [{ name: "Earnings", data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51] }, { name: "Students", data: [33, 21, 32, 37, 23, 32, 47, 31, 54, 32, 20, 38] }], chart: { height: 340, type: "bar" }, dataLabels: { enabled: !1 }, stroke: { width: [1.1, 1.1], show: !0, curve: ["smooth", "smooth"] }, grid: { borderColor: "#f3f3f3", strokeDashArray: 3 }, xaxis: { axisBorder: { color: "rgba(119, 119, 142, 0.05)" } }, legend: { show: !1 }, labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], markers: { size: 0 }, colors: ["rgb(132, 90, 223)", "#e9e9e9"], plotOptions: { bar: { columnWidth: "50%", borderRadius: 2 } } },
        Pt = new ApexCharts(document.querySelector("#courses-earnings"), kr);
    Pt.render() }

function qr(e) { Pt.updateOptions({ colors: ["rgb(" + e + ")", "#e9e9e9"] }) }
var W = document.getElementById("course-payouts");
if (W !== null) { W.innerHTML = ""; var Ar = { series: [{ name: "Paid", data: [55, 55, 42, 42, 55, 55, 38, 38, 53, 53, 35, 35], type: "line" }, { name: "UnPaid", data: [35, 35, 46, 46, 35, 35, 48, 48, 33, 33, 38, 38], type: "line" }], chart: { height: 270, toolbar: { show: !1 }, background: "none", fill: "#fff" }, grid: { borderColor: "#f2f6f7" }, colors: ["rgb(132, 90, 223)", "rgba(230, 83, 60,0.5)"], background: "transparent", dataLabels: { enabled: !1 }, stroke: { curve: "smooth", width: 2, dashArray: [0, 5] }, xaxis: { type: "month", categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec"] }, dataLabels: { enabled: !1 }, legend: { show: !0, position: "top" }, xaxis: { show: !1, axisBorder: { show: !1, color: "rgba(119, 119, 142, 0.05)", offsetX: 0, offsetY: 0 }, axisTicks: { show: !1, borderType: "solid", color: "rgba(119, 119, 142, 0.05)", width: 6, offsetX: 0, offsetY: 0 }, labels: { rotate: -90 } }, yaxis: { show: !1, axisBorder: { show: !1 }, axisTicks: { show: !1 } }, tooltip: { x: { format: "dd/MM/yy HH:mm" } } },
        Rt = new ApexCharts(document.querySelector("#course-payouts"), Ar);
    Rt.render() }

function Lr(e) { Rt.updateOptions({ colors: ["rgb(" + e + ")", "rgba(230, 83, 60,0.5)"] }) }
var G = document.getElementById("waterTrack");
if (G !== null) { G.innerHTML = ""; var Ee = { series: [{ data: [98, 110, 80, 145, 105, 112, 87, 148, 102] }], chart: { height: 115, type: "area", fontFamily: "Roboto, Arial, sans-serif", foreColor: "#5d6162", zoom: { enabled: !1 }, sparkline: { enabled: !0 } }, tooltip: { enabled: !0, x: { show: !1 }, y: { title: { formatter: function(e) { return "" } } }, marker: { show: !1 } }, dataLabels: { enabled: !1 }, stroke: { curve: "straight" }, title: { text: void 0 }, grid: { borderColor: "transparent" }, xaxis: { crosshairs: { show: !1 } }, colors: ["rgb(132, 90, 223)"], stroke: { width: [1] }, fill: { type: "gradient", gradient: { opacityFrom: .5, opacityTo: .2, stops: [0, 60] } } },
        Ot = new ApexCharts(document.querySelector("#waterTrack"), Ee);
    Ot.render() }

function Br(e) { Ot.updateOptions({ colors: ["rgb(" + e + ")"] }) }
var G = document.getElementById("sleepTrack");
if (G !== null) { G.innerHTML = ""; var Ee = { series: [{ data: [102, 148, 87, 112, 105, 145, 80, 110, 98] }], chart: { height: 115, type: "area", fontFamily: "Roboto, Arial, sans-serif", foreColor: "#5d6162", zoom: { enabled: !1 }, sparkline: { enabled: !0 } }, tooltip: { enabled: !0, x: { show: !1 }, y: { title: { formatter: function(t) { return "" } } }, marker: { show: !1 } }, dataLabels: { enabled: !1 }, stroke: { curve: "straight" }, title: { text: void 0 }, grid: { borderColor: "transparent" }, xaxis: { crosshairs: { show: !1 } }, colors: ["#64af6d"], stroke: { width: [1] }, fill: { type: "gradient", gradient: { opacityFrom: .5, opacityTo: .2, stops: [0, 60] } } },
        Er = new ApexCharts(document.querySelector("#sleepTrack"), Ee);
    Er.render() }(function() { var o = document.getElementById("btcCoin"); if (o !== null) { o.innerHTML = ""; var e = { series: [{ data: [34, 55, 41, 67, 22, 43, 21] }], chart: { sparkline: { enabled: !0 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 3, right: 6, blur: 3, color: ["#47bbed"], opacity: .2 }, type: "line", height: 20, width: 100 }, tooltip: { x: { show: !1 }, y: { title: { formatter: function(u) { return "" } } }, marker: { show: !1 } }, colors: ["#47bbed"], stroke: { width: [1.5], curve: ["smooth"] }, xaxis: { crosshairs: { show: !1 } }, fill: { type: "gradient", gradient: { opacityFrom: .9, opacityTo: .9, stops: [0, 98] } } },
            t = new ApexCharts(document.querySelector("#btcCoin"), e);
        t.render() } var o = document.getElementById("ethCoin"); if (o !== null) { o.innerHTML = ""; var e = { series: [{ data: [34, 55, 41, 47, 32, 53, 31] }], chart: { sparkline: { enabled: !0 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 3, right: 6, blur: 3, color: ["#28D193"], opacity: .2 }, type: "line", height: 20, width: 100 }, tooltip: { x: { show: !1 }, y: { title: { formatter: function(h) { return "" } } }, marker: { show: !1 } }, colors: ["#28D193"], stroke: { width: [1.5], curve: ["smooth"] }, xaxis: { crosshairs: { show: !1 } }, fill: { type: "gradient", gradient: { opacityFrom: .9, opacityTo: .9, stops: [0, 98] } } },
            r = new ApexCharts(document.querySelector("#ethCoin"), e);
        r.render() } var o = document.getElementById("dshCoin"); if (o !== null) { o.innerHTML = ""; var e = { series: [{ data: [31, 53, 32, 47, 41, 55, 44] }], chart: { sparkline: { enabled: !0 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 3, right: 6, blur: 3, color: ["#FF534D"], opacity: .2 }, type: "line", height: 20, width: 100 }, tooltip: { x: { show: !1 }, y: { title: { formatter: function(y) { return "" } } }, marker: { show: !1 } }, colors: ["#FF534D"], stroke: { width: [1.5], curve: ["smooth"] }, xaxis: { crosshairs: { show: !1 } }, fill: { type: "gradient", gradient: { opacityFrom: .9, opacityTo: .9, stops: [0, 98] } } },
            r = new ApexCharts(document.querySelector("#dshCoin"), e);
        r.render() } var o = document.getElementById("glmCoin"); if (o !== null) { o.innerHTML = ""; var e = { series: [{ data: [21, 43, 22, 45, 35, 55, 34] }], chart: { sparkline: { enabled: !0 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 3, right: 6, blur: 3, color: ["#FFBE14"], opacity: .2 }, type: "line", height: 20, width: 100 }, tooltip: { x: { show: !1 }, y: { title: { formatter: function(y) { return "" } } }, marker: { show: !1 } }, colors: ["#FFBE14"], stroke: { width: [1.5], curve: ["smooth"] }, xaxis: { crosshairs: { show: !1 } }, fill: { type: "gradient", gradient: { opacityFrom: .9, opacityTo: .9, stops: [0, 98] } } },
            r = new ApexCharts(document.querySelector("#glmCoin"), e);
        r.render() } var o = document.getElementById("totalRevenue"); if (o !== null) { o.innerHTML = ""; var e = { series: [{ name: "Revenue", data: [55, 55, 52, 52, 55, 55, 58, 58, 53, 53, 55, 55] }], chart: { height: 180, type: "area", sparkline: { enabled: !0 } }, dataLabels: { enabled: !1 }, stroke: { width: [1.4], show: !0, curve: ["smooth"] }, xaxis: { crosshairs: { show: !1 } }, legend: { show: !1 }, labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], markers: { size: 0 }, colors: ["#FFBE14"], fill: { type: "gradient", gradient: { shadeIntensity: 1, opacityFrom: .4, opacityTo: .7, stops: [0, 100] } } },
            r = new ApexCharts(document.querySelector("#totalRevenue"), e);
        r.render() } var o = document.getElementById("sessionsByDevice"); if (o !== null) { o.innerHTML = ""; var e = { series: [{ name: "Tablet", data: [
                        [10, 35, 80]
                    ] }, { name: "Mobile", data: [
                        [22, 10, 80]
                    ] }, { name: "Desktop", data: [
                        [25, 25, 150]
                    ] }], chart: { height: 350, type: "bubble", toolbar: { show: !1 } }, grid: { borderColor: "#f3f3f3", strokeDashArray: 3 }, colors: ["#ff8c33", "#28d193", "#4b9bfa"], dataLabels: { enabled: !1 }, legend: { show: !0, fontSize: "13px", labels: { colors: "#959595" }, markers: { width: 10, height: 10 } }, xaxis: { min: 0, max: 50, labels: { show: !1 }, axisBorder: { show: !1 } }, yaxis: { max: 50, labels: { show: !1 } } },
            l = new ApexCharts(document.querySelector("#sessionsByDevice"), e);
        l.render() } if (typeof jsVectorMap < "u") { var n = [{ name: "Russia", coords: [61, 105], style: { fill: "#28d193" } }, { name: "Greenland", coords: [72, -42], style: { fill: "#ff8c33" } }, { name: "Canada", coords: [56, -106], style: { fill: "#ff534d" } }, { name: "Palestine", coords: [31.5, 34.8], style: { fill: "#ffbe14" } }, { name: "Brazil", coords: [-14.235, -51.9253], style: { fill: "#4b9bfa" } }],
            o = document.getElementById("users-map");
        o !== null && (o.innerHTML = "", new jsVectorMap({ map: "world_merc", selector: "#users-map", markersSelectable: !0, onMarkerSelected(h, y, v) { console.log(h, y, v) }, labels: { markers: { render: function(h) { return h.name } } }, markers: n, markerStyle: { hover: { stroke: "#DDD", strokeWidth: 3, fill: "#FFF" }, selected: { fill: "#ff525d" } }, markerLabelStyle: { initial: { fontFamily: "Poppins", fontSize: 13, fontWeight: 500, fill: "#35373e" } } })) } })();

function Ir(e) { var t = { series: [{ data: [17, 22, 37, 47, 39, 28, 14], name: "Revenue" }], chart: { type: "bar", height: 235, toolbar: { show: !1 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 6, left: 6, blur: 3, color: "#000", opacity: .05 } }, plotOptions: { bar: { columnWidth: "35%", borderRadius: 4, horizontal: !1, colors: { ranges: [{ from: 41, to: 1 / 0, color: "rgb(" + e + ")" }, { from: 0, to: 40, color: "rgba(" + e + ", 0.2)" }] } } }, dataLabels: { enabled: !1 }, grid: { show: !1, borderColor: "transparent", padding: { top: 0, right: 0, bottom: 0, left: 0 }, yaxis: { lines: { show: !1 } } }, xaxis: { categories: ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"], colors: "#fff", axisBorder: { show: !1 }, axisTicks: { show: !1 }, labels: { rotate: -90, style: { fontFamily: "Inter, sans-serif" } } }, yaxis: { colors: "#fff", axisBorder: { show: !1 }, axisTicks: { show: !1 }, labels: { show: !1 } } };
    document.querySelector("#report").innerHTML = ""; var r = new ApexCharts(document.querySelector("#report"), t);
    r.render() }

function Cr(e) { var t = { series: [{ name: "Job Applied", type: "line", data: [25, 50, 30, 55, 20, 45, 30] }, { name: "Job Viewed", type: "area", data: [35, 25, 40, 30, 45, 35, 60] }], chart: { height: 348, type: "line", stacked: !1, toolbar: { show: !1 }, dropShadow: { enabled: !0, enabledOnSeries: void 0, top: 7, left: 1, blur: 3, color: "#000", opacity: .2 } }, colors: ["rgba(" + e + ", 1)", "rgba(" + e + ", 0.1)"], grid: { borderColor: "#e9edf4", padding: { top: 10, right: 0, bottom: 0, left: 0 } }, stroke: { width: [2, 2], curve: "smooth", dashArray: [0, 4] }, labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], markers: { size: 4, hover: { size: 5 } }, fill: { opacity: [.85, .25, 1], gradient: { inverseColors: !1, shadeIntensity: 1, shade: "light", type: "vertical", opacityFrom: .85, opacityTo: .55, stops: [0, 100, 100, 100] } }, legend: { show: !0, position: "top", fontFamily: "Inter, sans-serif", markers: { width: 10, height: 10 } }, xaxis: { type: "week", axisBorder: { show: !0, color: "rgba(119, 119, 142, 0.05)", offsetX: 0, offsetY: 0 }, axisTicks: { show: !0, borderType: "solid", color: "rgba(119, 119, 142, 0.05)", width: 6, offsetX: 0, offsetY: 0 }, labels: { rotate: -90 } }, yaxis: { title: { style: { color: "#adb5be", fontSize: "14px", fontFamily: "Inter, sans-serif", fontWeight: 600 } }, labels: { formatter: function(o) { return o.toFixed(0) + "" } } }, tooltip: { shared: !0, intersect: !1, y: { formatter: function(o) { return typeof o < "u" ? o.toFixed(0) + " points" : o } } } };
    document.querySelector("#views").innerHTML = ""; var r = new ApexCharts(document.querySelector("#views"), t);
    r.render() }
const Ie = 300,
    g = document.getElementById("sidebar");
let Y = document.querySelector(".main-content");
const Mr = document.querySelectorAll(".nav > ul > .slide.has-sub"),
    Dr = document.querySelectorAll(".nav > ul > .slide.has-sub > a"),
    Tr = document.querySelectorAll(".nav > ul > .slide.has-sub .slide.has-sub > a");
class Pr { constructor(t, r) { H(this, "instance", null);
        H(this, "reference", null);
        H(this, "popperTarget", null);
        this.init(t, r) }
    init(t, r) { this.reference = t, this.popperTarget = r, this.instance = Popper.createPopper(this.reference, this.popperTarget, { placement: "bottom", strategy: "relative", resize: !0, modifiers: [{ name: "computeStyles", options: { adaptive: !1 } }] }), document.addEventListener("click", l => this.clicker(l, this.popperTarget, this.reference), !1); const o = new ResizeObserver(() => { this.instance.update() });
        o.observe(this.popperTarget), o.observe(this.reference) }
    clicker(t, r, o) { g.classList.contains("collapsed") && !r.contains(t.target) && !o.contains(t.target) && this.hide() }
    hide() {} }
class Rr { constructor() { H(this, "subMenuPoppers", []);
        this.init() }
    init() { Mr.forEach(t => { this.subMenuPoppers.push(new Pr(t, t.lastElementChild)), this.closePoppers() }) }
    togglePopper(t) { window.getComputedStyle(t).visibility === "hidden" && window.getComputedStyle(t).visibility === void 0 ? t.style.visibility = "visible" : t.style.visibility = "hidden" }
    updatePoppers() { this.subMenuPoppers.forEach(t => { t.instance.state.elements.popper.style.display = "none", t.instance.update() }) }
    closePoppers() { this.subMenuPoppers.forEach(t => { t.hide() }) } }
const Z = (e, t = Ie) => { const { parentElement: r } = e;
        r.classList.remove("open"), e.style.transitionProperty = "height, margin, padding", e.style.transitionDuration = `${t}ms`, e.style.boxSizing = "border-box", e.style.height = `${e.offsetHeight}px`, e.offsetHeight, e.style.overflow = "hidden", e.style.height = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, window.setTimeout(() => { e.style.display = "none", e.style.removeProperty("height"), e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom"), e.style.removeProperty("overflow"), e.style.removeProperty("transition-duration"), e.style.removeProperty("transition-property") }, t) },
    Ht = (e, t = Ie) => { const { parentElement: r } = e;
        r.classList.add("open"), e.style.removeProperty("display"); let { display: o } = window.getComputedStyle(e);
        o === "none" && (o = "block"), e.style.display = o; const l = e.offsetHeight;
        e.style.overflow = "hidden", e.style.height = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, e.offsetHeight, e.style.boxSizing = "border-box", e.style.transitionProperty = "height, margin, padding", e.style.transitionDuration = `${t}ms`, e.style.height = `${l}px`, e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom"), window.setTimeout(() => { e.style.removeProperty("height"), e.style.removeProperty("overflow"), e.style.removeProperty("transition-property"), e.style.removeProperty("transition-duration") }, t) },
    Ft = (e, t = Ie) => { let r = document.querySelector("html"); if (!(r.getAttribute("data-nav-style") === "menu-hover" && r.getAttribute("data-toggled") === "menu-hover-closed" && window.innerWidth >= 992 || r.getAttribute("data-nav-style") === "icon-hover" && r.getAttribute("data-toggled") === "icon-hover-closed" && window.innerWidth >= 992) && e && e.nodeType != 3) return window.getComputedStyle(e).display === "none" ? Ht(e, t) : Z(e, t) };
new Rr;
const Or = document.querySelectorAll(".slide.has-sub.open");
Or.forEach(e => { e.lastElementChild.style.display = "block" });
Dr.forEach(e => { e.addEventListener("click", () => { let t = document.querySelector("html"); if (!(t.getAttribute("data-nav-style") === "menu-hover" && t.getAttribute("data-toggled") === "menu-hover-closed" && window.innerWidth >= 992 || t.getAttribute("data-nav-style") === "icon-hover" && t.getAttribute("data-toggled") === "icon-hover-closed" && window.innerWidth >= 992)) { const r = e.closest(".nav.sub-open");
            r && r.querySelectorAll(":scope > ul > .slide.has-sub > a").forEach(o => {
                (o.nextElementSibling.style.display === "block" || window.getComputedStyle(o.nextElementSibling).display === "block") && Z(o.nextElementSibling) }), Ft(e.nextElementSibling) } }) });
Tr.forEach(e => { document.querySelector("html"), e.addEventListener("click", () => { const t = e.closest(".slide-menu");
        t && t.querySelectorAll(":scope .slide.has-sub > a").forEach(r => { var o;
            r.nextElementSibling && ((o = r.nextElementSibling) == null ? void 0 : o.style.display) === "block" && Z(r.nextElementSibling) }), Ft(e.nextElementSibling) }) });
let ft, k;
(() => { let e = document.querySelector("html");
    ft = document.querySelector(".sidemenu-toggle"), ft.addEventListener("click", S); let t = document.querySelector(".main-content");
    window.innerWidth <= 992 ? t.addEventListener("click", J) : t.removeEventListener("click", J), k = [window.innerWidth], E(), e.getAttribute("data-nav-layout") === "horizontal" && window.innerWidth >= 992 ? (b(), t.addEventListener("click", b)) : t.removeEventListener("click", b), window.addEventListener("resize", O), Yr(), !localStorage.getItem("ynexlayout") && !localStorage.getItem("ynexnavstyles") && !localStorage.getItem("ynexverticalstyles") && !document.querySelector(".landing-body") && document.querySelector("html").getAttribute("data-nav-layout") !== "horizontal" && !e.getAttribute("data-vertical-style") && !e.getAttribute("data-nav-style") && Ce(), S(), (e.getAttribute("data-nav-style") === "menu-hover" || e.getAttribute("data-nav-style") === "icon-hover") && window.innerWidth >= 992 && b(), window.innerWidth < 992 && e.setAttribute("data-toggled", "close") })();

function O() { let e = document.querySelector("html"),
        t = document.querySelector(".main-content");
    k.push(window.innerWidth), k.length > 2 && k.shift(), k.length > 1 && (k[k.length - 1] < 992 && k[k.length - 2] >= 992 && (t.addEventListener("click", J), E(), S(), t.removeEventListener("click", b)), k[k.length - 1] >= 992 && k[k.length - 2] < 992 && (t.removeEventListener("click", J), S(), e.getAttribute("data-nav-layout") === "horizontal" ? (b(), t.addEventListener("click", b)) : t.removeEventListener("click", b), e.removeAttribute("data-toggled"))), ee() }

function J() { document.querySelector("html").setAttribute("data-toggled", "close"), document.querySelector("#responsive-overlay").classList.remove("active") }

function S() { let e = document.querySelector("html"),
        t = e.getAttribute("data-nav-layout"); if (window.innerWidth >= 992) { if (t === "vertical") { switch (g.removeEventListener("mouseenter", T), g.removeEventListener("mouseleave", P), g.removeEventListener("click", X), Y.removeEventListener("click", _), document.querySelectorAll(".main-menu li > .side-menu__item").forEach(n => n.removeEventListener("click", Me)), e.getAttribute("data-vertical-style")) {
                case "closed":
                    e.removeAttribute("data-nav-style"), e.getAttribute("data-toggled") === "close-menu-close" ? e.removeAttribute("data-toggled") : e.setAttribute("data-toggled", "close-menu-close"); break;
                case "overlay":
                    e.removeAttribute("data-nav-style"), e.getAttribute("data-toggled") === "icon-overlay-close" ? (e.removeAttribute("data-toggled", "icon-overlay-close"), g.removeEventListener("mouseenter", T), g.removeEventListener("mouseleave", P)) : window.innerWidth >= 992 ? (localStorage.getItem("ynexlayout") || e.setAttribute("data-toggled", "icon-overlay-close"), g.addEventListener("mouseenter", T), g.addEventListener("mouseleave", P)) : (g.removeEventListener("mouseenter", T), g.removeEventListener("mouseleave", P)); break;
                case "icontext":
                    e.removeAttribute("data-nav-style"), e.getAttribute("data-toggled") === "icon-text-close" ? (e.removeAttribute("data-toggled", "icon-text-close"), g.removeEventListener("click", X), Y.removeEventListener("click", _)) : (e.setAttribute("data-toggled", "icon-text-close"), window.innerWidth >= 992 ? (g.addEventListener("click", X), Y.addEventListener("click", _)) : (g.removeEventListener("click", X), Y.removeEventListener("click", _))); break;
                case "doublemenu":
                    if (e.removeAttribute("data-nav-style"), e.getAttribute("data-toggled") === "double-menu-open") e.setAttribute("data-toggled", "double-menu-close"), document.querySelector(".slide-menu") && document.querySelectorAll(".slide-menu").forEach(u => { u.classList.contains("double-menu-active") && u.classList.remove("double-menu-active") });
                    else { let n = document.querySelector(".side-menu__item.active");
                        n && (e.setAttribute("data-toggled", "double-menu-open"), n.nextElementSibling ? n.nextElementSibling.classList.add("double-menu-active") : document.querySelector("html").setAttribute("data-toggled", "double-menu-close")) }
                    Xr(); break;
                case "detached":
                    e.getAttribute("data-toggled") === "detached-close" ? (e.removeAttribute("data-toggled", "detached-close"), g.removeEventListener("mouseenter", T), g.removeEventListener("mouseleave", P)) : (e.setAttribute("data-toggled", "detached-close"), window.innerWidth >= 992 ? (g.addEventListener("mouseenter", T), g.addEventListener("mouseleave", P)) : (g.removeEventListener("mouseenter", T), g.removeEventListener("mouseleave", P))); break;
                case "default":
                    Ce(), e.removeAttribute("data-toggled") } switch (e.getAttribute("data-nav-style")) {
                case "menu-click":
                    e.getAttribute("data-toggled") === "menu-click-closed" ? e.removeAttribute("data-toggled") : e.setAttribute("data-toggled", "menu-click-closed"); break;
                case "menu-hover":
                    e.getAttribute("data-toggled") === "menu-hover-closed" ? (e.removeAttribute("data-toggled"), E()) : (e.setAttribute("data-toggled", "menu-hover-closed"), b()); break;
                case "icon-click":
                    e.getAttribute("data-toggled") === "icon-click-closed" ? e.removeAttribute("data-toggled") : e.setAttribute("data-toggled", "icon-click-closed"); break;
                case "icon-hover":
                    e.getAttribute("data-toggled") === "icon-hover-closed" ? (e.removeAttribute("data-toggled"), E()) : (e.setAttribute("data-toggled", "icon-hover-closed"), b()); break } } } else if (e.getAttribute("data-toggled") === "close") { e.setAttribute("data-toggled", "open"); let r = document.createElement("div");
        r.id = "responsive-overlay", setTimeout(() => { document.querySelector("html").getAttribute("data-toggled") == "open" && (document.querySelector("#responsive-overlay").classList.add("active"), document.querySelector("#responsive-overlay").addEventListener("click", () => { document.querySelector("#responsive-overlay").classList.remove("active"), console.log(r.id), J() })), window.addEventListener("resize", () => { window.screen.width >= 992 && document.querySelector("#responsive-overlay").classList.remove("active") }) }, 100) } else e.setAttribute("data-toggled", "close") }

function T() { document.querySelector("html").setAttribute("data-icon-overlay", "open") }

function P() { document.querySelector("html").removeAttribute("data-icon-overlay") }

function X() { document.querySelector("html").setAttribute("data-icon-text", "open") }

function _() { document.querySelector("html").removeAttribute("data-icon-text") }

function Hr() { let e = document.querySelector("html");
    e.setAttribute("data-nav-layout", "vertical"), e.setAttribute("data-vertical-style", "closed"), S() }

function Fr() { let e = document.querySelector("html");
    e.setAttribute("data-nav-layout", "vertical"), e.setAttribute("data-vertical-style", "detached"), S() }

function zr() { let e = document.querySelector("html");
    e.setAttribute("data-nav-layout", "vertical"), e.setAttribute("data-vertical-style", "icontext"), S() }

function Ce() { let e = document.querySelector("html");
    e.setAttribute("data-nav-layout", "vertical"), e.setAttribute("data-vertical-style", "overlay"), S(), E() }

function $r() { let e = document.querySelector("html");
    e.setAttribute("data-nav-layout", "vertical"), e.setAttribute("data-vertical-style", "doublemenu"), S(); const t = document.querySelectorAll(".main-menu > li > .side-menu__item"),
        r = document.createElement("div");
    r.className = "custome-tooltip", r.style.setProperty("position", "fixed"), r.style.setProperty("display", "none"), r.style.setProperty("padding", "0.5rem"), r.style.setProperty("font-weight", "500"), r.style.setProperty("font-size", "0.75rem"), r.style.setProperty("background-color", "rgb(15, 23 ,42)"), r.style.setProperty("color", "rgb(255, 255 ,255)"), r.style.setProperty("margin-inline-start", "45px"), r.style.setProperty("border-radius", "0.25rem"), r.style.setProperty("z-index", "99"), t.forEach(o => { o.addEventListener("mouseenter", () => { r.style.setProperty("display", "block"), r.textContent = o.querySelector(".side-menu__label").textContent, document.querySelector("html").getAttribute("data-vertical-style") == "doublemenu" && o.appendChild(r) }), o.addEventListener("mouseleave", () => { r.style.setProperty("display", "none"), r.textContent = o.querySelector(".side-menu__label").textContent, document.querySelector("html").getAttribute("data-vertical-style") == "doublemenu" && o.removeChild(r) }) }) }

function Wr() { let e = document.querySelector("html");
    e.setAttribute("data-nav-style", "menu-click"), e.removeAttribute("data-hor-style"), e.removeAttribute("data-vertical-style"), S(), e.getAttribute("data-nav-layout") === "vertical" && E() }

function Gr() { let e = document.querySelector("html");
    e.setAttribute("data-nav-style", "menu-hover"), e.removeAttribute("data-hor-style"), e.removeAttribute("data-vertical-style"), S(), e.getAttribute("data-toggled") === "menu-hover-closed" && b() }

function Jr() { let e = document.querySelector("html");
    e.setAttribute("data-nav-style", "icon-click"), S(), e.getAttribute("data-nav-layout") === "vertical" && E() }

function Nr() { document.querySelector("html").setAttribute("data-nav-style", "icon-hover"), S(), b() }

function E() { let e = window.location.pathname.split("/")[0];
    e = location.pathname == "/" ? "index" : location.pathname.substring(1), e = e.substring(e.lastIndexOf("/") + 1), document.querySelectorAll(".side-menu__item").forEach(r => { if (e === "/" && (e = "index"), r.getAttribute("href") === window.location.href) { r.classList.add("active"), r.parentElement.classList.add("active"); let o = r.closest("ul"); if (r.closest("ul:not(.main-menu)"), o) { if (o.classList.add("active"), o.previousElementSibling.classList.add("active"), o.parentElement.classList.add("active"), o.parentElement.classList.contains("has-sub")) { let l = o.parentElement.parentElement.parentElement;
                    l.classList.add("open", "active"), l.firstElementChild.classList.add("active"), l.children[1].style.display = "block", Array.from(l.children[1].children).map(n => { n.classList.contains("active") && (n.children[1].style.display = "block") }) }
                o.classList.contains("child1") && Ht(o), o = o.parentElement.closest("ul"), o && o.closest("ul:not(.main-menu)") && o.closest("ul:not(.main-menu)") } } }) }

function b() { document.querySelectorAll("ul.slide-menu").forEach(t => { let r = t.closest("ul"),
            o = t.closest("ul:not(.main-menu)"); if (r) { let l = r.closest("ul.main-menu"); for (; l;) r.classList.add("active"), Z(r), r = r.parentElement.closest("ul"), o = r.closest("ul:not(.main-menu)"), o || (l = !1) } }) }

function Yr() { let e = document.querySelector(".slide-left"),
        t = document.querySelector(".slide-right");

    function r() { let o = document.querySelectorAll(".slide"),
            l = document.querySelectorAll(".slide-menu");
        o.forEach((n, u) => { n.classList.contains("is-expanded") == !0 && n.classList.remove("is-expanded") }), l.forEach((n, u) => { n.classList.contains("open") == !0 && (n.classList.remove("open"), n.style.display = "none") }) }
    ee(), e.addEventListener("click", () => { let o = document.querySelector(".main-menu"),
            l = document.querySelector(".main-sidebar"),
            n = Math.ceil(Number(window.getComputedStyle(o).marginLeft.split("px")[0])),
            u = Math.ceil(Number(window.getComputedStyle(o).marginRight.split("px")[0])),
            h = l.offsetWidth;
        o.scrollWidth > l.offsetWidth ? document.querySelector("html").getAttribute("dir") !== "rtl" ? n < 0 && !(Math.abs(n) < h) ? (o.style.marginRight = 0, o.style.marginLeft = Number(o.style.marginLeft.split("px")[0]) + Math.abs(h) + "px", t.classList.remove("d-none")) : (n >= 0, o.style.marginLeft = "0px", e.classList.add("d-none"), t.classList.remove("d-none")) : u < 0 && !(Math.abs(u) < h) ? (o.style.marginLeft = 0, o.style.marginRight = Number(o.style.marginRight.split("px")[0]) + Math.abs(h) + "px", t.classList.remove("d-none")) : (u >= 0, o.style.marginRight = "0px", e.classList.add("d-none"), t.classList.remove("d-none")) : (document.querySelector(".main-menu").style.marginLeft = "0px", document.querySelector(".main-menu").style.marginRight = "0px", e.classList.add("d-none")); let y = document.querySelector(".main-menu > .slide.open"),
            v = document.querySelector(".main-menu > .slide.open >ul");
        y && y.classList.remove("open"), v && (v.style.display = "none"), r() }), t.addEventListener("click", () => { let o = document.querySelector(".main-menu"),
            l = document.querySelector(".main-sidebar"),
            n = Math.ceil(Number(window.getComputedStyle(o).marginLeft.split("px")[0])),
            u = Math.ceil(Number(window.getComputedStyle(o).marginRight.split("px")[0])),
            h = o.scrollWidth - l.offsetWidth,
            y = l.offsetWidth;
        o.scrollWidth > l.offsetWidth && (document.querySelector("html").getAttribute("dir") !== "rtl" ? Math.abs(h) > Math.abs(n) && (o.style.marginRight = 0, Math.abs(h) > Math.abs(n) + y || (y = Math.abs(h) - Math.abs(n), t.classList.add("d-none")), o.style.marginLeft = Number(o.style.marginLeft.split("px")[0]) - Math.abs(y) + "px", e.classList.remove("d-none")) : Math.abs(h) > Math.abs(u) && (o.style.marginLeft = 0, Math.abs(h) > Math.abs(u) + y || (y = Math.abs(h) - Math.abs(u), t.classList.add("d-none")), o.style.marginRight = Number(o.style.marginRight.split("px")[0]) - Math.abs(y) + "px", e.classList.remove("d-none"))); let v = document.querySelector(".main-menu > .slide.open"),
            B = document.querySelector(".main-menu > .slide.open >ul");
        v && v.classList.remove("open"), B && (B.style.display = "none"), r() }) }

function ee() { let e = document.querySelector(".main-menu"),
        t = document.querySelector(".main-sidebar"),
        r = document.querySelector(".slide-left"),
        o = document.querySelector(".slide-right"),
        l = Math.ceil(Number(window.getComputedStyle(e).marginLeft.split("px")[0])),
        n = Math.ceil(Number(window.getComputedStyle(e).marginRight.split("px")[0])),
        u = e.scrollWidth - t.offsetWidth;
    e.scrollWidth > t.offsetWidth ? (o.classList.remove("d-none"), r.classList.add("d-none")) : (o.classList.add("d-none"), r.classList.add("d-none"), e.style.marginLeft = "0px", e.style.marginRight = "0px"), document.querySelector("html").getAttribute("dir") !== "rtl" ? (e.scrollWidth > t.offsetWidth && Math.abs(u) < Math.abs(l) && (e.style.marginLeft = -u + "px", r.classList.remove("d-none"), o.classList.add("d-none")), l == 0 ? r.classList.add("d-none") : r.classList.remove("d-none")) : (e.scrollWidth > t.offsetWidth && Math.abs(u) < Math.abs(n) && (e.style.marginRight = -u + "px", r.classList.remove("d-none"), o.classList.add("d-none")), n == 0 ? r.classList.add("d-none") : r.classList.remove("d-none")), (l != 0 || n != 0) && r.classList.remove("d-none") }["switcher-icon-click", "switcher-icon-hover", "switcher-horizontal"].map(e => { document.getElementById(e) && document.getElementById(e).addEventListener("click", () => { let t = document.querySelector(".main-menu"),
            r = document.querySelector(".main-sidebar");
        setTimeout(() => { t.offsetWidth > r.offsetWidth ? document.getElementById("slide-right").classList.remove("d-none") : document.getElementById("slide-right").classList.add("d-none") }, 100) }) });

function Xr() { window.innerWidth >= 992 && (document.querySelector("html"), document.querySelectorAll(".main-menu > li > .side-menu__item").forEach(t => { t.addEventListener("click", Me) })) }

function Me() { var e = this; let t = document.querySelector("html"); var r = e.nextElementSibling;
    r && (r.classList.contains("double-menu-active") || (document.querySelector(".slide-menu") && document.querySelectorAll(".slide-menu").forEach(l => { l.classList.contains("double-menu-active") && (l.classList.remove("double-menu-active"), t.setAttribute("data-toggled", "double-menu-close")) }), r.classList.add("double-menu-active"), t.setAttribute("data-toggled", "double-menu-open"))) }
window.addEventListener("unload", () => { document.querySelector(".main-content").removeEventListener("click", b), window.removeEventListener("resize", O), document.querySelectorAll(".main-menu li > .side-menu__item").forEach(r => r.removeEventListener("click", Me)) });
let _r = () => { document.querySelectorAll(".side-menu__item").forEach(e => { if (e.classList.contains("active")) { let t = e.getBoundingClientRect();
            e.children[0] && e.parentElement.classList.contains("has-sub") && t.top > 435 && e.scrollIntoView({ behavior: "smooth" }) } }) };
setTimeout(() => { _r() }, 300);
document.querySelector(".main-content").addEventListener("click", () => { document.querySelectorAll(".slide-menu").forEach(e => {
        (document.querySelector("html").getAttribute("data-toggled") == "menu-click-closed" || document.querySelector("html").getAttribute("data-toggled") == "icon-click-closed") && (e.style.display = "none") }) });
let zt;
(function() { document.querySelector("html"), zt = document.querySelector(".main-content"), document.querySelector("#switcher-canvas") && (Zr(), jr(), L(), setTimeout(() => { L() }, 1e3)) })();

function jr() { let e, t, r, o, l, n, u, h, y, v, B, x, C, A, R, d, M, De, Te, Pe, Re, Oe, He, Fe, ze, $e, We, Ge, Je, Ne, Ye, Xe, _e, je, Ve, Ue, Ke, Qe, Ze, et, tt, rt, ot, at, lt, nt, st, it, ct, dt, ut, mt, ht, a = document.querySelector("html");
    l = document.querySelector("#switcher-light-theme"), n = document.querySelector("#switcher-dark-theme"), e = document.querySelector("#switcher-ltr"), t = document.querySelector("#switcher-rtl"), r = document.querySelector("#switcher-vertical"), o = document.querySelector("#switcher-horizontal"), u = document.querySelector("#switcher-boxed"), h = document.querySelector("#switcher-full-width"), x = document.querySelector("#switcher-menu-fixed"), v = document.querySelector("#switcher-menu-scroll"), B = document.querySelector("#switcher-header-fixed"), y = document.querySelector("#switcher-header-scroll"), C = document.querySelector("#switcher-header-light"), A = document.querySelector("#switcher-header-dark"), R = document.querySelector("#switcher-header-primary"), d = document.querySelector("#switcher-header-gradient"), Oe = document.querySelector("#switcher-header-transparent"), M = document.querySelector("#switcher-menu-light"), De = document.querySelector("#switcher-menu-dark"), Te = document.querySelector("#switcher-menu-primary"), Pe = document.querySelector("#switcher-menu-gradient"), Re = document.querySelector("#switcher-menu-transparent"), He = document.querySelector("#switcher-regular"), Fe = document.querySelector("#switcher-classic"), ze = document.querySelector("#switcher-modern"), $e = document.querySelector("#switcher-default-menu"), Xe = document.querySelector("#switcher-menu-click"), _e = document.querySelector("#switcher-menu-hover"), je = document.querySelector("#switcher-icon-click"), Ve = document.querySelector("#switcher-icon-hover"), We = document.querySelector("#switcher-closed-menu"), Ge = document.querySelector("#switcher-icontext-menu"), Ne = document.querySelector("#switcher-icon-overlay"), Ye = document.querySelector("#switcher-double-menu"), Je = document.querySelector("#switcher-detached"), document.querySelector("#resetbtn"), Ue = document.querySelector("#switcher-primary"), Ke = document.querySelector("#switcher-primary1"), Qe = document.querySelector("#switcher-primary2"), Ze = document.querySelector("#switcher-primary3"), et = document.querySelector("#switcher-primary4"), tt = document.querySelector("#switcher-background"), rt = document.querySelector("#switcher-background1"), ot = document.querySelector("#switcher-background2"), at = document.querySelector("#switcher-background3"), lt = document.querySelector("#switcher-background4"), nt = document.querySelector("#switcher-bg-img"), st = document.querySelector("#switcher-bg-img1"), it = document.querySelector("#switcher-bg-img2"), ct = document.querySelector("#switcher-bg-img3"), dt = document.querySelector("#switcher-bg-img4"), ut = document.querySelector("#reset-all"), mt = document.querySelector("#switcher-loader-enable"), ht = document.querySelector("#switcher-loader-disable"), Ue.addEventListener("click", () => { localStorage.setItem("primaryRGB", "58, 88, 146"), a.style.setProperty("--primary-rgb", "58, 88, 146"), q() }), Ke.addEventListener("click", () => { localStorage.setItem("primaryRGB", "92, 144, 163"), a.style.setProperty("--primary-rgb", "92, 144, 163"), q() }), Qe.addEventListener("click", () => { localStorage.setItem("primaryRGB", "161, 90, 223"), a.style.setProperty("--primary-rgb", "161, 90, 223"), q() }), Ze.addEventListener("click", () => { localStorage.setItem("primaryRGB", "78, 172, 76"), a.style.setProperty("--primary-rgb", "78, 172, 76"), q() }), et.addEventListener("click", () => { localStorage.setItem("primaryRGB", "223, 90, 90"), a.style.setProperty("--primary-rgb", "223, 90, 90"), q() }), tt.addEventListener("click", () => { localStorage.setItem("bodyBgRGB", "20, 30, 96"), localStorage.setItem("bodylightRGB", "25, 38, 101"), a.setAttribute("data-theme-mode", "dark"), a.setAttribute("data-menu-styles", "dark"), a.setAttribute("data-header-styles", "dark"), document.querySelector("html").style.setProperty("--body-bg-rgb", localStorage.bodyBgRGB), document.querySelector("html").style.setProperty("--body-bg-rgb2", localStorage.bodylightRGB), document.querySelector("html").style.setProperty("--light-rgb", "25, 38, 101"), document.querySelector("html").style.setProperty("--form-control-bg", "rgb(25, 38, 101)"), document.querySelector("html").style.setProperty("--input-border", "rgba(255,255,255,0.1)"), document.querySelector("#switcher-dark-theme").checked = !0, document.querySelector("#switcher-menu-dark").checked = !0, document.querySelector("#switcher-header-dark").checked = !0, localStorage.setItem("ynexMenu", "dark"), localStorage.setItem("ynexHeader", "dark") }), rt.addEventListener("click", () => { localStorage.setItem("bodyBgRGB", "8, 78, 115"), localStorage.setItem("bodylightRGB", "13, 86, 120"), a.setAttribute("data-theme-mode", "dark"), a.setAttribute("data-menu-styles", "dark"), a.setAttribute("data-header-styles", "dark"), document.querySelector("html").style.setProperty("--body-bg-rgb", localStorage.bodyBgRGB), document.querySelector("html").style.setProperty("--body-bg-rgb2", localStorage.bodylightRGB), document.querySelector("html").style.setProperty("--light-rgb", "13, 86, 120"), document.querySelector("html").style.setProperty("--form-control-bg", "rgb(13, 86, 120)"), document.querySelector("html").style.setProperty("--input-border", "rgba(255,255,255,0.1)"), document.querySelector("#switcher-dark-theme").checked = !0, document.querySelector("#switcher-menu-dark").checked = !0, document.querySelector("#switcher-header-dark").checked = !0, localStorage.setItem("ynexMenu", "dark"), localStorage.setItem("ynexHeader", "dark") }), ot.addEventListener("click", () => { localStorage.setItem("bodyBgRGB", "90, 37, 135"), localStorage.setItem("bodylightRGB", "95, 45, 140"), a.setAttribute("data-theme-mode", "dark"), a.setAttribute("data-menu-styles", "dark"), a.setAttribute("data-header-styles", "dark"), document.querySelector("html").style.setProperty("--body-bg-rgb", localStorage.bodyBgRGB), document.querySelector("html").style.setProperty("--body-bg-rgb2", localStorage.bodylightRGB), document.querySelector("html").style.setProperty("--light-rgb", "95, 45, 140"), document.querySelector("html").style.setProperty("--form-control-bg", "rgb(95, 45, 140)"), document.querySelector("html").style.setProperty("--input-border", "rgba(255,255,255,0.1)"), document.querySelector("#switcher-dark-theme").checked = !0, document.querySelector("#switcher-menu-dark").checked = !0, document.querySelector("#switcher-header-dark").checked = !0, localStorage.setItem("ynexMenu", "dark"), localStorage.setItem("ynexHeader", "dark") }), at.addEventListener("click", () => { localStorage.setItem("bodyBgRGB", "24, 101, 51"), localStorage.setItem("bodylightRGB", "29, 109, 56"), a.setAttribute("data-theme-mode", "dark"), a.setAttribute("data-menu-styles", "dark"), a.setAttribute("data-header-styles", "dark"), document.querySelector("html").style.setProperty("--body-bg-rgb", localStorage.bodyBgRGB), document.querySelector("html").style.setProperty("--body-bg-rgb2", localStorage.bodylightRGB), document.querySelector("html").style.setProperty("--light-rgb", "29, 109, 56"), document.querySelector("html").style.setProperty("--form-control-bg", "rgb(29, 109, 56)"), document.querySelector("html").style.setProperty("--input-border", "rgba(255,255,255,0.1)"), document.querySelector("#switcher-dark-theme").checked = !0, document.querySelector("#switcher-menu-dark").checked = !0, document.querySelector("#switcher-header-dark").checked = !0, localStorage.setItem("ynexMenu", "dark"), localStorage.setItem("ynexHeader", "dark") }), lt.addEventListener("click", () => { localStorage.setItem("bodyBgRGB", "120, 66, 20"), localStorage.setItem("bodylightRGB", "125, 74, 25"), a.setAttribute("data-theme-mode", "dark"), a.setAttribute("data-menu-styles", "dark"), a.setAttribute("data-header-styles", "dark"), document.querySelector("html").style.setProperty("--body-bg-rgb", localStorage.bodyBgRGB), document.querySelector("html").style.setProperty("--body-bg-rgb2", localStorage.bodylightRGB), document.querySelector("html").style.setProperty("--light-rgb", "125, 74, 25"), document.querySelector("html").style.setProperty("--form-control-bg", "rgb(125, 74, 25)"), document.querySelector("html").style.setProperty("--input-border", "rgba(255,255,255,0.1)"), document.querySelector("#switcher-dark-theme").checked = !0, document.querySelector("#switcher-menu-dark").checked = !0, document.querySelector("#switcher-header-dark").checked = !0, localStorage.setItem("ynexMenu", "dark"), localStorage.setItem("ynexHeader", "dark") }), nt.addEventListener("click", () => { a.setAttribute("data-bg-img", "bgimg1"), localStorage.setItem("bgimg", "bgimg1") }), st.addEventListener("click", () => { a.setAttribute("data-bg-img", "bgimg2"), localStorage.setItem("bgimg", "bgimg2") }), it.addEventListener("click", () => { a.setAttribute("data-bg-img", "bgimg3"), localStorage.setItem("bgimg", "bgimg3") }), ct.addEventListener("click", () => { a.setAttribute("data-bg-img", "bgimg4"), localStorage.setItem("bgimg", "bgimg4") }), dt.addEventListener("click", () => { a.setAttribute("data-bg-img", "bgimg5"), localStorage.setItem("bgimg", "bgimg5") }), l.addEventListener("click", () => { Wt(), localStorage.setItem("ynexHeader", "light"), localStorage.removeItem("bodylightRGB"), localStorage.removeItem("bodyBgRGB"), localStorage.removeItem("ynexMenu") }), n.addEventListener("click", () => { Ur(), localStorage.setItem("ynexMenu", "dark"), localStorage.setItem("ynexHeader", "dark") }), M.addEventListener("click", () => { a.setAttribute("data-menu-styles", "light"), localStorage.setItem("ynexMenu", "light") }), Te.addEventListener("click", () => { a.setAttribute("data-menu-styles", "color"), localStorage.setItem("ynexMenu", "color") }), De.addEventListener("click", () => { a.setAttribute("data-menu-styles", "dark"), localStorage.setItem("ynexMenu", "dark") }), Pe.addEventListener("click", () => { a.setAttribute("data-menu-styles", "gradient"), localStorage.setItem("ynexMenu", "gradient") }), Re.addEventListener("click", () => { a.setAttribute("data-menu-styles", "transparent"), localStorage.setItem("ynexMenu", "transparent") }), C.addEventListener("click", () => { a.setAttribute("data-header-styles", "light"), localStorage.setItem("ynexHeader", "light") }), R.addEventListener("click", () => { a.setAttribute("data-header-styles", "color"), localStorage.setItem("ynexHeader", "color") }), A.addEventListener("click", () => { a.setAttribute("data-header-styles", "dark"), localStorage.setItem("ynexHeader", "dark") }), d.addEventListener("click", () => { a.setAttribute("data-header-styles", "gradient"), localStorage.setItem("ynexHeader", "gradient") }), Oe.addEventListener("click", () => { a.setAttribute("data-header-styles", "transparent"), localStorage.setItem("ynexHeader", "transparent") }), h.addEventListener("click", () => { a.setAttribute("data-width", "fullwidth"), localStorage.setItem("ynexfullwidth", !0), localStorage.removeItem("ynexboxed") }), u.addEventListener("click", () => { a.setAttribute("data-width", "boxed"), localStorage.setItem("ynexboxed", !0), localStorage.removeItem("ynexfullwidth"), ee() }), He.addEventListener("click", () => { a.setAttribute("data-page-style", "regular"), localStorage.setItem("ynexregular", !0), localStorage.removeItem("ynexclassic"), localStorage.removeItem("ynexmodern") }), Fe.addEventListener("click", () => { a.setAttribute("data-page-style", "classic"), localStorage.setItem("ynexclassic", !0), localStorage.removeItem("ynexregular"), localStorage.removeItem("ynexmodern") }), ze.addEventListener("click", () => { a.setAttribute("data-page-style", "modern"), localStorage.setItem("ynexmodern", !0), localStorage.removeItem("ynexregular"), localStorage.removeItem("ynexclassic") }), B.addEventListener("click", () => { a.setAttribute("data-header-position", "fixed"), localStorage.setItem("ynexheaderfixed", !0), localStorage.removeItem("ynexheaderscrollable") }), y.addEventListener("click", () => { a.setAttribute("data-header-position", "scrollable"), localStorage.setItem("ynexheaderscrollable", !0), localStorage.removeItem("ynexheaderfixed") }), x.addEventListener("click", () => { a.setAttribute("data-menu-position", "fixed"), localStorage.setItem("ynexmenufixed", !0), localStorage.removeItem("ynexmenuscrollable") }), v.addEventListener("click", () => { a.setAttribute("data-menu-position", "scrollable"), localStorage.setItem("ynexmenuscrollable", !0), localStorage.removeItem("ynexmenufixed") }), $e.addEventListener("click", () => { a.setAttribute("data-vertical-style", "default"), a.setAttribute("data-nav-layout", "vertical"), S(), localStorage.removeItem("ynexverticalstyles"), document.querySelectorAll(".main-menu>li.open").forEach(s => { s.classList.contains("active") || (s.classList.remove("open"), s.querySelector("ul").style.display = "none") }) }), We.addEventListener("click", () => { Hr(), localStorage.setItem("ynexverticalstyles", "closed"), document.querySelectorAll(".main-menu>li.open").forEach(s => { s.classList.contains("active") || (s.classList.remove("open"), s.querySelector("ul").style.display = "none") }) }), Je.addEventListener("click", () => { Fr(), localStorage.setItem("ynexverticalstyles", "detached") }), Ge.addEventListener("click", () => { zr(), localStorage.setItem("ynexverticalstyles", "icontext") }), Ne.addEventListener("click", () => { Ce(), localStorage.setItem("ynexverticalstyles", "overlay"), document.querySelectorAll(".main-menu>li.open").forEach(s => { s.classList.contains("active") || (s.classList.remove("open"), s.querySelector("ul").style.display = "none") }) }), Ye.addEventListener("click", () => { $r(), localStorage.setItem("ynexverticalstyles", "doublemenu") }), Xe.addEventListener("click", () => { a.removeAttribute("data-vertical-style"), Wr(), localStorage.setItem("ynexnavstyles", "menu-click"), localStorage.removeItem("ynexverticalstyles"), document.querySelectorAll(".main-menu>li.open").forEach(s => { s.classList.contains("active") || (s.classList.remove("open"), s.querySelector("ul").style.display = "none") }), document.querySelector("html").getAttribute("data-nav-layout") == "horizontal" && (document.querySelector(".main-menu").style.marginLeft = "0px", document.querySelector(".main-menu").style.marginRight = "0px", O()) }), _e.addEventListener("click", () => { a.removeAttribute("data-vertical-style"), Gr(), localStorage.setItem("ynexnavstyles", "menu-hover"), localStorage.removeItem("ynexverticalstyles"), document.querySelector("html").getAttribute("data-nav-layout") == "horizontal" && (document.querySelector(".main-menu").style.marginLeft = "0px", document.querySelector(".main-menu").style.marginRight = "0px", O()) }), je.addEventListener("click", () => { a.removeAttribute("data-vertical-style"), Jr(), localStorage.setItem("ynexnavstyles", "icon-click"), localStorage.removeItem("ynexverticalstyles"), document.querySelector("html").getAttribute("data-nav-layout") == "horizontal" && (document.querySelector(".main-menu").style.marginLeft = "0px", document.querySelector(".main-menu").style.marginRight = "0px", O(), document.querySelector("#slide-left").classList.add("d-none")), document.querySelectorAll(".main-menu>li.open").forEach(s => { s.classList.contains("active") || (s.classList.remove("open"), s.querySelector("ul").style.display = "none") }) }), Ve.addEventListener("click", () => { a.removeAttribute("data-vertical-style"), Nr(), localStorage.setItem("ynexnavstyles", "icon-hover"), localStorage.removeItem("ynexverticalstyles"), document.querySelector("html").getAttribute("data-nav-layout") == "horizontal" && (document.querySelector(".main-menu").style.marginLeft = "0px", document.querySelector(".main-menu").style.marginRight = "0px", O(), document.querySelector("#slide-left").classList.add("d-none")) }), r.addEventListener("click", () => { let s = document.querySelector(".main-content");
        localStorage.removeItem("ynexlayout"), localStorage.setItem("ynexverticalstyles", "default"), Gt(), E(), s.removeEventListener("click", b), document.querySelector(".main-menu").style.marginLeft = "0px", document.querySelector(".main-menu").style.marginRight = "0px", document.querySelectorAll(".slide").forEach(te => { te.classList.contains("open") && !te.classList.contains("active") && (te.querySelector("ul").style.display = "none") }) }), o.addEventListener("click", () => { let s = document.querySelector(".main-content");
        a.removeAttribute("data-vertical-style"), localStorage.setItem("ynexlayout", "horizontal"), localStorage.removeItem("ynexverticalstyles"), Kr(), b(), s.addEventListener("click", b) }), t.addEventListener("click", () => { localStorage.setItem("ynexrtl", !0), localStorage.removeItem("ynexltr"), Vr(), document.querySelector(".noUi-target") && (console.log("working"), document.querySelectorAll(".noUi-origin").forEach(s => { s.classList.add("transform-none") })) }), e.addEventListener("click", () => { localStorage.setItem("ynexltr", !0), localStorage.removeItem("ynexrtl"), $t(), document.querySelector(".noUi-target") && document.querySelectorAll(".noUi-origin").forEach(s => { s.classList.remove("transform-none") }) }), ut.addEventListener("click", () => { Qr(), E(), document.querySelector("html").setAttribute("data-menu-styles", "dark"), document.querySelector("#switcher-menu-dark").checked = !0, document.querySelectorAll(".slide").forEach(s => { s.classList.contains("open") && !s.classList.contains("active") && (s.querySelector("ul").style.display = "none") }) }), mt.onclick = () => { document.querySelector("html").setAttribute("loader", "enable"), localStorage.setItem("loaderEnable", "true") }, ht.onclick = () => { document.querySelector("html").setAttribute("loader", "disable"), localStorage.setItem("loaderEnable", "false") } }

function $t() { var t; let e = document.querySelector("html");
    document.querySelector("#style").href.includes("bootstrap.min.css") || (t = document.querySelector("#style")) == null || t.setAttribute("href", "https://laravelui.spruko.com/ynex/build/assets/libs/bootstrap/css/bootstrap.min.css"), e.setAttribute("dir", "ltr"), document.querySelector("#switcher-ltr").checked = !0, L() }

function Vr() { var t;
    document.querySelector("html").setAttribute("dir", "rtl"), (t = document.querySelector("#style")) == null || t.setAttribute("href", "https://laravelui.spruko.com/ynex/build/assets/libs/bootstrap/css/bootstrap.rtl.min.css"), L() }

function Wt() { let e = document.querySelector("html");
    e.setAttribute("data-theme-mode", "light"), e.setAttribute("data-header-styles", "light"), localStorage.getItem("ynexlayout") == "horizontal" && e.setAttribute("data-menu-styles", "light"), localStorage.getItem("primaryRGB") || e.setAttribute("style", ""), document.querySelector("#switcher-light-theme").checked = !0, document.querySelector("#switcher-menu-light").checked = !0, document.querySelector("#switcher-header-light").checked = !0, q(), localStorage.removeItem("ynexdarktheme"), localStorage.removeItem("ynexbgColor"), localStorage.removeItem("ynexheaderbg"), localStorage.removeItem("ynexbgwhite"), localStorage.removeItem("ynexmenubg"), localStorage.removeItem("ynexmenubg"), L(), e.style.removeProperty("--body-bg-rgb"), e.style.removeProperty("--body-bg-rgb2"), e.style.removeProperty("--light-rgb"), e.style.removeProperty("--form-control-bg"), e.style.removeProperty("--input-border"), document.querySelector("#switcher-background4").checked = !1, document.querySelector("#switcher-background3").checked = !1, document.querySelector("#switcher-background2").checked = !1, document.querySelector("#switcher-background1").checked = !1, document.querySelector("#switcher-background").checked = !1, document.querySelector("#switcher-menu-light").checked = !0, document.querySelector("#switcher-header-light").checked = !0 }

function Ur() { let e = document.querySelector("html");
    e.setAttribute("data-theme-mode", "dark"), e.setAttribute("data-header-styles", "dark"), e.setAttribute("data-menu-styles", "dark"), localStorage.getItem("primaryRGB") || e.setAttribute("style", ""), document.querySelector("#switcher-menu-dark").checked = !0, document.querySelector("#switcher-header-dark").checked = !0, document.querySelector("html").style.removeProperty("--body-bg-rgb"), document.querySelector("html").style.removeProperty("--body-bg-rgb2"), document.querySelector("html").style.removeProperty("--light-rgb"), document.querySelector("html").style.removeProperty("--form-control-bg"), document.querySelector("html").style.removeProperty("--input-border"), q(), localStorage.setItem("ynexdarktheme", !0), localStorage.removeItem("ynexlighttheme"), localStorage.removeItem("bodyBgRGB"), localStorage.removeItem("ynexbgColor"), localStorage.removeItem("ynexheaderbg"), localStorage.removeItem("ynexbgwhite"), localStorage.removeItem("ynexmenubg"), L(), document.querySelector("#switcher-background4").checked = !1, document.querySelector("#switcher-background3").checked = !1, document.querySelector("#switcher-background2").checked = !1, document.querySelector("#switcher-background1").checked = !1, document.querySelector("#switcher-background").checked = !1, document.querySelector("#switcher-menu-dark").checked = !0, document.querySelector("#switcher-header-dark").checked = !0 }

function Gt() { let e = document.querySelector("html");
    e.setAttribute("data-nav-layout", "vertical"), e.setAttribute("data-vertical-style", "overlay"), e.removeAttribute("data-nav-style"), localStorage.removeItem("ynexnavstyles"), e.removeAttribute("data-toggled"), document.querySelector("#switcher-vertical").checked = !0, document.querySelector("#switcher-menu-click").checked = !1, document.querySelector("#switcher-menu-hover").checked = !1, document.querySelector("#switcher-icon-click").checked = !1, document.querySelector("#switcher-icon-hover").checked = !1, L(), localStorage.ynexMenu || e.setAttribute("data-menu-styles", "dark") }

function Kr() { document.querySelector("#switcher-horizontal").checked = !0, document.querySelector("#switcher-menu-click").checked = !0; let e = document.querySelector("html");
    e.setAttribute("data-nav-layout", "horizontal"), e.removeAttribute("data-vertical-style"), e.getAttribute("data-nav-style") || e.setAttribute("data-nav-style", "menu-click"), !localStorage.ynexMenu && !localStorage.bodylightRGB && (e.setAttribute("data-menu-styles", "light"), document.querySelector("#switcher-menu-light").checked = !0, L()), L(), ee() }

function Qr() { let e = document.querySelector("html");
    localStorage.getItem("ynexlayout") == "horizontal" && (document.querySelector(".main-menu").style.display = "block"), L(), localStorage.clear(), Wt(), document.querySelector("html").removeAttribute("style"), e.removeAttribute("data-nav-style"), e.removeAttribute("data-menu-position"), e.removeAttribute("data-header-position"), e.removeAttribute("data-width"), e.removeAttribute("data-page-style"), e.removeAttribute("data-bg-img"), e.style.removeProperty("--primary-rgb"), e.style.removeProperty("--body-bg-rgb"), $t(), Gt(), zt.removeEventListener("click", b), document.querySelector("#switcher-classic").checked = !1, document.querySelector("#switcher-modern").checked = !1, document.querySelector("#switcher-regular").checked = !0, document.querySelector("#switcher-full-width").checked = !0, document.querySelector("#switcher-boxed").checked = !1, document.querySelector("#switcher-menu-fixed").checked = !0, document.querySelector("#switcher-menu-scroll").checked = !1, document.querySelector("#switcher-header-fixed").checked = !0, document.querySelector("#switcher-header-scroll").checked = !1, document.querySelector("#switcher-default-menu").checked = !0, document.querySelector("#switcher-closed-menu").checked = !1, document.querySelector("#switcher-icontext-menu").checked = !1, document.querySelector("#switcher-icon-overlay").checked = !1, document.querySelector("#switcher-detached").checked = !1, document.querySelector("#switcher-double-menu").checked = !1, document.querySelector("#switcher-primary").checked = !1, document.querySelector("#switcher-primary1").checked = !1, document.querySelector("#switcher-primary2").checked = !1, document.querySelector("#switcher-primary3").checked = !1, document.querySelector("#switcher-primary4").checked = !1, document.querySelector("#switcher-background").checked = !1, document.querySelector("#switcher-background1").checked = !1, document.querySelector("#switcher-background2").checked = !1, document.querySelector("#switcher-background3").checked = !1, document.querySelector("#switcher-background4").checked = !1, q(), document.querySelector(".main-menu").style.marginLeft = "0px", document.querySelector(".main-menu").style.marginRight = "0px" }

function L() { if (localStorage.getItem("ynexdarktheme") && (document.querySelector("#switcher-dark-theme").checked = !0), localStorage.getItem("ynexlayout") === "horizontal" ? (document.querySelector("#switcher-horizontal").checked = !0, document.querySelector("#switcher-menu-click").checked = !0) : document.querySelector("#switcher-vertical").checked = !0, localStorage.getItem("ynexrtl") ? document.querySelector("#switcher-rtl").checked = !0 : document.querySelector("#switcher-ltr").checked = !0, localStorage.getItem("ynexHeader") === "light" && (document.querySelector("#switcher-header-light").checked = !0), localStorage.getItem("ynexHeader") === "color" && (document.querySelector("#switcher-header-primary").checked = !0), localStorage.getItem("ynexHeader") === "gradient" && (document.querySelector("#switcher-header-gradient").checked = !0), localStorage.getItem("ynexHeader") === "dark" && (document.querySelector("#switcher-header-dark").checked = !0), localStorage.getItem("ynexHeader") === "transparent" && (document.querySelector("#switcher-header-transparent").checked = !0), localStorage.getItem("ynexMenu") === "light" && (document.querySelector("#switcher-menu-light").checked = !0), localStorage.getItem("ynexMenu") === "color" && (document.querySelector("#switcher-menu-primary").checked = !0), localStorage.getItem("ynexMenu") === "gradient" && (document.querySelector("#switcher-menu-gradient").checked = !0), localStorage.getItem("ynexMenu") === "dark" && (document.querySelector("#switcher-menu-dark").checked = !0), localStorage.getItem("ynexMenu") === "transparent" && (document.querySelector("#switcher-menu-transparent").checked = !0), localStorage.getItem("ynexboxed") && (document.querySelector("#switcher-boxed").checked = !0), localStorage.getItem("ynexheaderscrollable") && (document.querySelector("#switcher-header-scroll").checked = !0), localStorage.getItem("ynexmenuscrollable") && (document.querySelector("#switcher-menu-scroll").checked = !0), localStorage.getItem("ynexheaderfixed") && (document.querySelector("#switcher-header-fixed").checked = !0), localStorage.getItem("ynexmenufixed") && (document.querySelector("#switcher-menu-fixed").checked = !0), localStorage.getItem("ynexclassic") && (document.querySelector("#switcher-classic").checked = !0), localStorage.getItem("ynexmodern") && (document.querySelector("#switcher-modern").checked = !0), localStorage.ynexverticalstyles) switch (localStorage.getItem("ynexverticalstyles")) {
        case "default":
            document.querySelector("#switcher-default-menu").checked = !0; break;
        case "closed":
            document.querySelector("#switcher-closed-menu").checked = !0; break;
        case "icontext":
            document.querySelector("#switcher-icontext-menu").checked = !0; break;
        case "overlay":
            document.querySelector("#switcher-icon-overlay").checked = !0; break;
        case "detached":
            document.querySelector("#switcher-detached").checked = !0; break;
        case "doublemenu":
            document.querySelector("#switcher-double-menu").checked = !0; break;
        default:
            document.querySelector("#switcher-default-menu").checked = !0; break }
    if (localStorage.ynexnavstyles) switch (localStorage.getItem("ynexnavstyles")) {
        case "menu-click":
            document.querySelector("#switcher-menu-click").checked = !0; break;
        case "menu-hover":
            document.querySelector("#switcher-menu-hover").checked = !0; break;
        case "icon-click":
            document.querySelector("#switcher-icon-click").checked = !0; break;
        case "icon-hover":
            document.querySelector("#switcher-icon-hover").checked = !0; break }
    localStorage.loaderEnable != "true" && (document.querySelector("#switcher-loader-disable").checked = !0) }
let i, gt;

function q() { gt = getComputedStyle(document.documentElement).getPropertyValue("--primary-rgb").trim(), i = localStorage.getItem("primaryRGB") || gt, document.querySelector("#crm-total-customers") !== null && Yt(i), document.querySelector("#crm-revenue-analytics") !== null && Xt(i), document.querySelector("#crm-profits-earned") !== null && jt(i), document.querySelector("#leads-source") !== null && Vt(i), document.querySelector("#earnings") !== null && Kt(i), document.querySelector("#crypto") !== null && Zt(i), document.querySelector("#subscriptionOverview") !== null && er(i), document.querySelector("#candidates-chart") !== null && tr(i), document.querySelector("#nft-balance-chart") !== null && rr(i), document.querySelector("#nft-statistics") !== null && ar(i), document.querySelector("#salesOverview") !== null && lr(i), document.querySelector("#sale-value") !== null && nr(i), document.querySelector("#analytics-bouncerate") !== null && ir(i), document.querySelector("#sessions") !== null && cr(i), document.querySelector("#audienceReport") !== null && dr(i), document.querySelector("#country-sessions") !== null && ur(i), document.querySelector("#session-users") !== null && hr(i), document.querySelector("#projectAnalysis") !== null && br(i), document.querySelector("#performanceReport") !== null && pr(i), document.querySelector("#jobs-summary") !== null && wr(i), document.querySelector("#total-invested") !== null && vr(i), document.querySelector("#totalInvestmentsStats") !== null && xr(i), document.querySelector("#stocks-marketcap") !== null && Sr(i), document.querySelector("#courses-earnings") !== null && qr(i), document.querySelector("#course-payouts") !== null && Lr(i), document.querySelector("#waterTrack") !== null && Br(i), document.querySelector("#report") !== null && Ir(i), document.querySelector("#views") !== null && Cr(i) }
if (document.querySelector("#switcher-canvas")) { const e = document.querySelector(".pickr-container-primary"),
        t = document.querySelector(".theme-container-primary"),
        r = document.querySelector(".pickr-container-background"),
        o = document.querySelector(".theme-container-background"),
        l = [
            ["nano", { defaultRepresentation: "RGB", components: { preview: !0, opacity: !1, hue: !0, interaction: { hex: !1, rgba: !0, hsva: !1, input: !0, clear: !1, save: !1 } } }]
        ],
        n = []; let u = null; for (const [v, B] of l) { const x = document.createElement("button");
        x.innerHTML = v, n.push(x), x.addEventListener("click", () => { const C = document.createElement("p");
            e.appendChild(C), u && u.destroyAndRemove(); for (const A of n) A.classList[A === x ? "add" : "remove"]("active");
            u = new Pickr(Object.assign({ el: C, theme: v, default: "#845adf" }, B)), u.on("changestop", (A, R) => { let d = R.getColor().toRGBA();
                document.querySelector("html").style.setProperty("--primary-rgb", `${Math.floor(d[0])}, ${Math.floor(d[1])}, ${Math.floor(d[2])}`), localStorage.setItem("primaryRGB", `${Math.floor(d[0])}, ${Math.floor(d[1])}, ${Math.floor(d[2])}`), q() }) }), t.appendChild(x) }
    n[0].click(); const h = []; let y = null; for (const [v, B] of l) { const x = document.createElement("button");
        x.innerHTML = v, h.push(x), x.addEventListener("click", () => { const C = document.createElement("p");
            r.appendChild(C), y && y.destroyAndRemove(); for (const A of n) A.classList[A === x ? "add" : "remove"]("active");
            y = new Pickr(Object.assign({ el: C, theme: v, default: "#845adf" }, B)), y.on("changestop", (A, R) => { let d = R.getColor().toRGBA(),
                    M = document.querySelector("html");
                M.style.setProperty("--body-bg-rgb", `${d[0]}, ${d[1]}, ${d[2]}`), document.querySelector("html").style.setProperty("--body-bg-rgb2", `${d[0]+14}, ${d[1]+14}, ${d[2]+14}`), document.querySelector("html").style.setProperty("--light-rgb", `${d[0]+14}, ${d[1]+14}, ${d[2]+14}`), document.querySelector("html").style.setProperty("--form-control-bg", `rgb(${d[0]+14}, ${d[1]+14}, ${d[2]+14})`), localStorage.removeItem("bgtheme"), q(), M.setAttribute("data-theme-mode", "dark"), M.setAttribute("data-menu-styles", "dark"), M.setAttribute("data-header-styles", "dark"), document.querySelector("#switcher-dark-theme").checked = !0, localStorage.setItem("bodyBgRGB", `${d[0]}, ${d[1]}, ${d[2]}`), localStorage.setItem("bodylightRGB", `${d[0]+14}, ${d[1]+14}, ${d[2]+14}`) }) }), o.appendChild(x) }
    h[0].click() }
q();

function Zr() {
    (localStorage.bodyBgRGB || localStorage.bodylightRGB) && (document.querySelector("#switcher-dark-theme").checked = !0, document.querySelector("#switcher-menu-dark").checked = !0, document.querySelector("#switcher-header-dark").checked = !0), localStorage.bodyBgRGB && localStorage.bodylightRGB && (localStorage.bodyBgRGB == "20, 30, 96" && (document.querySelector("#switcher-background").checked = !0), localStorage.bodyBgRGB == "8, 78, 115" && (document.querySelector("#switcher-background1").checked = !0), localStorage.bodyBgRGB == "90, 37, 135" && (document.querySelector("#switcher-background2").checked = !0), localStorage.bodyBgRGB == "24, 101, 51" && (document.querySelector("#switcher-background3").checked = !0), localStorage.bodyBgRGB == "120, 66, 20" && (document.querySelector("#switcher-background4").checked = !0)), localStorage.primaryRGB && (localStorage.primaryRGB == "58, 88, 146" && (document.querySelector("#switcher-primary").checked = !0), localStorage.primaryRGB == "92, 144, 163" && (document.querySelector("#switcher-primary1").checked = !0), localStorage.primaryRGB == "172, 172, 80" && (document.querySelector("#switcher-primary2").checked = !0), localStorage.primaryRGB == "165, 94, 131" && (document.querySelector("#switcher-primary3").checked = !0), localStorage.primaryRGB == "87, 68, 117" && (document.querySelector("#switcher-primary4").checked = !0)), localStorage.loaderEnable == "true" && (document.querySelector("#switcher-loader-enable").checked = !0) }