tile_container = document.getElementById('tile-container')
body = document.getElementsByClassName('container-class')[0]
location_name_container = document.getElementById('location-name')
location_description_container = document.getElementById('location-description')
country_name_container = document.getElementById('country-name')

limit = 3
curr_number = 0
content_lenght = 0
country_number = 0
function card_create_append(item, index){
    // console.log(item)
    card = document.createElement('div')    
    card.classList.add('card-container')
    
    card.innerHTML = card_template
    tile_container.append(card)


    title = card.getElementsByClassName('card-title')[0]
    tile = card.getElementsByClassName('card') [0]
    title.innerHTML = item["loc"]
    // console.log('from 22',item, index)
    tile.style.backgroundImage = 'url('+item[tile_img]+')'
    if(index == 0){
      tile.classList.add('active-card')
    }
    left_value = card_space * index + 'px'
    card.style.left = left_value
}


function displayer(index){
  limit = 3
  curr_number = 0
  content_lenght = 0

  tile_container.innerHTML = ''
  country = data[index]
  root = document.querySelector(':root')
  vars = getComputedStyle(root)
  card_width_string = vars.getPropertyValue('--width')
  card_width = parseInt(card_width_string.match(/\d+/)[0])
  card_margin_string = vars.getPropertyValue('--margin')
  card_margin = parseInt(card_margin_string.match(/\d+/)[0])

  card_space = card_width + card_margin

  place_name = country['place_name']
  content = country['content']

  content.forEach((item, index) =>{
      if (index < 4){
          card_create_append(item, index)
          
      }
  })
  content_lenght = country['content'].length
  body.style.backgroundImage = 'url('+ country['content'][0]['bg_img']
  country_changer()
  detils_updater(0)
  country_name_updater(0)
}

displayer(0)



function changer(){
  crnt_card = tile_container.children[0]
  crnt_card.classList.add('fade-out-container')
  crnt_card.children[0].classList.add('fade-out-card')
  

  //SLIDES THE TILES TO THE LEFT AND INCREASE THE HEIGHT OF THE FIRST TILE
  slider(tile_container.children[0])
  slider(tile_container.children[1])
  height_increaser(tile_container.children[1].children[0])
  slider(tile_container.children[2])
  slider(tile_container.children[3])
  
  if (curr_number >= content_lenght - 1){
    curr_number = 0
    // console.log('if clause',curr_number, content_lenght)
  }else{
    curr_number += 1;
    // console.log('else clause',curr_number, content_lenght)
  }
  curr = data[country_number]["content"][curr_number]
  detils_updater(curr_number)


  if (limit >= content_lenght - 1){
    limit= 0
  }else{
    limit += 1
  }
  curr = data[country_number]["content"][limit]
  card_create_append(curr,3)
  remover()
  // timeout = setTimeout(remover, 250);  
}

//THIS FUNCTION CHANGES THE BODY BACKGROUND AND THE DISCRIPTION ABOUT THE CURR LOC
function detils_updater(index){
  // console.log(country_number, index)
  curr = data[country_number]["content"][index]

  body.style.backgroundImage = 'url('+curr['bg_img']+')'
  location_name_container.innerHTML = curr['title']
  location_description_container.innerHTML = curr[discription]
}
function remover(){
  tile_container.removeChild(tile_container.children[0])
}
function slider(element){
  crnt_left = parseInt(element.style.left.match(/\d+/)[0])
  element.style.left = crnt_left - card_space + 'px'
}
function height_increaser(element){
  element.classList.add('active-card')
}