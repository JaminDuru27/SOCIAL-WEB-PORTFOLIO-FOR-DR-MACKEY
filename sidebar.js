function sidebar({links, to, src}){
    const res = {
      load(){
        this.element = document.createElement('div')
        this.element.classList.add('sidebar1')
        this.logo = document.createElement('img')
        this.logo.classList.add('sblogo')
        this.logo.style.backgroundImage = `url(${src})`
        this.logo.classList.add('logo')
        this.exit = document.createElement('div')
        this.exit.onclick = ()=> {
          setTimeout(()=>{
            res.element.remove()
          }, 300)
        }
        this.exit.classList.add('exit')
        this.element.append(this.logo, this.exit)
        to.append(this.element)
        links.forEach((arr, x)=>{
          console.log(arr)
          const title = arr[1]
          const link = arr[0]
          this[`link${x}`] = document.createElement('a')
          this[`link${x}`].textContent = title
          this[`link${x}`].href = link
          this.element.append(this[`link${x}`] )
        })
      }
    }
    res.load()
    return res
}
tree["sidebar"] = sidebar