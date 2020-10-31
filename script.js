let isValid = (s) => {
    $(s).addClass("is-valid");
    $(s).removeClass("is-invalid");
}
let isInvalid = (s) => {
    $(s).addClass("is-invalid");
    $(s).removeClass("is-valid");
}
let dNone = (s) => {
    $(s).addClass("d-none");
    $(s).removeClass("d-block");
}
let dBlock = (s) => {
    $(s).addClass("d-block");
    $(s).removeClass("d-none");
}
let clear = (s) => {
    $(s).val("")
}
$("#tipoPersona").on("change", function() {
    if (this.value == "1") {
        dBlock(".personaNatural");
        dNone(".empresaInput");
        isValid("#tipoPersona");
    } else if (this.value=="2"){
        dBlock(".empresaInput");
        dNone(".personaNatural");
        isValid("#tipoPersona");
    } else {
        isInvalid("#tipoPersona");
    }
})
$("#dni").keyup(function() {
    if (this.value.substr(-1) != "_" && this.value!="") {
        isValid("#dni");
        sendDNI();
    } else {
        clear("#nombresApellidos")
        isInvalid("#dni");
    }
})
$("#ruc").keyup(function() {
    if (this.value.substr(-1) != "_" && this.value!="") {
        isValid("#ruc");
        sendRUC();
    } else {
        clear("#nombreComercial")
        isInvalid("#ruc");
    }
})
$("#celular").keyup(function() {
    if (this.value.substr(-1) != "_") {
        isValid("#celular");
    } else {
        isInvalid("#celular");
    }
})
$("#nombresApellidos").keyup(function() {
    if (this.value != "") {
        isValid("#nombresApellidos");
    } else {
        isInvalid("#nombresApellidos");
    }
})
$("#correo").keyup(function() {
    if (this.value.substr(-1) != "_") {
        isValid("#correo");
    } else {
        isInvalid("#correo");
    }
})
$("#direccion").keyup(function() {
    if (this.value != "") {
        isValid("#direccion");
    } else {
        isInvalid("#direccion");
    }
})
$("#tipoDocumento").on("change", function() {
    if (this.value != "") {
        isValid("#tipoDocumento");
    } else {
        isInvalid("#tipoDocumento");
    }
})
$("#numeroDocumento").keyup(function() {
    if (this.value != "") {
        isValid("#numeroDocumento");
    } else {
        isInvalid("#numeroDocumento");
    }
})
$("#numeroFolios").keyup(function() {
    if (this.value != "") {
        isValid("#numeroFolios");
    } else {
        isInvalid("#numeroFolios");
    }
})
$("#asunto").keyup(function() {
    if (this.value != "") {
        isValid("#asunto");
    } else {
        isInvalid("#asunto");
    }
})
$("#archivo").change(function() {
    if (this.value != "") {
        isValid("#archivo");
    } else {
        isInvalid("#archivo");
    }
})

function sendDNI() {
    var settings = {
        "url": window.atob("aHR0cHM6Ly9kbmkub3B0aW1pemVwZXJ1LmNvbS9hcGkvcGVyc29ucy8=")+$("#dni").val(),
        "method": "GET",
        "timeout": 0,
    };
    $.ajax(settings).done(function (response) {
        $("#nombresApellidos").val(`${response.name} ${response.first_name} ${response.last_name}`)
        isValid("#nombresApellidos");
    });
}
function sendRUC() {
    var settings = {
        "url": window.atob("aHR0cHM6Ly9kbmkub3B0aW1pemVwZXJ1LmNvbS9hcGkvY29tcGFueS8=")+$("#ruc").val(),
        "method": "GET",
        "timeout": 0,
    };
    $.ajax(settings).done(function (response) {
        $("#razonSocial").val(response.razon_social)
        isValid("#razonSocial");
    });
}