const skills = [
    {
        name: 'Skaitymas',
        progress: '70'
    },
    {
        name: 'Dainavimas',
        progress: '50'
    },
    {
        name: 'Vairavimas',
        progress: '90'
    },
    {
        name: 'Excel',
        progress: '40'
    }
];

const languages = [
    {
        name: 'Italų',
        progress: '40'
    },
    {
        name: 'Vokiečių',
        progress: '95'
    },
    {
        name: 'Graikų',
        progress: '80'
    }
];

const jobs = [
    {
        name: 'UAB Lorem',
        years: '2010-2015',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus adipisci laborum modi assumenda? Facere, hic veniam porro a, laborum repellendus saepe assumenda esse, id aperiam fuga odit. Voluptatum sequi impedit delectus.'
    },
    {
        name: 'UAB Ipsum',
        years: '2015-2021',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus adipisci laborum modi assumenda? Facere, hic veniam porro a, laborum repellendus saepe assumenda esse, id aperiam fuga odit. Voluptatum sequi impedit delectus.'
    }
];

const education = [
    {
        name: 'Fabijoniškių universitetas',
        years: '2016-2020',
        specialty: 'Piešimo inžinierius',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus adipisci laborum modi assumenda? Facere, hic veniam porro a, laborum repellendus saepe assumenda esse, id aperiam fuga odit. Voluptatum sequi impedit delectus.'
    }
];


skills.forEach(e => {
    document.querySelector("#skills").insertAdjacentHTML('beforeend',
        `<div class="label">
    ${e.name}
  </div>
  <div class="progress-bar">
    <div class="line" style="width: ${e.progress}%;">
      <div class="fill"></div>
    </div>
  </div>`)
})

languages.forEach(e => {
    document.querySelector("#languages").insertAdjacentHTML('beforeend',
        `<div class="label">
    ${e.name}
  </div>
  <div class="progress-bar">
    <div class="line" style="width: ${e.progress}%;">
      <div class="fill"></div>
    </div>
  </div>`)
})

jobs.forEach(e => {
    document.querySelector("#jobs").insertAdjacentHTML('beforeend',
        `<div class="experience-data">
        <div class="years">${e.years}</div>
        <div class="description">
            <h2>${e.name}</h2>
            <div class="years-mobile">${e.years}</div>
        ${e.description}
        </div></div>`)
})

education.forEach(e => {
    document.querySelector("#education").insertAdjacentHTML('beforeend',
        `<div class="experience-data">
        <div class="years">${e.years}</div>
        <div class="description">
        <h2>${e.name} - ${e.specialty}</h2>
        <div class="years-mobile">${e.years}</div>
        ${e.description}
        </div></div>`)
})
