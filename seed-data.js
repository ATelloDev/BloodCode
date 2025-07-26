const sequelize = require('./config/database');
const Donador = require('./models/Donador');
const Receptor = require('./models/Receptor');
const Donacion = require('./models/Donacion');
const MensajeInterno = require('./models/MensajeInterno');
const Administrador = require('./models/Administrador');

// Función para generar CURP aleatoria
function generarCURP() {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    let curp = '';
    
    // 4 letras aleatorias
    for (let i = 0; i < 4; i++) {
        curp += letras.charAt(Math.floor(Math.random() * letras.length));
    }
    
    // 6 números aleatorios
    for (let i = 0; i < 6; i++) {
        curp += numeros.charAt(Math.floor(Math.random() * numeros.length));
    }
    
    // 2 letras aleatorias
    for (let i = 0; i < 2; i++) {
        curp += letras.charAt(Math.floor(Math.random() * letras.length));
    }
    
    return curp;
}

// Función para generar fecha aleatoria en los últimos 2 años
function fechaAleatoria() {
    const fecha = new Date();
    fecha.setFullYear(fecha.getFullYear() - Math.floor(Math.random() * 2));
    fecha.setMonth(Math.floor(Math.random() * 12));
    fecha.setDate(Math.floor(Math.random() * 28) + 1);
    return fecha;
}

// Función para generar fecha futura (próximos 3 meses)
function fechaFutura() {
    const fecha = new Date();
    fecha.setMonth(fecha.getMonth() + Math.floor(Math.random() * 3));
    fecha.setDate(Math.floor(Math.random() * 28) + 1);
    return fecha;
}

// Datos de ejemplo para Donadores
const donadoresData = [
    {
        Nombre_Completo: 'María González López',
        CURP: generarCURP(),
        Tipo_Sangre: 'O+',
        Correo: 'maria.gonzalez@email.com',
        Telefono: '555-0101',
        Ubicacion: 'Ciudad de México',
        Ultima_Donacion: fechaAleatoria(),
        Disponible: true,
        Fecha_Registro: fechaAleatoria()
    },
    {
        Nombre_Completo: 'Carlos Rodríguez Martínez',
        CURP: generarCURP(),
        Tipo_Sangre: 'A+',
        Correo: 'carlos.rodriguez@email.com',
        Telefono: '555-0102',
        Ubicacion: 'Guadalajara',
        Ultima_Donacion: fechaAleatoria(),
        Disponible: true,
        Fecha_Registro: fechaAleatoria()
    },
    {
        Nombre_Completo: 'Ana Fernández Silva',
        CURP: generarCURP(),
        Tipo_Sangre: 'B+',
        Correo: 'ana.fernandez@email.com',
        Telefono: '555-0103',
        Ubicacion: 'Monterrey',
        Ultima_Donacion: fechaAleatoria(),
        Disponible: false,
        Fecha_Registro: fechaAleatoria()
    },
    {
        Nombre_Completo: 'Luis Pérez García',
        CURP: generarCURP(),
        Tipo_Sangre: 'AB+',
        Correo: 'luis.perez@email.com',
        Telefono: '555-0104',
        Ubicacion: 'Puebla',
        Ultima_Donacion: fechaAleatoria(),
        Disponible: true,
        Fecha_Registro: fechaAleatoria()
    },
    {
        Nombre_Completo: 'Sofia Torres Ruiz',
        CURP: generarCURP(),
        Tipo_Sangre: 'O-',
        Correo: 'sofia.torres@email.com',
        Telefono: '555-0105',
        Ubicacion: 'Tijuana',
        Ultima_Donacion: fechaAleatoria(),
        Disponible: true,
        Fecha_Registro: fechaAleatoria()
    },
    {
        Nombre_Completo: 'Miguel Herrera Jiménez',
        CURP: generarCURP(),
        Tipo_Sangre: 'A-',
        Correo: 'miguel.herrera@email.com',
        Telefono: '555-0106',
        Ubicacion: 'Mérida',
        Ultima_Donacion: fechaAleatoria(),
        Disponible: true,
        Fecha_Registro: fechaAleatoria()
    },
    {
        Nombre_Completo: 'Carmen Vega Morales',
        CURP: generarCURP(),
        Tipo_Sangre: 'B-',
        Correo: 'carmen.vega@email.com',
        Telefono: '555-0107',
        Ubicacion: 'Querétaro',
        Ultima_Donacion: fechaAleatoria(),
        Disponible: false,
        Fecha_Registro: fechaAleatoria()
    },
    {
        Nombre_Completo: 'Roberto Mendoza Castro',
        CURP: generarCURP(),
        Tipo_Sangre: 'AB-',
        Correo: 'roberto.mendoza@email.com',
        Telefono: '555-0108',
        Ubicacion: 'León',
        Ultima_Donacion: fechaAleatoria(),
        Disponible: true,
        Fecha_Registro: fechaAleatoria()
    }
];

