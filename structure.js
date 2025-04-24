const structure = {
    "sidebarsec": {
        "name": "sidebar",
        "arguements": {links: [['/', 'link'], ['/', 'link'], ['/', 'link']],to: document.body, 
        src:'./assets/dimensions.png'},
        "id": "sb"
    },    
    "headersec": {
        "name": "header",
        "arguements": {name: 'Dr. Mackey',src: './assets/imgs/layout.png', section: 'Intro',to: document.body, } 
    },
    "prog":{
        "name":"progressBar",
        "arguements": {to: 'headersec element'},
        "id": "progBar"
    },
    "section1sec": {
        "name": "section1",
        "arguements": { src: './assets/images (9).jpeg',main: 'hhhh', head: 'ddddddd', descr: 'dddffff',to: document.body, },
    }, 
    
    "section2sec": {
        "name": "section1",
        "arguements": { src: './assets/images (9).jpeg',main: '', head: '', descr: '',to: document.body, },
        "id": "sec2c"
    },
    "texLayoutsec2":{
        "name": "textLayout1",
        "arguements": {to: 'section2sec element .left', head:'I have trained many', 
        main:"resones fo r my tariining and why i train whats my goal description" ,descr: 'oofkokfokofko'},
        "id": "textLayout1sec"
    },
    "textSectionsec1": {
        "name": "textSection1",
        "arguements": { to: 'section1sec left  ', 
            head: [['#fff','stfff goes'], ['#6C2D04','here']], 
            main: [['#fff',
            `main text goes here b cus main text is here  and amain text is
             akklways herrice i s goo debugger, any`], ['#fff','jnhjnnkmks']],
            descr:[['#fff','jnhjnnkmks'], ['#fff','jnhjnnkmks']]
        } 
    },
    "textLayout2sec": {
        "name": "textLayout2",
        "arguements": { src: './assets/microsoft-365-FHhbHW4vFxc-unsplash.jpg', main: 'hhhh', head: 'ddddddd', descr: 'dddffff', btnsArray: [['/', 'btn1']]} 
    },
    "sec2title": {
        "name": "sectiontitle2",
        "arguements": { text: 'Testimonials', to: document.body} 
    },
    "testimonialssection":{
        "name": "testimonials",
        "arguements" : {
            to: document.body,
            worddecrimgarray:[
                ['Happy Livinus', "A Public speaker Who was a student", '/'],
                ['John Doe', "manages public affains nationally", '/'],
                ['Mary Aka', "public speaker and entrepreneur", '/'],
            ]
        }
    },
    
    "textSection1": {
        "name": "textSection1",
        "arguements": { to: document.body, 
            head: [['#fff','stfff goes'], ['#6C2D04','here']], 
            main: [['#fff',
            `main text goes here b cus main text is here  and amain text is
            mkmkm dml ms ll ls lmsl sl lm klmkmld ls ,dml smlsmld lmslmslds
            d sml dsl mdld  lsd lmsl lmlsmlsms lmlsml lsmdlmsl msl mlsmld ls
             sdls  sml;sm ;smdlsm lsms dlsmlmdl sdlmslmsl dms;m slmssl mlsmls sldms
              ds mlsdmslms dsmlmslmdsl lsmlmsl dlmldmlsmlsml lsmd lls lmsdl
             akklways herrice i s goo debugger, any`], ['#fff','jnhjnnkmks']],
            descr:[['#fff','jnhjnnkmks'], ['#fff','jnhjnnkmks']]
        } 
    },
    "p1":{
        "name": "paragraph1",
        "arguements":{
            to: document.body,
            text:  `#fff oekoo,sdl,s odlsm, lmslmls l,ls ls l,l l #444 / dsdsdsdd  jndjns jsnks #fff kmdknkdn`
        }
    },
    "sectionTitle1": {
        "name": "sectionTitle",
        "arguements": { text: 'Business Booom'} 
    },
    "textLayout3":{
        "name": "textLayout3",
        "arguements":{
            src:'./assets/imgs/images (30).jpeg',
            to: document.body,
            head: 'goes', 
            main: `main text goes here b cus main text is here  and amain text is
            mkmkm dml ms ll ls lmsl sl lm klmkmld ls ,dml smlsmld lmslmslds
            d sml dsl mdld  lsd lmsl lmlsmlsms lmlsml lsmdlmsl msl mlsmld ls
             sdls  sml;sm ;smdlsm lsms dlsmlmdl sdlmslmsl dms;m slmssl mlsmls sldms
              ds mlsdmslms dsmlmslmdsl lsmlmsl dlmldmlsmlsml lsmd lls lmsdl
             akklways herrice i s goo debugger, any`,
            descr:'jnhjnnkmks',
            btnsArray: [['/', 'btn1'], ['/', 'btn2'], ['/', 'btn3']]
        }
    },
    ["sectionTitle3"]: {
        "name": "sectionTitle",
        "arguements": { text: 'Real'} 
    },
    "gridlayout1":{
        "name": "gridLayout",
        "arguements": {
            to: document.body,
            orientation: `
            11111***
            33333222
            88888444
            88888666    
            `,
            boxArrangement: {
                "1":{main: 'ddddd', head:'ddd', descr: 'dww'}
            }
        }
    },
    "footer":{
        "name": "footer",
        "arguements":{
            to: document.body,
            headLinksArray: [
                ['Contacts', [['/', 'my business card'], ['/','my whatsapp']]],
                ['Contacts', [['/', 'my business card'], ['/','my whatsapp']]],
                ['Contacts', [['/', 'my business card'], ['/','my whatsapp']]],
                ['Contacts', [['/', 'my business card'], ['/','my whatsapp']]],
                ['Contacts', [['/', 'my business card'], ['/','my whatsapp']]]
            ]            
        }
    },
    
}

function parseTo(section){
    const split = (section.arguements.to).trim().split(' ')
    let element;
    element = elements[split[0]]
    split.shift()
    split.forEach(dir =>{
        if(dir[0] === '.' || dir[0] === '#'){
            element = element.querySelector(dir)
        }else{
            element = element[dir]
        }
        
    })

    return element
}
function parseID(section, elementOBJ){
if(section.id)
elementOBJ.element.setAttribute('id', section.id)
if(section.class)
elementOBJ.element.setAttribute('class', section.class)
}
function parseLayout(){
    for(let x in structure){
        const section = structure[x]
        if(typeof section.arguements.to === 'string'){
            const element = parseTo(section)
            section.arguements.to = element
        }
        elements[x] = tree[section.name](section.arguements)
        parseID(section, elements[x])
    }
}
