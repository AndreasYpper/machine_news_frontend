import axios from "axios";


var machines = []

async function get_machines() {
    await axios.get(process.env.VUE_APP_API_URL + "machines").then((response) => {
        response.data.machines.forEach(machine => {
            machines.push(machine)
        });
      });
      return machines
}

export default { get_machines }