// Datos de ejemplo para Receptores
const receptoresData = [
    {
        Nombre_Receptor: 'Juan Carlos Méndez',
        Tipo_Sangre: 'O+',
        Correo: 'juan.mendez@hospital.com',
        TelefonoUbicacion: '555-0201',
        Hospital: 'Hospital General de México',
        Urgencia: true,
        Estado_Solicitud: 'Urgente',
        Fecha_Solicitud: new Date()
    },
    {
        Nombre_Receptor: 'Patricia Sánchez',
        Tipo_Sangre: 'A+',
        Correo: 'patricia.sanchez@clinica.com',
        TelefonoUbicacion: '555-0202',
        Hospital: 'Clínica Santa María',
        Urgencia: false,
        Estado_Solicitud: 'Pendiente',
        Fecha_Solicitud: fechaAleatoria()
    },
    {
        Nombre_Receptor: 'Fernando López',
        Tipo_Sangre: 'B+',
        Correo: 'fernando.lopez@centromedico.com',
        TelefonoUbicacion: '555-0203',
        Hospital: 'Centro Médico ABC',
        Urgencia: true,
        Estado_Solicitud: 'En Proceso',
        Fecha_Solicitud: fechaAleatoria()
    },
    {
        Nombre_Receptor: 'Isabel Ramírez',
        Tipo_Sangre: 'AB+',
        Correo: 'isabel.ramirez@hospital.com',
        TelefonoUbicacion: '555-0204',
        Hospital: 'Hospital Ángeles',
        Urgencia: false,
        Estado_Solicitud: 'Pendiente',
        Fecha_Solicitud: fechaAleatoria()
    },
    {
        Nombre_Receptor: 'Diego Morales',
        Tipo_Sangre: 'O-',
        Correo: 'diego.morales@clinica.com',
        TelefonoUbicacion: '555-0205',
        Hospital: 'Clínica del Valle',
        Urgencia: true,
        Estado_Solicitud: 'Urgente',
        Fecha_Solicitud: new Date()
    }
];

// Datos de ejemplo para Administradores
const administradoresData = [
    {
        Nombre: 'Dr. Roberto Silva',
        Correo: 'roberto.silva@donacion.com',
        Contraseña: 'admin123',
        Rol: 'Admin'
    },
    {
        Nombre: 'Lic. María Elena Torres',
        Correo: 'maria.torres@donacion.com',
        Contraseña: 'supervisor123',
        Rol: 'Supervisor'
    },
    {
        Nombre: 'Téc. Carlos Mendoza',
        Correo: 'carlos.mendoza@donacion.com',
        Contraseña: 'operador123',
        Rol: 'Operador'
    }
];

