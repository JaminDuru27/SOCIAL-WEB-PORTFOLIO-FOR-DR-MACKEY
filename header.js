function header({src, name, section = '', to}){
    const res = {
      load(){
        this.element = document.createElement('div')
        this.element.classList.add('logo1')
        this.element.innerHTML += `
        <img class='titlesrc' src='${src}'>
        <div class='name'>${name}</div>|
        <div class='sectionName'>${section} Professor</div>
        `
        to.append(this.element)
        this.element.querySelector('.titlesrc').onclick = (e)=>{
          if(document.body.querySelector('.sidebar1'))return
            tree['sidebar'](structure[`sidebarsec`].arguements)
        }
      }
    }
    res.load()
    return res
  }

tree['header'] = header