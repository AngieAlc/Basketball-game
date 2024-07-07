homeEl = document.getElementById("home-el")
guestEl = document.getElementById("guest-el")

function no_color(){ // function that hides any appareance of "leading"
    document.getElementById("team1").innerText = ""
    document.getElementById("team2").innerText = ""
}
function check(){
    let homePoints = parseInt(homeEl.innerText)
    let guestPoints = parseInt(guestEl.innerText)

    no_color() // hide any color 
    if(homePoints > guestPoints){ // show first team
        document.getElementById("team1").innerText = "Leading!"
    }
    if(homePoints < guestPoints){ // show second team
        document.getElementById("team2").innerText = "Leading!"
    }
}
function add(team, points_extra){
    scorer = homeEl // scorer==0-> home scored points; Otherwise guest scored points
    if (team != 0){
        scorer = guestEl
    }
    scorer.innerText = parseInt(scorer.innerText) + parseInt(points_extra)
    check()
}

function restart(){
    homeEl.innerText = guestEl.innerText = 0
    no_color() // hide colors
}