// Función principal para llenar las tablas
async function llenarTablas() {
    try {
        console.log('🔄 Iniciando llenado de tablas...');
        
        // Conectar a la base de datos
        await sequelize.authenticate();
        console.log('✅ Conexión a la base de datos establecida');
        
        // Sincronizar modelos
        await sequelize.sync({ force: false });
        console.log('✅ Modelos sincronizados');
        
        // Limpiar tablas existentes (opcional)
        console.log('🧹 Limpiando tablas existentes...');
        await MensajeInterno.destroy({ where: {} });
        await Donacion.destroy({ where: {} });
        await Receptor.destroy({ where: {} });
        await Donador.destroy({ where: {} });
        await Administrador.destroy({ where: {} });
        
        // Insertar Administradores
        console.log('👨‍💼 Insertando administradores...');
        const administradores = await Administrador.bulkCreate(administradoresData);
        console.log(`✅ ${administradores.length} administradores insertados`);
        
        // Insertar Donadores
        console.log('👥 Insertando donadores...');
        const donadores = await Donador.bulkCreate(donadoresData);
        console.log(`✅ ${donadores.length} donadores insertados`);
        
        // Insertar Receptores
        console.log('🏥 Insertando receptores...');
        const receptores = await Receptor.bulkCreate(receptoresData);
        console.log(`✅ ${receptores.length} receptores insertados`);
        
        // Insertar Donaciones
        console.log('🩸 Insertando donaciones...');
        const donacionesData = [];
        
        for (let i = 0; i < 10; i++) {
            const donador = donadores[Math.floor(Math.random() * donadores.length)];
            const receptor = receptores[Math.floor(Math.random() * receptores.length)];
            const estados = ['Pendiente', 'En Proceso', 'Completada', 'Cancelada'];
            
            donacionesData.push({
                ID_Donador: donador.ID_Donador,
                ID_Receptor: receptor.ID_Receptor,
                Fecha_Encontrado: fechaAleatoria(),
                Fecha_Donacion: Math.random() > 0.3 ? fechaFutura() : null,
                Hospital: receptor.Hospital,
                Estado: estados[Math.floor(Math.random() * estados.length)]
            });
        }
        
        const donaciones = await Donacion.bulkCreate(donacionesData);
        console.log(`✅ ${donaciones.length} donaciones insertadas`);
        
        // Insertar Mensajes Internos
        console.log('💬 Insertando mensajes...');
        const mensajesData = [];
        
        for (let i = 0; i < 15; i++) {
            const remitente = donadores[Math.floor(Math.random() * donadores.length)];
            const destinatario = donadores[Math.floor(Math.random() * donadores.length)];
            const asuntos = [
                'Consulta sobre donación',
                'Confirmación de cita',
                'Información importante',
                'Recordatorio de donación',
                'Agradecimiento',
                'Nueva solicitud de sangre',
                'Actualización de estado',
                'Información médica'
            ];
            
            const contenidos = [
                'Hola, tengo una consulta sobre el proceso de donación.',
                'Gracias por tu donación, has salvado una vida.',
                'Te recordamos tu próxima cita de donación.',
                'Necesitamos sangre de tu tipo con urgencia.',
                'Tu donación ha sido procesada exitosamente.',
                'Por favor confirma tu disponibilidad para donar.',
                'Hemos actualizado tu información en el sistema.',
                'Te enviamos los resultados de tus análisis.'
            ];
            
            const status = ['No leído', 'Leído', 'Archivado'];
            
            mensajesData.push({
                ID_Remitente: remitente.ID_Donador,
                ID_Destinatario: destinatario.ID_Donador,
                Asunto: asuntos[Math.floor(Math.random() * asuntos.length)],
                Contenido: contenidos[Math.floor(Math.random() * contenidos.length)],
                Fecha_Envio: fechaAleatoria(),
                Status: status[Math.floor(Math.random() * status.length)]
            });
        }
        
        const mensajes = await MensajeInterno.bulkCreate(mensajesData);
        console.log(`✅ ${mensajes.length} mensajes insertados`);
        
        console.log('\n🎉 ¡Todas las tablas han sido llenadas exitosamente!');
        console.log('\n📊 Resumen de datos insertados:');
        console.log(`   👨‍💼 Administradores: ${administradores.length}`);
        console.log(`   👥 Donadores: ${donadores.length}`);
        console.log(`   🏥 Receptores: ${receptores.length}`);
        console.log(`   🩸 Donaciones: ${donaciones.length}`);
        console.log(`   💬 Mensajes: ${mensajes.length}`);
        
        console.log('\n🚀 Puedes ahora ejecutar tu aplicación y ver los datos en el frontend.');
        
    } catch (error) {
        console.error('❌ Error al llenar las tablas:', error);
    } finally {
        // Cerrar conexión
        await sequelize.close();
        console.log('🔌 Conexión cerrada');
    }
}

// Ejecutar el script
if (require.main === module) {
    llenarTablas();
}

module.exports = { llenarTablas }; 