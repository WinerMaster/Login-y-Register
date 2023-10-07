<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login & Register</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="./assets/styles/index.css" />
</head>

<body>
    <section id="main">
        <div class="square" style="--i:0"></div>
        <div class="square" style="--i:1"></div>
        <div class="square" style="--i:2"></div>
        <div class="square" style="--i:3"></div>
        <article class="formdata__container" data-form="login">
            <div class="title-name">
                <h2>Inicio Sesión</h2>
            </div>
            <form id="form">
                <div class="spans input-user">
                    <input type="text" name="username" id="input_name" placeholder="Nombre De Usuario" autocomplete="off" spellcheck="false"/>
                </div>
                <div class="spans input-pass">
                    <input type="password" name="password" id="input_password" placeholder="Contraseña" autocomplete="off"/>
                </div>
                <div class="divContainer-button">
                    <input id="sendbtn" type="submit" class="button-send" value="Ingresar">
                    <span class="login_register">¿No tienes cuenta? <span class="change-form">Registrate.</span></span>
                </div>
                <div class="box-alert">
                    <p class="alert__text-content"></p>
                </div>
            </form>
        </article>
    </section>
    <script src="./assets/javascript/mainGlobal.js"></script>
    <script>

        
        const form2 = da('#form');
        const dataset = da.query("article[data-form]").dataset;
        
        da(".login_register").on("click", function() {
            const title = da.query(".title-name h2")
            const span = da.query(".login_register")
            const SESSION_TYPE = dataset.form;
            if(SESSION_TYPE === "login") {
                title.innerText = "Registro";
                span.innerHTML = '¿Ya tienes cuenta? <span class="change-form">Iniciar Sesión.</span>';
                dataset.form = "register"
            } else if(SESSION_TYPE === "register") {
                title.innerText = "Inicio Sesión";
                span.innerHTML = '¿No tienes cuenta? <span class="change-form">Registrate.</span>';
                dataset.form = "login"
            }
        });

        form2.on('submit', function (event) {
            event.preventDefault();
            const form = da.form('form');
            const SESSION_TYPE = dataset.form;
            const URL_PATHNAME = SESSION_TYPE === "login" ? "login.php" : "register.php";
            const fn = function() {
                var res = this.response;

                if(res === "success"){
                    window.location.href = './home/index.php';
                } else {
                    var alert = da.query('.box-alert p');
                    alert.innerText = res;
                    setTimeout(()=>alert.innerText="", 5000)
                }
            }

            da.ajax('./php/'.concat(URL_PATHNAME), {
                method: 'POST',
                ready: fn,
                send: form,
            });
        })
    </script>
</body>

</html>
