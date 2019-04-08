// START TEST CASES

const newItem = {...item}

function succeed(item) {
  
  
  if (item.enhancement <20){
  
  
    newItem.enhancement = newItem.enhancement + 1
  
  
  
    return newItem
  

    const newItem = {...item}

}else {
  
  
    
    
    
     return newItem
  };
}


const newItem ={...item, durability: item.durability -5}

function fail(item) {
  
  if (item.enhancement <= 14){
    
    
    return newItem
    
    
    const newItem = {...item, durability: item.durability -10}
  
  } else 

  
  if (item.enhancement >= 15){
    
  
    
  
  
    return newItem
  
  
  
  }
  
  else if (item.enhancement > 16){
    
  const newItem = {...item, durability: item.durability- 10, enhancement: item.enhancement - 1}
  
  
  
    }



}
const newItem = {...item}


function repair(item) {
  
  if (item.durability <100) {
  
  
  
  
    newItem.durability = 100
  
  
    return newItem
  
    
  }else {
    
    const newItem = {...item}
  
    return newItem
  
  }

}


function get(item) {
  
  
  
  return { ...item };
}



// Exports

module.exports = {
  succeed,
  fail,
  repair,
  get,

};