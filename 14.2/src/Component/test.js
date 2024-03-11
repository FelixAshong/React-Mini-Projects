
function reformDate(date){
   let timeArr=date.split("");
   let realDate=[];
   (()=>{timeArr[9]>=0?
      realDate.push(date.substr(0,10)):
      realDate.push(date.substr(0,9))
   })()

   let rDA=realDate[0].split("");
   let x=[];
   (()=>{rDA.length===10?
      x.push(`${rDA.slice(8,10).join("")}-${rDA[5]}${rDA[6]}-${rDA.slice(0,4).join("")}`):
      x.push(`${rDA.slice(8,9).join("")}-${rDA[5],rDA[6]}-${rDA.slice(0,4).join("")}`)
   })()
    return x
   }
   export default reformDate;
