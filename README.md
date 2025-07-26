# 🩸 Sistema de Donación de Sangre

API REST completa para la gestión de donadores, receptores, donaciones y mensajes internos.

## 📋 Características

- ✅ **Gestión de Donadores**: Registro, edición y seguimiento de donadores
- ✅ **Gestión de Receptores**: Solicitudes de sangre y urgencias
- ✅ **Gestión de Donaciones**: Proceso completo de donación
- ✅ **Sistema de Mensajes**: Comunicación interna entre usuarios
- ✅ **Panel de Administración**: Gestión de administradores
- ✅ **Frontend Responsive**: Interfaz moderna y fácil de usar
- ✅ **Base de Datos SQL Server**: Almacenamiento robusto y confiable

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 14 o superior)
- SQL Server (local o remoto)
- npm o yarn

### 1. Clonar el repositorio

```cmd
git clone <tu-repositorio>
cd donacion-api
```

### 2. Instalar dependencias

```cmd
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
DB_SERVER=localhost
DB_NAME=DonacionSangre
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_PORT=1433
PORT=3000
```

### 4. Configurar la base de datos

Asegúrate de que tu SQL Server esté corriendo y que la base de datos `DonacionSangre` exista.

## 🗄️ Llenar las tablas con datos de ejemplo

### Opción 1: Usando npm script (Recomendado)

```cmd
npm run seed
```

### Opción 2: Ejecutar directamente

```cmd
node seed-data.js
```

### Datos que se insertarán:

- **👨‍💼 3 Administradores** con diferentes roles
- **👥 8 Donadores** con diferentes tipos de sangre
- **🏥 5 Receptores** con solicitudes urgentes y normales
- **🩸 10 Donaciones** con diferentes estados
- **💬 15 Mensajes** entre donadores

## 🏃‍♂️ Ejecutar el proyecto

### 1. Iniciar la API (Backend)

```cmd
# Modo desarrollo (con auto-reload)
npm run dev

# Modo producción
npm start
```

La API estará disponible en: `http://localhost:3000`

### 2. Abrir el Frontend

Simplemente abre el archivo `index.html` en tu navegador, o usa un servidor local:

```cmd
# Opción 1: Python
python -m http.server 8000

# Opción 2: Node.js
npx http-server -p 8000
```

Luego ve a: `http://localhost:8000`

## 📚 Endpoints de la API

### Donadores
- `GET /api/donadores` - Obtener todos los donadores
- `POST /api/donadores` - Crear nuevo donador
- `PUT /api/donadores/:id` - Actualizar donador
- `DELETE /api/donadores/:id` - Eliminar donador

### Receptores
- `GET /api/receptores` - Obtener todos los receptores
- `POST /api/receptores` - Crear nuevo receptor
- `PUT /api/receptores/:id` - Actualizar receptor
- `DELETE /api/receptores/:id` - Eliminar receptor

### Donaciones
- `GET /api/donaciones` - Obtener todas las donaciones
- `POST /api/donaciones` - Crear nueva donación
- `PUT /api/donaciones/:id` - Actualizar donación
- `DELETE /api/donaciones/:id` - Eliminar donación

### Mensajes
- `GET /api/mensajes` - Obtener todos los mensajes
- `POST /api/mensajes` - Crear nuevo mensaje
- `PUT /api/mensajes/:id` - Actualizar mensaje
- `DELETE /api/mensajes/:id` - Eliminar mensaje

### Administradores
- `GET /api/administradores` - Obtener todos los administradores
- `POST /api/administradores` - Crear nuevo administrador
- `PUT /api/administradores/:id` - Actualizar administrador
- `DELETE /api/administradores/:id` - Eliminar administrador

## 🗂️ Estructura del Proyecto

```
donacion-api/
├── app.js                 # Archivo principal de la aplicación
├── package.json           # Dependencias y scripts
├── seed-data.js          # Script para llenar tablas con datos
├── index.html            # Frontend de la aplicación
├── config/
│   └── database.js       # Configuración de la base de datos
├── models/
│   ├── Donador.js        # Modelo de donadores
│   ├── Receptor.js       # Modelo de receptores
│   ├── Donacion.js       # Modelo de donaciones
│   ├── MensajeInterno.js # Modelo de mensajes
│   └── Administrador.js  # Modelo de administradores
├── controllers/
│   ├── donadorController.js
│   ├── receptorController.js
│   ├── donacionController.js
│   ├── mensajeController.js
│   └── adminController.js
└── routes/
    ├── donadorRoutes.js
    ├── receptorRoutes.js
    ├── donacionRoutes.js
    ├── mensajeRoutes.js
    └── adminRoutes.js
```

## 🎯 Funcionalidades del Frontend

### Gestión de Donadores
- ✅ Crear nuevos donadores
- ✅ Editar información existente
- ✅ Eliminar registros
- ✅ Búsqueda en tiempo real
- ✅ Filtrado por tipo de sangre

### Gestión de Receptores
- ✅ Registrar solicitudes de sangre
- ✅ Gestionar niveles de urgencia
- ✅ Asignar hospitales
- ✅ Seguimiento de estado

### Gestión de Donaciones
- ✅ Crear nuevas donaciones
- ✅ Asignar donador y receptor
- ✅ Gestionar estados (Pendiente, En Proceso, Completada)
- ✅ Programar fechas de donación

### Sistema de Mensajes
- ✅ Enviar mensajes internos
- ✅ Gestionar estado de lectura
- ✅ Comunicación entre usuarios

### Panel de Administración
- ✅ Gestión de roles de usuario
- ✅ Control de acceso
- ✅ Configuración del sistema

## 🔧 Comandos Útiles

```cmd
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Ejecutar en modo producción
npm start

# Llenar tablas con datos de ejemplo
npm run seed

# Probar conexión a la base de datos
npm test
```

## 🐛 Solución de Problemas

### Error de conexión a la base de datos
1. Verifica que SQL Server esté corriendo
2. Confirma las credenciales en el archivo `.env`
3. Asegúrate de que la base de datos exista

### Error CORS en el frontend
- La API ya tiene CORS habilitado
- Verifica que estés accediendo desde `http://localhost:3000`

### Datos no se muestran en el frontend
1. Ejecuta `npm run seed` para llenar las tablas
2. Verifica que la API esté corriendo en el puerto 3000
3. Revisa la consola del navegador para errores

## 📝 Notas Importantes

- El frontend está diseñado para funcionar sin frameworks
- Los datos se generan automáticamente con el script de seed
- La aplicación es completamente responsive
- Todas las operaciones CRUD están implementadas

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

---

¡Gracias por usar el Sistema de Donación de Sangre! 🩸 