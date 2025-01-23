// import React from 'react';
// import Outputs from "../assets/output.png";
// import Task from "../assets/task.png";
// import Cost from "../assets/cost.png";
// import Navbar from "../components/Navbar";
// import '../css/benefits.css';


// const Benefits = () => {
//     const workInfoData = [
//         {
//             image: Outputs,
//             title: "Customizable Outputs", 
//             text: "Users have the flexibility to customize the outputs according to their requirements. ", 
//         },
//         {
//             image: Task,
//             title: "Task Specific Adaptability",
//             text: "Adapted to perform specific tasks more effectively, such as text completion, question answering, or content generation. ",
//         },
//         {
//             image: Cost,
//             title: "Cost Effective", 
//             text: "Cost-effective approach as it leverages pre-existing knowledge and requires less computational resources.",
//         },
//     ];

//   return (
//     <div className='home-container'>
//         <Navbar />
//     <div className='benefits-section-wrapper'> 
//         <div className='benefits-section-top'>
//         <h1 className="benefits-primary-heading">What are the benefits?</h1>
//         </div>
//         <div className='benefits-section-bottom'>
//             {
//                 workInfoData.map((data) => (
//                     <div className='benefits-section-info'>
//                     <div className="info-boxes-img-container">
//                     <img src={data.image} alt="" />
//                     </div>   
//                         <h2> {data.title} </h2>
//                         <p> {data.text} </p>
//                     </div>
//                 ))}
//         </div>
//     </div>
//     </div>
//   );
// };

// export default Benefits
