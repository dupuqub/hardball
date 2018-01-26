
'use strict'

//......................................................................................................................
//
var reload =
{
  //....................................................................................................................
  //
  athletes : _ =>
  {
    athletes.forEach( ( athlete , $ ) =>
    {
      var
      cell_name   = state.athletes[ $ ] ,
      cell_letter = cell_name.slice( 0 , 1 ) ,
      cell_number = Number( cell_name.slice( 1 , 3 ) ) ,
      new_x       = a_to_t.indexOf( cell_letter ) * root_raw.cell_size + root_raw.border_full ,
      new_y       = cell_number * root_raw.cell_size + root_raw.border_full

      athlete.style.marginLeft = new_x + "px"
      athlete.style.marginTop = new_y + "px"
      athlete.classList.remove( 'tra_atl' )
    } )

    setTimeout( _ => athletes.forEach( athlete => athlete.classList.add( 'tra_atl' ) ) , 0 )
  } ,
  //....................................................................................................................
  //
  zones : _ =>
  {
    zones.forEach( ( zone , $ ) =>
    {
      var
      cell_name = state.zones[ $ ] ,
      new_x     = -root_raw.game_w ,
      new_y     = -root_raw.game_w

      if( cell_name !== null )
      {
        new_x = a_to_t.indexOf( cell_name.slice( 0 , 1 ) ) * root_raw.cell_size + root_raw.border_full / 2
        new_y = Number( cell_name.slice( 1 , 3 ) ) * root_raw.cell_size + root_raw.border_full / 2
      }

      zone.style.marginLeft = new_x + "px"
      zone.style.marginTop = new_y + "px"
    } )
  } ,
  //....................................................................................................................
  //
  ball : _ =>
  {
    var
    cell_ball = state.ball ,
    cell_aim  = state.aim ,
    ball_x    = root_raw.game_w / 2 - root_raw.athlete_size / 2 ,
    ball_y    = root_raw.game_h_real / 2 - root_raw.athlete_size / 2 ,
    aim_x     = ball_x ,
    aim_y     = ball_y

    if( cell_ball !== null )
    {
      ball_x = a_to_t.indexOf( cell_ball.slice( 0 , 1 ) ) * root_raw.cell_size + root_raw.border_full
      ball_y = Number( cell_ball.slice( 1 , 3 ) ) * root_raw.cell_size + root_raw.border_full
      aim_x = a_to_t.indexOf( cell_aim.slice( 0 , 1 ) ) * root_raw.cell_size + root_raw.border_full
      aim_y = Number( cell_aim.slice( 1 , 3 ) ) * root_raw.cell_size + root_raw.border_full
    }

    ball.style.marginLeft = ball_x + "px"
    ball.style.marginTop = ball_y + "px"
    aim.style.marginLeft = aim_x + "px"
    aim.style.marginTop = aim_y + "px"
  } ,
}

