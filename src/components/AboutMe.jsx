const AboutMe = () => {
  return (
  <div style={{marginLeft: '1rem'}}>
    <title>About Me Page</title>
    <h1>About Me</h1>
    <p>Hello, I am <span className="name">Luke Lampman</span>. I hope that this about me page will help <span className="investigators">potential <span data-investigator={0}>employers</span> or <span data-investigator={1}>classmates</span></span> understanding who they are about to work with or hire!</p>
    <p>
      Of the many activities that I enjoy, the most prominent are:
    </p>
    <ul className="activities">
      <li data-activity={0}>Listening to Music</li>
      <li data-activity={1}>Learning Interesting things</li>
      <li data-activity={2}>Playing Games</li>
      <li data-activity={3}>Reading</li>
    </ul>
    <p className="qualities">
      Some of the things I think I'm best at are </p><ul><li data-quality={0}>making myself understood</li>
      <li data-quality={1}>understanding where people come from</li>
      <li data-quality={2}>being an active community member</li>
    </ul> <span className="qualityDescription">I find it very easy to focus on any shared community interest. It's a lot easier to maintain focus on something that others are focused on as well and I like being helpful to people, so learning about things that <span className="communityMembers">classmates are</span> interested in is one of my most common goals!</span>
    <p />
    <p className="livingSituation">
      I live <span className="housemates">with my dog and family</span> in <span className="currentCity">Winnipeg</span> and have been at the same home since I can remember, although I was born in <span className="birthplace">Chandler, QC</span>.
    </p>
    <p className="family">
      We bought our dog <span className="dogsName">Caspar</span> at three months from a breeder, since my father is allergic to dogs and finding an easy-to-adopt hypoallergenic dog is difficult. He is a tibetan terrier shitsu and was the runt of his litter, although he has since become much bolder than his heritage would have led one to believe!
    </p>
    <p className="games friends">
      During most of my free time, I <span className="freeTime">play video games and or chat with my friends</span>. <span className="game" data-game="league" data-game-id={0}>League of Legends</span> and <span className="game" data-game="amongUs" data-game-id={1}>Among us</span> are the most popular titles that we play on a daily basis but we also play more niche games like <span className="game" data-game="terraria" data-game-id={2}>Terraria</span> and <span className="game" data-game="terraria" data-game-id={3}>Castle Crashers</span>!
    </p>
  </div>
  );
}
export default AboutMe;