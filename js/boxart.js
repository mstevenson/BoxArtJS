// scene

var scene = new THREE.Scene();

// renderer

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0xffffff, 1 );
document.body.appendChild( renderer.domElement );

// camera

var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 40;
camera.position.y = 20;

// geometry

var materials = [

	// right
	new THREE.MeshLambertMaterial( { color: 0xffffff } ),

	// left
	new THREE.MeshLambertMaterial( { color: 0xffffff } ),

	// top
	new THREE.MeshLambertMaterial( { color: 0xffffff } ),

	// bottom
	new THREE.MeshLambertMaterial( { color: 0xffffff } ),

	// front
	new THREE.MeshPhongMaterial( {
		map: THREE.ImageUtils.loadTexture( 'textures/myst.jpg' ),
		color: 0xffffff,
		specular: 0x666666,
		shininess: 30
	} ),

	// back
	new THREE.MeshPhongMaterial( {
		map: THREE.ImageUtils.loadTexture( 'textures/myst-back.jpg' ),
		color: 0xffffff,
		specular: 0x666666,
		shininess: 30
	} ),
	
];

var faceMat = new THREE.MeshFaceMaterial( materials );


var geo = new THREE.BoxGeometry( 15, 20, 5 );
var cube = new THREE.Mesh( geo, faceMat );
scene.add( cube );


// lights

var ambient = new THREE.AmbientLight( 0x777777 );
scene.add( ambient );

var key = new THREE.PointLight( 0xffffff, 0.8, 400 );
key.position.set( 60, 40, 60 );
scene.add( key );

var rim = new THREE.PointLight( 0xffffff, 1, 200 );
rim.position.set( -100, 60, -80 );
scene.add( rim );



var render = function () {
	requestAnimationFrame( render );

	camera.lookAt( cube.position );

	cube.rotation.y += 0.008;

	renderer.render( scene, camera );
};

render();