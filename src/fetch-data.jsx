import { useState, useEffect } from "react";

const DataFetchComponent = () => {
    //state to store some data
    const [data, setData] = useState(null);

    //Effect to fetch data when component mounts
    useEffect(() => {
        //function to fetch data
        const fetchData = async () => {
            try{
                const response = await fetch('https://api.example.com/data');
                const result = await response.json();
                setData(result);
            }
            catch(error){
                console.error('Error fetching data: ', error);
            }
        };

        //call the fetch function
        fetchData();

        //clean up function (optional)
        return () => {
            // Perform cleanup if needed (unsubscribe, clear intervals, etc.)
            console.log('cleanup performed');
        };
    }, []);// Empty dependency array means this effect runs once on mount
    return(
        <div>
            <h2>2)DataFetch Component with useEffect</h2>
            {/* ternary operator */}
            {
             data ? (<p>Data: {data}</p>) :
                    (<p>Loading data...</p>)
            }
        </div>
    );
};

export default DataFetchComponent;