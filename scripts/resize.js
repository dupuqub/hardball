
'use strict'

//......................................................................................................................
//
onresize = event =>
{
  resize()
  reroot()
  redraw( arts_athlete , 'fil_atl' )
  redraw( arts_bench , 'fil_bnc' )

  reload.athletes()
  reload.zones()
  reload.ball()

  update_lights()
}

//......................................................................................................................
//
var resize = _ =>
{
  if( window.innerHeight / aspect.y > window.innerWidth / aspect.x )
  {
    var
    height_foundation = window.innerWidth / aspect.x * aspect.y ,
    height_space      = ( window.innerHeight - height_foundation ) / 2 ,
    width_game        = height_foundation / 14 * 20

    root_raw.foundation_w = window.innerWidth
    root_raw.foundation_h = height_foundation
    root_raw.game_w       = width_game * game_scale
    root_raw.game_h       = height_foundation * game_scale

    root_text[ 0 ] = '--foundation-w:' + window.innerWidth + 'px;'
    root_text[ 1 ] = '--foundation-h:' + height_foundation + 'px;'
    root_text[ 2 ] = '--game-w:' + width_game * game_scale + 'px;'
    root_text[ 3 ] = '--game-h:' + height_foundation * game_scale + 'px;'
  }
  else
  {
    var
    width_foundation = window.innerHeight / aspect.y * aspect.x ,
    width_space      = ( window.innerWidth - width_foundation ) / 2 ,
    width_game       = window.innerHeight / 14 * 20

    root_raw.foundation_w = width_foundation
    root_raw.foundation_h = window.innerHeight
    root_raw.game_w       = width_game * game_scale
    root_raw.game_h       = window.innerHeight * game_scale

    root_text[ 0 ] = '--foundation-w:' + width_foundation + 'px;'
    root_text[ 1 ] = '--foundation-h:' + window.innerHeight + 'px;'
    root_text[ 2 ] = '--game-w:' + width_game * game_scale + 'px;'
    root_text[ 3 ] = '--game-h:' + window.innerHeight * game_scale + 'px;'
  }

  // Some helpful variables after the real resize
  //
  root_raw.game_h_real  = root_raw.game_h / 14 * 12
  root_raw.cell_size    = root_raw.game_w / 20
  root_raw.border_full  = root_raw.game_w / 400
  root_raw.athlete_size = root_raw.cell_size - root_raw.border_full * 2
}

