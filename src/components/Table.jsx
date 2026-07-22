import { useState } from "react";
import AddButton from "./AddButton";

function Table({ data, columns , tableTitle }) {
  return (
    <div className="table-card">
        
      <div className="table-title">{tableTitle} </div>
      
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
              {data.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={column.key}>
                {row[column.key]}
              </td>
            ))}
           <td className="row-actions">
  <button className="btn-edit">Edit</button>
  <button className="btn-delete">Delete</button>
</td>
          </tr>
        ))}
          {/* {data.map((r) => (
            <tr>
              <td></td>
              <td>
                <div className="patient-cell">
                  <div className="avatar blue">RJ</div>
                  {r.nom}
                </div>
              </td>
              <td>{r.prenom}</td>
              <td>{r.email}</td>

             
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

//   <thead>
//           <tr>
//             <th></th>
//             <th>Patient Name</th>
//             <th>Doctor</th>
//             <th>Date</th>
//             <th>Time</th>
//             <th>Status</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td></td>
//             <td>
//               <div className="patient-cell">
//                 <div className="avatar blue">RJ</div>
//                 Robert Junior
//               </div>
//             </td>
//             <td>Dr. Emily Smith</td>
//             <td>Oct 12, 2024</td>
//             <td>09:30 AM</td>
//             <td><span className="badge confirmed">CONFIRMED</span></td>
//             <td className="row-menu">⋮</td>
//           </tr>
//           <tr>
//             <td></td>
//             <td>
//               <div className="patient-cell">
//                 <div className="avatar red">MA</div>
//                 Maria Anders
//               </div>
//             </td>
//             <td>Dr. Alan Turing</td>
//             <td>Oct 12, 2024</td>
//             <td>11:00 AM</td>
//             <td><span className="badge pending">PENDING</span></td>
//             <td className="row-menu">⋮</td>
//           </tr>
//           <tr>
//             <td></td>
//             <td>
//               <div className="patient-cell">
//                 <div className="avatar blue">TK</div>
//                 Thomas Klein
//               </div>
//             </td>
//             <td>Dr. Sarah Johnson</td>
//             <td>Oct 12, 2024</td>
//             <td>02:15 PM</td>
//             <td><span className="badge urgent">URGENT</span></td>
//             <td className="row-menu">⋮</td>
//           </tr>
//           <tr>
//             <td></td>
//             <td>
//               <div className="patient-cell">
//                 <div className="avatar gray">EL</div>
//                 Emma Loft
//               </div>
//             </td>
//             <td>Dr. Emily Smith</td>
//             <td>Oct 12, 2024</td>
//             <td>04:45 PM</td>
//             <td><span className="badge confirmed">CONFIRMED</span></td>
//             <td className="row-menu">⋮</td>
//           </tr>
