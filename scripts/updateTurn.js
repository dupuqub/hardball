
`use strict`

//......................................................................................................................

G.updateTurn = () =>
{
  //....................................................................................................................

  G.S.turn ++

  G.updateLights ()

  //....................................................................................................................

  if (G.S.holder.future !== null) G.updateHolder ()

  //....................................................................................................................
  // punt

  if (G.S.holding.turns === 5 && G.takingShot () !== G.S.holding.team)
  {
    G.S.punting = true
    G.S.holder.now = null

    G.updateSelected (`ball`)
  }

  //....................................................................................................................
  // update bulbs

  if (G.S.holding.team === G.playsNow () && G.S.holding.turns < 5)
  {
    G.S.holding.turns ++

    G.updateBulbs ()
  }

  //....................................................................................................................

  if (G.takingShot () !== null && G.takingShot () !== G.playsNow () && G.S.holder.now === null)
  {
    alert ((G.playsNow () === `blue` ? `BLUE` : `GREEN`) + ` WINS !`)
  }
}
