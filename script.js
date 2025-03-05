document.addEventListener('DOMContentLoaded', () => {
    // Data from index.html
    const channelData = {
        'Search Engine Optimization': {
            ctr: 3.5,
            roi: 350,
            conversion: 3.0,
            engagement: 70
        },
        'Pay Per Click': {
            ctr: 3.0,
            roi: 300,
            conversion: 2.7,
            engagement: 50
        },
        'Social Media Marketing': {
            ctr: 2.0,
            roi: 200,
            conversion: 1.7,
            engagement: 90
        }
    };

    // Chart initialization
    const ctx = document.getElementById('comparisonChart').getContext('2d');
    let chart = null;

    // Get select elements
    const channel1Select = document.getElementById('channel1');
    const channel2Select = document.getElementById('channel2');

    // Initial chart creation
    createChart(channel1Select.value, channel2Select.value);

    // Event listeners
    channel1Select.addEventListener('change', updateChart);
    channel2Select.addEventListener('change', updateChart);

    function createChart(channel1, channel2) {
        const config = {
            type: 'bar',
            data: getChartData(channel1, channel2),
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Channel Performance Comparison'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Percentage (%)'
                        }
                    }
                }
            }
        };

        chart = new Chart(ctx, config);
    }

    function updateChart() {
        const channel1 = channel1Select.value;
        const channel2 = channel2Select.value;
        
        // Destroy existing chart
        if(chart) chart.destroy();
        
        // Create new chart
        createChart(channel1, channel2);
    }

    function getChartData(channel1, channel2) {
        return {
            labels: ['CTR', 'ROI', 'Conversion Rate', 'Engagement'],
            datasets: [
                {
                    label: channel1,
                    data: [
                        channelData[channel1].ctr,
                        channelData[channel1].roi,
                        channelData[channel1].conversion,
                        channelData[channel1].engagement
                    ],
                    backgroundColor: 'rgba(179, 0, 0, 0.7)',
                    borderColor: 'rgba(255, 82, 82, 1)',
                    borderWidth: 1
                },
                {
                    label: channel2,
                    data: [
                        channelData[channel2].ctr,
                        channelData[channel2].roi,
                        channelData[channel2].conversion,
                        channelData[channel2].engagement
                    ],
                    backgroundColor: 'rgba(80, 0, 0, 0.7)',
                    borderColor: 'rgba(211, 47, 47, 1)',
                    borderWidth: 1
                }
            ]
        };
    }
});