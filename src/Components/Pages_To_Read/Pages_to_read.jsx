import { ResponsiveContainer,BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
const data = [
    {
        
    }]

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};






const Pages_to_read = ({ books }) => {
    // const [chartData,setChartData] = useState([])
    // useEffect(() => {
    //     const preparedData = books.map(book => ({
    //       bookName: book.bookName,
    //       totalPages: book.totalPages
    //     }));
    //     setChartData(preparedData);
    //   }, [books]);
    // console.log(storedData);

    return (
        <div className="text-center my-20 md:my-40">

            <ResponsiveContainer  width="100%" height={500}>
                <BarChart
                    data={books}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    {window.innerWidth > 768 && <XAxis dataKey="bookName" />}
                    <YAxis />
                    <Bar dataKey="totalPages" fill="#00C49F" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Pages_to_read;