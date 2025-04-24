function paragragh1({to, text}){
    const res = {
        load(){
            this.element = document.createElement(`p`)
            this.element.classList.add('p1')
            this.element.innerHTML += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`
            const split = text.split(` `)
            console.log(split)
            let latest
            split.forEach((s, x)=>{
                if(s[0] === `/`){
                    latest.style.textDecoration = 'underline'
                    s = ''
                }
                if(s[0] === `#`){
                    latest = document.createElement(`span`)
                    latest.style.color = s
                    this.element.append(latest)
                }else {
                    latest.innerHTML += ` ` + s
                }
            })
            to.append(this.element)
        }
    }
    res.load()
    return res
}

tree['paragraph1'] = paragragh1