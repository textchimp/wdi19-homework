
var app = app || {};

app.init = function () {
  console.log('hello my world');

  app.scene = new THREE.Scene();

  app.width = window.innerWidth;
  app.height = window.innerHeight;

  // Camera params
  // field of view
  // screen ratio
  // how close to render things
  // how far to render things

  app.camera = new THREE.PerspectiveCamera( 60, app.width/app.height, 0.1, 1000);

  app.camera.position.x = -30;
  app.camera.position.y = -40;
  app.camera.position.z = 30;
  // tell camera what to look at:
  app.camera.lookAt( app.scene.position );

  app.renderer = new THREE.WebGLRenderer();
  app.renderer.setSize( app.width, app.height );
  app.renderer.setClearColor( 0x000000 ); // background color
  app.renderer.shadowMap.enabled = true;
  app.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  app.axes = new THREE.AxisHelper( 40 );
  app.scene.add( app.axes );


  document.getElementById("output").appendChild( app.renderer.domElement );

} // end init()


window.onload = app.init;
