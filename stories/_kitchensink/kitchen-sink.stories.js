import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

import './asu-bootstrap3.html';

storiesOf('Kitchen Sink', module)
  .addParameters({
    readme: {
      sidebar: [
        `# Kitchen Sink
The 'kitchen sink' page is an all-in-one implementation of all UI kit features, rendered in-context like a regular production web page. This makes for an excellent platform to perform visual regression tests on the UI kit as well as perform any integration tests on the ui features.`,
      ],
    },
  })
  .add(
    'bootstrap4',
    () => `<!-- HTML Only File for Kitchen Sink v4 Storybook Story. For reference only. -->
    <a name="top"></a>
    <nav class="navbar sticky-top navbar-dark bg-dark navbar-expand-lg mb-3">
      <div class="container">
        <a class="navbar-brand" href="#">Bootstrap 4 Kitchen Sink</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#"><strong>PROTIP:</strong> CTRL+F is your friend</a>
            </li>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="row">
        <div class="col">

          <h1>Headings</h1>
          <hr>
          <h1>h1. Bootstrap heading</h1>
          <h2>h2. Bootstrap heading</h2>
          <h3>h3. Bootstrap heading</h3>
          <h4>h4. Bootstrap heading</h4>
          <h5>h5. Bootstrap heading</h5>
          <h6>h6. Bootstrap heading</h6>

          <hr />

          <h1>Display headings</h1>
          <hr>
          <h1 class="display-1">Display 1</h1>
          <h1 class="display-2">Display 2</h1>
          <h1 class="display-3">Display 3</h1>
          <h1 class="display-4">Display 4</h1>

          <hr />

          <h1>Lead</h1>
          <hr>
          <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim alias beatae sed dignissimos
            expedita inventore totam eius ut pariatur, quidem maxime, aut asperiores repellat. Labore laborum eius quibusdam
            placeat ratione.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim alias beatae sed dignissimos expedita inventore
            totam eius ut pariatur, quidem maxime, aut asperiores repellat. Labore laborum eius quibusdam placeat ratione.
          </p>


          <hr />

          <h1>Inline text elements</h1>
          <hr>
          <p>You can use the mark tag to <mark>highlight</mark> text.</p>
          <p><del>This line of text is meant to be treated as deleted text.</del></p>
          <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
          <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
          <p><u>This line of text will render as underlined</u></p>
          <p><small>This line of text is meant to be treated as fine print.</small></p>
          <p><strong>This line rendered as bold text.</strong></p>
          <p><em>This line rendered as italicized text.</em></p>


          <hr />

          <h1>Abbreviations</h1>
          <hr>
          <p><abbr title="attribute">attr</abbr></p>
          <p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>


          <hr />

          <h1>Blockquotes</h1>
          <hr>
          <blockquote class="blockquote">
            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          </blockquote>

          <blockquote class="blockquote">
            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
          </blockquote>

          <blockquote class="blockquote text-center">
            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
          </blockquote>

          <blockquote class="blockquote text-right">
            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
          </blockquote>


          <hr />

          <h1>Lists</h1>
          <hr>
          <ul class="list-unstyled">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>Nulla volutpat aliquam velit
              <ul>
                <li>Phasellus iaculis neque</li>
                <li>Purus sodales ultricies</li>
                <li>Vestibulum laoreet porttitor sem</li>
                <li>Ac tristique libero volutpat at</li>
              </ul>
            </li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
          </ul>

          <ul class="list-inline">
            <li class="list-inline-item">Lorem ipsum</li>
            <li class="list-inline-item">Phasellus iaculis</li>
            <li class="list-inline-item">Nulla volutpat</li>
          </ul>


          <hr />

          <h1>Inline code</h1>
          <hr>For example, <code>&lt;section&gt;</code> should be wrapped as inline.


          <hr />

          <h1>Code blocks</h1>
          <hr>
          <pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
    &lt;p&gt;And another line of sample text here...&lt;/p&gt;
    </code></pre>


          <hr />

          <h1>Variables</h1>
          <hr><var>y</var> = <var>m</var><var>x</var> + <var>b</var>


          <hr />

          <h1>User input</h1>
          <hr>To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
          To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>


          <hr />

          <h1>Sample output</h1>
          <hr><samp>This text is meant to be treated as sample output from a computer program.</samp>


          <hr />

          <h1>Responsive images</h1>
          <hr><img src="http://via.placeholder.com/900x200" class="img-fluid" alt="Responsive image">


          <hr />

          <h1>Image thumbnails</h1>
          <hr><img src="http://via.placeholder.com/200x200" alt="..." class="img-thumbnail">


          <hr />

          <h1>Aligning images</h1>
          <hr>
          <div class="row">
            <div class="col"><img src="http://via.placeholder.com/200x200" class="rounded float-left" alt="...">
              <img src="http://via.placeholder.com/200x200" class="rounded float-right" alt="..."></div>
          </div>

          <hr />

          <h1>Tables</h1>
          <hr>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>


          <hr />

          <h1>Table head options</h1>
          <hr>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>

          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>


          <hr />

          <h1>Striped rows</h1>
          <hr>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>


          <hr />

          <h1>Bordered table</h1>
          <hr>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>


          <hr />

          <h1>Borderless table</h1>
          <hr>
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>


          <hr />

          <h1>Hoverable rows</h1>
          <hr>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>


          <hr />

          <h1>Small table</h1>
          <hr>
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>


          <hr />

          <h1>Contextual classes</h1>
          <hr>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Class</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
              </tr>
            </thead>
            <tbody>
              <tr class="table-active">
                <th scope="row">Active</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr>
                <th scope="row">Default</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-primary">
                <th scope="row">Primary</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-secondary">
                <th scope="row">Secondary</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-success">
                <th scope="row">Success</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-danger">
                <th scope="row">Danger</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-warning">
                <th scope="row">Warning</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-info">
                <th scope="row">Info</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-light">
                <th scope="row">Light</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
              <tr class="table-dark">
                <th scope="row">Dark</th>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
            </tbody>
          </table>


          <hr />

          <h1>Alerts</h1>
          <hr>
          <div class="alert alert-primary" role="alert">
            A simple primary alert—check it out!
          </div>
          <div class="alert alert-secondary" role="alert">
            A simple secondary alert—check it out!
          </div>
          <div class="alert alert-success" role="alert">
            A simple success alert—check it out!
          </div>
          <div class="alert alert-danger" role="alert">
            A simple danger alert—check it out!
          </div>
          <div class="alert alert-warning" role="alert">
            A simple warning alert—check it out!
          </div>
          <div class="alert alert-info" role="alert">
            A simple info alert—check it out!
          </div>
          <div class="alert alert-light" role="alert">
            A simple light alert—check it out!
          </div>
          <div class="alert alert-dark" role="alert">
            A simple dark alert—check it out!
          </div>


          <hr />

          <h1>Alerts > Link color</h1>
          <hr>
          <div class="alert alert-primary" role="alert">
            A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
          </div>
          <div class="alert alert-secondary" role="alert">
            A simple secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
          </div>
          <div class="alert alert-success" role="alert">
            A simple success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
          </div>
          <div class="alert alert-danger" role="alert">
            A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
          </div>
          <div class="alert alert-warning" role="alert">
            A simple warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
          </div>
          <div class="alert alert-info" role="alert">
            A simple info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
          </div>
          <div class="alert alert-light" role="alert">
            A simple light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
          </div>
          <div class="alert alert-dark" role="alert">
            A simple dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
          </div>


          <hr />

          <h1>Badges</h1>
          <hr><span class="badge badge-primary">Primary</span>
          <span class="badge badge-secondary">Secondary</span>
          <span class="badge badge-success">Success</span>
          <span class="badge badge-danger">Danger</span>
          <span class="badge badge-warning">Warning</span>
          <span class="badge badge-info">Info</span>
          <span class="badge badge-light">Light</span>
          <span class="badge badge-dark">Dark</span>


          <hr />

          <h1>Badges > Pills</h1>
          <hr><span class="badge badge-pill badge-primary">Primary</span>
          <span class="badge badge-pill badge-secondary">Secondary</span>
          <span class="badge badge-pill badge-success">Success</span>
          <span class="badge badge-pill badge-danger">Danger</span>
          <span class="badge badge-pill badge-warning">Warning</span>
          <span class="badge badge-pill badge-info">Info</span>
          <span class="badge badge-pill badge-light">Light</span>
          <span class="badge badge-pill badge-dark">Dark</span>


          <hr />

          <h1>Badges > Links</h1>
          <hr><a href="#" class="badge badge-primary">Primary</a>
          <a href="#" class="badge badge-secondary">Secondary</a>
          <a href="#" class="badge badge-success">Success</a>
          <a href="#" class="badge badge-danger">Danger</a>
          <a href="#" class="badge badge-warning">Warning</a>
          <a href="#" class="badge badge-info">Info</a>
          <a href="#" class="badge badge-light">Light</a>
          <a href="#" class="badge badge-dark">Dark</a>


          <hr />

          <h1>Badges > In Elements</h1>
          <hr>

          <hr />

          <h1>Example heading <span class="badge badge-secondary">New</span></h1>
          <h2>Example heading <span class="badge badge-secondary">New</span></h2>
          <h3>Example heading <span class="badge badge-secondary">New</span></h3>
          <h4>Example heading <span class="badge badge-secondary">New</span></h4>
          <h5>Example heading <span class="badge badge-secondary">New</span></h5>
          <h6>Example heading <span class="badge badge-secondary">New</span></h6>


          <hr />

          <h1>Badges > In Buttons</h1>
          <hr><button type="button" class="btn btn-primary">
            Notifications <span class="badge badge-light">4</span>
          </button>


          <hr />

          <h1>Breadcrumbs</h1>
          <hr>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">Home</li>
            </ol>
          </nav>

          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Library</li>
            </ol>
          </nav>

          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item"><a href="#">Library</a></li>
              <li class="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
          </nav>


          <hr />

          <h1>Buttons</h1>
          <hr><button type="button" class="btn btn-primary">Primary</button>
          <button type="button" class="btn btn-secondary">Secondary</button>
          <button type="button" class="btn btn-success">Success</button>
          <button type="button" class="btn btn-danger">Danger</button>
          <button type="button" class="btn btn-warning">Warning</button>
          <button type="button" class="btn btn-info">Info</button>
          <button type="button" class="btn btn-light">Light</button>
          <button type="button" class="btn btn-dark">Dark</button>

          <button type="button" class="btn btn-link">Link</button>


          <hr />

          <h1>Buttons > Outline</h1>
          <hr><button type="button" class="btn btn-outline-primary">Primary</button>
          <button type="button" class="btn btn-outline-secondary">Secondary</button>
          <button type="button" class="btn btn-outline-success">Success</button>
          <button type="button" class="btn btn-outline-danger">Danger</button>
          <button type="button" class="btn btn-outline-warning">Warning</button>
          <button type="button" class="btn btn-outline-info">Info</button>
          <button type="button" class="btn btn-outline-light">Light</button>
          <button type="button" class="btn btn-outline-dark">Dark</button>


          <hr />

          <h1>Buttons > Sizes</h1>
          <hr><button type="button" class="btn btn-primary btn-sm">Small button</button>
          <button type="button" class="btn btn-secondary btn-sm">Small button</button>

          <br><br>

          <button type="button" class="btn btn-primary">Normal button</button>
          <button type="button" class="btn btn-secondary">Normal button</button>

          <br><br>

          <button type="button" class="btn btn-primary btn-lg">Large button</button>
          <button type="button" class="btn btn-secondary btn-lg">Large button</button>


          <hr />

          <h1>Button groups</h1>
          <hr>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary">Left</button>
            <button type="button" class="btn btn-secondary">Middle</button>
            <button type="button" class="btn btn-secondary">Right</button>
          </div>


          <hr />

          <h1>Button groups > Vertical</h1>
          <hr>
          <div class="btn-group-vertical" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary">First</button>
            <button type="button" class="btn btn-secondary">Second</button>
            <button type="button" class="btn btn-secondary">Third</button>
          </div>


          <hr />

          <h1>Button groups > Button Toolbar</h1>
          <hr>
          <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group mr-2" role="group" aria-label="First group">
              <button type="button" class="btn btn-secondary">1</button>
              <button type="button" class="btn btn-secondary">2</button>
              <button type="button" class="btn btn-secondary">3</button>
              <button type="button" class="btn btn-secondary">4</button>
            </div>
            <div class="btn-group mr-2" role="group" aria-label="Second group">
              <button type="button" class="btn btn-secondary">5</button>
              <button type="button" class="btn btn-secondary">6</button>
              <button type="button" class="btn btn-secondary">7</button>
            </div>
            <div class="btn-group" role="group" aria-label="Third group">
              <button type="button" class="btn btn-secondary">8</button>
            </div>
          </div>


          <hr />

          <h1>Button groups > Sizing</h1>
          <hr>
          <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary">Left</button>
            <button type="button" class="btn btn-secondary">Middle</button>
            <button type="button" class="btn btn-secondary">Right</button>
          </div>

          <br><br>

          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary">Left</button>
            <button type="button" class="btn btn-secondary">Middle</button>
            <button type="button" class="btn btn-secondary">Right</button>
          </div>

          <br><br>

          <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary">Left</button>
            <button type="button" class="btn btn-secondary">Middle</button>
            <button type="button" class="btn btn-secondary">Right</button>
          </div>


          <hr />

          <h1>Cards</h1>
          <hr>
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="http://via.placeholder.com/286x180" alt="Card image cap">

            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>


          <hr />

          <h1>Cards (No Image)</h1>
          <hr>
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>


          <hr />

          <h1>Cards > Card styles</h1>
          <hr>
          <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
          </div>
          <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Secondary card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
          </div>
          <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Success card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
          </div>
          <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Danger card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
          </div>
          <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Warning card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
          </div>
          <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Info card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
          </div>
          <div class="card bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Light card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
          </div>
          <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
            <div class="card-header">Header</div>
            <div class="card-body">
              <h5 class="card-title">Dark card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
          </div>


          <hr />

          <h1>Cards > Card groups</h1>
          <hr>
          <div class="card-group">
            <div class="card">
              <img class="card-img-top" src="http://via.placeholder.com/400x200" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="http://via.placeholder.com/400x200" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="http://via.placeholder.com/400x200" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                  content. This card has even longer content than the first to show that equal height action.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>


          <hr />

          <h1>Cards > Card decks</h1>
          <hr>
          <div class="card-deck">
            <div class="card">
              <img class="card-img-top" src="http://via.placeholder.com/400x200" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="http://via.placeholder.com/400x200" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="http://via.placeholder.com/400x200" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                  content. This card has even longer content than the first to show that equal height action.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>


          <hr />

          <h1>Carousel</h1>
          <hr>
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="http://via.placeholder.com/800x200/550000/fff" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="http://via.placeholder.com/800x200/005500/fff" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="http://via.placeholder.com/800x200/000055/fff" alt="Third slide">
              </div>
            </div>
          </div>


          <hr />

          <h1>Carousel > With Controls</h1>
          <hr>
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="http://via.placeholder.com/800x200/550000/fff" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="http://via.placeholder.com/800x200/005500/fff" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="http://via.placeholder.com/800x200/000055/fff" alt="Third slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>


          <hr />

          <h1>Collapse</h1>
          <hr>
          <p>
            <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
              aria-controls="collapseExample">
              Link with href
            </a>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample"
              aria-expanded="false" aria-controls="collapseExample">
              Button with data-target
            </button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
              keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </div>


          <hr />

          <h1>Collapse > Multiple targets</h1>
          <hr>
          <p>
            <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button"
              aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2"
              aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse"
              aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both
              elements</button>
          </p>
          <div class="row">
            <div class="col">
              <div class="collapse multi-collapse" id="multiCollapseExample1">
                <div class="card card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
                  keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
              </div>
            </div>
            <div class="col">
              <div class="collapse multi-collapse" id="multiCollapseExample2">
                <div class="card card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
                  keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
              </div>
            </div>
          </div>


          <hr />

          <h1>Collapse > Accordion</h1>
          <hr>
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    Collapsible Group Item #1
                  </button>
                </h5>
              </div>

              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                  moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                  Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                  shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                  proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                  aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="false" aria-controls="collapseTwo">
                    Collapsible Group Item #2
                  </button>
                </h5>
              </div>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                  moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                  Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                  shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                  proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                  aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree"
                    aria-expanded="false" aria-controls="collapseThree">
                    Collapsible Group Item #3
                  </button>
                </h5>
              </div>
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                  moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                  Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                  shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                  proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                  aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
          </div>


          <hr />

          <h1>Dropdowns</h1>
          <hr>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Dropdown button
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>

          <br>

          <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Dropdown link
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>

          <br>

          <div class="btn-group">
            <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              Action
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </div>


          <hr />

          <h1>Forms</h1>
          <hr>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Enter email">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>


          <hr />

          <h1>Forms > Form controls</h1>
          <hr>
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Example select</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect2">Example multiple select</label>
              <select multiple class="form-control" id="exampleFormControlSelect2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Example textarea</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="exampleFormControlFile1">Example file input</label>
              <input type="file" class="form-control-file" id="exampleFormControlFile1">
            </div>
          </form>


          <hr />

          <h1>Forms > Sizing</h1>
          <hr>
          <form>
            <div class="form-group"><input class="form-control form-control-sm" type="text" placeholder=".form-control-sm">
            </div>
            <div class="form-group"><input class="form-control" type="text" placeholder="Default input"></div>
            <div class="form-group"><input class="form-control form-control-lg" type="text" placeholder=".form-control-lg">
            </div>
          </form>


          <hr />

          <h1>Forms > Checkboxes and radios</h1>
          <hr>
          <form>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
              <label class="form-check-label" for="defaultCheck1">
                Default checkbox
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
              <label class="form-check-label" for="defaultCheck2">
                Disabled checkbox
              </label>
            </div>

            <br>

            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
              <label class="form-check-label" for="exampleRadios1">
                Default radio
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
              <label class="form-check-label" for="exampleRadios2">
                Second default radio
              </label>
            </div>
            <div class="form-check disabled">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"
                disabled>
              <label class="form-check-label" for="exampleRadios3">
                Disabled radio
              </label>
            </div>
          </form>


          <hr />

          <h1>Forms > Custom Elements</h1>
          <hr>
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="customCheck1">
            <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
          </div>

          <br>

          <div class="custom-control custom-radio">
            <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
          </div>

          <br>

          <select class="custom-select">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <br><br>

          <div class="custom-file">
            <input type="file" class="custom-file-input" id="customFile">
            <label class="custom-file-label" for="customFile">Choose file</label>
          </div>


          <hr />

          <h1>Input group</h1>
          <hr>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">@</span>
            </div>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username"
              aria-describedby="basic-addon1">
          </div>

          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username"
              aria-describedby="basic-addon2">
            <div class="input-group-append">
              <span class="input-group-text" id="basic-addon2">@example.com</span>
            </div>
          </div>

          <label for="basic-url">Your vanity URL</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
            </div>
            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">$</span>
            </div>
            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
            <div class="input-group-append">
              <span class="input-group-text">.00</span>
            </div>
          </div>

          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">With textarea</span>
            </div>
            <textarea class="form-control" aria-label="With textarea"></textarea>
          </div>


          <hr />

          <h1>Input group > Sizing</h1>
          <hr>
          <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
            </div>
            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
            </div>
            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
          </div>

          <div class="input-group input-group-lg">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
            </div>
            <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
          </div>


          <hr />

          <h1>Input group > Checkboxes and radios</h1>
          <hr>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="checkbox" aria-label="Checkbox for following text input">
              </div>
            </div>
            <input type="text" class="form-control" aria-label="Text input with checkbox">
          </div>

          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="radio" aria-label="Radio button for following text input">
              </div>
            </div>
            <input type="text" class="form-control" aria-label="Text input with radio button">
          </div>


          <hr />

          <h1>Input group > Multiple inputs</h1>
          <hr>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="">First and last name</span>
            </div>
            <input type="text" class="form-control">
            <input type="text" class="form-control">
          </div>


          <hr />

          <h1>Input group > Multiple addons</h1>
          <hr>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">$</span>
              <span class="input-group-text">0.00</span>
            </div>
            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
          </div>

          <div class="input-group">
            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
            <div class="input-group-append">
              <span class="input-group-text">$</span>
              <span class="input-group-text">0.00</span>
            </div>
          </div>


          <hr />

          <h1>Input group > Button addons</h1>
          <hr>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <button class="btn btn-outline-secondary" type="button">Button</button>
            </div>
            <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
          </div>

          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username"
              aria-describedby="basic-addon2">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">Button</button>
            </div>
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <button class="btn btn-outline-secondary" type="button">Button</button>
              <button class="btn btn-outline-secondary" type="button">Button</button>
            </div>
            <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
          </div>

          <div class="input-group">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username"
              aria-describedby="basic-addon2">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">Button</button>
              <button class="btn btn-outline-secondary" type="button">Button</button>
            </div>
          </div>


          <hr />

          <h1>Input group > Buttons with dropdowns</h1>
          <hr>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">Dropdown</button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div role="separator" class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            <input type="text" class="form-control" aria-label="Text input with dropdown button">
          </div>

          <div class="input-group">
            <input type="text" class="form-control" aria-label="Text input with dropdown button">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">Dropdown</button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div role="separator" class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
          </div>


          <hr />

          <h1>Jumbotron</h1>
          <hr>
          <div class="jumbotron">
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
              featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </div>


          <hr />

          <h1>List group</h1>
          <hr>
          <ul class="list-group">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>


          <hr />

          <h1>List group > Active items</h1>
          <hr>
          <ul class="list-group">
            <li class="list-group-item active">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>


          <hr />

          <h1>List group > Disabled items</h1>
          <hr>
          <ul class="list-group">
            <li class="list-group-item disabled">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>


          <hr />

          <h1>List group > Links and buttons</h1>
          <hr>
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action active">Cras justo odio</a>
            <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
            <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
            <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
            <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
          </div>


          <hr />

          <h1>List group > Flush</h1>
          <hr>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>


          <hr />

          <h1>List group > Contextual classes</h1>
          <hr>
          <ul class="list-group">
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item list-group-item-primary">A simple primary list group item</li>
            <li class="list-group-item list-group-item-secondary">A simple secondary list group item</li>
            <li class="list-group-item list-group-item-success">A simple success list group item</li>
            <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
            <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
            <li class="list-group-item list-group-item-info">A simple info list group item</li>
            <li class="list-group-item list-group-item-light">A simple light list group item</li>
            <li class="list-group-item list-group-item-dark">A simple dark list group item</li>
          </ul>


          <hr />

          <h1>List group > With badges</h1>
          <hr>
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Cras justo odio
              <span class="badge badge-primary badge-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Dapibus ac facilisis in
              <span class="badge badge-primary badge-pill">2</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Morbi leo risus
              <span class="badge badge-primary badge-pill">1</span>
            </li>
          </ul>


          <hr />

          <h1>List group > Custom content</h1>
          <hr>
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small>3 days ago</small>
              </div>
              <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
              </p>
              <small>Donec id elit non mi porta.</small>
            </a>
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small class="text-muted">3 days ago</small>
              </div>
              <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
              </p>
              <small class="text-muted">Donec id elit non mi porta.</small>
            </a>
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small class="text-muted">3 days ago</small>
              </div>
              <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
              </p>
              <small class="text-muted">Donec id elit non mi porta.</small>
            </a>
          </div>


          <hr />

          <h1>Modal > Live Demo</h1>
          <hr><!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Launch demo modal
          </button>

          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>


          <hr />

          <h1>Modal > Vertically centered</h1>
          <hr><!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
            Launch demo modal
          </button>

          <!-- Modal -->
          <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>


          <hr />

          <h1>Navs</h1>
          <hr>
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link active" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>


          <hr />

          <h1>Navs > Vertical</h1>
          <hr>
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>


          <hr />

          <h1>Navs > Tabs</h1>
          <hr>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>


          <hr />

          <h1>Navs > Pills</h1>
          <hr>
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link active" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>


          <hr />

          <h1>Navs > Fill and justify</h1>
          <hr>
          <ul class="nav nav-pills nav-fill">
            <li class="nav-item">
              <a class="nav-link active" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Longer nav link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>


          <hr />

          <h1>Navbar</h1>
          <hr>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>


          <hr />

          <h1>Navbar > Color schemes</h1>
          <hr>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark mt-1">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary mt-2">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
          <nav class="navbar navbar-expand-lg navbar-light mt-2" style="background-color: #e3f2fd;">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>


          <hr />

          <h1>Pagination</h1>
          <hr>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>


          <hr />

          <h1>Pagination > Disabled and active states</h1>
          <hr>
          <nav aria-label="...">
            <ul class="pagination">
              <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1">Previous</a></li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item active"><a class="page-link" href="#">2 <span class="sr-only">(current)</span></a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>


          <hr />

          <h1>Popovers</h1>
          <hr>
          <script>
            $(function () {
              $('[data-toggle="popover"]').popover()
            })

          </script>
          <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title"
            data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>


          <hr />

          <h1>Popovers > Four directions</h1>
          <hr><button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover"
            data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
            Popover on top
          </button>

          <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right"
            data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
            Popover on right
          </button>

          <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover"
            data-placement="bottom" data-content="Vivamus
    sagittis lacus vel augue laoreet rutrum faucibus.">
            Popover on bottom
          </button>

          <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left"
            data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
            Popover on left
          </button>


          <hr />

          <h1>Progress</h1>
          <hr>
          <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0"
              aria-valuemax="100"></div>
          </div>
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0"
              aria-valuemax="100"></div>
          </div>
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0"
              aria-valuemax="100"></div>
          </div>
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0"
              aria-valuemax="100"></div>
          </div>


          <hr />

          <h1>Progress > Labels</h1>
          <hr>
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0"
              aria-valuemax="100">25%</div>
          </div>


          <hr />

          <h1>Progress > Height</h1>
          <hr>
          <div class="progress" style="height: 1px;">
            <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0"
              aria-valuemax="100"></div>
          </div>
          <div class="progress" style="height: 20px;">
            <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0"
              aria-valuemax="100"></div>
          </div>


          <hr />

          <h1>Progress > Backgrounds</h1>
          <hr>
          <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0"
              aria-valuemax="100"></div>
          </div>
          <div class="progress">
            <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0"
              aria-valuemax="100"></div>
          </div>
          <div class="progress">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0"
              aria-valuemax="100"></div>
          </div>
          <div class="progress">
            <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0"
              aria-valuemax="100"></div>
          </div>


          <hr />

          <h1>Progress > Multiple bars</h1>
          <hr>
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0"
              aria-valuemax="100"></div>
            <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0"
              aria-valuemax="100"></div>
            <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0"
              aria-valuemax="100"></div>
          </div>


          <hr />

          <h1>Progress > Striped</h1>
          <hr>
          <div class="progress">
            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%"
              aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50"
              aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%"
              aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%"
              aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>


          <hr />

          <h1>Tooltips</h1>
          <hr><button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top"
            title="Tooltip on top">
            Tooltip on top
          </button>
          <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right"
            title="Tooltip on right">
            Tooltip on right
          </button>
          <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom"
            title="Tooltip on bottom">
            Tooltip on bottom
          </button>
          <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="left"
            title="Tooltip on left">
            Tooltip on left
          </button>

          <script>
            $(function () {
              $('[data-toggle="tooltip"]').tooltip()
            })

          </script>

          <style type="text/css">
            #borders-demo SPAN {
              display: inline-block;
              width: 5rem;
              height: 5rem;
              margin: .25rem;
              background-color: #f5f5f5;
            }
          </style>

          <hr />

          <h1>Borders</h1>
          <hr>
          <div id="borders-demo">
            <span class="border"></span>
            <span class="border-top"></span>
            <span class="border-right"></span>
            <span class="border-bottom"></span>
            <span class="border-left"></span>
          </div>

          <style type="text/css">
            #borders-demo2 SPAN {
              border: 1px solid #dee2e6;
              display: inline-block;
              width: 5rem;
              height: 5rem;
              margin: .25rem;
              background-color: #f5f5f5;
            }
          </style>

          <hr />

          <h1>Borders > Subtractive</h1>
          <hr>
          <div id="borders-demo2">
            <span class="border-0"></span>
            <span class="border-top-0"></span>
            <span class="border-right-0"></span>
            <span class="border-bottom-0"></span>
            <span class="border-left-0"></span>
          </div>

          <style type="text/css">
            #borders-demo3 SPAN {
              display: inline-block;
              width: 5rem;
              height: 5rem;
              margin: .25rem;
              background-color: #f5f5f5;
            }
          </style>

          <hr />

          <h1>Borders > Border color</h1>
          <hr>
          <div id="borders-demo3">
            <span class="border border-primary"></span>
            <span class="border border-secondary"></span>
            <span class="border border-success"></span>
            <span class="border border-danger"></span>
            <span class="border border-warning"></span>
            <span class="border border-info"></span>
            <span class="border border-light"></span>
            <span class="border border-dark"></span>
            <span class="border border-white"></span>
          </div>

          <style type="text/css">
            #borders-demo3 SPAN {
              display: inline-block;
              width: 5rem;
              height: 5rem;
              margin: .25rem;
              background-color: #f5f5f5;
            }
          </style>

          <hr />

          <h1>Borders > Border-radius</h1>
          <hr><img src="http://via.placeholder.com/75x75" alt="..." class="rounded">
          <img src="http://via.placeholder.com/75x75" alt="..." class="rounded-top">
          <img src="http://via.placeholder.com/75x75" alt="..." class="rounded-right">
          <img src="http://via.placeholder.com/75x75" alt="..." class="rounded-bottom">
          <img src="http://via.placeholder.com/75x75" alt="..." class="rounded-left">
          <img src="http://via.placeholder.com/75x75" alt="..." class="rounded-circle">
          <img src="http://via.placeholder.com/75x75" alt="..." class="rounded-0">


          <hr />

          <h1>Clearfix</h1>
          <hr>
          <div class="bg-info clearfix">
            <button type="button" class="btn btn-secondary float-left">Example Button floated left</button>
            <button type="button" class="btn btn-secondary float-right">Example Button floated right</button>
          </div>


          <hr />

          <h1>Close icon</h1>
          <hr>
          <div class="clearfix">
            <button type="button" class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>


          <hr />

          <h1>Colors</h1>
          <hr>
          <p class="text-primary">.text-primary</p>
          <p class="text-secondary">.text-secondary</p>
          <p class="text-success">.text-success</p>
          <p class="text-danger">.text-danger</p>
          <p class="text-warning">.text-warning</p>
          <p class="text-info">.text-info</p>
          <p class="text-light bg-dark">.text-light</p>
          <p class="text-dark">.text-dark</p>
          <p class="text-body">.text-body</p>
          <p class="text-muted">.text-muted</p>
          <p class="text-white bg-dark">.text-white</p>
          <p class="text-black-50">.text-black-50</p>
          <p class="text-white-50 bg-dark">.text-white-50</p>

          <p><a href="#" class="text-primary">Primary link</a></p>
          <p><a href="#" class="text-secondary">Secondary link</a></p>
          <p><a href="#" class="text-success">Success link</a></p>
          <p><a href="#" class="text-danger">Danger link</a></p>
          <p><a href="#" class="text-warning">Warning link</a></p>
          <p><a href="#" class="text-info">Info link</a></p>
          <p><a href="#" class="text-light bg-dark">Light link</a></p>
          <p><a href="#" class="text-dark">Dark link</a></p>
          <p><a href="#" class="text-muted">Muted link</a></p>
          <p><a href="#" class="text-white bg-dark">White link</a></p>


          <hr />

          <h1>Colors > Background color</h1>
          <hr>
          <div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>
          <div class="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
          <div class="p-3 mb-2 bg-success text-white">.bg-success</div>
          <div class="p-3 mb-2 bg-danger text-white">.bg-danger</div>
          <div class="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
          <div class="p-3 mb-2 bg-info text-white">.bg-info</div>
          <div class="p-3 mb-2 bg-light text-dark">.bg-light</div>
          <div class="p-3 mb-2 bg-dark text-white">.bg-dark</div>
          <div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
          <div class="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>


          <hr />

          <h1>Display property</h1>
          <hr>
          <div class="d-inline p-2 bg-primary text-white">d-inline</div>
          <div class="d-inline p-2 bg-dark text-white">d-inline</div>
          <span class="d-block p-2 bg-primary text-white">d-block</span>
          <span class="d-block p-2 bg-dark text-white">d-block</span>


          <hr />

          <h1>Floats</h1>
          <hr>
          <div class="clearfix">
            <div class="float-left">Float left on all viewport sizes</div><br>
            <div class="float-right">Float right on all viewport sizes</div><br>
            <div class="float-none">Don't float on all viewport sizes</div>
          </div>

          <div class="clearfix">
            <div class="float-sm-left">Float left on viewports sized SM (small) or wider</div><br>
            <div class="float-md-left">Float left on viewports sized MD (medium) or wider</div><br>
            <div class="float-lg-left">Float left on viewports sized LG (large) or wider</div><br>
            <div class="float-xl-left">Float left on viewports sized XL (extra-large) or wider</div><br>
          </div>


          <hr />

          <h1>Shadows</h1>
          <hr>
          <div class="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
          <div class="shadow-sm p-3 mb-5 bg-white rounded">Small shadow</div>
          <div class="shadow p-3 mb-5 bg-white rounded">Regular shadow</div>
          <div class="shadow-lg p-3 mb-5 bg-white rounded">Larger shadow</div>


          <hr />

          <h1>Sizing</h1>
          <hr>
          <div class="w-25 p-3" style="background-color: #eee;">Width 25%</div>
          <div class="w-50 p-3" style="background-color: #eee;">Width 50%</div>
          <div class="w-75 p-3" style="background-color: #eee;">Width 75%</div>
          <div class="w-100 p-3" style="background-color: #eee;">Width 100%</div>
          <div class="w-auto p-3" style="background-color: #eee;">Width auto</div>

          <div style="height: 100px; background-color: rgba(255,0,0,0.1);">
            <div class="h-25 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 25%</div>
            <div class="h-50 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 50%</div>
            <div class="h-75 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 75%</div>
            <div class="h-100 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 100%</div>
            <div class="h-auto d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height auto</div>
          </div>


          <hr />

          <h1>Spacing Notation</h1>

          <p>Spacing utilities that apply to all breakpoints, from <code class="highlighter-rouge">xs</code> to <code
              class="highlighter-rouge">xl</code>, have no breakpoint abbreviation in them. This is because those classes
            are applied from <code class="highlighter-rouge">min-width: 0</code> and up, and thus are not bound by a media
            query. The remaining breakpoints, however, do include a breakpoint abbreviation.</p>
          <p>The classes are named using the format <code class="highlighter-rouge">{property}{sides}-{size}</code> for
            <code class="highlighter-rouge">xs</code> and <code
              class="highlighter-rouge">{property}{sides}-{breakpoint}-{size}</code> for <code
              class="highlighter-rouge">sm</code>, <code class="highlighter-rouge">md</code>, <code
              class="highlighter-rouge">lg</code>, and <code class="highlighter-rouge">xl</code>.</p>
          <p>Where <em>property</em> is one of:</p>
          <ul>
            <li><code class="highlighter-rouge">m</code> - for classes that set <code
                class="highlighter-rouge">margin</code></li>
            <li><code class="highlighter-rouge">p</code> - for classes that set <code
                class="highlighter-rouge">padding</code></li>
          </ul>
          <p>Where <em>sides</em> is one of:</p>
          <ul>
            <li><code class="highlighter-rouge">t</code> - for classes that set <code
                class="highlighter-rouge">margin-top</code> or <code class="highlighter-rouge">padding-top</code></li>
            <li><code class="highlighter-rouge">b</code> - for classes that set <code
                class="highlighter-rouge">margin-bottom</code> or <code class="highlighter-rouge">padding-bottom</code></li>
            <li><code class="highlighter-rouge">l</code> - for classes that set <code
                class="highlighter-rouge">margin-left</code> or <code class="highlighter-rouge">padding-left</code></li>
            <li><code class="highlighter-rouge">r</code> - for classes that set <code
                class="highlighter-rouge">margin-right</code> or <code class="highlighter-rouge">padding-right</code></li>
            <li><code class="highlighter-rouge">x</code> - for classes that set both <code
                class="highlighter-rouge">*-left</code> and <code class="highlighter-rouge">*-right</code></li>
            <li><code class="highlighter-rouge">y</code> - for classes that set both <code
                class="highlighter-rouge">*-top</code> and <code class="highlighter-rouge">*-bottom</code></li>
            <li>blank - for classes that set a <code class="highlighter-rouge">margin</code> or <code
                class="highlighter-rouge">padding</code> on all 4 sides of the element</li>
          </ul>
          <p>Where <em>size</em> is one of:</p>
          <ul>
            <li><code class="highlighter-rouge">0</code> - for classes that eliminate the <code
                class="highlighter-rouge">margin</code> or <code class="highlighter-rouge">padding</code> by setting it to
              <code class="highlighter-rouge">0</code></li>
            <li><code class="highlighter-rouge">1</code> - (by default) for classes that set the <code
                class="highlighter-rouge">margin</code> or <code class="highlighter-rouge">padding</code> to <code
                class="highlighter-rouge">$spacer * .25</code></li>
            <li><code class="highlighter-rouge">2</code> - (by default) for classes that set the <code
                class="highlighter-rouge">margin</code> or <code class="highlighter-rouge">padding</code> to <code
                class="highlighter-rouge">$spacer * .5</code></li>
            <li><code class="highlighter-rouge">3</code> - (by default) for classes that set the <code
                class="highlighter-rouge">margin</code> or <code class="highlighter-rouge">padding</code> to <code
                class="highlighter-rouge">$spacer</code></li>
            <li><code class="highlighter-rouge">4</code> - (by default) for classes that set the <code
                class="highlighter-rouge">margin</code> or <code class="highlighter-rouge">padding</code> to <code
                class="highlighter-rouge">$spacer * 1.5</code></li>
            <li><code class="highlighter-rouge">5</code> - (by default) for classes that set the <code
                class="highlighter-rouge">margin</code> or <code class="highlighter-rouge">padding</code> to <code
                class="highlighter-rouge">$spacer * 3</code></li>
            <li><code class="highlighter-rouge">auto</code> - for classes that set the <code
                class="highlighter-rouge">margin</code> to auto</li>
          </ul>

          <hr />

          <h1>Text alignment</h1>
          <hr>
          <p class="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
            Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc
            posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis
            iudicium purus sit amet fermentum.</p>

          <p class="text-left">Left aligned text on all viewport sizes.</p>
          <p class="text-center">Center aligned text on all viewport sizes.</p>
          <p class="text-right">Right aligned text on all viewport sizes.</p>

          <p class="text-sm-left">Left aligned text on viewports sized SM (small) or wider.</p>
          <p class="text-md-left">Left aligned text on viewports sized MD (medium) or wider.</p>
          <p class="text-lg-left">Left aligned text on viewports sized LG (large) or wider.</p>
          <p class="text-xl-left">Left aligned text on viewports sized XL (extra-large) or wider.</p>


          <hr />

          <h1>Text wrapping and overflow</h1>
          <hr><!-- Block level -->
          <div class="row">
            <div class="col-2 text-truncate">
              Praeterea iter est quasdam res quas ex communi.
            </div>
          </div>

          <!-- Inline level -->
          <span class="d-inline-block text-truncate" style="max-width: 150px;">
            Praeterea iter est quasdam res quas ex communi.
          </span>


          <hr />

          <h1>Text transform</h1>
          <hr>
          <p class="text-lowercase">Lowercased text.</p>
          <p class="text-uppercase">Uppercased text.</p>
          <p class="text-capitalize">CapiTaliZed text.</p>


          <hr />

          <h1>Font weight and italics</h1>
          <hr>
          <p class="font-weight-bold">Bold text.</p>
          <p class="font-weight-normal">Normal weight text.</p>
          <p class="font-weight-light">Light weight text.</p>
          <p class="font-italic">Italic text.</p>


          <hr />

          <h1>Vertical alignment</h1>
          <hr><span class="align-baseline">baseline</span>
          <span class="align-top">top</span>
          <span class="align-middle">middle</span>
          <span class="align-bottom">bottom</span>
          <span class="align-text-top">text-top</span>
          <span class="align-text-bottom">text-bottom</span>

          <table style="height: 100px;">
            <tbody>
              <tr>
                <td class="align-baseline">baseline</td>
                <td class="align-top">top</td>
                <td class="align-middle">middle</td>
                <td class="align-bottom">bottom</td>
                <td class="align-text-top">text-top</td>
                <td class="align-text-bottom">text-bottom</td>
              </tr>
            </tbody>
          </table>

          <hr>

          <div class="alert alert-info" role="alert">
            <a href="#top">Jump to top of page</a>
          </div>

        </div>
      </div>
    </div>

`
  );