var app = {
  title: "Indecision App",
  subTitle: "Put your life in the hands of a computer!!!"
}

var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subTitle}</p>
    <ol>
      <li>This is item one.</li>
      <li>This is item two.</li>
    </ol>
  </div>
);

function getLocation(location) {
  if(location){
    return <p>Location: {location}</p>;
  }
}

var user = {
  name: "John Jacob Jingleheimer Schmitt",
  age: 30,
  location: "Nicaragua"
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Unknown'}</h1>
    {user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
