function footer({to, headLinksArray}){
    const res = {
        load(){
            this.element = document.createElement('footer')
            this.element.classList.add('footer')
            headLinksArray.forEach(arr=>{
                const head = arr[0]
                let html = `
                <div class='nav'>
                    <div class='head'>${head}</div>
                `
                arr[1].forEach(links=>{
                    html +=`
                    <a href='${links[0]}'>${links[1]}</a>
                    `
                })
                html += `</div>`
                this.element.innerHTML += html
            })
            to.append(this.element)
        }
    }
    res.load()
    return res
}

tree['footer'] = footer