flag_button = `<div class="country-name-container">
    <p class="country-name"></p>
</div>`

country_selector_container = document.getElementsByClassName('country-selection')[0]
selector_container = country_selector_container.children[0]
function country_changer_displayer(){
    country_selector_container.style.display = 'flex'
}


// THE TWO FUNCTION CREATES THE CONTAINER WITH THE COUNTRY FLAGS AND IT IS BY DEFAULT HIDDEN
function country_changer(){
    selector_container.innerHTML = ''
    data.forEach((item) => {
        flag_creator(item)
    })
}
function flag_creator(item) {
    tile = document.createElement('button')
    tile.classList.add('flag-container')
    tile.style.backgroundImage = 'url('+item['flag']+')'
    tile.innerHTML = flag_button
    tile.dataset.name = item['place_name']
    selector_container.append(tile)
    tile.onclick = country_updater
    country_name = tile.getElementsByClassName('country-name')[0]
    country_name.innerHTML = item['place_name']
}
////////////////////////////


//THIS FUNCTION IS SUPPOSSE TO CHANGE THE LOC TILE, BACKGROUND AND IT'S DISCRIPTION 
function country_updater(Event) {
    element = Event['target']
    place = element.getAttribute('data-name')
    data.forEach( (item, index) => {
        if (item['place_name'] == place){
            country_number = index
            curr_number = 0
            displayer(index)
            country_name_updater(country_number)
            country_selector_container.style.display = 'none'
        }
    })
}
function country_name_updater(country_number){
    country_name_container.innerHTML = data[country_number]['place_name']
}