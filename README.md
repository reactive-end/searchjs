# 🔍 SearchJS
Una librería ligera para facilitar búsquedas por coincidencias en tablas de HTML.

Lo unico que debes hacer es importar la libreria y agregar unos cuantos atributos en ciertos elementos.

## ⚓ Importa la Libreria en tu HTML
```html
<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>SearchJS</title>
    </head>
    <body>
        <script src="search.js"></script>
    </body>
</html>
`````

## 📝 Como usar la Libreria
Luego de importarla simplemente debes agregar ciertos atributos y elemento para su funcionamiento como se muestra en el siguiente ejemplo

```html
<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>SearchJS</title>
    </head>
    <body>
        <table id="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Capital</th>
                    <th>Población</th>
                    <th>Superficie</th>
                    <th>Continente</th>
                    <th>Moneda</th>
                    <th>Idioma oficial</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>España</td>
                    <td>Madrid</td>
                    <td>47.329.981</td>
                    <td>505.992 km²</td>
                    <td>Europa</td>
                    <td>Euro</td>
                    <td>Español</td>
                </tr>
                <tr>
                    <td>México</td>
                    <td>Ciudad de México</td>
                    <td>128.932.753</td>
                    <td>1.964.375 km²</td>
                    <td>América del Norte</td>
                    <td>Peso mexicano</td>
                    <td>Español</td>
                </tr>
                <tr>
                    <td>China</td>
                    <td>Pekín</td>
                    <td>1.444.216.107</td>
                    <td>9.596.961 km²</td>
                    <td>Asia</td>
                    <td>Yuan chino</td>
                    <td>Chino mandarín</td>
                </tr>
            </tbody>
        </table>

        <input type="text" searchInput="true" tableElementId="table" errorElementId="error">
        <span id="error"></span>

        <script src="search.js"></script>
    </body>
</html>
`````

Debes crear un elemento input y añadirle 3 atributos: 

* **``searchInput``**: Le indica a la libreria que ese elemento ``<input>`` sera utilizado como buscador.
* **``tableElementId``**: Este atributo debe hacer referencia al id de la tabla en la que queremos que se realize la busqueda.
* **``errorElementId``**: Este atributo debe hacer referencia al id del elemento donde se hara visible el mensaje de error en caso de que no se encuente ninguna coincidencia, de forma obligatoria este elemento debe ser un elemento ``<span>``

## ⚙ Configuracion
La libreria te permite configurar ciertos aspectos de la misma, puedes crear un archivo llamado `settings.json` en la misma carpeta donde se encuentre la libreria y te permite configurar lo siguiente:

````json
{
    "caseSensitive": false,
    "errorMessage": "There are no coincidences!",
    "hideUnmatchedRows": false,
    "styles" : {
        "backgroundColor": "#f47",
        "color": "#fff"
    }
}
````

* ``caseSensitive``: Recibe un ``Boolean`` como parametro, indica si la busqueda es susceptible a mayusculas y minusculas.
* ``errorMessage``: Recibe un ``String``que indica el mensaje que va a ser mostrado en caso de que no hayan coincidencias.
* ``hideUnmatchedRows``: Recibe un ``Boolean``, en caso de ser verdadero la libreria oculta las filas donde no haya ninguna coincidencia y solo quedan las que si tengan.
* ``styles``: Esta configuracion solo tiene dos parametros, ``backgroundColor`` que cambiara el color de fondo de las coincidencias resaltadas, y ``color`` que cambia el color del texto de las coincidencias resaltadas.

## 🛠 Problemas y Sugerencias
Si presentas algun problema durante el uso de la libreria puedes dejarlo en el apartado de ``Issues`` y tratare de arreglarlo lo mas pronto posible.

De igual forma si tienes alguna sugerencia con respecto a la libreria en cuanto a mejoras, o nuevas funcionalidades hazmelo saber en el apartado de ``Discussions`` o enviame un mensaje a mi correo.

[📩 Contactame](mailto:rafaelpisani19@gmail.com)
