# Definiendo el MVP de Slatam
Slatam será un ecommerce B2B, y muchos de sus componentes serán utilizados para construir Venemall. Este último será un comercio electrónico B2C.

Partiendo de esta premisa, y añadiendo algunos requerimientos básicos para nuestro ecommerce, podemos establecer los siguientes parámetros.

- Se debe poder ver todos los productos listados en la plataforma.
- Se debe poder ver los productos por separado, para así ver información detallada acerca del mismo y de la empresa vendedora. Se podrá ver tanto la puntuación de la empresa como la de los productos.
- Preguntas y respuestas para los productos.
- Las personas deben ser capaces de registrarse, loguearse, cambiar la contraseña, verificar la cuenta por correo y crear una empresa.
- Deben haber distintos tipos de usuarios: comprador y vendedor. El vendedor se divide en Manufacturer, Supplier, Distributor, Broker, Reseller, and others.
- Una vez siendo una empresa, esta deberá poder listar productos para vender. También podrá editar, borrar y actualizar dichos productos.
- Los usuarios deberán poder comprar productos, siguiendo un proceso de compra determinado. Este proceso se terminará con la puntuación mutua y luego se abre un plazo de unos días para puntuar el producto.
- Los usuarios deberán poder pagar con transferencias bancarias.
- Debe existir un sistema de añadir al carrito. Los productos se irán separando por proveedor, para así tener órdenes independientes.
- Se deben enviar notificaciones por email: registros, confirmaciones de registro, compras/ventas de productos, puntuaciones, actualizaciones en estados de órdenes...
- Las empresas deberán tener un perfil en la que podrán proporcionar información detallada acerca de su compañía, países a donde exportan, ubicación, permisos, certificados y productos. (Discutir certificados y permisos)
- Las empresas vendedoras tendrán una página de tienda en la que mostrarán información relevante acerca de ellas. Esta tienda se podrá personalizar con un avatar y un banner.
- Las empresas deberán tener un dashboard para ver las órdenes activas, añadir, editar y borrar productos, editar su perfil.
- Los usuarios deben ser capaces de buscar los productos por medio de un motor de búsqueda sencillo.
- Deberá existir autorización, tanto en el frontend como en el backend, para proteger diversas acciones. Como por ejemplo evitar borrar un producto que le pertenece a otra empresa.
- Debemos tener un error handling funcional y robusto, que explique los errores de una manera amigable, pero sin dar muchos detalles al respecto.
- Crear un blog para publicar los avances y novedades.
- Deben crearse la página de quiénes somos, términos y condiciones, privacidad, entre otras.


## Próximas funcionalidades

- Sistema de referidos, con un dashboard correspondiente.
- Motor de búsqueda más inteligente: filtrar sus resultados por medio de diferentes criterios. Este motor debe ser capaz de ordenar los resultados por reputación de la empresa y producto, tier de verificación, entre otros factores básicos.
- Sistema de membresías de usuarios.
- Sistema de inteligencia artificial para dar sugerencias, recomendaciones y resultados en las búsquedas.
- Se debe poder ver todos los productos listados en la plataforma, ordenados por reputación de la empresa, tier de verificación, y otros factores.
- Sistema de recomendaciones y sugeridos, utilizando el historial como referencia para sugerir productos.
- Se debe poder ver los productos por separado, para así ver información detallada acerca del mismo y de la empresa vendedora. Se podrá ver tanto la puntuación de la empresa como la de los productos, con sus respectivos comentarios.
- Las empresas deberán tener distintos niveles de verificación. Tier 1 a Tier 5. Esta verificación se hará subiendo comprobantes (registro de empresa, certificaciones…) a la plataforma, y revisandolas de forma manual.
- Los usuarios deberán poder pagar con tarjetas de crédito y débito.
- Debe existir un sistema de pagos en la plataforma. Cada X tiempo liberar el dinero a las empresas por medio de cuenta bancaria. (Discutir las cuentas bancarias y los distintos países)
- Las empresas podrán gestionar su dinero.
- Las empresas podrán ver sus estadísticas.
- Scripts para probar las funcionalidades.
