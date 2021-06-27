
const WebDevOverview = () => {
  return (
    <div style={{marginLeft:"1rem"}}>

      <h1>HTML and CSS Overview</h1>
      <h2>HTML and Usage</h2>
      <p>HTML, or Hyper Text Markup Language is a language for categorizing text. Through use of</p>
      <p>blocking, it allows the programmer to define different sections of text by what content they expect it to have.</p>
      <p>For example, using the following code block should section the text into two pieces. The first</p>
      <p>&nbsp;is a heading (meaning that it is more important than the rest), while the second block of text</p>
      <p>&nbsp;&nbsp;is inside of the main part of the page. The <span style={{color: '#28782a'}}>&lt;p&gt;</span> tag indicates the start of a paragraph.</p>
      <div>
        <table>
          <tbody>
            <tr>
              <td>&lt;h1&gt;Title Text&lt;/h1&gt;&lt;main&gt;&nbsp;&nbsp;&lt;p&gt;Paragraph Text&lt;/p&gt;&lt;/main&gt;</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>HTML Tags</h3>
      <p>As mentioned previously, tags are used in HTML to separate different pieces of information. The <span style={{color: '#28782a'}}>&lt;p&gt;</span> tag starts a paragraph and must be closed with <span style={{color: '#28782a'}}>&lt;\p&gt;</span>. Tags can be (and usually are!) nested.</p>
      <p>&nbsp;The span from an opening tag to a closing tag is a single HTML <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank" rel="noreferrer">element</a>.</p>
      <h3>HTML Attributes</h3>
      <p>Attributes in HTML are located inside of the tag, and give additional information.</p>
      <div>
        <table>
          <tbody>
            <tr>
              <td>&lt;img src=<span style={{color: '#a31515'}}>"https://placekitten.com/200/300"</span> alt=<span style={{color: '#a31515'}}>"Placeholder kitten"</span>/&gt;</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>In this example, the <span style={{color: '#28782a'}}>src</span> and <span style={{color: '#28782a'}}>alt</span> attributes are defining the source of the image and the alternate text (the hover text).</p>
      <h3>Inline Elements</h3>
      <p>Inline elements are elements which do not start a new line. They do not create a new line or push elements away except as far as the text inside does. They can be nested inside each other without any outward change in the appearance of the document. They are the sister element to Block Elements.</p>
      <h3>Block Elements</h3>
      <p>Block elements take up space in a square, hence the name. They can be nested inside of each other in the same way that inline elements can. The result, however, is that there will be 'blocks' inside of 'blocks', as opposed to inline elements simply adding their contents where it is appropriate.</p>
      <h3>HTML Overview</h3>
      <p>All in all, HTML is simply a way of defining what text is. It <em>can</em> supply formatting information and could potentially change appearance but it's main purpose is to define what type of content each line (or word, or fragment) is. This is in preparation for possible styling and to allow screen readers and other accessibility features easy access to what information is important and what can be filtered out without loss.</p>
      <h2>CSS and Usage</h2>
      <h3>CSS Rules</h3>
      <p>A CSS Rule is a line of code that defines how something should be displayed. For example, <span style={{color: '#28782a'}}>h1 {'{'}text-transform: uppercase{'}'}</span>. This would make all the H1 elements in the HTML uppercase. Each rule affects the largest ruleset it possibly can, with more specific rules taking precedence over less specific rules. In this way the Cascading Style Sheets <em>cascade</em>.</p>
      <h3>CSS Selectors</h3>
      <p>As seen above, the selectors in CSS select a part of the HTML that the rules will apply to. This is the first piece of the example, the <span style={{color: '#28782a'}}>h1</span> before any of the rules.</p>
      <h3>CSS Value</h3>
      <p>The CSS value is the part of the rule which defines the change. If we go by the previous example, the word <span style={{color: '#28782a'}}>uppercase</span> is the value of the text-transform property.</p>
      <h3>CSS Overview</h3>
      <p>Cascading Style Sheets are the way to add visual effects to those different types of text defined in the HTML. This adds a visual layer to the HTML's information layer. These provide a much more apparent change to the site than HTML by virtue of being visible.</p>
    </div>
  );
}

export default WebDevOverview;