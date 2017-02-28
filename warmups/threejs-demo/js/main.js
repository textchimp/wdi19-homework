
var app = app || {};

app.step = 0;

app.cameraPosIndex = 0;

app.lastMouseTime = 0;

app.numParticles = 2000;
app.particleDistribution = 300;

app.randyRange = function (min, max) {
  var range = max - min;
  return min + (Math.random() * range);
};

app.controller = {
  rotationSpeed: 0.02,
  bouncingSpeed: 0.02
};


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

  app.camera = new THREE.PerspectiveCamera( 60, app.width/app.height, 0.1, 2000);

  app.camera.position.x = -30;
  app.camera.position.y = 40;
  app.camera.position.z = 30;
  // tell camera what to look at:
  app.camera.lookAt( app.scene.position );

  app.renderer = new THREE.WebGLRenderer();
  app.renderer.setSize( app.width, app.height );
  app.renderer.setClearColor( 0x000000 ); // background color
  // app.renderer.shadowMap.enabled = true;
  // app.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  //
  // app.axes = new THREE.AxisHelper( 40 );
  // app.scene.add( app.axes );
  //
  // app.plane = app.createPlane();
  // app.scene.add( app.plane );

  app.cube = app.createCube();
  app.scene.add( app.cube );

  app.sphere = app.createSphere();
  app.scene.add( app.sphere );

  app.spotlight = app.createSpotlight();
  app.scene.add( app.spotlight );

  app.ambient = new THREE.AmbientLight( 0x444444 );
  app.scene.add( app.ambient );

  app.spline = app.createSpline();

  // app.line = app.createLineFromSpline( app.spline );
  // app.scene.add( app.line );


  app.particleSystem = app.createParticleSystem();
  app.scene.add( app.particleSystem );


  app.gui = new dat.GUI();
  app.gui.add(app.controller, 'rotationSpeed', 0, 0.2);
  app.gui.add(app.controller, 'bouncingSpeed', 0, 0.2);

  app.stats = app.addStats();

  app.controls = new THREE.OrbitControls( app.camera, app.renderer.domElement );

  document.getElementById("output").appendChild( app.renderer.domElement );

  app.renderer.domElement.addEventListener('mousemove', function(){
    app.lastMouseTime = Date.now();
  });


  app.animate();

} // end init()


app.createPlane = function () {

  var planeGeometry = new THREE.PlaneGeometry( 120, 20 );  // 120 x 20 plane
  var planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xCFD8DC // kind of grey
  });

  var plane = new THREE.Mesh( planeGeometry, planeMaterial );

  plane.rotation.x = -0.5 * Math.PI;   // don't ask, it's because of math
  plane.position.x = 15;
  plane.position.y = 0;
  plane.position.z = 0;
  plane.receiveShadow = true;

  return plane;
};

app.createCube = function () {

  var cubeGeometry = new THREE.BoxGeometry( 4, 4, 4 );
  var cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xFF8F00,
    wireframe: false
  });

  var cube = new THREE.Mesh( cubeGeometry, cubeMaterial );

  cube.position.set( 0, 0, 0 );  // x y z coordinates for this object
  // cube.castShadow = true;

  return cube;
};

app.createSphere = function () {

  var sphereGeometry = new THREE.SphereGeometry( 20, 40, 40); // radius, x segments, y segments
  var sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0xFFFFFF,
    side: THREE.DoubleSide,
    // wireframe: true
    map: THREE.ImageUtils.loadTexture("/img/earth.jpg")

  });

  var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );

  sphere.position.set( 20, 4, 2 );
  // sphere.castShadow = true;

  return sphere;
};

app.createSpotlight = function () {

  var spotlight = new THREE.SpotLight( 0xFFFFFF );
  spotlight.position.set( -20, 10, 10 );
  // spotlight.castShadow = true;
  // spotlight.shadow.mapSize.width = 2048;
  // spotlight.shadow.mapSize.height = 2048;

  return spotlight;
};

