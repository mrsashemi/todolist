(()=>{"use strict";var n={426:(n,e,i)=>{i.d(e,{Z:()=>b});var t=i(81),o=i.n(t),r=i(645),a=i.n(r),l=i(667),m=i.n(l),d=new URL(i(355),i.b),s=new URL(i(230),i.b),c=new URL(i(316),i.b),v=a()(o()),p=m()(d),u=m()(s),h=m()(c);v.push([n.id,"/*universal*/\n:root {\n    --main-color: rgba(109,0,25,1);\n    --secondary-color: rgba(255,168,76,1);\n}\n\n@font-face {\n    font-family: '8bit';\n    src: url("+p+');\n}\n\nbody {\n    margin: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n* {\n    box-sizing: border-box;\n}\n\n.Dashboard {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 5fr;\n    grid-template-areas: \n    "sidebar usermenu"\n    "sidebar activityDash";\n}\n\nli > img {\n    object-fit: contain;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n}\n\n/* left-side nav sidebar*/\n/**/\n.sidebar {\n    position: relative;\n    background: linear-gradient(to bottom, rgba(255,168,76,1) 0%,rgba(255,123,13,1) 100%);\n    box-shadow: 0vmin 0.125vmin 1vmin 0.125vmin var(--secondary-color), \n    0vmin 0.75vmin 0.5vmin 0.5vmin beige;\n    grid-area: sidebar;\n    display: grid;\n    grid-template-rows: 0.25fr 0.5fr 1fr;\n    padding: 0 1vmin 0 1vmin;\n    z-index: 1;\n    min-width: 30vmin;\n    height: 100vh;\n    overflow: hidden;\n}\n\n.sidebar > h1 {\n    font-family: \'8bit\', \'Courier New\', Courier, monospace;\n    background-image: linear-gradient(135deg, rgba(169,3,41,0.6) 0%,rgba(143,2,34,0.8) 44%,rgba(109,0,25,1) 100%);\n    background-size: contain;\n    -webkit-background-clip: text;\n    color: transparent;\n    letter-spacing: 0.5vmin;\n    height: 100%;\n    max-width: 100%;\n    font-size: 6vmin;\n    position: relative;\n    top: -1vmin;\n    left:7vmin;\n    text-shadow: 0vmin 0.5vmin white;\n}\n\n/*the following before and after create the chicken icon next to the h1 header*/\n.sidebar > h1::before {\n    position: absolute;\n    font-family: Times;\n    content: "------------";\n    text-align: right;\n    letter-spacing: -1vmin;\n    text-shadow: \n    0.6vmin 0.5vmin black,\n    0.6vmin 0.3vmin white,\n    -0.4vmin -0.4vmin gold,\n    -0.6vmin -0.55vmin black,\n    -0.4vmin -0.7vmin gold,\n    -0.4vmin -0.8vmin gold,\n    0.6vmin 0.4vmin white;\n    font-size: 2vmin;\n    color: white;\n    background-color: black;\n    width: 3vmin;\n    height: 3vmin;\n    border-radius: 50%;\n    top: 1.25vmin;\n    left: -6vmin;\n    border: 0.6vmin solid white;\n    box-shadow: \n    0.1vmin -0.3vmin black inset,\n    -0.1vmin -0.3vmin black inset,\n    0.4vmin 0.4vmin gold inset,\n    0.8vmin 0.8vmin coral inset,\n    1.2vmin 1.2vmin gold inset,\n    1.6vmin 1.6vmin coral inset,\n    2vmin 2vmin gold inset,\n    2.4vmin 2.4vmin coral inset,\n    0.3vmin 0vmin red, \n    0vmin .3vmin red, \n    0vmin -0.4vmin white,\n    0.57vmin 0.15vmin black,\n    0.57vmin 0vmin white,\n    0.75vmin 0.25vmin gold,\n    0.85vmin 0vmin red,\n    0.5vmin -0.25vmin red,\n    0.5vmin -0.5vmin gold,\n    0.5vmin 0.5vmin red,\n    0.7vmin 0.6vmin white;\n    transform: scaleY(-1) scaleX(-1);\n}\n\n.sidebar > h1::after {\n    font-family: Times;\n    content: "^";\n    text-shadow: \n    0 -0.3vmin black;\n    font-weight: bolder;\n    letter-spacing: -1.1vmin;\n    writing-mode: vertical-lr;\n    white-space: pre-wrap;\n    font-size: 3vmin;\n    color: gold;\n    background-color: red;\n    position: absolute;\n    top: 3.25vmin;\n    left: -3.6vmin;\n    height: 0.7vmin;\n    width: 1.3vmin;\n    border-radius: 0 0 1.5vmin 1.5vmin;\n    box-shadow: \n    0vmin 0.15vmin black inset,\n    0.2vmin 0 black inset,\n    -0.2vmin 0 black inset,\n    0vmin -0.2vmin black inset,\n    0.3vmin 0 white inset,\n    -0.3vmin 0 white inset,\n    0vmin -0.3vmin white inset,\n    0.55vmin 0vmin gold,\n    -1vmin 0vmin gold,\n    -2vmin 0vmin red,\n    -3vmin 0vmin gold,\n    0.25vmin 0.5vmin orange,\n    -0.75vmin 0.5vmin red,\n    -1.75vmin 0.5vmin yellow,\n    -2.75vmin 0.5vmin orange,\n    -0.25vmin 1vmin white,\n    -1.25vmin 1vmin coral,\n    -2.25vmin 1vmin white,\n    -0.75vmin 1.5vmin red,\n    -1.75vmin 1.5vmin gold,\n    -1.25vmin 1.75vmin red,\n    0.55vmin 0.5vmin gold,\n    0.3vmin 1.25vmin gold,\n    0.3vmin 1vmin gold,\n    0.6vmin 1.25vmin red,\n    0.35vmin 1.4vmin red,\n    -0.25vmin 1.75vmin coral,\n    -0.75vmin 2vmin gold;\n}\n\n.sidebar > ul {\n    position: relative;\n    list-style: none;\n    margin: 0;\n    padding: 0 2vmin 0vmin 2vmin;\n }\n\n .sidebar > ul > li {\n    width: fit-content;\n    position: relative;\n    left: 3vmin;\n    margin: 1vmin 0 1vmin 0;\n    font-family: \'8bit\', \'Courier New\', Courier, monospace;\n    font-size: 3vmin;\n    color: white;\n    text-shadow:\n    -1px -1px 0 var(--main-color),  \n    1px -1px 0 var(--main-color),\n    -1px 1px 0 var(--main-color),\n    1px 1px 0 var(--main-color);\n }\n\n .sidebar > ul > li:hover {\n     cursor: pointer;\n     text-shadow:\n     -1px -1px 0 var(--secondary-color),  \n     1px -1px 0 var(--secondary-color),\n     -1px 1px 0 var(--secondary-color),\n     1px 1px 0 var(--secondary-color);\n }\n\n/*the following before and afters for each list child create the icons next to the nav links*/\n .sidebar > .manageProfile > li:nth-child(1)::before {\n    content: "";\n    position: absolute;\n    border-left: 0.75vmin solid transparent;\n    border-right: 0.75vmin solid transparent;\n    border-bottom: 0.75vmin solid var(--main-color);\n    left: -2.5vmin;\n    top: 0.6vmin;\n }\n\n .sidebar > .manageProfile > li:nth-child(1)::after {\n    content: "";\n    position: absolute;\n    height: 0.5vmin;\n    width: 0.5vmin;\n    border-top: 0.5vmin solid var(--main-color);\n    border-right: 0.5vmin solid var(--main-color);\n    border-left: 0.5vmin solid var(--main-color);\n    background-color: transparent;\n    left: -2.5vmin;\n    top: 1.35vmin;\n }\n\n .sidebar > .manageProfile > li:nth-child(2)::before {\n    content: "";\n    position: absolute;\n    height: 1vmin;\n    width: 1vmin;\n    border-radius: 50%;\n    background-color: var(--main-color);\n    left: -2.3vmin;\n    top: 0.6vmin;\n }\n\n .sidebar > .manageProfile > li:nth-child(2)::after {\n    content: "";\n    position: absolute;\n    height: 1.25vmin;\n    width: 1.5vmin;\n    background-color: var(--main-color);\n    border-radius: 2vmin 2vmin 0 0;\n    left: -2.5vmin;\n    top: 1.35vmin;\n }\n\n\n .sidebar > .manageProfile > li:nth-child(3)::before {\n    content: "";\n    position: absolute;\n    height: 1.5vmin;\n    width: 1.5vmin;\n    background-color: var(--main-color);\n    border-radius: 50%;\n    left: -2.5vmin;\n    top: 0.8vmin;\n }\n\n .sidebar > .manageProfile > li:nth-child(3)::after {\n    content: "";\n    height: 0.45vmin;\n    width: 0.34vmin;\n    background-color: transparent;\n    border-left: 0.15vmin solid var(--secondary-color);\n    border-bottom: 0.15vmin solid var(--secondary-color);\n    position: absolute;\n    left: -1.9vmin;\n    top: 1.05vmin;\n }\n\n .sidebar > .manageProfile > li:nth-child(4)::before {\n    content: "";\n    position: absolute;\n    height: 1.65vmin;\n    width: 1.4vmin;\n    background-color: var(--main-color);\n    border-top-right-radius: 0.35vmin;\n    box-shadow: \n    -0.1vmin 0.1vmin var(--secondary-color),\n    -0.25vmin 0.25vmin var(--main-color);\n    left: -2.25vmin;\n    top: 0.7vmin;\n }\n\n .sidebar > .manageProfile > li:nth-child(4)::after {\n    content: "";\n    position: absolute;\n    border-top: 0.25vmin solid var(--secondary-color);\n    border-right: 0.25vmin solid transparent;\n    border-left: 0.25vmin solid transparent;\n    background-color: transparent;\n    left: -1.5vmin;\n    top: 1vmin;\n    transform: rotate(45deg);\n }\n\n/*right-side top header menu*/\n/**/\n.userMenu {\n    grid-area: usermenu;\n    display: grid;\n    grid-template-rows: repeat(2, 1fr);\n    padding: 0 1vmin 0 1vmin;\n    box-shadow: 0vmin 0.5vmin 1vmin 0.25vmin var(--main-color);\n    z-index: 0;\n}\n\n.searchMenu {\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    justify-items: center;\n    align-items: center;\n}\n\n.searchBar {\n    position: relative;\n    justify-self: stretch;\n    left: 5vmin\n}\n\n.searchBar::before {\n    content: "";\n    position: absolute;\n    left: -3vmin;\n    top: 0.6vmin;\n    height: 0.8vmin;\n    width: 0.8vmin;\n    border-radius: 50%;\n    border: 0.3vmin solid var(--main-color);\n    background-color: transparent;\n}\n\n.searchBar:hover::before {\n    cursor: pointer;\n    border: 0.4vmin solid var(--secondary-color);\n}\n\n.searchBar::after {\n    content: "";\n    position: absolute;\n    height: 0.3vmin;\n    width: 0.9vmin;\n    left: -2vmin;\n    top: 2vmin;\n    background: var(--main-color);\n    transform: rotate(45deg);\n}\n\n.searchBar:hover::after {\n    cursor: pointer;\n    height: 0.35vmin;\n    width: 0.95vmin;\n    background: var(--secondary-color);\n}\n\n#lookup {\n    appearance: none;\n    width: 90%;\n    height: 3vmin;\n    border-radius: 1vmin;\n    box-shadow: 0vmin 0.1vmin 0.5vmin 0.1vmin rgba(109,0,25,0.5) inset;\n}\n\n#lookup:hover {\n    box-shadow: 0vmin 0.1vmin 0.5vmin 0.1vmin var(--secondary-color) inset;\n}\n\n.notifications {\n    list-style: none;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    justify-items: center;\n    align-items: center;\n    margin: 0;\n    padding: 0 2vmin 0 0;\n}\n\n/*the following creates a notification bell icon and animates it upon hovering*/\n.notifications > li:nth-child(1) {\n    padding: 0.5vmin;\n    position: relative;\n    height: 0.75vmin;\n    width: 0.75vmin;\n    border-radius: 50%;\n    background-color: var(--main-color);\n    top: -0.5vmin;\n    left: 3vmin;\n    cursor: pointer;\n}\n\n.notifications > li:nth-child(1):active {\n    animation-name: ring;\n    animation-duration: 2s;\n    animation-iteration-count: infinite;\n}\n\n@keyframes ring {\n    0% {transform: rotate(-45deg);}\n    25% {transform: rotate(45deg);}\n    50% {transform: rotate(-45deg);}\n    75% {transform: rotate(45deg);}\n    100% {transform: rotate(-45deg);}\n}\n\n\n.notifications > li:nth-child(1)::before {\n    content: "";\n    position: absolute;\n    height: 1vmin;\n    width: 0.75vmin;\n    border-radius: 50%;\n    background-color: var(--main-color);\n    top: 1.3vmin;\n    left: -0.05vmin;\n    transform: rotate(180deg);\n}\n\n.notifications > li:nth-child(1):hover::before {\n    animation-name: bell;\n    animation-duration: 2s;\n    animation-iteration-count: infinite;\n}\n\n@keyframes bell {\n    0% {right: 0.25vmin;}\n    25% {left: 0.25vmin;}\n    50% {right: 0.25vmin;}\n    75% {left: 0.25vmin;}\n    100% {right: 0.25vmin;}\n}\n\n.notifications > li:nth-child(1)::after {\n    content: "";\n    color: var(--secondary-color);\n    font-family: Times;\n    text-shadow: none;\n    text-align: center;\n    font-size: 1vmin;\n    position: absolute;\n    height: 0.65vmin;\n    width: 1.5vmin;\n    left: -0.25vmin;\n    top: 0.3vmin;\n    background-color: var(--main-color);\n    border-bottom: 0.75vmin solid var(--main-color);\n    border-radius: 50% 50% 50% 50% / 12% 12% 88% 88%;\n    transform: rotate(180deg);\n    box-shadow: \n    0vmin -0.15vmin var(--secondary-color),\n    0vmin -0.25vmin white;\n}\n\n.notifications > li:nth-child(2) {\n    width: 5vmin;\n    height: 5vmin;\n    border-radius: 50%;\n    border: 0.25vmin solid var(--secondary-color);\n    cursor: pointer;\n}\n\n.notifications > li:nth-child(2):hover {\n    border: 0.35vmin solid var(--main-color);\n}\n\n.notifications > li > h3 {\n    font-family: \'8bit\';\n    font-size: 2vmin;\n    cursor: pointer;\n}\n\n.notifications > li > h3:hover {\n    color: white;\n    text-shadow:\n    -1px -1px 0 var(--main-color),  \n    1px -1px 0 var(--main-color),\n    -1px 1px 0 var(--main-color),\n    1px 1px 0 var(--main-color);\n}\n\n.activityMenu {\n    margin-bottom: 1.5vmin;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    align-items: center;\n}\n\n.profile {\n    margin: 0;\n    padding: 0vmin 0vmin 0vmin 4vmin;\n    list-style: none;\n    display: grid;\n    grid-template-columns: 1fr 8fr;\n    justify-items: start;\n    align-items: center;\n}\n\n.profilePic {\n    width: 7vmin;\n    height: 7vmin;\n    border-radius: 50%;\n    border: 0.25vmin solid var(--secondary-color);\n    cursor: pointer;\n}\n\n.profilePic:hover {\n    border: 0.45vmin solid var(--main-color);\n}\n\n.user {\n    font-family: \'8bit\';\n}\n\n.user > p {\n    font-size: 1.5vmin;\n    margin: 0;\n}\n\n.username {\n    font-size: 2.5vmin;\n    margin: 0;\n}\n\n.activity {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    display: flex;\n    justify-content: space-around;\n}\n\n.activity > li > button {\n    appearance: none;\n    font-family: \'8bit\';\n    color: white;\n    font-size: 2.5vmin;\n    width: 9vmin;\n    height: 4vmin;\n    background-color: var(--secondary-color);\n    border-radius: 1vmin;\n    border: 0.25vmin solid var(--main-color);\n    text-shadow:\n    -1px -1px 0 var(--main-color),  \n    1px -1px 0 var(--main-color),\n    -1px 1px 0 var(--main-color),\n    1px 1px 0 var(--main-color);\n    cursor: pointer;\n}\n\n.activity > li > button:hover {\n    background-color: var(--main-color);\n    border-radius: 1vmin;\n    border: 0.25vmin solid var(--secondary-color);\n    text-shadow:\n    -1px -1px 0 var(--secondary-color),  \n    1px -1px 0 var(--secondary-color),\n    -1px 1px 0 var(--secondary-color),\n    1px 1px 0 var(--secondary-color);\n    box-shadow: 0.25vmin 0.25vmin 1vmin var(--main-color);\n}\n\n/*right-side main activity dashboard*/\n.dashboardBackground {\n    background-image: url('+u+");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-clip: content-box;\n}\n\n.activityDashboard {\n    box-shadow: \n    0 1vmin 35vmin rgba(0, 0, 0, 0.6) inset,\n    -7.5vmin 0 45vmin 7.5vmin rgba(0, 0, 0, 0.7) inset,\n    1vmin 0 10vmin rgba(0, 0, 0, 0.6) inset;\n    height: 83vh;\n    width: 100%;\n    grid-area: activityDash;\n    gap: 1.5vmin;\n    padding: 3vmin 3vmin 0vmin 3vmin; \n    overflow: auto;\n}\n\n.sectionTitle {\n    margin: 0;\n    padding: 0 0 0.5vmin 0;\n    font-family: '8bit';\n    font-size: 3vmin;\n    color: white;\n    text-shadow:\n    -1px -1px 0 var(--main-color),  \n    1px -1px 0 var(--main-color),\n    -1px 1px 0 var(--main-color),\n    1px 1px 0 var(--main-color);\n    overflow: scroll;\n}\n\n.activityDiv1 {\n    grid-area: projects;\n}\n\n/*project class is associated with posts (decided theme of page after creating layout, else the class would be posts)*/\n.projects {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n    gap: 1.5vmin;\n}\n\n/*a blur filter is used to create a frosted glass effect as the background to each div, upon hovering the glass somewhat clears up*/\n.projects > div {\n    display: grid;\n    grid-template-rows: 1.5fr 4fr 1fr;\n    position: relative;\n    background: rgba(255, 255, 255, 0.1);\n    backdrop-filter: blur(0.75vmin);\n    -webkit-backdrop-filter: blur(0.75vmin);\n    border-radius: 1vmin;\n    padding: 1vmin 1.5vmin 1vmin 1vmin;\n    box-shadow: \n    0 1vmin 7vmin rgba(0, 0, 0, 0.25) inset,\n    0.35vmin 0 var(--secondary-color) inset,\n    0.25vmin 0.25vmin 0.5vmin var(--main-color);\n    font-family: '8bit';\n    color: white;\n    text-shadow:\n    -1px -1px 0 var(--main-color),  \n    1px -1px 0 var(--main-color),\n    -1px 1px 0 var(--main-color),\n    1px 1px 0 var(--main-color);\n    transition: all 1s ease;\n    -webkit-transition: all 1s ease;\n}\n\n.projects > div:hover {\n    backdrop-filter: blur(0.25vmin);\n    -webkit-backdrop-filter: blur(0.25vmin);\n    box-shadow: \n    0 1vmin 7vmin rgba(0, 0, 0, 0.25) inset,\n    0.15vmin 0 var(--secondary-color) inset,\n    1vmin 1vmin 1vmin var(--main-color);\n    transition: all 1s ease;\n    -webkit-transition: all 1s ease;\n}\n\n.task {\n    font-size: 2.25vmin;\n    margin: 1vmin 0 0 0;\n    padding-left: 1vmin;\n}\n\n.projects > div > p {\n    font-size: 2vmin;\n    margin-top: 0;\n    padding-left: 1vmin;\n}\n\n.manageTask {\n    position: relative;\n    list-style: none;\n    display: flex;\n    height: 3vmin;\n    width: 80%;\n    margin: 0;\n    padding: 0;\n    justify-content: flex-end;\n    gap: 5vmin;\n}\n\n.manageTask > li {\n    user-select: none;\n    cursor: pointer;\n}\n\n.completed {\n    position: relative;\n    color: var(--secondary-color);\n    width: 0px;\n    height: 0px;\n    border-right: 1vmin solid transparent;\n    border-bottom: 0.7vmin solid var(--secondary-color);\n    border-left: 1vmin solid transparent;\n    transform: rotate(35deg);\n    opacity: 0.5;\n}\n\n.completed:hover {\n    opacity: 0.75;\n}\n\n.completed:active {\n    opacity: 1;\n}\n\n.completed::before {\n    content: '';\n    border-bottom: .8vmin solid var(--secondary-color);\n    border-left: .3vmin solid transparent;\n    border-right: .3vmin solid transparent;\n    position: absolute;\n    height: 0;\n    width: 0;\n    top: -0.45vmin;\n    left: -0.65vmin;\n    transform: rotate(-35deg);\n}\n\n.completed::after {\n    position: absolute;\n    color: var(--main-color);\n    top: .03vmin;\n    left: -1.05vmin;\n    width: 0;\n    height: 0;\n    border-right: 1vmin solid transparent;\n    border-bottom: 0.7vmin solid var(--secondary-color);\n    border-left: 1vmin solid transparent;\n    transform: rotate(-70deg);\n    font-family: Times;\n    content: \"\";\n}\n\n.trash {\n    position: relative;\n    font-size: 3vmin;\n    bottom: 1.25vmin;\n    opacity: 0.5;\n}\n\n.trash:hover {\n    opacity: 0.75;\n}\n\n.trash:active {\n    opacity: 1;\n}\n\n/*Date input styles borrowed from Ageir Hoem on codepen.io, modified to suit style of page*/\nli > input[type=\"date\"] {\n    display:block;\n    position:relative;\n    bottom: 1.5vmin;\n    padding:0.75vmin 3.5vmin 0.75vmin 0.5vmin;\n    font-size: 1.75vmin;\n    font-family: '8bit', 'Courier New', Courier, monospace;\n    color: white;\n    text-shadow:\n    -1px -1px 0 var(--main-color),  \n    1px -1px 0 var(--main-color),\n    -1px 1px 0 var(--main-color),\n    1px 1px 0 var(--main-color);\n    border:1px solid var(--secondary-color);\n    border-radius: 0.25vmin;\n    background-color: rgba(255, 255, 255, 0.5);\n    background-image: url("+h+");\n    background-size: 15%;\n    background-position: right .5vmin center;\n    background-repeat: no-repeat;\n    cursor:pointer;\n}\n\ninput[type=\"date\"]:focus {\n    outline:none;\n    border-color:var(--main-color);\n    box-shadow:0 0 0 0.2vmin var(--secondary-color);\n}\n\n::-webkit-datetime-edit-month-field:hover,\n::-webkit-datetime-edit-day-field:hover,\n::-webkit-datetime-edit-year-field:hover {\n    background:rgba(0, 120, 250, 0.1);\n  }\n\n::-webkit-datetime-edit-text {\n    opacity:0;\n}\n\n::-webkit-clear-button,\n::-webkit-inner-spin-button {\n    display:none;\n}\n\n::-webkit-calendar-picker-indicator {\n    position:absolute;\n    width:2.5vmin;\n    height:100%;\n    top:0;\n    right:0;\n    bottom:0;\n    \n    opacity:0;\n    cursor:pointer;\n    \n    color:rgba(0, 120, 250, 1);\n    background:rgba(0, 120, 250, 1);\n   \n}\n  \ninput[type=\"date\"]:hover::-webkit-calendar-picker-indicator { opacity:0.05; }\ninput[type=\"date\"]:hover::-webkit-calendar-picker-indicator:hover { opacity:0.15; }\n\n\n\n/*Form*/\n#todoSubmit {\n    font-family: '8bit', 'Courier New', Courier, monospace;\n    font-size: 2vmin;\n    background: linear-gradient(135deg, \n    rgba(179,220,237,0.25) 0%,\n    rgba(41,184,229,0.45) 50%,\n    rgba(188,224,238,0.65) 100%); \n    border-radius: 1vmin;\n    box-shadow: 0 4vmin 50vmin 100vmin rgba(0, 0, 0, 0.8);\n    backdrop-filter: blur(5.9px);\n    border: 0.3vmin solid white;\n    display: none;\n    position: absolute;\n    padding: 2vmin 2vmin 1vmin 2vmin;\n    z-index: 1;\n    left: 50%;\n    top: 30%;\n    transform: translate(-50%, 0);\n    width: fit-content;\n    text-align: center;\n    color: white;\n    text-shadow:\n   -1px -1px 0 #000,  \n    1px -1px 0 #000,\n    -1px 1px 0 #000,\n     1px 1px 0 #000;\n     z-index: 10;\n}\n\n#todoSubmit:hover {\n    background: linear-gradient(135deg, \n    rgba(179,220,237,0.45) 0%,\n    rgba(41,184,229,0.65) 50%,\n    rgba(188,224,238,0.85) 100%); \n}\n\n#todoTitle,\n#todoNotes,\n#dateDue,\n#todoProject,\n#remindMe,\n#priorityList {\n    width: 100%;\n    padding: 0.25vmin 1vmin 0.25vmin 1vmin;\n}\n\ntextarea,\ninput {\n    border-radius: 1vmin;\n    border: 0.3vmin solid black;\n}\n\ntextarea:hover,\ninput:hover {\n    box-shadow: inset 0 0.2vmin 0.3vmin black;\n}\n\n#remindMe {\n    cursor: pointer;\n    width: 2vmin;\n    height: 2vmin;\n}\n\n#todoTitle,\n#todoNotes,\n#dateDue,\n#todoProject,\n#remindMe,\n#priorityList {\n    margin-bottom: 1vmin;\n}\n\n#dateDue {\n    display:block;\n    position:relative;\n    top: 1vmin;\n    padding:0.75vmin 3.5vmin 0.75vmin 0.5vmin;\n    font-size: 1.75vmin;\n    font-family: '8bit', 'Courier New', Courier, monospace;\n    color: white;\n    text-shadow:\n    -1px -1px 0 var(--main-color),  \n    1px -1px 0 var(--main-color),\n    -1px 1px 0 var(--main-color),\n    1px 1px 0 var(--main-color);\n    border:1px solid var(--secondary-color);\n    border-radius: 0.25vmin;\n    background-color: rgba(255, 255, 255, 0.5);\n    background-image: url("+h+");\n    background-size: 5%;\n    background-position: right .5vmin center;\n    background-repeat: no-repeat;\n    cursor:pointer;\n}\n  ",""]);const b=v},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var i="",t=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),t&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=n(e),t&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i})).join("")},e.i=function(n,i,t,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var l=0;l<this.length;l++){var m=this[l][0];null!=m&&(a[m]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);t&&a[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),i&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=i):s[2]=i),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function i(n){for(var i=-1,t=0;t<e.length;t++)if(e[t].identifier===n){i=t;break}return i}function t(n,t){for(var r={},a=[],l=0;l<n.length;l++){var m=n[l],d=t.base?m[0]+t.base:m[0],s=r[d]||0,c="".concat(d," ").concat(s);r[d]=s+1;var v=i(c),p={css:m[1],media:m[2],sourceMap:m[3],supports:m[4],layer:m[5]};if(-1!==v)e[v].references++,e[v].updater(p);else{var u=o(p,t);t.byIndex=l,e.splice(l,0,{identifier:c,updater:u,references:1})}a.push(c)}return a}function o(n,e){var i=e.domAPI(e);return i.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;i.update(n=e)}else i.remove()}}n.exports=function(n,o){var r=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var l=i(r[a]);e[l].references--}for(var m=t(n,o),d=0;d<r.length;d++){var s=i(r[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}r=m}}},569:n=>{var e={};n.exports=function(n,i){var t=function(n){if(void 0===e[n]){var i=document.querySelector(n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(n){i=null}e[n]=i}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(i)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,i)=>{n.exports=function(n){var e=i.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(i){!function(n,e,i){var t="";i.supports&&(t+="@supports (".concat(i.supports,") {")),i.media&&(t+="@media ".concat(i.media," {"));var o=void 0!==i.layer;o&&(t+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),t+=i.css,o&&(t+="}"),i.media&&(t+="}"),i.supports&&(t+="}");var r=i.sourceMap;r&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,i)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},355:(n,e,i)=>{n.exports=i.p+"2bc43ad8eb2f60b39f27.ttf"},230:(n,e,i)=>{n.exports=i.p+"0335b43c6df989def708.jpg"},316:(n,e,i)=>{n.exports=i.p+"d362769e111b0057ad81.svg"}},e={};function i(t){var o=e[t];if(void 0!==o)return o.exports;var r=e[t]={id:t,exports:{}};return n[t](r,r.exports,i),r.exports}i.m=n,i.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return i.d(e,{a:e}),e},i.d=(n,e)=>{for(var t in e)i.o(e,t)&&!i.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),i.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;i.g.importScripts&&(n=i.g.location+"");var e=i.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=n})(),i.b=document.baseURI||self.location.href,i.nc=void 0,(()=>{var n=i(379),e=i.n(n),t=i(795),o=i.n(t),r=i(569),a=i.n(r),l=i(565),m=i.n(l),d=i(216),s=i.n(d),c=i(589),v=i.n(c),p=i(426),u={};u.styleTagTransform=v(),u.setAttributes=m(),u.insert=a().bind(null,"head"),u.domAPI=o(),u.insertStyleElement=s(),e()(p.Z,u),p.Z&&p.Z.locals&&p.Z.locals;const h=document.querySelector(".projects"),b=document.querySelector(".newTaskButton"),f=document.querySelector("#todoSubmit");document.querySelector("#formSubmitButton");let g=[];function y(){localStorage.setItem("Tasks",JSON.stringify(g))}const x=localStorage.getItem("Tasks");let w=JSON.parse(x);null!=x&&g.push(...w);const k=function(n,e,i,t,o,r,a,l){return{listnum:n,title:e,notes:i,date:t,project:o,completed:r,remind:a,priority:l}};function S(){document.querySelectorAll(".taskListItem").forEach((n=>{let e=document.querySelector(".completed"),i=document.querySelector(".task")("1"==e.style.opacity)?i.style["text-decoration"]="line-through":i.style["text-decoration"]="none";e.addEventListener("click",(()=>{"1"==e.style.opacity?e.style.opacity="0.5":e.style.opacity="1","1"==e.style.opacity?i.style["text-decoration"]="line-through":i.style["text-decoration"]="none"}))}))}b.addEventListener("click",(()=>{f.style.display="block",document.addEventListener("click",(n=>{let e=f.contains(n.target),i=b.contains(n.target);e||i||(f.style.display="none")}))})),f.addEventListener("submit",(n=>{n.preventDefault(),function(){!function(){for(;h.firstChild;)h.removeChild(h.firstChild)}();let n=g.length,e=document.querySelector("#todoTitle").value,i=document.querySelector("#todoNotes").value,t=document.querySelector("#dateDue").value,o=document.querySelector("#todoProject").value,r=document.querySelector("#remindMe").checked,a=document.querySelector("#priorityList").value;const l=new k(n,e,i,t,o,!1,r,a);g.push(l),g.forEach((n=>{let e=document.createElement("div");h.appendChild(e),e.className="taskListItem";let i=document.createElement("h4");i.className="task",i.textContent=n.title,e.appendChild(i);let t=document.createElement("p");t.className="notes",t.textContent=n.notes,e.appendChild(t);let o=document.createElement("ul");o.className="manageTask",e.appendChild(o);let r=document.createElement("li");r.className="completed";let a=document.createElement("li");a.className="date";let l=document.createElement("li");l.textContent="X",l.className="trash",o.appendChild(r),o.appendChild(a),o.appendChild(l);let m=document.createElement("input");m.type="date",a.appendChild(m)})),f.style.display="none",document.querySelector("#todoTitle").value="",document.querySelector("#todoNotes").value="",document.querySelector("#dateDue").value="",document.querySelector("#todoProject").value="",document.querySelector("#remindMe").checked="",document.querySelector("#priorityList").value="",y(),document.querySelectorAll(".trash").forEach((n=>{n.addEventListener("click",(()=>{let e=n.parentElement.firstChild.textContent;g.splice(Number(e),1),g.forEach((n=>{n.listNum=myLibrary.indexOf(n)})),n.parentElement.remove(),y()}))})),S()}()})),console.log(g),S()})()})();