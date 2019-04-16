jQuery(init);
// Same as: jQuery(document).ready(init);

function init($) {
    let options = {
        url: "data.json",
        success: jsonHandler
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

    function createOptions(listOfCities){
        //1) get datalist
        let dataList = document.querySelector("#location");
        //2) loop over uniqueCities array
        listOfCities.map(addOption);

        function addOption(city){
            dataList.innerHTML += `<option value="${city}"></option>`
        }
    }

    function jsonHandler(data) {
        let entries = data[1].entries;
        let cities = entries.map(getCity);
        let uniqueCities = removeDups(cities);

        function getCity(hotel) {
            return hotel.city;
        }
        console.log(uniqueCities);

        createOptions(uniqueCities);
   
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