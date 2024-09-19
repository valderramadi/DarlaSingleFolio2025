// // src/pages/ExperienceMap.js

// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// // Example experiences with positions and details
// const experiences = [
//   {
//     position: [32.7765, -79.9311], // Charleston, SC
//     company: 'Company A',
//     role: 'Data Analyst',
//     dates: 'Jan 2020 - Dec 2021',
//   },
//   {
//     position: [34.0522, -118.2437], // Los Angeles, CA
//     company: 'Company B',
//     role: 'Data Scientist',
//     dates: 'Jan 2022 - Present',
//   },
//   // Add more experiences here
// ];

// const ExperienceMap = () => {
//   return (
//     <MapContainer center={[37.7749, -122.4194]} zoom={4} style={{ height: '500px', width: '100%' }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       {experiences.map((experience, index) => (
//         <Marker key={index} position={experience.position}>
//           <Popup>
//             <strong>{experience.company}</strong><br />
//             {experience.role}<br />
//             {experience.dates}
//           </Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default ExperienceMap;
