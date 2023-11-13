// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// const  Output = () => {

//     const [data, setData] = useState([])


//     useEffect(() => {
//         axios
//         .get('http://localhost:8000/list/getlist')
//         .then((response) => {
//           setData(response.data)
//         })
//         .catch((err) => {
//           console.log(err)
//         })
//       }, []);
  

//   return (
//     <div>
//       {data.map((datas,index)=>(
//         <div key={index}>
//             <p>{datas.name}</p>
//             <p>{datas.email}</p>
//             <p>{datas.password}</p>
//             <br />
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Output