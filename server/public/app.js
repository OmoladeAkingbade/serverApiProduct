async function fetchProductJSON() {
  const response = await fetch('https://folusocrudapi.herokuapp.com/foluso/api')
 console.log(response)
}

fetchProductJSON()