    // Dados de exemplo para o gráfico
    var dadosPonto1 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.31, 30.80, 30.38, 34.46, 6.69, 6.52, 86.89, 15.94, 30.37, 18.37, 12.0, 0.117, null, null, null, null, null, 0.6, 13.0, null, 31.00, null, null, null, null, null, null, 87],
            backgroundColor: 'rgba(0, 102, 204, 0.7)', // Azul claro para preenchimento
            borderColor: 'rgba(0, 102, 204, 1)', // Azul claro para borda
            borderWidth: 1
        }]
    };
    

    var dadosPonto2 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.35, 30.00, 30.19, 46.40, 7.03, 7.18, 95.37, 7.02, 31.13, 26.13, 5.0, 0.133, "<0.60", "<0.20", "<0.010", "<0.001", "<0.050", 0.2, 4.0, "<1.8", 45.00, "<0.50", "<0.040", "<0.050", "<0.005", "<0.020", "<1.00", 89],
            backgroundColor: 'rgba(0, 102, 204, 0.7)', // Azul claro para preenchimento
            borderColor: 'rgba(0, 102, 204, 1)', // Azul claro para borda
            borderWidth: 1
        }]
    };
    
    var dadosPonto3 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.55, 26.60, 30.32, 37.81, 6.98, 7.21, 95.87, 8.09, 20.49, 16.5, '<4.0', 0.197, '<0.60', '<0.20', '<1.000', '<0.001', 0.650, 1.9, 7.0, '<1.8', 18.00, '<5.00', '<0.040', '<0.050', '<0.005', '<0.020', '<1.00', 85],
            backgroundColor: 'rgba(0, 102, 204, 0.7)', // Azul claro para preenchimento
            borderColor: 'rgba(0, 102, 204, 1)', // Azul claro para borda
            borderWidth: 1
        }]
    };
    
    var dadosPonto4 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.20, 26.62, 27.49, 42.8, 6.77, 7.29, 92.29, 12.78, 22.14, 18.15, '<4.0', 0.179, 1.77, '<0.20', 1.67, '<0.001', 0.100, 1.9, 4.0, '<1.8', 80.00, '<5.0', '<0.040', '<0.050', '<0.005', '<0.020', '<1.00', 81],
            backgroundColor: 'rgba(0, 102, 204, 0.7)', // Azul claro para preenchimento
            borderColor: 'rgba(0, 102, 204, 1)', // Azul claro para borda
            borderWidth: 1
        }]
    };
    
    var dadosPonto5 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.35, 25.71, 26.79, 30.5, 6.25, 6.10, 76.26, 13.13, 13.89, 9.90, '<4.0', 0.202, 1.05, '<0.20', 1.05, '<0.001', '<0.100', 1.6, 4.0, '<1.8', 25.00, '<5.0', '<0.040', '<0.050', '<0.005', '<0.020', '<1.00', 79],
            backgroundColor: 'rgba(0, 102, 204, 0.7)', // Azul claro para preenchimento
            borderColor: 'rgba(0, 102, 204, 1)', // Azul claro para borda
            borderWidth: 1
        }]
    };

    var dadosPonto6 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.31, 28.62, 28.65, 11.09, 6.34, 7.34, 94.87, 17.89, 96.33, 67.33, 29.0, 0.114, '<0.60', '<0.20', '<1.00', '<0.001', '<0.02', 9.3, 39, '<1.8', 8, '<5.0', '<0.040', '<0.050', '<0.00025', '<0.020', '<1.00', 81],
            backgroundColor: 'rgba(0, 102, 204, 0.7)', // Azul claro para preenchimento
            borderColor: 'rgba(0, 102, 204, 1)', // Azul claro para borda
            borderWidth: 1
        }]
    };
    
    var dadosPonto7 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.33, 26.05, 28.88, 39.34, 6.49, 7.01, 90.93, 6.62, 27.84, 21.84, 6.0, '<0.002', '<0.60', '<0.040', '<0.010', '<0.001', '<0.050', 1.8, 6.0, '<1.8', 15.00, '<5.0', '<0.040', '<0.050', '<0.005', '<0.020', '<1.00', 89],
            backgroundColor: 'rgba(0, 102, 204, 0.7)', // Azul claro para preenchimento
            borderColor: 'rgba(0, 102, 204, 1)', // Azul claro para borda
            borderWidth: 1
        }]
    };
    
    var dadosPonto8 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.24, 28.36, 31.74, 81.18, 7.53, 6.98, 95.09, 2.31, 67.44, 50.44, 17, 0.141, '<1.00', '<0.20', '<1.00', '<0.0010', '<0.02', 2.5, 15.0, '<1.8', 43.00, '<5.0', '<0.040', '<0.050', '<0.00025', '<0.020', '<1.00', 87],
            backgroundColor: 'rgba(0, 102, 204, 0.7)', // Azul claro para preenchimento
            borderColor: 'rgba(0, 102, 204, 1)', // Azul claro para borda
            borderWidth: 1
        }]
    };
    
    var dadosPonto9 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.30, 31.91, 32.25, 24.79, 7.53, 7.52, 103.35, 9.19, 27.16, 17.16, 10, '<0.002', '<0.60', '<0.20', '<1.00', '<0.0010', '<0.10', 0.6, 14.0, '<1.8', 13.00, '<5.0', '<0.040', '<0.050', '<0.002', '<0.020', '<1.00', 92],
            backgroundColor: 'rgba(0, 102, 204, 0.7)', // Azul claro para preenchimento
            borderColor: 'rgba(0, 102, 204, 1)', // Azul claro para borda
            borderWidth: 1
        }]
    };

    var dadosPonto10 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.38, 33.83, 35.83, 28.62, 8.16, 8.23, 120.06, 7.15, 25.47, 19.47, 6, '<0.002', '<0.60', '<1.000', '<1.00', '<0.0010', 0.11, 0.8, 13.0, '<1.8', 15.00, '<5.0', '<0.040', '<0.050', '<0.002', '<0.020', '<1.00', 91],
            backgroundColor: 'rgba(0, 102, 204, 0.7)', // Azul claro para preenchimento
            borderColor: 'rgba(0, 102, 204, 1)', // Azul claro para borda
            borderWidth: 1
        }]
    };

    var dadosPonto11 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.32, 29.16, 30.59, 8.6, 6.43, 6.86, 91.86, 7.03, 9.25, 5.15, '<4.0', 0.506, '<0.60', '<0.20', '<0.010', '<0.0010', '<0.02', 0.5, 4.0, '<1.8', 10.00, '<5.0', '<0.200', '<0.050', '<0.00025', '<0.20', '<1.01', 80],
            backgroundColor: 'rgba(0, 102, 204, 0.7)', 
            borderColor: 'rgba(0, 102, 204, 1)', 
            borderWidth: 1
        }]
    };
    
    var dadosPonto12 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.35, 27.77, 32.63, 83.93, 6.68, 9.42, 130.41, 2.45, 52.78, 48.79, '<4.0', 0.133, '<0.60', '<0.20', '<0.010', '<0.001', 0.25, 1.5, 13.0, '<1.8', 16.00, 7, '<0.200', '<0.050', '<0.005', '<0.020', '<1.0', 88],
            backgroundColor: 'rgba(0, 102, 204, 0.7)', 
            borderColor: 'rgba(0, 102, 204, 1)', 
            borderWidth: 1
        }]
    };
    
    var dadosPonto13 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.28, 26.57, 27.10, 5.19, 6.30, 7.59, 95.39, 1.35, 12.37, 8.38, '<4.0', 0.104, '<0.60', '<0.20', '<0.010', '<0.001', '<0.100', 0.6, 8.0, '<1.8', 5.00, '<5.0', '<0.040', '<0.050', '<0.005', '<0.020', '<1.0', 88],
            backgroundColor: 'rgba(0, 102, 204, 0.7)', 
            borderColor: 'rgba(0, 102, 204, 1)', 
            borderWidth: 1
        }]
    };
    
    var dadosPonto14 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.24, 26.36, 26.95, 11.10, 6.42, 7.57, 94.85, 8.40, 15.37, 11.38, '<4.0', 0.179, '<0.60', '<0.20', '<0.010', '<0.001', '<0.050', 1.1, 18.0, '<1.8', 5.00, '<5.0', '<0.200', '<0.050', '<0.005', '<0.020', '<1.0', 85],
            backgroundColor: 'rgba(0, 102, 204, 0.7)', 
            borderColor: 'rgba(0, 102, 204, 1)', 
            borderWidth: 1
        }]
    };

    var dadosPonto15 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.23, 36.06, 29.84, 3.21, 5.85, 7.28, 96.02, 0.73, 142.59, 138.49, '<4.0', 0.283, '<0.60', '<0.20', '<0.0010', '<0.0010', '<0.02', 0.4, 3.0, '<1.8', 10.00, '<5.0', '<0.200', '<0.050', '<0.00025', '<0.020', '<1.0', 86],
            backgroundColor: 'rgba(0, 102, 204, 0.7)',
            borderColor: 'rgba(0, 102, 204, 1)',
            borderWidth: 1
        }]
    };
    
    var dadosPonto16 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.47, 29.06, 29.59, 29.81, 6.24, 3.17, 41.61, 11.63, 25.19, 20.19, 5, 0.11, '<0.60', '<0.20', '<0.010', '<0.001', '<0.050', 0.6, 8.0, '<1.8', 31.00, '<0.5', '<0.040', '<0.050', '<0.005', '<0.020', '<1.0', 86],
            backgroundColor: 'rgba(0, 102, 204, 0.7)',
            borderColor: 'rgba(0, 102, 204, 1)',
            borderWidth: 1
        }]
    };
    
    var dadosPonto17 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            backgroundColor: 'rgba(0, 102, 204, 0.7)',
            borderColor: 'rgba(0, 102, 204, 1)',
            borderWidth: 1
        }]
    };
    

    var dadosPonto18 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.37, 27.45, 29.28, 27.75, 6.05, 2.21, 28.87, 7.07, 26.95, 21.95, 5, 0.118, '<0.60', '<0.20', '<0.0010', '<0.001', '<0.050', 1.1, 3.0, '<1.8', 27.00, '<0.5', '<0.040', '<0.050', '<0.005', '<0.020', '<1.0', 84],
            backgroundColor: 'rgba(0, 102, 204, 0.7)',
            borderColor: 'rgba(0, 102, 204, 1)',
            borderWidth: 1
        }]
    };
    
    var dadosPonto19 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.29, 26.86, 28.48, 46.00, 6.29, 2.6, 33.55, 4.41, 31.82, 27.83, '<4.0', 0.131, '<0.60', '<0.20', '<1.000', '<0.001', '<0.050', 1.1, 6.0, '<1.8', 33.00, '<0.5', '<0.200', '<0.050', '<0.005', '<0.020', '<1.0', 86],
            backgroundColor: 'rgba(0, 102, 204, 0.7)',
            borderColor: 'rgba(0, 102, 204, 1)',
            borderWidth: 1
        }]
    };

    var dadosPonto20 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.33, 26.16, 29.00, 48.78, 6.45, 4.45, 57.85, 11.61, 32.82, 28.82, '<4.0', 0.141, '<0.60', '<0.20', '<1.000', '<0.001', '<0.100', 1.3, 3.0, '<1.8', 44.00, '<5.0', '<0.200', '<0.050', '<0.005', '<0.020', '<1.0', 85],
            backgroundColor: 'rgba(0, 102, 204, 0.7)',
            borderColor: 'rgba(0, 102, 204, 1)',
            borderWidth: 1
        }]
    };
    
    var dadosPonto21 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.27, 26.86, 27.50, 51.20, 6.69, 5.97, 75.64, 23.34, 43.02, 31.02, 12.0, 0.281, '<0.60', '<0.20', '<1.000', '<0.001', '<0.100', 1.3, 3.0, '<1.8', 46.00, '<5.0', '<0.200', '<0.050', '<0.005', '<0.020', '<1.0', 81],
            backgroundColor: 'rgba(0, 102, 204, 0.7)',
            borderColor: 'rgba(0, 102, 204, 1)',
            borderWidth: 1
        }]
    };
    
    var dadosPonto22 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.26, 29.10, 25.03, 34.10, 6.46, 4.63, 56.01, 6.32, 180.00, 176.00, '<4.0', 0.251, 0.64, '<0.20', '<0.010', '<0.001', 0.640, 1.9, 17.0, '<1.8', 17.00, '<0.5', '<0.040', '<0.050', '<0.005', '<0.020', '<1.0', 82],
            backgroundColor: 'rgba(0, 102, 204, 0.7)',
            borderColor: 'rgba(0, 102, 204, 1)',
            borderWidth: 1
        }]
    };
    var dadosPonto23 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.17, 26.03, 25.39, 25.94, 7.02, 7.02, 85.54, 11.57, 18.68, 14.69, '<4.0', 0.521, 1.13, '<0.20', 1, '<0.001', 0.130, 0.9, 12.0, '<1.8', 10.00, '<5.0', '<0.200', '<0.050', '<0.005', '<0.020', '<1.0', 80],
            backgroundColor: 'rgba(0, 102, 204, 0.7)',
            borderColor: 'rgba(0, 102, 204, 1)',
            borderWidth: 1
        }]
    };
    
    var dadosPonto24 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.27, 24.45, 26.49, 70.91, 7.62, 7.74, 96.30, 1.3, 45.74, 41.75, '<4.0', '<0.002', '<0.60', '<0.20', '<0.010', '<0.001', '<0.050', 1.4, 13.0, '<1.8', 9.00, '<5.0', '<0.040', '<0.050', '<0.005', '<0.020', '<1.0', 92],
            backgroundColor: 'rgba(0, 102, 204, 0.7)',
            borderColor: 'rgba(0, 102, 204, 1)',
            borderWidth: 1
        }]
    };
    
    var dadosPonto25 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.30, 24.75, 26.00, 52.30, 7.44, 7.66, 94.39, 2.23, 34.52, 30.53, '<4.0', '<0.002', '<0.60', '<0.20', '<1.000', '<0.001', '<0.050', 1.4, 12.0, 4.5, 9.00, '<5.0', '<0.040', '<0.050', '<0.005', '<0.020', '<1.0', 90],
            backgroundColor: 'rgba(0, 102, 204, 0.7)',
            borderColor: 'rgba(0, 102, 204, 1)',
            borderWidth: 1
        }]
    };
        
    var dadosPonto26 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.24, 21.85, 25.83, 79.30, 7.62, 7.68, 94.38, 4.94, 55.19, 47.19, 8.0, '<0.002', '<0.60', '<0.20', '<1.00', '<0.001', '<0.050', 1.6, 3.0, '<1.8', 9.00, '<5.0', '<0.040', '<0.050', '<0.005', '<0.020', '<1.0', 91],
            backgroundColor: 'rgba(0, 102, 204, 0.7)',
            borderColor: 'rgba(0, 102, 204, 1)',
            borderWidth: 1
        }]
    };
   
    var dadosPonto27 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.19, 26.84, 25.88, 19.86, 7.17, 7.83, 96.31, 4.52, 17.61, 11.61, '<4.0', '<0.002', '1.39', '<0.20', '1.39', '<0.001', '<0.050', 1.4, 8.0, 33, 10.00, '<5.0', '<0.040', '<0.050', '<0.005', '<0.020', '<1.0', 83],
            backgroundColor: 'rgba(0, 102, 204, 0.7)',
            borderColor: 'rgba(0, 102, 204, 1)',
            borderWidth: 1
        }]  
    };

    var dadosPonto28 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.17, 23.90, 26.39, 36.30, 7.15, 7.36, 91.28, 1.55, 25.11, 21.12, '<4.0', '<0.002', '<0.60', '<0.20', '<0.010', '<0.001', '<0.100', 1.6, 12.0, 46, 10.00, '<5.0', '<0.040', '<0.050', '<0.005', '<0.020', '<1.0', 83],
            backgroundColor: 'rgba(0, 102, 204, 0.7)',
            borderColor: 'rgba(0, 102, 204, 1)',
            borderWidth: 1
        }]
    };
    
    var dadosPonto29 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.27, 28.93, 26.21, 117.70, 7.28, 7.79, 96.43, 11.78, 73.07, 69.08, '<4.0', '<0.002', '<0.60', '<0.20', '<0.010', '<0.001', '<0.050', 1.8, 9.0, '<1.8', 8.00, '<5.0', '<0.040', '<0.050', '<0.005', '<0.020', '<1.0', 90],
            backgroundColor: 'rgba(0, 102, 204, 0.7)',
            borderColor: 'rgba(0, 102, 204, 1)',
            borderWidth: 1
        }]
    };
    
    var dadosPonto30 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.27, 24.49, 26.67, 143.91, 7.82, 7.70, 96.11, 2.87, 82.49, 78.49, '<4.0', 0.201, '<0.60', '<0.20', '<0.010', '<0.001', 0.120, 1.5, 13.0, '<1.8', 65.00, '<0.5', '<0.010', '<0.050', '<0.005', '<0.020', '<1.0', 87],
            backgroundColor: 'rgba(0, 102, 204, 0.7)',
            borderColor: 'rgba(0, 102, 204, 1)',
            borderWidth: 1
        }]
    };
    
    var dadosPonto31 = {
        labels: ['Prof. da Coleta (m)', 'Temp. Ar (°C)', 'Temp. Água (°C)', 'Condutividade (µS/cm)', 'pH', 'OD (mg/L)', 'OD (% Sat)', 'Turbidez (NTU)', 'Sólidos Totais (mg/L)', 'Sólidos Totais Dissolvidos (mg/L)', 'Sólidos em Suspensão (mg/L)', 'Fósforo Total (mg/L)', 'Nitrogênio Total (mg/L)', 'Nitrogênio Orgânico (mg/L)', 'Nitrato (mg/L)', 'Nitrito (mg/L)', 'Nitrogênio Amoniacal (mg/L)', 'DBO, 5 dias, 20°C (mg/L de O2)', 'DQO (mg/L de O2)', 'Escherichia coli (NMP/100 mL)', 'Alcalinidade Total (mg/L)', 'Cloreto (mg/L)', 'Ortofosfato Dissolvido', '2,4-D (µg/L)', 'Acefato', 'Glifosato (µg/L)', 'Mancozeb (µg/L)', 'IQA'],
        datasets: [{
            label: 'Parâmetros de Qualidade da Água',
            data: [0.30, 28.10, 25.28, 111.30, 7.78, 7.61, 94.50, 3.87, 64.79, 60.79, '<4.0', 0.216, '<0.60', '<0.20', '<0.010', '<0.001', 0.170, 1.2, 12.0, '<1.8', 60.00, '<5.0', '<0.200', '<0.050', '<0.005', '<0.020', '<1.0', 87],
            backgroundColor: 'rgba(0, 102, 204, 0.7)',
            borderColor: 'rgba(0, 102, 204, 1)',
            borderWidth: 1
        }]
    };