export default async function main() {
    
    console.log ('start App')

    let currentIndex = 0;
    const manuitems = document.querySelectorAll(".menu-item");

    console.log(manuitems)

    manuitems[currentIndex].classList.add("select")

    window.addEventListener("keydown", (e) => {
        
        console.log(e.key)

        manuitems[currentIndex].classList.remove('select')

        if(e.key == "ArrowUp") {
            currentIndex--

            if(currentIndex < 0) {
                currentIndex = 2
            }
        }
        else if(e.key == "ArrowDown") {
            currentIndex++
            currentIndex %=3
        }
        console.log(currentIndex)
        manuitems[currentIndex].classList.add('select')
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