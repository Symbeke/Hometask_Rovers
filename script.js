const BASE_URL= "https://api.nasa.gov/mars-photos/api/v1/rovers";
 const API_KEY = "Awe5bUothuUb4tlWUD9JWh68GQsaXCfEmiA63BrR";



let roverData = [
    {
        roverName : 'curiosity',
        cameras : [
            'fhaz',
            'rhaz',
            'mast',
            'chemcam',
            'mahli',
            'mardi',
            'navcam',
        ]
    },
    {        
            roverName : 'opportunity',
            cameras : [
                'fhaz',
                'rhaz',
                'navcam',
                'pancam',
                'minites',
            ]
        },
        {
            roverName : 'spirit',
            cameras : [
                'fhaz',
                'rhaz',
                'navcam',
                'pancam',
                'minites',
            ]   
        }
]

const cameraSelect = document.querySelector("#camera_select");
const roverSelect = document.querySelector("#rover_select");

for(let rover of roverData){
    roverSelect.innerHTML += `<option value ="${rover.roverName}">${rover.roverName}</option>`
}

roverSelect.addEventListener('change',()=>{
    const selectedRoverName = roverSelect.value;
    cameraSelect.innerHTML = "";
    for(let rover of roverData)
     {
        if(rover.roverName == selectedRoverName){
    for(let camera of rover.cameras)
    {
        cameraSelect.innerHTML +=`<option value ="${camera}">${camera}</option>`
    }
        break;
    }       
    }
}
)

let button = document.querySelector("#btn");
button.addEventListener("click",async()=>{
    
    let sol = document.querySelector("#sol");
    let URL = BASE_URL + `/${roverSelect.value}/photos?sol=${sol.value}&camera=${cameraSelect.value}&api_key=${API_KEY}`;
    let response = await fetch(URL);
    let data = await response.json();

    let resultblock = document.querySelector("#result")
    resultblock.innerHTML = "";
    for(item of data.photos){
        resultblock.innerHTML += `<img src="${item.img_src}">`
    }
 

}
)
