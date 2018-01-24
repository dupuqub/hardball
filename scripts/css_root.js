
'use strict'

//......................................................................................................................
// Color control doesn't seem to work through here
// Inner text for reference (updates on resize)
//
var root_text =
[
  '--foundation-w : 0 ;' ,
  '--foundation-h : 0 ;' ,
  '--game-h       : 0 ;' ,
  '--game-w       : 0 ;' ,
]

//......................................................................................................................
//
var root_raw =
{
  foundation_w : 0 ,
  foundation_h : 0 ,
  game_w       : 0 ,
  game_h       : 0 ,
  game_h_real  : 0 ,
  cell_size    : 0 ,
  border_full  : 0 ,
  athlete_size : 0 ,
}

//......................................................................................................................
//
var reroot = _ =>
{
  var rerooted = root_text.reduce( ( a , b ) => a + b )

  Array.from( document.styleSheets ).forEach( ( sheet , $ ) =>
  {
    if( sheet.href !== null && sheet.href.indexOf( 'root.css' ) !== - 1 )
    {
      document.styleSheets[ $ ].cssRules[ 0 ].style.cssText = rerooted
    }
  } )
}

