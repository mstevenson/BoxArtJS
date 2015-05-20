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

var geo = new THREE.BoxGeometry( 15, 20, 5);
// var mat = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
var mat = new THREE.MeshPhongMaterial( {
	map: THREE.ImageUtils.loadTexture( 'textures/myst.jpg' ),
	color: 0xffffff,
	specular: 0x666666,
	shininess: 30
} );
var cube = new THREE.Mesh(geo, mat);
scene.add( cube );

// lights

var ambient = new THREE.AmbientLight( 0x666666 );
scene.add( ambient );

var key = new THREE.PointLight( 0xffffff, 1, 200 );
key.position.set( 30, 20, 30 );
scene.add( key );

var rim = new THREE.PointLight( 0xffffff, 1, 200 );
rim.position.set( -100, 60, -80 );
scene.add( rim );

// var loader = new THREE.TextureLoader();
// 
// loader.load(
// 	'textures/myst.jpg',
// 	// when loaded
// 	function ( texture ) {
// 		// do something with the texture
// 		mat.map = texture;
// 		// var material = new THREE.MeshBasicMaterial( {
// 			// map: texture
// 		 // } );
// 	},
// 	// download progresses
// 	function ( xhr ) {
// 		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
// 	},
// 	// received error
// 	function ( xhr ) {
// 		// console.log( xhr );
// 	}
// );

var render = function () {
	requestAnimationFrame( render );

	camera.lookAt( cube.position );

	cube.rotation.y += 0.008;

	renderer.render( scene, camera );
};

render();