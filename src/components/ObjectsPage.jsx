const ObjectsPage = () => {
  return (<div>
    <h1>Vending Machine Object in Javascript</h1>
    <p>For this exercise, students were required to make a vending machine in javascript that would be able to add snacks and buy snacks. This is a relatively simple practice assignment to teach the understanding of Object oriented programming.</p>
    <h2>Objects</h2>
    <p>Objects are one of the most fundamental concepts students are taught when learning to program. An object is simply a way to store data. An object can have any number of any types of data within it, and each piece of data is linked to a name for that data, called a key. This can even include other objects! The vending machine that we are about to make will use a <em>“snack”</em> object which will contain a <em>price</em>, a <em>name</em>, and a <em>quantity</em>, each of which must be manipulated differently depending on the circumstance.</p>
    <p>Now, the vending machine itself is a fancy object called a class. This isn’t important other than it means we gain the benefit of a few predefined properties that aren’t necessary. We also gain the ability to create copies of it based on a template (for example, if we want more vending machines!).&nbsp;</p>
    <p>First, we can decide what we need the vending machine itself to track. This is relatively simple, all it needs is the list of items it has, as well as a total money value for dispensing change.&nbsp;</p>
    <p>To create a vending machine class, we can use javascript like this:&nbsp;</p>
    <p><span style={{color: '#28782a'}}>class VendingMachine {'{'}</span></p>
    <p><span style={{color: '#28782a'}}>&nbsp;&nbsp;&nbsp;&nbsp;constructor(items=[], money=0) {'{'}</span></p>
    <p><span style={{color: '#28782a'}}>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style={{color: '#28782a'}}>&nbsp;&nbsp;&nbsp; </span><span style={{color: '#28782a'}}>this.items = items;</span></p>
    <p><span style={{color: '#28782a'}}>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style={{color: '#28782a'}}>&nbsp;&nbsp;&nbsp; </span><span style={{color: '#28782a'}}>this.money = money;</span></p>
    <p><span style={{color: '#28782a'}}>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</span></p>
    <p><span style={{color: '#28782a'}}>{'}'}</span></p>
    <p>The constructor is a function that runs as soon as we create a vending machine object. What it means in this example, is that it takes in an array of items and a starting money value, and it stores those. The <span style={{color: '#28782a'}}>this</span> keyword means that the data it refers to is stored inside that vending machine object.&nbsp;</p>
    <p>The next thing we have to add is the <span style={{color: '#28782a'}}>vend()</span> function. What this will do is take in an item name, and a value (how much money the person is giving the machine), like so: <span style={{color: '#28782a'}}>vend(“Gummy Bears”, 30)</span>. This would mean that we are giving the machine 30 dollars to buy a single gummy bear package. In any event, the logic for the <span style={{color: '#28782a'}}>vend()</span> function will go something like this:</p>
    <p>With the vend function created, all we need to do is give the vending machine the ability to add items! The logic for the <span style={{color: '#28782a'}}>addItem()</span> function will be much simpler.</p>
    <p>We just have to make sure that we do not accidentally add an item that already exists in the machine. Of course, this vending machine is overly simplified in that it has free control over all of the money inside it, can’t add additional stock of the same item, and doesn’t have to deal with user input of key codes instead of names, but this is just a learning exercise and it can be improved upon later! Happy coding!</p>
  </div>
  );
}
export default ObjectsPage;