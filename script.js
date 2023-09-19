var serial = 0;

// random color function
function randomBackgroundColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  var newColor = "rgb(" + red + "," + green + "," + blue + ")";
  return newColor;
}

// random color execute on vard
const getAllCalculateButton = document.querySelectorAll(".all-cards");
for(const calculateButton of getAllCalculateButton)
calculateButton.addEventListener('mouseover',function(){
    calculateButton.style.backgroundColor =randomBackgroundColor();
})


// create table data function

function showData(productName,Area){
const calculationArea = document.getElementById('table-body');
const createTable = document.createElement("tr");

createTable.innerHTML = `
<td>${serial}.</td>
<td>${productName}</td>
<td>${Area}cm<sup>2</sup></td>
<td><button class="btn btn-sm">Convert to m<sup>2</sup></button></td>
`
 calculationArea.appendChild(createTable)
}


// input value remove function
function emtyString(inputOneId,inputTwoId){
    document.getElementById(inputOneId).value="";
    document.getElementById(inputTwoId).value="";
}


// input value calculation and execute function

function inputValueCalculate(clickButtonid,tittleId,fixedData,inputOneId,inputTwoId){
    
    const getButton = document.getElementById(clickButtonid);
    getButton.addEventListener('click',function(){
      
   const tittle = document.getElementById(tittleId).innerText;
  const fixedValue = fixedData;
  
   
 const value1 = document.getElementById(inputOneId).value;

   if(isNaN(value1 )  || value1==''||value1<0 ){
    emtyString(inputOneId,inputTwoId);
    return alert( "Please provide valid number")
   }
   const value2 = document.getElementById(inputTwoId).value;
   if(isNaN(value2 )  || value2==''||value2<0 ){
    emtyString(inputOneId,inputTwoId);
    return alert( "Please provide valid number")
   }
   serial+=1;
   const TotalData =parseFloat (fixedValue) * parseFloat(value1)*parseFloat(value2);
   const TotalDataToFixed = parseFloat(TotalData.toFixed(2));
  
   showData(tittle,TotalDataToFixed)
   emtyString(inputOneId,inputTwoId);
    })
}




// fixed data from html calculation  function


function fixedValueCalculate(clickButtonid,tittleId,fixedData,dataOneId,dataTwoId,){
    
    const getButton = document.getElementById(clickButtonid);
    getButton.addEventListener('click',function(){
    serial+=1;
   const tittle = document.getElementById(tittleId).innerText;
  const fixedValue = fixedData;

   const data1 = document.getElementById(dataOneId).innerText;
   const data2 = document.getElementById(dataTwoId).innerText;
   const TotalData =parseFloat (fixedValue) * parseFloat(data1)*parseFloat(data2);
   const TotalDataToFixed = parseFloat(TotalData.toFixed(2));

   
   showData(tittle,TotalDataToFixed)
    })
}

// all card function execute 

inputValueCalculate("triangle-button","triangle-tittle",0.5,"triangle-b-input","triangle-h-input")
inputValueCalculate("rectangle-button","rectangle-tittle",1,"rectangle-w-input","rectangle-l-input");

fixedValueCalculate("parallelogram-button","parallelogram-tittle",1,"parallelogram-base","parallelogram-height");
fixedValueCalculate("rhombus-buttton","rhombus-tittle",0.5,"rhombus-d1","rhombus-d2");
fixedValueCalculate("pentagon-button","pentagon-tittle",0.5,"pentagon-p","pentagon-b");
fixedValueCalculate("ellipse-button","ellipse-tittle",3.141,"ellipse-a","ellipse-b");




