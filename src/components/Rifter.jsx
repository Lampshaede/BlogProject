const Rifter = () => {
  return (<div style={{marginLeft: '1rem'}}>
    <p>Rifter Strategy Guide&nbsp;</p>
    <p>Ground tech in Rifter&nbsp;</p>
    <p>Because of the way the physics works in Rifter, when going for a top score it is inevitable (depending on the map) that interacting with the ground in some way is required. This guide will illustrate the most efficient ways to minimize that time.&nbsp;</p>
    <p>Cancel Startup Frames&nbsp;</p>
    <p>Cancelling the startup frames from your falling animation can be done in one of two ways: </p> 
    <p>1. <strong>Frame Perfect Jump&nbsp;</strong></p>
    <p>As you hit the ground in the initial animation, jump. If executed correctly, instead of the large bounce that is normally required after you are launched at the planet, you will merely perform a small hop.&nbsp;</p>
    <p>2. <strong>Impact Rerouting&nbsp;</strong></p>
    <p>More reliable than jumping is to purchase the second-to-last upgrade in the green (speed) tree. If you are looking for highscored, having every upgrade in every tree is nearly required anyway. With impact rerouting, holding down and a direction of your choice will redirect a portion of your momentum into the direction of your choice. </p> <img src='https://cdn.discordapp.com/attachments/303544651200331776/858926802491670539/impactrerouting.png' alt='Impact Rerouting' />
    <table>
      <tr>
        <strong><th>Technique</th>
        <th>Reliability</th>
        <th>Speed</th></strong>
      </tr>
      <tr>
        <td>Impact Rerouting</td>
        <td>Very Reliable</td>
        <td>Medium-High</td>
      </tr>
      <tr>
        <td>Perfect Jump</td>
        <td>Reliable with Practice</td>
        <td>High</td>
      </tr>
      <tr>
        <td>No Technique</td>
        <td>Difficult to fail</td>
        <td>Slow</td>
      </tr>
    </table>
    <p>The technique can vary from person to person but the end result is very similar: a much faster start than taking no action.&nbsp;</p>
    <p>Minimize Upwards Momentum&nbsp;</p>
    <p>If you are familiar with the concept of bunny hopping in other games, there are similar (if less reliable) techniques to cover ground quickly in Rifter. The best advice for when ropes are not available is as follows:&nbsp;</p>
    <p>1. <strong>Do not Long Jump&nbsp;</strong></p>
    <p>Long Jumping, while it may be faster in other games, actually lowers your speed. The taller the arc of your jump, the lower your speed will be, regardless of whether gained through a jump or through a hook. For the maximum speed achieved over a straight distance, the fastest technique is not dissimilar to the technique first discovered in the half life two engine called bunny hopping.&nbsp;</p>
    <p>2. <strong>Bunny Hop</strong></p>
    <p>While not identical to bunny hopping in the half life two engine, lightly tapping spacebar as you move forward causes you to perform tiny hops that allow you to maintain velocity that would otherwise not be allowed on the ground while still having as little arc as possible. The name bunny hop is a misnomer though, as it is not completely frame perfect (although if you miss the ideal window you will have to wait a few frames).&nbsp;</p>
    <p>3. <strong>Run, Don't Fall&nbsp;</strong></p>
    <p>While counterintuitive, running on downwards sloped surfaces is much faster and preserves forward momentum more efficiently. Even with the increased downward speed from the "Drop" upgrade, this does not increase (or maintain!) your horizontal speed nearly as much as holding down and fowards on the slope. This can be slightly mitigated by using Drop in combination with Impact Rerouting. </p><img src='https://cdn.discordapp.com/attachments/303544651200331776/858926797022560306/hill.png' alt='sloped hill' />

  </div>
  )
}
export default Rifter;