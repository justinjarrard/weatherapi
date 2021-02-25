document.getElementById('search').addEventListener('click', event => {
  event.preventDefault()
  let cityName = document.getElementById('cityName').value

  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2e9f911583d5a81e49dc93fcc9291d97&units=imperial`)
    .then(res => {
      let data = res.data

      console.log(data)


      let cityElem = document.createElement('li')
      cityElem.className = 'list-group-item'
      cityElem.textContent = document.getElementById('cityName').value
      document.getElementById('cityList').append(cityElem)

      document.getElementById('data').innerHTML = `
          <p> ${new Date(data.dt * 1000)} </p>
        <h1>${data.name}<img src='http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' /></h1>
  <p>Temperature: ${data.main.temp}</p>
  <p>Humidity: ${data.main.humidity}</p>
  <p>Wind Speed: ${data.wind.speed}</p>
        `
    })
    .catch(err => {
      console.error(err)
    })
})

document.getElementById('search').addEventListener('click', event => {
  event.preventDefault()
  let cityName = document.getElementById('cityName').value

  axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=2e9f911583d5a81e49dc93fcc9291d97&units=imperial`)
    .then(res => {
      let data = res.data
      console.log(data)

      document.getElementById('dayone').innerHTML = `
          <p> ${new Date(data.list[6].dt * 1000)} </p>
      <img src='http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png' />
  <p>Temp: ${data.list[6].main.temp}</p>
  <p>Humidity: ${data.list[6].main.humidity}</p>`

      document.getElementById('daytwo').innerHTML = `
          <p> ${new Date(data.list[14].dt * 1000)} </p>
      <img src='http://openweathermap.org/img/wn/${data.list[11].weather[0].icon}@2x.png' />
  <p>Temp: ${data.list[14].main.temp}</p>
  <p>Humidity: ${data.list[14].main.humidity}`

      document.getElementById('daythree').innerHTML = `
          <p> ${new Date(data.list[22].dt * 1000)} </p>
        <img src='http://openweathermap.org/img/wn/${data.list[19].weather[0].icon}@2x.png' />
    <p>Temp: ${data.list[22].main.temp}</p>
    <p>Humidity: ${data.list[22].main.humidity}`

      document.getElementById('dayfour').innerHTML = `
          <p> ${new Date(data.list[30].dt * 1000)} </p>
        <img src='http://openweathermap.org/img/wn/${data.list[27].weather[0].icon}@2x.png' />
      <p>Temp: ${data.list[30].main.temp}</p>
      <p>Humidity: ${data.list[30].main.humidity}`

      document.getElementById('dayfive').innerHTML = `
          <p> ${new Date(data.list[38].dt * 1000)} </p>
        <img src='http://openweathermap.org/img/wn/${data.list[35].weather[0].icon}@2x.png' />
        <p>Temp: ${data.list[38].main.temp}</p>
        <p>Humidity: ${data.list[38].main.humidity}`
    })
    .catch(err => {
      console.error(err)
    })
})

document.getElementById('search', event => {
  localStorage.setItem('cityName')
})

