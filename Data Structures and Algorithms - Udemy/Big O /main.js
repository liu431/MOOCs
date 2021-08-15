  const namelist = ['Ben', 'Alice']

function findName(array, name){
  for (let i = 0; i < array.length; i++) {
    if (array[i] === name) {
      console.log('Found!')
    }
  }
}

findName(namelist, 'Ben')