app.animate = function () {

  if( (Date.now() - app.lastMouseTime) > 30000 ){

    app.cameraPosIndex++;
    if( app.cameraPosIndex > 10000) {
      app.cameraPosIndex = 0;
    }

    // app.cameraPosIndex = (app.cameraPosIndex + 1) % 10000

    var camPos = app.spline.getPoint( app.cameraPosIndex / 3000 );
    var camRot = app.spline.getTangent( app.cameraPosIndex / 3000 );

    app.camera.position.set( camPos.x, camPos.y, camPos.z );
    app.camera.rotation.set( camRot.x, camRot.y, camRot.z );

    app.camera.lookAt( app.spline.getPoint( (app.cameraPosIndex + 1) / 3000 ) );

  }


  app.cube.rotation.x += app.controller.rotationSpeed;
  app.cube.rotation.y += app.controller.rotationSpeed;
  app.cube.rotation.z += app.controller.rotationSpeed;


  app.step += app.controller.bouncingSpeed; // increment


  app.sphere.rotation.y += app.controller.rotationSpeed;

  app.animateParticles();

  // app.sphere.position.x = 20 + (10 * Math.cos(app.step) );
  // app.sphere.position.y =  4 + (10 * Math.abs(Math.sin(app.step)));

  app.stats.update();

  app.renderer.render( app.scene, app.camera );
  requestAnimationFrame( app.animate );
};

app.animateParticles = function () {

  var vertices = app.particleSystem.geometry.vertices;

  for (var i = 0; i < vertices.length; i++) {
    var vert = vertices[i];

    // if( vert.y < -app.particleDistribution/2 ){
    //     vert.y = app.particleDistribution;
    // }
    //
    // vert.y -= app.controller.rotationSpeed;

    var dist = Math.sqrt( vert.x*vert.x + vert.y*vert.y + vert.z*vert.z );

    var force = (10.0 / (dist*dist)) * -0.05;

    vert.vx += force * vert.x;
    vert.vy += force * vert.y;
    vert.vz += force * vert.z;

    vert.x += vert.vx;
    vert.y += vert.vy;
    vert.z += vert.vz;
  }

  app.particleSystem.geometry.verticesNeedUpdate = true;
};


app.createSpline = function () {

  var randomPoints = [];
  for (var i = 0; i < 10; i++) {
    randomPoints.push(new THREE.Vector3(
      (Math.random() * 100) - 50,
      (Math.random() * 100) - 50,
      (Math.random() * 100) - 50
    ));
  }

  return new THREE.CatmullRomCurve3( randomPoints );
};

app.createLineFromSpline = function ( spline ) {

  var sGeometry =  new THREE.Geometry();

  var sMaterial = new THREE.LineBasicMaterial({
      color: 0xff00f0,
      linewidth: 8
  });

  var splinePoints = spline.getPoints(10000);

  for (var i = 0; i < splinePoints.length; i++) {
    sGeometry.vertices.push( splinePoints[i] );
  }

  return new THREE.Line( sGeometry, sMaterial );
}

app.createParticleSystem = function () {

  // Particles are just individual vertices in a geometry
  // Geometry stores an arbitrary collection of bits of geometric info to make an object
  var particles = new THREE.Geometry();

  var particleSpeed = 0.2;

  for (var i = 0; i < app.numParticles; i++) {

    var x = app.randyRange( -app.particleDistribution, app.particleDistribution );
    var y = app.randyRange( -app.particleDistribution, app.particleDistribution );
    var z = app.randyRange( -app.particleDistribution, app.particleDistribution );

    var particle = new THREE.Vector3( x, y, z );

    particle.vx = app.randyRange( -particleSpeed, particleSpeed );
    particle.vy = app.randyRange( -particleSpeed, particleSpeed );
    particle.vz = app.randyRange( -particleSpeed, particleSpeed );

    particles.vertices.push( particle );
  }

  var particleMaterial = new THREE.PointsMaterial({
    color: 0xFFFFFF,
    size: 20,
    map: THREE.ImageUtils.loadTexture("/img/snowflake.png"),
    blending: THREE.AdditiveBlending,
    transparent: true,
    alphaTest: 0.5
  });

  var particleSystem = new THREE.Points( particles, particleMaterial );

  return particleSystem;

};





app.onResize = function () {
  app.width = window.innerWidth;
  app.height = window.innerHeight;

  app.camera.aspect = app.width / app.height;
  app.camera.updateProjectionMatrix();

  app.renderer.setSize(app.width, app.height);
};


app.addStats = function () {
  var stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';

  document.getElementById("stats").appendChild( stats.domElement );

  return stats;
}

window.addEventListener("resize", app.onResize, false);

window.onload = app.init;
