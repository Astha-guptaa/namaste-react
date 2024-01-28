/* <div id='parent'>
  <div id='child1'>
    <h2>I am h2 tag</h2>
    <h3>I am h3 tag</h3>
  </div>
  <div id='child2'>
    <h2>I am h2 tag</h2>
    <h1>I am h1 tag</h1>
  </div>
</div> */

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child1' }, [
    React.createElement('h2', {}, 'I am h2 tag'),
    React.createElement('h3', {}, 'I am h3 tag'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h2', {}, 'I am h2 tag'),
    React.createElement('h1', {}, 'I am h1 tag'),
  ]),
]);

//JSX

console.log(parent) // object

const heading = React.createElement(
  'h1',
  { id: 'heading', xyz: 'abc' },
  'Hello World From React!'
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)
