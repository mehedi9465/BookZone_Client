import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Tooltip } from 'react-bootstrap';
import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const TopSale = () => {

    const [stores, setStores] = useState([]);
    const [chartData, setChartData] = useState([]);
    useEffect( () => {
        axios.get('http://localhost:4000/stores')
        .then(({ data }) => setStores(data))
    }, []);

    useEffect(() => {
        const newArr = [];
        let newObj = {};
        stores.map(store => {
            newObj.name = store?.name;
            newObj.sold = store?.sold;
            newArr.push(newObj);
            newObj = {};
        })
        setChartData(newArr);
    }, [stores])

    console.log(chartData);

    return (
       <>
            <h1 className='text-center display-2'>Top Seller</h1>
            <ResponsiveContainer width="77%" height={500} className="mx-auto">
                    <ComposedChart
                    width={500}
                    height={500}
                    data={chartData}
                    margin={{
                        top: 30,
                        right: 20,
                        bottom: 50,
                        left: 20
                    }}
                    >
                    <CartesianGrid stroke="#fff" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="sold" barSize={20} fill="#413ea0" />
                </ComposedChart>
            </ResponsiveContainer>
       </>
    );
};

export default TopSale;