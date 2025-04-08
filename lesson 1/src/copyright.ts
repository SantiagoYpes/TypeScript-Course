const year = document.getElementById("year") as HTMLElement
let thisYear:string = new Date().getFullYear().toString()
year.setAttribute("datetime",thisYear)
year.textContent = thisYear