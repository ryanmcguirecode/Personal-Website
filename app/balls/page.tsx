import Header from "./header";
import Paragraph from "./paragraph";
import BarChart from "./barchart.jsx"

export default function Home() {
    
    const chartData1 = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Example Dataset',
            data: [65, 59, 80, 81, 56, 67],
            backgroundColor: 'rgba(255,0,0,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
          },
        ],
    };
    const chartData2 = {
        labels: ['July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Example Dataset',
            data: [89, 75, 11, 133, 81, 71],
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
          },
        ],
    };
    
    return (
        <div>
            <div style={{ marginBottom: '20px' }}> 
                <Header />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
                <Paragraph />
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2>Chart 1</h2>
                <BarChart chartData={chartData1} />
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2>Chart 2</h2>
                <BarChart chartData={chartData2} />
                </div>
            </div>
        </div>
      );
};
