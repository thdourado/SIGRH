document.addEventListener("DOMContentLoaded", function () {

    var map = L.map('map').setView([-7.200, -48.333], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // ÍconeS Personalizados
    var blackIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    var greenIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    // Marcadores para os pontos de monitoramento
    var imgp1 = "img/ponto1.jpg", imgp2 = "img/ponto2.jpg", imgp3 = "img/ponto3.jpg", imgp4 = "img/ponto4.jpg", imgp5 = "img/ponto5.jpg",
        imgp6 = "img/ponto6.jpg", imgp7 = "img/ponto7.jpg", imgp8 = "img/ponto8.jpg", imgp9 = "img/ponto9.jpg", imgp10 = "img/ponto10.jpg",
        imgp11 = "img/ponto11.jpg", imgp12 = "img/ponto12.jpg", imgp13 = "img/ponto13.jpg", imgp14 = "img/ponto14.jpg", imgp15 = "img/ponto15.jpg",
        imgp16 = "img/ponto16.jpg", imgp17 = "img/ponto17.jpg", imgp18 = "img/ponto18.jpg", imgp19 = "img/ponto19.jpg", imgp20 = "img/ponto20.jpg",
        imgp21 = "img/ponto21.jpg", imgp22 = "img/ponto22.jpg", imgp23 = "img/ponto23.jpg", imgp24 = "img/ponto24.jpg", imgp25 = "img/ponto25.jpg",
        imgp26 = "img/ponto26.jpg", imgp27 = "img/ponto27.jpg", imgp28 = "img/ponto28.jpg", imgp29 = "img/ponto29.jpg", imgp30 = "img/ponto30.jpg",
        imgp31 = "img/ponto31.jpg", imgp32 = "img/ponto32.jpg", imgp33 = "img/ponto33.jpg", imgp34 = "img/ponto34.jpg", imgp35 = "img/ponto35.jpg",
        imgp36 = "img/ponto36.jpg", imgp37 = "img/ponto37.jpg", imgp38 = "img/ponto38.jpg", imgp39 = "img/ponto39.jpg", imgp40 = "img/ponto40.jpg",
        imgp41 = "img/ponto41.jpg", imgp42 = "img/ponto42.jpg", imgp43 = "img/ponto43.jpg", imgp44 = "img/ponto44.jpg", imgp45 = "img/ponto45.jpg",
        imgp46 = "img/ponto46.jpg", imgp47 = "img/ponto47.jpg", imgp48 = "img/ponto48.jpg", imgp49 = "img/ponto49.jpg", imgp50 = "img/ponto50.jpg",
        imgp51 = "img/ponto51.jpg", imgp52 = "img/ponto52.jpg", imgp53 = "img/ponto53.jpg", imgp54 = "img/ponto54.jpg", imgp55 = "img/ponto55.jpg",
        imgp56 = "img/ponto56.jpg", imgp57 = "img/ponto57.jpg", imgp58 = "img/ponto58.jpg", imgp59 = "img/ponto59.jpg", imgp60 = "img/ponto60.jpg",
        imgp61 = "img/ponto61.jpg", imgp62 = "img/ponto62.jpg", imgp63 = "img/ponto63.jpg", imgp64 = "img/ponto64.jpg", imgp65 = "img/ponto65.jpg",
        imgp66 = "img/ponto66.jpg", imgp67 = "img/ponto67.jpg", imgp68 = "img/ponto68.jpg", imgp69 = "img/ponto69.jpeg", imgp70 = "img/ponto70.jpg",
        imgp71 = "img/ponto71.jpg", imgp72 = "img/ponto72.jpg", imgp73 = "img/ponto73.jpg", imgp74 = "img/ponto74.jpg", imgp75 = "img/ponto75.jpg",
        imgp76 = "img/ponto76.jpg", imgp77 = "img/ponto77.jpg", imgp78 = "img/ponto78.jpg", imgp79 = "img/ponto79.jpg", imgp80 = "img/ponto80.jpg";

    L.marker([-5.7095, -48.1721]).addTo(map)
        .bindPopup(`
        <strong>Ponto 01:</strong> Rio Araguaia<br> 
        <strong>Município:</strong> Araguatins</strong><br> 
        <strong>IQA:</strong> 88 (ÓTIMO)<br> 
        <img src="${imgp1}" alt="Rio Araguaia" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`)

    L.marker([-5.7892, -47.4692]).addTo(map)
        .bindPopup(`
            <strong>Ponto 02:</strong> Rio Tocantins<br>
            <strong>Município:</strong> Itaguatins</strong><br>
            <strong>IQA:</strong> 89 (ÓTIMO)<br>
            <img src="${imgp2}" alt="Rio Araguaia" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`)

    L.marker([-6.4029, -48.5297]).addTo(map)
        .bindPopup(`
        <strong>Ponto 03:</strong> Rio Araguaia<br>
        <strong>Município:</strong> Xambioá</strong><br>
        <strong>IQA:</strong> 86 (ÓTIMO)<br>
        <img src="${imgp3}" alt="Rio Araguaia" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">
    `);

    L.marker([-6.5660, -48.6359]).addTo(map)
        .bindPopup(`
        <strong>Ponto 04:</strong> Rio Lontra<br>
        <strong>Município:</strong> Araguanã</strong><br>
        <strong>IQA:</strong> 81 (ÓTIMO)<br>
        <img src="${imgp4}" alt="Rio Lontra" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">
    `);

    L.marker([-7.2075, -48.2963], { icon: greenIcon }).addTo(map)
        .bindPopup(`
        <strong>Ponto 05:</strong> Rio Lontra<br>
        <strong>Município:</strong> Araguaína</strong><br>
        <strong>IQA:</strong> 79 (BOM)<br>
        <img src="${imgp5}" alt="Rio Lontra" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">
    `);

    L.marker([-7.7069, -47.3134]).addTo(map)
        .bindPopup(`
        <strong>Ponto 06:</strong> Rio Manuel Alves Grande<br>
        <strong>Município:</strong> Goiatins</strong><br>
        <strong>IQA:</strong> 81 (ÓTIMO)<br>
        <img src="${imgp6}" alt="Rio Manuel Alves Grande" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">
    `);

    L.marker([-8.3625, -49.2748]).addTo(map)
        .bindPopup(`
        <strong>Ponto 07:</strong> Rio Araguaia<br>
        <strong>Município:</strong> Couto Magalhães</strong><br>
        <strong>IQA:</strong> 89 (ÓTIMO)<br>
        <img src="${imgp7}" alt="Rio Araguaia" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">
    `);

    L.marker([-8.3917, -48.1113]).addTo(map)
        .bindPopup(`
        <strong>Ponto 08:</strong> Rio Tocantins<br>
        <strong>Município:</strong> Tupiratins</strong><br>
        <strong>IQA:</strong> 87 (ÓTIMO)<br>
        <img src="${imgp8}" alt="Rio Tocantins" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">
    `);

    L.marker([-8.8026, -49.0000]).addTo(map)
        .bindPopup(`
        <strong>Ponto 09:</strong> Rio Araguaia<br>
        <strong>Município:</strong> Araguacema</strong><br>
        <strong>IQA:</strong> 92 (ÓTIMO)<br>
        <img src="${imgp9}" alt="Rio Araguaia" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `).openPopup();

    L.marker([-9.2383, -49.5556]).addTo(map)
        .bindPopup(`
        <strong>Ponto 10:</strong> Rio Côco<br>
        <strong>Município:</strong> Caseara</strong><br>
        <strong>IQA:</strong> 91 (ÓTIMO)<br>
        <img src="${imgp10}" alt="Rio Côco" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `).openPopup();

    L.marker([-9.3088, -49.9660]).addTo(map)
        .bindPopup(`
        <strong>Ponto 11:</strong> Rio Sono<br>
        <strong>Município:</strong> Pedro Afonso</strong><br>
        <strong>IQA:</strong> 80 (ÓTIMO)<br>
        <img src="${imgp11}" alt="Rio Sono" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `).openPopup();

    L.marker([-9.5669, -47.9318]).addTo(map)
        .bindPopup(`
        <strong>Ponto 12:</strong> Rio Tocantins<br>
        <strong>Município:</strong> Miracema do Tocantins</strong><br>
        <strong>IQA:</strong> 88 (ÓTIMO)<br>
        <img src="${imgp12}" alt="Rio Tocantins" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `).openPopup();

    L.marker([-9.9908, -47.4794]).addTo(map)
        .bindPopup(`
        <strong>Ponto 13:</strong> Rio Sono<br>
        <strong>Município:</strong> Novo Acordo</strong><br>
        <strong>IQA:</strong> 88 (ÓTIMO)<br>
        <img src="${imgp13}" alt="Rio Sono" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `).openPopup();

    L.marker([-10.0058, -47.8216]).addTo(map)
        .bindPopup(`
        <strong>Ponto 14:</strong> Rio Balsas<br>
        <strong>Município:</strong> Aparecida do Rio Negro</strong><br>
        <strong>IQA:</strong> 85 (ÓTIMO)<br>
        <img src="${imgp14}" alt="Rio Balsas" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `).openPopup();

    L.marker([-10.5508, -46.7598]).addTo(map)
        .bindPopup(`
        <strong>Ponto 15:</strong> Rio Novo<br>
        <strong>Município:</strong> Mateiros</strong><br>
        <strong>IQA:</strong> 86 (ÓTIMO)<br>
        <img src="${imgp15}" alt="Rio Novo" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `).openPopup();

    L.marker([-10.5614, -49.9359]).addTo(map)
        .bindPopup(`
        <strong>Ponto 16:</strong> Rio Javaés<br>
        <strong>Município:</strong> Lagoa da Confusão</strong><br>
        <strong>IQA:</strong> 86 (ÓTIMO)<br>
        <img src="${imgp16}" alt="Rio Javaés" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `).openPopup();

    L.marker([-10.5828, -49.9305], { icon: blackIcon }).addTo(map)
        .bindPopup(`
        <strong>Ponto 17:</strong> Rio Formoso<br>
        <strong>Município:</strong> Lagoa da Confusão</strong><br>
        <strong>IQA:</strong> Não Analisado<br>
        <strong>Data de Coleta:</strong> N/A<br>
        <strong>BH:</strong> Bacia Hidrográfica do Rio Formoso<br>
        <img src="${imgp17}" alt="Rio Formoso" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `).openPopup();

    L.marker([-10.8294, -49.7956]).addTo(map)
        .bindPopup(`
        <strong>Ponto 18:</strong> Rio Urubu<br>
        <strong>Município:</strong> Lagoa da Confusão</strong><br>
        <strong>IQA:</strong> 84 (ÓTIMO)<br>
        <img src="${imgp18}" alt="Rio Urubu" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `).openPopup();

    L.marker([-11.3761, -49.6830]).addTo(map)
        .bindPopup(`
        <strong>Ponto 19:</strong> Rio Formoso<br>
        <strong>Município:</strong> Dueré</strong><br>
        <strong>IQA:</strong> 86 (ÓTIMO)<br>
        <img src="${imgp19}" alt="Rio Formoso" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `).openPopup();

    L.marker([-11.7983, -49.7652]).addTo(map)
        .bindPopup(`
        <strong>Ponto 20:</strong> Rio Formoso<br>
        <strong>Município:</strong> Formoso do Araguaia</strong><br>
        <strong>IQA:</strong> 85 (ÓTIMO)<br>
        <img src="${imgp20}" alt="Rio Formoso" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `).openPopup();

    L.marker([-12.2125, -49.6628]).addTo(map)
        .bindPopup(`
        <strong>Ponto 21:</strong> Rio Formoso<br>
        <strong>Município:</strong> Sandolândia</strong><br>
        <strong>IQA:</strong> 81 (ÓTIMO)<br>
        <img src="${imgp21}" alt="Rio Formoso" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `).openPopup();

    L.marker([-11.8538, -48.8450]).addTo(map)
        .bindPopup(`
        <strong>Ponto 22:</strong> Rio Santo Antônio<br>
        <strong>Município:</strong> Gurupi</strong><br>
        <strong>IQA:</strong> 82 (ÓTIMO)<br>
        <img src="${imgp22}" alt="Rio Santo Antônio" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `).openPopup();

    L.marker([-10.8799, -48.3551]).addTo(map)
        .bindPopup(`
        <strong>Ponto 23:</strong> Rio Areia<br>
        <strong>Município:</strong> Porto Nacional</strong><br>
        <strong>IQA:</strong> 80 (ÓTIMO)<br>
        <img src="${imgp23}" alt="Rio Areia" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `).openPopup();

    L.marker([-11.7609, -47.8198]).addTo(map)
        .bindPopup(`
        <strong>Ponto 24:</strong> Rio Manuel Alves<br>
        <strong>Município:</strong> Natividade</strong><br>
        <strong>IQA:</strong> 92 (ÓTIMO)<br>
        <img src="${imgp24}" alt="Rio Manuel Alves" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `).openPopup();

    L.marker([-11.9028, -47.6014]).addTo(map)
        .bindPopup(`
        <strong>Ponto 25:</strong> Rio Manuel Alves<br>
        <strong>Município:</strong> Natividade</strong><br>
        <strong>IQA:</strong> 90 (ÓTIMO)<br>
        <img src="${imgp25}" alt="Rio Manuel Alves" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `).openPopup();

    L.marker([-12.4188, -47.1976]).addTo(map)
        .bindPopup(`
        <strong>Ponto 26:</strong> Rio Palma<br>
        <strong>Município:</strong> Conceição do Tocantins</strong><br>
        <strong>IQA:</strong> 91 (ÓTIMO)<br>
        <img src="${imgp26}" alt="Rio Palma" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `).openPopup();

    L.marker([-11.8253, -47.1873]).addTo(map)
        .bindPopup(`
        <strong>Ponto 27:</strong> Rio Manuel Alves<br>
        <strong>Município:</strong> Dianópolis</strong><br>
        <strong>IQA:</strong> 83 (ÓTIMO)<br>
        <img src="${imgp27}" alt="Rio Manuel Alves" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `).openPopup();

    L.marker([-12.2794, -46.9186]).addTo(map)
        .bindPopup(`
        <strong>Ponto 28:</strong> Rio Palmeiras<br>
        <strong>Município:</strong> Taipas</strong><br>
        <strong>IQA:</strong> 83 (ÓTIMO)<br>
        <img src="${imgp28}" alt="Rio Palmeiras" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `).openPopup();

    L.marker([-12.6327, -46.6812]).addTo(map)
        .bindPopup(`
        <strong>Ponto 29:</strong> Rio Palma<br>
        <strong>Município:</strong> Aurora do Tocantins</strong><br>
        <strong>IQA:</strong> 90 (ÓTIMO)<br>
        <img src="${imgp29}" alt="Rio Palma" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `).openPopup();

    L.marker([-12.6348, -47.8696]).addTo(map)
        .bindPopup(`
        <strong>Ponto 30:</strong> Rio Paranã<br>
        <strong>Município:</strong> Paranã</strong><br>
        <strong>IQA:</strong> 87 (ÓTIMO)<br>
        <img src="${imgp30}" alt="Rio Paranã" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `).openPopup();

    L.marker([-8.3883, -47.7683]).addTo(map)
        .bindPopup(`
        <strong>Ponto 31:</strong> Rio Manoel Alves Pequeno<br>
        <strong>Município:</strong> Itacajá</strong><br>
        <strong>IQA:</strong> 85 (ÓTIMO)<br>
        <img src="${imgp31}" alt="Rio Manoel Alves Pequeno" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `).openPopup();

    L.marker([-12.0861, -49.0834]).addTo(map)
        .bindPopup(`
        <strong>Ponto 32:</strong> Rio Santo Antônio<br>
        <strong>Município:</strong> Figueirópolis</strong><br>
        <strong>IQA:</strong> 85 (ÓTIMO)<br>
        <img src="${imgp32}" alt="Rio Santo Antônio" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `).openPopup();

    L.marker([-12.3921, -48.7123]).addTo(map)
        .bindPopup(`
        <strong>Ponto 33:</strong> Rio Santo Tereza<br>
        <strong>Município:</strong> Peixe</strong><br>
        <strong>IQA:</strong> 87 (ÓTIMO)<br>
        <img src="${imgp33}" alt="Rio Santo Tereza" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `).openPopup();

    L.marker([-5.7892, -48.1773]).addTo(map)
        .bindPopup(`
        <strong>Ponto 34:</strong> Rio São Martinho<br>
        <strong>Município:</strong> Araguatins</strong><br>
        <strong>IQA:</strong> 87 (ÓTIMO)<br>
        <img src="${imgp34}" alt="Rio São Martinho" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `).openPopup();

    L.marker([-9.9747, -49.5986]).addTo(map)
        .bindPopup(`
        <strong>Ponto 35:</strong> Rio do Coco<br>
        <strong>Município:</strong> Marianópolis</strong><br>
        <strong>IQA:</strong> 87 (ÓTIMO)<br>
        <img src="${imgp35}" alt="Rio do Coco" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `);

    L.marker([-9.1686, -49.3890]).addTo(map)
        .bindPopup(`
        <strong>Ponto 36:</strong> Rio Piranhas<br>
        <strong>Município:</strong> Dois Irmãos</strong><br>
        <strong>IQA:</strong> 81 (ÓTIMO)<br>
        <img src="${imgp36}" alt="Rio Piranhas" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `);

    L.marker([-11.1249, -49.6293], { icon: greenIcon }).addTo(map)
        .bindPopup(`
        <strong>Ponto 37:</strong> Rio Dueré<br>
        <strong>Município:</strong> Lagoa da Confusão</strong><br>
        <strong>IQA:</strong> 78 (BOM)<br>
        <img src="${imgp37}" alt="Rio Dueré" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `);

    L.marker([-7.9521, -46.8104], { icon: greenIcon }).addTo(map)
        .bindPopup(`
        <strong>Ponto 38:</strong> Rio Manoel Alves Grande<br>
        <strong>Município:</strong> Campos Lindos</strong><br>
        <strong>IQA:</strong> 79 (BOM)<br>
        <strong>Data de Coleta:</strong> 28/11/2023<br>
        <img src="${imgp38}" alt="Rio Manoel Alves Grande" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `);

    L.marker([-6.4775, -48.1908]).addTo(map)
        .bindPopup(`
        <strong>Ponto 39:</strong> Rio Corda<br>
        <strong>Município:</strong> Riachinho</strong><br>
        <strong>IQA:</strong> 83 (ÓTIMO)<br>
        <img src="${imgp39}" alt="Rio Corda" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `);

    L.marker([-10.3251, -49.6011]).addTo(map)
        .bindPopup(`
        <strong>Ponto 40:</strong> Rio Riozinho<br>
        <strong>Município:</strong> Pium</strong><br>
        <strong>IQA:</strong> 82 (ÓTIMO)<br>
        <img src="${imgp40}" alt="Rio Riozinho" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `);

    L.marker([-9.1243, -49.7444]).addTo(map)
        .bindPopup(`
        <strong>Ponto 41:</strong> Rio Caiapó<br>
        <strong>Município:</strong> Araguacema</strong><br>
        <strong>IQA:</strong> 90 (ÓTIMO)<br>
        <img src="${imgp41}" alt="Rio Caiapó" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `);

    L.marker([-12.6039, -47.8601]).addTo(map)
        .bindPopup(`
        <strong>Ponto 42:</strong> Rio Palma<br>
        <strong>Município:</strong> Paranã</strong><br>
        <strong>IQA:</strong> 85 (ÓTIMO)<br>
        <img src="${imgp42}" alt="Rio Palma" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `);

    L.marker([-11.3831, -49.6323]).addTo(map)
        .bindPopup(`
        <strong>Ponto 43:</strong> Rio Xavante<br>
        <strong>Município:</strong> Dueré</strong><br>
        <strong>IQA:</strong> 81 (ÓTIMO)<br>
        <img src="${imgp43}" alt="Rio Xavante" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `);

    L.marker([-11.3978, -46.8862]).addTo(map)
        .bindPopup(`
        <strong>Ponto 44:</strong> Rio Manuel Alves<br>
        <strong>Município:</strong> Rio da Conceição</strong><br>
        <strong>IQA:</strong> 91 (ÓTIMO)<br>
        <img src="${imgp44}" alt="Rio Manuel Alves" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `);

    L.marker([-9.5293, -48.6064]).addTo(map)
        .bindPopup(`
        <strong>Ponto 45:</strong> Rio Providência<br>
        <strong>Município:</strong> Miranorte</strong><br>
        <strong>IQA:</strong> 82 (ÓTIMO)<br>
        <img src="${imgp45}" alt="Rio Providência" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `);

    L.marker([-8.9681, -48.1683]).addTo(map)
        .bindPopup(`
        <strong>Ponto 46:</strong> Rio Sono<br>
        <strong>Município:</strong> Bom Jesus do Tocantins</strong><br>
        <strong>IQA:</strong> 87 (ÓTIMO)<br>
        <img src="${imgp46}" alt="Rio Sono" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `);

    L.marker([-7.7522, -47.2858]).addTo(map)
        .bindPopup(`
        <strong>Ponto 47:</strong> Rio Vermelho<br>
        <strong>Município:</strong> Goiatins</strong><br>
        <strong>IQA:</strong> 82 (ÓTIMO)<br>
        <img src="${imgp47}" alt="Rio Vermelho" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `);

    L.marker([-10.6942, -47.7922]).addTo(map)
        .bindPopup(`
        <strong>Ponto 48:</strong> Rio Balsa<br>
        <strong>Município:</strong> Ponte Alta do Tocantins</strong><br>
        <strong>IQA:</strong> 85 (ÓTIMO)<br>
        <img src="${imgp48}" alt="Rio Balsa" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `);

    L.marker([-11.9824, -48.6563]).addTo(map)
        .bindPopup(`
        <strong>Ponto 49:</strong> Rio Santa Tereza<br>
        <strong>Município:</strong> Gurupi</strong><br>
        <strong>IQA:</strong> 86 (ÓTIMO)<br>
        <img src="${imgp49}" alt="Rio Santa Tereza" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `);

    L.marker([-6.3568, -48.3521]).addTo(map)
        .bindPopup(`
        <strong>Ponto 50:</strong> Rio Corda<br>
        <strong>Município:</strong> Xambioá</strong><br>
        <strong>IQA:</strong> 84 (ÓTIMO)<br>
        <img src="${imgp50}" alt="Rio Corda" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(191, 189, 189, 0.5);">
    `);


    L.marker([-5.2543, -48.1986]).addTo(map)
        .bindPopup(`
    <strong>Ponto 51:</strong> Rio Tocantins<br>
    <strong>Município:</strong> São Sebastião do Tocantins<br>
    <strong>IQA:</strong> 87 (ÓTIMO)<br>
    <img src="${imgp51}" alt="Rio Tocantins" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`)
    .openPopup();

    L.marker([-6.0442, -48.1987]).addTo(map)
        .bindPopup(`
    <strong>Ponto 52:</strong> Rio Piranhas<br>
    <strong>Município:</strong> São Bento do Tocantins<br>
    <strong>IQA:</strong> 87 (ÓTIMO)<br>
    <img src="${imgp52}" alt="Rio Piranhas" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`);

    L.marker([-6.5669, -47.4655]).addTo(map)
        .bindPopup(`
    <strong>Ponto 53:</strong> Rio Tocantins<br>
    <strong>Município:</strong> Aguiarnópolis<br>
    <strong>IQA:</strong> 86 (ÓTIMO)<br>
    <img src="${imgp53}" alt="Rio Tocantins" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`);

    L.marker([-7.2520, -48.1601], { icon: greenIcon }).addTo(map)
        .bindPopup(`
    <strong>Ponto 54:</strong> Rio Lontra<br>
    <strong>Município:</strong> Araguaína<br>
    <strong>IQA:</strong> 76 (BOM)<br>
    <img src="${imgp54}" alt="Rio Lontra" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`);

    L.marker([-7.1459, -48.6112]).addTo(map)
        .bindPopup(`
    <strong>Ponto 55:</strong> Rio Muricizal<br>
    <strong>Município:</strong> Muricilândia<br>
    <strong>IQA:</strong> 84 (ÓTIMO)<br>
    <img src="${imgp55}" alt="Rio Muricizal" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`);

    L.marker([-7.8586, -47.9220]).addTo(map)
        .bindPopup(`
    <strong>Ponto 56:</strong> Rio Tocantins<br>
    <strong>Município:</strong> Palmeirante<br>
    <strong>IQA:</strong> 86 (ÓTIMO)<br>
    <img src="${imgp56}" alt="Rio Tocantins" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`);

    L.marker([-7.8739, -48.8854]).addTo(map)
        .bindPopup(`
    <strong>Ponto 57:</strong> Rio das Cunhas<br>
    <strong>Município:</strong> Bernardo Sayão<br>
    <strong>IQA:</strong> 80 (ÓTIMO)<br>
    <img src="${imgp57}" alt="Rio das Cunhas" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`);

    L.marker([-7.6136, -49.0453], { icon: greenIcon }).addTo(map)
        .bindPopup(`
    <strong>Ponto 58:</strong> Rio Jenipapo<br>
    <strong>Município:</strong> Arapoema<br>
    <strong>IQA:</strong> 78 (BOM)<br>
    <img src="${imgp58}" alt="Rio Jenipapo" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`);

    L.marker([-9.3396, -49.3733]).addTo(map)
        .bindPopup(`
    <strong>Ponto 59:</strong> Rio Araguaia<br>
    <strong>Município:</strong> Pau d'Arco<br>
    <strong>IQA:</strong> 85 (ÓTIMO)<br>
    <img src="${imgp59}" alt="Rio Araguaia" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`);

    L.marker([-9.0449, -47.8723]).addTo(map)
        .bindPopup(`
    <strong>Ponto 60:</strong> Rio Perdido<br>
    <strong>Município:</strong> Rio Sono<br>
    <strong>IQA:</strong> 80 (ÓTIMO)<br>
    <img src="${imgp60}" alt="Rio Perdido" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`);

    L.marker([-10.3629, -48.6618], { icon: greenIcon }).addTo(map)
        .bindPopup(`
    <strong>Ponto 61:</strong> Ribeirão dos Mangues<br>
    <strong>Município:</strong> Porto Nacional<br>
    <strong>IQA:</strong> 75 (BOM)<br>
    <img src="${imgp61}" alt="Ribeirão dos Mangues" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`);

    L.marker([-8.8914, -48.4380]).addTo(map)
        .bindPopup(`
    <strong>Ponto 62:</strong> Rio Crixas<br>
    <strong>Município:</strong> Brejinho de Nazaré<br>
    <strong>IQA:</strong> 80 (ÓTIMO)<br>
    <img src="${imgp62}" alt="Rio Crixas" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`);

    L.marker([-11.6401, -48.3912]).addTo(map)
        .bindPopup(`
    <strong>Ponto 63:</strong> Rio São Valério<br>
    <strong>Município:</strong> São Valério<br>
    <strong>IQA:</strong> 88 (ÓTIMO)<br>
    <img src="${imgp63}" alt="Rio São Valério" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`)
   ;

    L.marker([-11.6670, -47.4391]).addTo(map)
        .bindPopup(`
    <strong>Ponto 64:</strong> Rio do Peixe<br>
    <strong>Município:</strong> Natividade<br>
    <strong>IQA:</strong> 82 (ÓTIMO)<br>
    <img src="${imgp64}" alt="Rio do Peixe" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`)
    ;

    L.marker([-10.6469, -46.6267]).addTo(map)
        .bindPopup(`
    <strong>Ponto 65:</strong> Rio Preto<br>
    <strong>Município:</strong> Mateiros<br>
    <strong>IQA:</strong> 86 (ÓTIMO)<br>
    <img src="${imgp65}" alt="Rio Preto" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`)
  ;

    L.marker([-7.6955, -48.8933]).addTo(map)
        .bindPopup(`
    <strong>Ponto 66:</strong> Rio Tocantins<br>
    <strong>Município:</strong> Barra do Ouro<br>
    <strong>IQA:</strong> 84 (ÓTIMO)<br>
    <img src="${imgp66}" alt="Rio Tocantins" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`);

    L.marker([-10.2713, -47.8364]).addTo(map)
        .bindPopup(`
    <strong>Ponto 67:</strong> Rio Balsas<br>
    <strong>Município:</strong> Santa Tereza do Tocantins<br>
    <strong>IQA:</strong> 85 (ÓTIMO)<br>
    <img src="${imgp67}" alt="Rio Balsas" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`);

    L.marker([-11.2467, -48.4594]).addTo(map)
        .bindPopup(`
    <strong>Ponto 68:</strong> Rio Tocantins<br>
    <strong>Município:</strong> Ipueiras<br>
    <strong>IQA:</strong> 85 (ÓTIMO)<br>
    <img src="${imgp68}" alt="Rio Tocantins" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`)
    ;

    L.marker([-12.3951, -46.4151]).addTo(map)
        .bindPopup(`
    <strong>Ponto 69:</strong> Rio Conceição<br>
    <strong>Município:</strong> Taguatinga<br>
    <strong>IQA:</strong> 82 (ÓTIMO)<br>
    <img src="${imgp69}" alt="Rio Conceição" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`);

    L.marker([-12.9292, -49.8257], { icon: greenIcon }).addTo(map)
        .bindPopup(`
    <strong>Ponto 70:</strong> Rio Escuro<br>
    <strong>Município:</strong> Araguaçu<br>
    <strong>IQA:</strong> 79 (BOM)<br>
    <img src="${imgp70}" alt="Rio Escuro" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`);

    L.marker([-6.2089, -47.7754]).addTo(map)
        .bindPopup(`
    <strong>Ponto 71:</strong> Rio Tocantins<br>
    <strong>Município:</strong> Praia Norte<br>
    <strong>IQA:</strong> 88 (ÓTIMO)<br>
    <img src="${imgp71}" alt="Rio Tocantins" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`);

    L.marker([-10.6929, -48.4157]).addTo(map)
        .bindPopup(`
    <strong>Ponto 72:</strong> Rio Água Suja<br>
    <strong>Município:</strong> Porto Nacional<br>
    <strong>IQA:</strong> 81 (ÓTIMO)<br>
    <img src="${imgp72}" alt="Rio Água Suja" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`);

    L.marker([-11.6473, -48.9914]).addTo(map)
        .bindPopup(`
    <strong>Ponto 73:</strong> Rio do Sono<br>
    <strong>Município:</strong> São Félix do Tocantins<br>
    <strong>IQA:</strong> 82 (ÓTIMO)<br>
    <img src="${imgp73}" alt="Rio do Sono" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`);

    L.marker([-10.7284, -48.8584], { icon: greenIcon }).addTo(map)
        .bindPopup(`
    <strong>Ponto 74:</strong> Rio Água Suja<br>
    <strong>Município:</strong> Monte do Carmo<br>
    <strong>IQA:</strong> 79 (BOM)<br>
    <img src="${imgp74}" alt="Rio Água Suja" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`);

    L.marker([-12.4542, -49.2193]).addTo(map)
        .bindPopup(`
    <strong>Ponto 75:</strong> Rio Canabrava<br>
    <strong>Município:</strong> Alvorada<br>
    <strong>IQA:</strong> 85 (ÓTIMO)<br>
    <img src="${imgp75}" alt="Rio Canabrava" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`);

    L.marker([-11.7468, -48.8621]).addTo(map)
        .bindPopup(`
    <strong>Ponto 76:</strong> Rio Manuel Alves<br>
    <strong>Município:</strong> Santa Rosa do Tocantins<br>
    <strong>IQA:</strong> 84 (ÓTIMO)<br>
    <img src="${imgp76}" alt="Rio Manuel Alves" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`);

    L.marker([-10.8754, -48.9329]).addTo(map)
        .bindPopup(`
    <strong>Ponto 77:</strong> Rio Javaés<br>
    <strong>Município:</strong> Pium<br>
    <strong>IQA:</strong> 86 (ÓTIMO)<br>
    <img src="${imgp77}" alt="Rio Javaés" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`);

    L.marker([-11.7871, -49.1673]).addTo(map)
        .bindPopup(`
    <strong>Ponto 78:</strong> Rio Javaés<br>
    <strong>Município:</strong> Formoso do Araguaia<br>
    <strong>IQA:</strong> 85 (ÓTIMO)<br>
    <img src="${imgp78}" alt="Rio Javaés" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`);

    L.marker([-11.7922, -49.1676]).addTo(map)
        .bindPopup(`
    <strong>Ponto 79:</strong> Rio Javaés<br>
    <strong>Município:</strong> Formoso do Araguaia<br>
    <strong>IQA:</strong> 85 (ÓTIMO)<br>
    <img src="${imgp79}" alt="Rio Javaés" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`);

    L.marker([-8.0532, -48.4535]).addTo(map)
        .bindPopup(`
    <strong>Ponto 80:</strong> Córrego Água Fria<br>
    <strong>Município:</strong> Colinas do Tocantins<br>
    <strong>IQA:</strong> 89 (ÓTIMO)<br>
    <img src="${imgp80}" alt="Córrego Água Fria" style="width:100%; height:auto; margin-top:10px; border-radius: 4px; box-shadow: 5px 5px 15px rgba(190, 190, 190, 0.5);">`);

    // Adicionando a legenda
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'legend');
        div.innerHTML = `
        <h3 style="font-size: 14px;">Legenda:</h3>
        <i style="background-image: url(https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png);
        background-size: cover;"></i> IQA entre 80 e 100 (ÓTIMO)<br>
        <i style="background-image: url(https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png);
        background-size: cover;"></i> IQA entre 50 e 79 (BOM)<br>
        <i style="background-image: url(https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png);
        background-size: cover;"></i> IQA entre 35 e 49 (REGULAR)<br>
        <i style="background-image: url(https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png);
        background-size: cover;"></i> IQA entre 20 e 34 (RUIM)<br>
        <i style="background-image: url(https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png);
        background-size: cover;"></i> IQA entre 0 e 19 (PÉSSIMO)<br>
        <i style="background-image: url(https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png);
        background-size: cover;"></i>Dados Indisponíveis<br>        
    `;
        return div;
    };

    legend.addTo(map);

    // Dados de exemplo para o gráfico
    var dados = {
        '1': {
            'data1': [0.43, 21.95, 29.7, 35.00, null, 6.78, 88.36, 45.30, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'data2': [0.49, 32.47, 31.47, 27.93, 7.12, 7.95, 107.91, 2.17, 20.8, 14.8, 6, 0.020, 1.8, null, 1.6, 0.001, 0.2, 0.5, 7, 1.8, 14, 5.0, null, null, null, null, null, 92],
            'data3': [0.54, 27.83, 29.6, 32.4, 6.1, 6.5, 85.4, 42.88, 26.02, 20.02, 6, 0.109, 2.81, null, 2.42, 0.001, 0.29, 1.7, 6, 1.8, 15, 5.0, null, null, null, null, null, 78],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '2': {
            'data1': [0.38, 24.95, 29.7, 35.00, null, 6.78, 88.36, 45.30, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '3': {
            'data1': [0.43, 24.95, 29.7, 35.00, null, 6.78, 88.36, 45.30, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '4': {
            'data1': [0.43, 24.95, 29.7, 35.00, null, 6.78, 88.36, 45.30, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '5': {
            'data1': [0.43, 24.95, 29.7, 35.00, null, 6.78, 88.36, 45.30, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '6': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '7': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '8': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '9': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '10': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '11': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '12': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '13': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '14': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '15': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '16': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '17': {
            'data1': [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'data2': [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'data3': [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'data4': [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'data5': [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'data6': [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'data7': [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'data8': [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
        },

        '18': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '19': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '20': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '21': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '22': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '23': {
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '24': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '25': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '26': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '27': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '28': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '29': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '30': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '31': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '32': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '33': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '34': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '35': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '36': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '37': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '38': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '39': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '40': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '41': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '42': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '43': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '44': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '45': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '46': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '47': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '48': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '49': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '50': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '51': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '52': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '53': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '54': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '55': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '56': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '57': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '58': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '59': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '60': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '61': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '62': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '63': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '64': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '65': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '66': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '67': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '68': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '69': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '70': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '71': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '72': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '73': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '74': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '75': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '76': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '77': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '78': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '79': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },

        '80': {
            'data1': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data2': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            'data3': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data4': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data5': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data6': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data7': [0.45, 28.50, 29.90, 35.30, 7.10, 6.90, 92.00, 15.00, 30.00, 20.00, 12.0, 0.100, null, null, null, null, null, 0.8, 14.0, null, 30.00, null, null, null, null, null, null, 85],
            'data8': [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87]
        },


    };


    // Inicialização do gráfico
    var ctx = document.getElementById('graficoQualidadeAgua').getContext('2d');
    var graficoQualidadeAgua = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
            datasets: [{
                label: 'Parâmetros de Qualidade da Água',
                data: dados['1']['data1'],
                backgroundColor: 'rgba(0, 102, 204, 0.7)', // Azul claro para preenchimento
                borderColor: 'rgba(0, 102, 204, 1)', // Azul claro para borda
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Event listener para mudança de ponto de monitoramento e data
    document.getElementById('pontoMonitoramento').addEventListener('change', function (e) {
        var selectedPonto = e.target.value;
        var selectedData = document.getElementById('dataSelecionada').value;

        if (selectedPonto in dados && selectedData in dados[selectedPonto]) {
            graficoQualidadeAgua.data.datasets[0].data = dados[selectedPonto][selectedData];
            graficoQualidadeAgua.update();
        } else {
            alert('Selecione uma data');
        }
    });


    document.getElementById('dataSelecionada').addEventListener('change', function (e) {
        var selectedPonto = document.getElementById('pontoMonitoramento').value;
        var selectedData = e.target.value;

        if (selectedPonto in dados && selectedData in dados[selectedPonto]) {
            graficoQualidadeAgua.data.datasets[0].data = dados[selectedPonto][selectedData];
            graficoQualidadeAgua.update();
        } else {
            alert('Dados não encontrados para a data selecionada.');
        }
    });


});
