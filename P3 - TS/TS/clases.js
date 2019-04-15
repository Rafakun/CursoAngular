var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Programa = /** @class */ (function () {
    function Programa(nombre, version) {
        this.nombre = nombre;
        this.version = version;
    }
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.setNombre = function (nombre) {
        return this.nombre = nombre;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    return Programa;
}());
var EditorVideo = /** @class */ (function (_super) {
    __extends(EditorVideo, _super);
    function EditorVideo(nombre, version, timeline) {
        var _this = _super.call(this, name, version) || this;
        _this.timeline = timeline;
        return _this;
    }
    EditorVideo.prototype.setTimeLine = function (timeline) {
        this.timeline = timeline;
    };
    EditorVideo.prototype.getTimeLine = function () {
        return this.timeline;
    };
    EditorVideo.prototype.getAllData = function () {
        return this.getNombre + " - " + this.getVersion() + " " + this.getTimeLine();
    };
    return EditorVideo;
}(Programa));
var editor = new EditorVideo("Camtasia Studio", 8, 4000);
console.log(editor.getAllData());
var programas = [];
function guardar() {
    var nombre = document.getElementById("nombre").value.toString();
    var programa = new Programa(nombre, 1);
    programas.push(programa);
    var list = "";
    for (var i = 0; i < programas.length; i++) {
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }
    var listado = document.getElementById("listado");
    listado.innerHTML = list;
}
window.onload = function () {
    var boton = document.getElementById("boton");
    boton.addEventListener("click", guardar);
};
