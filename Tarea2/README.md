# Manejo de Archivos
La lectura de archivos es una de las operaciones fundamentales en la programación ya que permite a las aplicaciones acceder, procesar y analizar información almacenada de forma externa. 

Módulos y Métodos utilizados: 
* ```fs``` (File System)
* ```readline``` (Entrada interactiva)
* ```readFileSync```
* ```readFile```
* ```createReadStream```


## Funcionamiento
Se creó un archivo inventario.inv con el siguiente formato: 
NombreProducto | Cantidad | Precio | Unitario Ubicación|

Ejemplo del contenido del archivo: 

```
Manzanas 100 2.50 BodegaA
Peras 50 3.00 BodegaB
Platanos 75 1.75 BodegaC
Uvas 200 4.00 Bodega
```

## Especificaciones
* Se utiliza el módulo ```fs``` para operaciones de archivos

* Se utiliza el módulo ```readline``` para crear el menú interactivo

* Se manejan excepciones con ```try``` - ```catch```

* Cuando no encuentra el archivo se muestra el mensaje de error __No se encuentra el archivo__ el programa no se detiene

* El programa se ejecuta hasta que el usuario selecciona la opción de salir