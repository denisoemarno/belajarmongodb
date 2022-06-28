// Insert document peminjaman
db.peminjaman.insertMany([
    {
        _id: 1,
        Name:"Febri",
        Authors:"Chupradit S., Huy D.T.N., Hachem K., Shichiyakh R.A., Bokov D., Mahmudiono T., Al-Rekaby H.Q., Kadhim M.M., Thangavelu L." ,
        Title:"Agrobiological evaluations of newly introduced grapes varieties under climatic conditions of the south of Kazakhstan [Avaliações agrobiológicas de variedades de uvas recém-introduzidas sob as condições climáticas do sul do Cazaquistão]" ,
        Year:"2024",
        tgl_peminjaman: new ISODate("2022-02-01T06:10:30Z"),
        tgl_rencana_pengembalian: new ISODate("2022-02-10"),
        price: new NumberLong(10000)
        
    },
    {
        _id: 2,
        Name:"Densu",
        Authors:"Budi H.S., Jameel M.F., Widjaja G., Alasady M.S., Mahmudiono T., Mustafa Y.F., Fardeeva I., Kuznetsova M." ,
        Title:"Study on the role of nano antibacterial materials in orthodontics (a review) [Estudo sobre o papel dos materiais nanoantibacterianos na ortodontia]" ,
        Year:"2024",
        tgl_peminjaman: new ISODate("2022-03-01T14:10:30Z"),
        tgl_rencana_pengembalian: new ISODate("2022-03-11"),
        price: new NumberLong(10000)
       
    },
    {
        _id: 3,
        Name:"Bintang",
        Authors:"Menezes C.W.G., Mota-Filho T.M.M., Abrahão S.A., Pereira A.I.A., Silva R.B., Tavares W.S., Serrão J.E., Zanuncio J.C." ,
        Title:"Infestation of Portulaca oleracea (Portulacaceae) plants by Neotuerta platensis (Lepidoptera: Noctuidae) larvae in Brazil: evaluations for five consecutive years [Infestação de plantas de Portulaca oleracea (Portulacaceae) por larvas de Neotuerta platensis (Lepidoptera: Noctuidae) no Brasil: avaliações por cinco anos consecutivos]" ,
        Year:"2024",
        tgl_peminjaman:new ISODate("2022-04-01T10:10:30Z"),
        tgl_rencana_pengembalian:new ISODate("2022-03-11"),
        price: new NumberLong(10000)
       
    },
    {
        _id: 4,
        Name:"Tono",
        Authors:"Dal Pogetto M.H.F.A., Tavares W.S., Zanuncio J.C., Silva W.M., Masson M.V., Ferreira-Filho P.J., Barbosa L.R., Wilcken C.F." ,
        Title:"High population levels lead Glycaspis brimblecombei (Hemiptera: Aphalaridae) to unrecorded feeding and oviposition behaviors on Eucalyptus urograndis plants [Altos níveis populacionais levam Glycaspis brimblecombei (Hemiptera: Aphalaridae) a diferentes comportamentos de alimentação e oviposição em plantas de Eucalyptus urograndis]" ,
        Year:"2024",
        tgl_peminjaman:new ISODate("2022-05-01T10:10:30Z"),
        tgl_rencana_pengembalian:new ISODate("2022-06-11"),
        price: new NumberLong(10000)
       
    },
    {
        _id: 5,
        Name:"Dulloh",
        Authors:"Sulaeman A.S., Putro P.A., Nikmatin S." ,
        Title:"An Overview of Osmosis Study in Living Cells and its Implication in Forwarding Osmosis for Water Treatment Application" ,
        Year:"2023",
        tgl_peminjaman:new ISODate("2022-05-01T10:10:30Z"),
        tgl_rencana_pengembalian:new ISODate("2022-08-11"),
        price: new NumberLong(10000)
       
    },
    
]);

db.peminjaman.find()
