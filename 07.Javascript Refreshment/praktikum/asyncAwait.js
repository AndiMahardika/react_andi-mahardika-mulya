async function fetchData(url) {
  return new Promise((resolve, reject) => {
    let active = true;
    if(active) {
      setTimeout( async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          resolve(data);
        } catch (error) {
          reject("Error fetching data from URL: " + error);
        }}, 2000)
    } else {
      setTimeout(() => {
        reject("Can't fetch data");
      }, 2000)
    }
  });
}

async function getData(url) {
  console.log("Get data...")
  try {
    const data = await fetchData(url);
    console.log("Get data success");
    return data
  } catch (error) {
    console.log(error);
  }
}

getData('https://jsonplaceholder.typicode.com/users')
  .then(data => {
    data.map((user) => console.log(user.name));
  })
  .catch(error => console.log(error));
