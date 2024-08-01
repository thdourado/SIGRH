<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reservatório Gráficos</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels"></script>
    <style>
        .chart-container {
            width: 100%;
            height: 400px;
            margin-bottom: 50px;
        }
    </style>
</head>
<body>
    <div id="charts"></div>

    <script>
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.noite.me/hidro/api2.php');
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return await response.json();
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            }
        };

        const processData = (data) => {
            const chartData = {};

            data.forEach(entry => {
                const date = entry.data;
                entry.dados.forEach(dado => {
                    const reservatorio = dado.reservatorio;
                    if (!chartData[reservatorio]) {
                        chartData[reservatorio] = {
                            labels: [],
                            defluencias: []
                        };
                    }
                    chartData[reservatorio].labels.push(date);
                    chartData[reservatorio].defluencias.push(dado.defluencia);
                });
            });

            return chartData;
        };

        const createChart = (ctx, labels, data, reservatorio) => {
            const maxDefluencia = Math.max(...data);
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Defluência (m³/s)',
                        data: data,
                        borderColor: 'rgb(54, 162, 235)',
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            title: {
                                display: false,
                                text: 'Data'
                            }
                        },
                        y: {
                            beginAtZero: true,
                            max: maxDefluencia + maxDefluencia * 0.1, // add 10% buffer on top
                            title: {
                                display: true,
                                text: 'Defluência'
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: reservatorio,
                            font: {
                                size: 24
                            }
                        },
                        datalabels: {
                            anchor: 'end',
                            align: 'top',
                            formatter: (value) => value.toString()
                        }
                    }
                },
                plugins: [ChartDataLabels]
            });
        };

        const renderCharts = async () => {
            const data = await fetchData();
            if (data) {
                const chartData = processData(data);

                const chartsContainer = document.getElementById('charts');

                Object.keys(chartData).forEach(reservatorio => {
                    const chartContainer = document.createElement('div');
                    chartContainer.className = 'chart-container';
                    chartContainer.innerHTML = `<canvas id="${reservatorio}"></canvas>`;
                    chartsContainer.appendChild(chartContainer);

                    const ctx = document.getElementById(reservatorio).getContext('2d');
                    createChart(ctx, chartData[reservatorio].labels, chartData[reservatorio].defluencias, reservatorio);
                });
            }
        };

        renderCharts();
    </script>
</body>
</html>