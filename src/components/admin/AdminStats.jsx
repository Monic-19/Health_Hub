import React from 'react'
import Chart from "react-apexcharts";

const stats = ({
  options: {
    chart: {
      id: "admin-stats"
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    }
  },
  series: [
    {
      name : "New Doctors",
      data: [10,10,20,25,30,35,40,45,50,55,60,65]
    },
    {
      name : "Total Doctors",
      data: [100,190,220,225,330,335,440,465,570,525,660,695]
    },
    {
      name : "Sales (Thousands)",
      data: [120,140,440,245,530,985,680,497,780,455,950,999]
    },
  ]
})

const AdminStats = () => {
  return (
    <div className='bg-white'>
      <Chart options={stats.options} series={stats.series} type="area" height={500} />
    </div>
  )
}

export default AdminStats