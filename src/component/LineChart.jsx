import { LineChart as Lcahrt, Line ,CartesianGrid, XAxis, YAxis} from 'recharts';

function LineChart() {
    const studentData = [
        { name: "Alice", mathScore: 10, scienceScore: 92, socialScore: 78 },
        { name: "Bob", mathScore: 78, scienceScore: 100, socialScore: 75 },
        { name: "Charlie", mathScore: 92, scienceScore: 94, socialScore: 88 },
        { name: "David", mathScore: 88, scienceScore: 91, socialScore: 82 },
        { name: "Emma", mathScore: 75, scienceScore: 80, socialScore: 70 },
        { name: "Frank", mathScore: 96, scienceScore: 98, socialScore: 92 },
        { name: "Grace", mathScore: 5, scienceScore: 87, socialScore: 79 },
        { name: "Henry", mathScore: 89, scienceScore: 92, socialScore: 85 },
        { name: "Isabella", mathScore: 91, scienceScore: 95, socialScore: 90 },
        { name: "Jack", mathScore: 79, scienceScore: 83, socialScore: 76 }
      ];
      


  return (
    <div>
        <h1>Line Chart</h1>
        <div className='bg-black'>
            <Lcahrt width={800} height={400} data={studentData}>
                <Line type="monotone" dataKey="scienceScore" stroke="white"></Line>
                <Line type="monotone" dataKey="socialScore"stroke="#00f"></Line>
                <Line type="monotone" dataKey="mathScore" stroke='yellow'></Line>
               <XAxis/>
               <YAxis/>
               <CartesianGrid stroke='#afa'/>
            </Lcahrt>
        </div>
        <div className='bg-black mt-10'>
            <Lcahrt width={500} height={400} data={studentData}>
                <Line type="monotone" dataKey="scienceScore" stroke="white"></Line>
                <Line type="monotone" dataKey="socialScore"stroke="#00f"></Line>
                <Line type="monotone" dataKey="mathScore" stroke='yellow'></Line>
               <XAxis/>
               <YAxis/>
            </Lcahrt>
        </div>
    </div>
  )
}

export default LineChart