const SSL = () => {
  return (<div style={{marginLeft: '1rem'}}>
    <p style={{textAlign: 'center'}}><strong>Encryption and SSL</strong></p>
    <p style={{textAlign: 'center'}}>Luke Lampman</p>
    <p style={{textAlign: 'center'}}>Manitoba Institute of Trades and Technology</p>
    <p style={{textAlign: 'center'}}>Technical Writing Skills: SD-160-W21SD</p>
    <p style={{textAlign: 'center'}}>Jessica Watson</p>
    <p style={{textAlign: 'center'}}>May 16, 2021</p>
    <p style={{textAlign: 'center'}}><strong>Encryption and SSL</strong></p>
    <p>&nbsp;&nbsp;&nbsp; Secure Socket Layer (SSL) is the name for a policy that maintains security for internet browsers. SSL is also often used to refer to TSL, or Transport Layer Security, which is the successor to SSL and thus the policy that our browsers use for encryption.&nbsp;</p>
    <p>The goal of these policies is to create a way for two computers to recognize that they are communicating with who they intend to communicate with, instead of with any nefarious individual simply pretending to be their partner. The way this is achieved is called “asymmetric encryption”; each computer uses a public and private ‘key’, each of which allows the computer to decrypt anything that was encrypted using the other key. For example, let us think of two computers, one referred to as the client and one as the server. Without getting into how these keys are created, let us also assume each of them has two keys: a top secret key that can unlock anything unlocked with the other, public key, and the public key that can unlock anything that is locked up with the top secret key. A way that the two can safely exchange private information is first by:</p>
    <ol>
      <li>Giving their public keys to each other, then&nbsp;</li>
      <li>Locking up any information with the other person’s public key and their private key</li>
      <li>Sending the information across to each other</li>
    </ol>
    <p>&nbsp;&nbsp;&nbsp; Since the information is locked twice, the receiver has to unlock it twice in the reverse order that it was locked. For example, if it was locked using the client private and the server public key, it could be unlocked using the server private key and then the client public key. Provided that the keys work as described above and that the private keys are never revealed to anyone who is not supposed to have them, this allows for communication where both parties know for certain that the message they have is unopened *and* from who they were expecting it to be from. You can tell that a website that you are visiting is secured in this way by looking at the bar in your URL. If there is a lock icon or it has “https” at the beginning, the website is secure! There is more going on than has been discussed here, but the most important part is to never send sensitive data (ex. Credit cards) over a site that does not have the “https” or lock icon in their url. This is a screenshot of how (my) firefox displays it as I am writing this document!</p> <img src='https://media.discordapp.net/attachments/303544651200331776/858915012215308338/unknown.png' alt='lock icon in browser'/>
    <p>As you can see, SSL is a very important part of internet history, and the more</p>
    <p>up-to-date TSL is a requirement for safe internet browsing in the modern day. Make sure to stay safe!</p>
    <p style={{textAlign: 'center'}}><strong>Reference(s)</strong></p>
    <p><em>SSL certificate &amp; digital certificate authority - SSL.com</em>. (2014, June 11). https://www.ssl.com/</p>
  </div>
  )
}
export default SSL;