const PasswordManagement = () => {
  return (<div style={{marginLeft: '1rem'}}>
    <p style={{textAlign: 'center'}}><strong>Password Management</strong></p>
    <p style={{textAlign: 'center'}}>Luke Lampman</p>
    <p style={{textAlign: 'center'}}>Manitoba Institute of Trades and Technology</p>
    <p style={{textAlign: 'center'}}>Technical Writing Skills: SD-160-W21SD</p>
    <p style={{textAlign: 'center'}}>Jessica Watson</p>
    <p style={{textAlign: 'center'}}>May 24, 2021</p>
    <p style={{textAlign: 'center'}}><strong>Password Management</strong></p>
    <p>The topic of password management is one that has been discussed at great length by a great many sources.&nbsp;</p>
    <p>Most hacked accounts are cracked by trying the top hundred or thousand passwords on a huge list of accounts. In addition, if there’s a data breach, people or bots going through the list will try any password associated with your email address on any other account associated with your email address. In an effort to combat this, the resounding advice is as such:</p>
    <ul>
      <li>Use different passwords for different services</li>
      <li>Do not use common passwords</li>
      <li>Turn on Two-Factor Authentication</li>
    </ul>
    <p>(Bukarica, 2017)</p>
    <p>While this is helpful to know, despite being the basics of “security hygiene”, this advice is not followed by a surprising majority of people.&nbsp;</p>
    <p>I myself used to have a very similar, relatively short password with only minor variations between websites. That changed when one day that password was compromised. I got several emails about accounts, and changed my password for each one that I got an email about. Eventually, I even got one from my Dominos account and thought to myself “What could they possibly do with this? There’s no card linked”. Well, a couple hours of delaying changing my password later, I got a phone call asking if it was me who had redeemed the free pizza. I had totally forgotten that I had actually accumulated enough points for that to happen. I’m sure I could have gotten customer service to revert my points total but honestly, I wasn’t too beat up about it. I just changed my password and went on my way. This is what I would suspect is the more common experience for account security.</p>
    <p>A second, rarer attack is a focused attack on an individual. This could involve a brute force dictionary based attack to crack their passwords or “sim-swapping”, a practice involving pretending to be the owner of a sim card in order to get two- factor authentication and “forgot your password” their account(s) over to you (Goldman, 2018). This attack requires focused effort on the individual from the hacker as opposed to simply a bot exploiting previously known security vulnerabilities. This makes performing that attack en-masse unviable. However, giving people an inclination that there is something worth taking in your accounts is an excellent way to receive that type of specialized attention. (Or, as mentioned in the podcast episode “The Snapchat Thief” (Goldman, 2018), having a particularly “og” username).&nbsp;</p>
    <p>The required level of security to defend against an individualized attack is more involved. Helpfully found in the description of “The Snapchat Thief”, suggestions to improve security include some or all of:&nbsp;</p>
    <ul>
      <li><a href="https://www.cnet.com/how-to/how-to-port-your-landline-number-to-google-voice/" target="_blank" rel="noreferrer">Porting your cell to google voice</a></li>
      <li><a href="https://www.washingtonpost.com/technology/2018/07/12/your-password-has-likely-been-stolen-heres-what-do-about-it/?utm_term=.f78b27fbd519" target="_blank" rel="noreferrer">A Password Manager</a></li>
      <li><a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_US" target="_blank" rel="noreferrer">Google Authenticator</a></li>
      <li><a href="https://www.yubico.com/" target="_blank" rel="noreferrer">A Yubikey</a></li>
      <li><a href="https://inteltechniques.com/data/workbook.pdf" target="_blank" rel="noreferrer">Workbook to freeze your credit and remove yourself from public records websites</a></li>
      <li><a href="https://mysudo.com/" target="_blank" rel="noreferrer">Sudo</a></li>
    </ul>
    <p>In Conclusion...?</p>
    <p style={{textAlign: 'center'}}><strong>Bibliography</strong></p>
    <p>Bukarica, L. (2017). <em>Two-factor authentication (Google Authenticator)</em>. Two-factor authentication (Google Authenticator) | A Technology Agency | Deploy Inc. https://www.deployinc.com/blog/two-factor-authentication-google-authenticator/</p>
    <p>Goldman, A. (2018, November 8). <em>Reply All</em> (Issue 130) [Podcast]. Gimlet. https://gimletmedia.com/shows/reply-all/v4he6k</p>
  </div>
  );
}
export default PasswordManagement;