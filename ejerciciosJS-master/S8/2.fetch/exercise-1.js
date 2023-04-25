// const getDataApi = async()=> {
//     const response = await fetch('https://api.agify.io?name=michael');
//     const respJson = await response.json();
//     return respJson;
// }
const getDataApi = () => {
    fetch
}

getDataApi();

const inicializar = async () => {
    const location = await getDataApi();
    console.log(location)
};
inicializar();
