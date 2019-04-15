jQuery(init);
// Same as: jQuery(document).ready(init);

function init($) {
    let options = {
        url: "data.json",
        success: jsonHandler
    }

    function jsonHandler(data) {
        console.log(data);
        let entries = data[1].entries;
        let cities = entries.map(getCity);

        function getCity(hotel) {
            return hotel.city;
        }
//remove duplicates from array
        function removeDups(names) {
            let unique = {};
            names.forEach(function (i) {
                if (!unique[i]) {
                    unique[i] = true;
                }
            });
            return Object.keys(unique);
        }
        let uniqueCities = removeDups(cities);
        console.log(uniqueCities);

    }
    $.ajax(options);
}



// const TableBody = props => {
//     const rows = props.characterData.map((row, index) => {
//       return (
//         <tr key={index}>
//           <td>{row.name}</td>
//           <td>{row.job}</td>
//         </tr>
//       )
//     })

//     return <tbody>{rows}</tbody>