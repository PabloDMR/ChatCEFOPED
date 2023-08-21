const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const { delay } = require('@whiskeysockets/baileys')

//pp.post('/upload',(req,res) => {
   // let EDFile = req.files.file
    //EDFile.mv(`https://cefoped.com/inicio/wp-content/uploads/2020/09/imageonline-co-whitebackgroundremoved-1.png}`,err => {
        //if(err) return res.status(500).send({ message : err })

        //return res.status(200).send({ message : 'Te Muestro una imagen' })
    //})
////})


///////////////////////////////// F L U J O S   DE  S O P O R T E /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
const flowSecundarioSup = addKeyword(['1',]).addAnswer([ '1 = Subir una práctica, actividad o tarea al curso ',
   'https://www.youtube.com/watch?v=diQTHzfSz5Y',
   '*Espero que este link sea de ayuda - En el video encontraras lo que buscas, si no te lo describo levemente*',
   '',
   '1.-Seria descargar el archivo y editarlo -- "Hacer tu Tarea"',
   '2.-En la plataforma hay un apartado de subir archivos un *BOTON* de *Añadir Archivo*',
   '3.-Despues de eso, seleccionas tu archivo y listo.',
   null,
])

const flowSecundarioSup2 = addKeyword(['2',]).addAnswer([ '2 = Contestar y vizualizar un foro dentro del curso ',
   'https://www.youtube.com/watch?v=-nLg2oS8xgc',
   '*Espero que este link sea de ayuda - En el video encontraras lo que buscas*',
   '',

   null,
])

const flowSecundarioSup3 = addKeyword(['3',]).addAnswer([ '3 = Contestar un cuestionario o evaluación dentro del curso',
   '___________________________________',
   '*Espero que este link sea de ayuda - En el video encontraras lo que buscas*',
   null,
])

const flowSecundarioSup4 = addKeyword(['4',]).addAnswer([ '4 = Revisar el apartado de Calificaciones',
   'https://www.youtube.com/watch?v=87IMN6GNA_k',
   '*Espero que este link sea de ayuda - En el video encontraras lo que buscas*',
   null,
])

const flowSecundarioSup5 = addKeyword(['5',]).addAnswer([ '5 =  Contactar a mi asesor/a ',
   '____________________________________',
   '*Espero que este link sea de ayuda - En el video encontraras lo que buscas*',
   null,
])

const flowSecundarioSup6 = addKeyword(['6',]).addAnswer([ '6 =  Revisar datos de mi asesor/a',
   '____________________________________',
   '*Espero que este link sea de ayuda - En el video encontraras lo que buscas*',
   null,

])
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const flowSecundario = addKeyword(['1', '2','3','4','5']).addAnswer(
    [
])




////////////////////////////////////// F L U J O   D E   I N F O R M E S /////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const flowSecundarioInf = addKeyword(['1', 'siguiente']).addAnswer(
    [
        '📖CEFOPED - Centro de Formación Pedagógica e Innovación Educativa',
        'es una organización que acredita centros evaluadores, elabora estándares de competencia,',
        'y sus respectivos cursos, diseña programas educativos;',
        'utilizando herramientas tecnológicas de vanguardia y un campus virtual, para contribuir a mejorar la calidad de los servicios',

])

const flowInfos = addKeyword(['Info', 'informes', 'Informacion']).addAnswer(
    [
        '📄 Aquí encontras la informacion sobre el centro',
        'https://cefoped.com/inicio/',
    ],
    null,
    null,
    [flowSecundarioInf]
)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////// C O D I G O   D E   S O P O R T E/////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const flowSoporte = addKeyword(['tutorial', 'tuto','videos', 'Soporte' , 'Ayuda',]).addAnswer(
    [
        ' ▶️ Aquí encontras el canal de Youtube',
        'https://www.youtube.com/@cefopedoficial9843/videos ▶️ ',
        '\n*1* = Dudas sobre como subir actividades.',
        '\n*2* = Dudas sobre como contestar el foro.',
        '\n*3* = Contestar un cuestionario o evaluación dentro del curso',
        '\n*4* = Revisar el apartado de calificaciones',
        '\n*5* = Contactar a mi asesor/a',
        '\n*6* = Revisar los datos de contacto de mi asesor/a',

    ],
    null,
    null,
    [flowSecundarioSup, flowSecundarioSup2, flowSecundarioSup3, flowSecundarioSup4, flowSecundarioSup5, flowSecundarioSup6]
)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const flowAvisoPriv = addKeyword(['Aviso']).addAnswer(
    ['📖Link de Aviso', 'https://app.box.com/embed/s/zultcnxavy0xpvk8ykl9auoiuoolyuhx',],
    null,
    null,
    [flowSecundario]
)

////////////////////////////////////////// Inicio del CHATBOT // POR SINTAXIX SE QUEDA EN EL FONDO ////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const flowPrincipal = addKeyword(['hola','buenas', 'ole', 'alo', 'que tal', 'hey','tardes','dias','noches'])
    .addAnswer('🙌 Hola bienvenido! a este *Chatbot* Soy tu asistente *CEFOPEDLER* 🤖')
    .addAnswer(
        [ 
            'Te comparto los indices para la atencion que buscas:',
            '',
            '🔧 *Soporte*  para ver la lista de Ayuda',
            '📄 *Informes* Para enseñarte quienes somos',
            '',
            '',
            '',
            '📖 *Aviso* Para conocer el aviso de privacidad',
        ],
        null,
        null,
        [flowInfos, flowSoporte, flowAvisoPriv]
    )

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}


main()
