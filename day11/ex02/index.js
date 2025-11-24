export default async function main() {
    
    console.log ('start App')

    const main_menu = document.querySelector('#main-menu')
    //const newGame = document.querySelector('')
    const creditScreen = document.querySelector('#credit-screen')
    let currentScreen = "main_menu"

    let currentIndex = 0;
    const manuitems = document.querySelectorAll(".menu-item");

    console.log(manuitems.lenght)
    const menuitem_count = menuitems.lenght

    manuitems[currentIndex].classList.add("select")

    window.addEventListener("keydown", (e) => {

        manuitems[currentIndex].classList.remove('select')

        if(currentScreen == "main_menu") {
            console.log(e.key)
            if(e.key == "ArrowUp") {
            currentIndex--

            if(currentIndex < 0) {
                currentIndex = menuitem_count-1
            }
        }
        else if(e.key == "ArrowDown") {
            currentIndex++
            currentIndex %=menuitem_count
        }
        else if(e.key == "Enter") {
            console.log(menuitems[currentIndex].dataset.action)
            const select_action = menuitems[currentIndex].dataset.action

            if(select_action == 'credit') {
                main_menu.classList.add('hide')
                creditScreen.classList.remove('hide')
                currentScreen == "creditScreen"
            }
        }

        console.log(currentIndex)
        manuitems[currentIndex].classList.add('select')
        }
        else if(currentScreen == "creditScreen") {

            console.log('credit screen')
            
            if (e.key == "Enter") {
                creditScreen.classList.add('hide')
                main_menu.classList.remove('hide')
                currentScreen = "main_menu"
            }
            
        }
        
    })

    /*var a = 1
    console.log(a)
    a = 7
    console.log(a)

    let b = 1
    console.log(b)
    b = 8 + a
    console.log(b)

    var a = 2;
    console.log(a)

    b = 3
    console.log(b)
var는 재선언이 되고, let은 재선언이 되지 X => 변수 선언 시 var 사용 X, let 사용*/

}