import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import TWEEN from 'three/examples/jsm/libs/tween.module.js';
import { TrackballControls } from 'three/examples/jsm//controls/TrackballControls.js';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

export interface ThreeJsTargets {
  table: THREE.Object3D[],
  sphere: THREE.Object3D[],
  helix: THREE.Object3D[],
  grid: THREE.Object3D[],
}

@Component({
  selector: 'app-render-three',
  templateUrl: './render-three.component.html',
  styleUrls: ['./render-three.component.scss']
})
export class RenderThreeComponent implements OnInit {
  @ViewChild('rendererContainer') rendererContainer: ElementRef | any;
  @HostListener('window:resize', ['$event'])
  // renderer = new THREE.WebGLRenderer({ alpha: true }); // alpha option allows transparency
  renderer: CSS3DRenderer = new CSS3DRenderer();
  // scene!: THREE.Scene;
  scene: any;
  camera: any;
  points: any;
  controls: any;
  cameraZIndex: number = 2700;
	onResize(event: any) {
    console.log(event);
    const divWidth: number = this.rendererContainer.nativeElement.clientWidth;
    const aspectRatio: number = 4/3;
    this.renderer.setSize(divWidth, divWidth / aspectRatio);
    // this.renderer.setSize(this.rendererContainer.nativeElement.clientWidth, this.rendererContainer.nativeElement.clientHeight);
    this.camera.position.z = this.cameraZIndex;
  }

  // let camera, scene, renderer;
  // let controls;

  table = [
    'H', 'Hydrogen', '1.00794', 1, 1,
    'He', 'Helium', '4.002602', 18, 1,
    'Li', 'Lithium', '6.941', 1, 2,
    'Be', 'Beryllium', '9.012182', 2, 2,
    'B', 'Boron', '10.811', 13, 2,
    'C', 'Carbon', '12.0107', 14, 2,
    'N', 'Nitrogen', '14.0067', 15, 2,
    'O', 'Oxygen', '15.9994', 16, 2,
    'F', 'Fluorine', '18.9984032', 17, 2,
    'Ne', 'Neon', '20.1797', 18, 2,
    'Na', 'Sodium', '22.98976...', 1, 3,
    'Mg', 'Magnesium', '24.305', 2, 3,
    'Al', 'Aluminium', '26.9815386', 13, 3,
    'Si', 'Silicon', '28.0855', 14, 3,
    'P', 'Phosphorus', '30.973762', 15, 3,
    'S', 'Sulfur', '32.065', 16, 3,
    'Cl', 'Chlorine', '35.453', 17, 3,
    'Ar', 'Argon', '39.948', 18, 3,
    'K', 'Potassium', '39.948', 1, 4,
    'Ca', 'Calcium', '40.078', 2, 4,
    'Sc', 'Scandium', '44.955912', 3, 4,
    'Ti', 'Titanium', '47.867', 4, 4,
    'V', 'Vanadium', '50.9415', 5, 4,
    'Cr', 'Chromium', '51.9961', 6, 4,
    'Mn', 'Manganese', '54.938045', 7, 4,
    'Fe', 'Iron', '55.845', 8, 4,
    'Co', 'Cobalt', '58.933195', 9, 4,
    'Ni', 'Nickel', '58.6934', 10, 4,
    'Cu', 'Copper', '63.546', 11, 4,
    'Zn', 'Zinc', '65.38', 12, 4,
    'Ga', 'Gallium', '69.723', 13, 4,
    'Ge', 'Germanium', '72.63', 14, 4,
    'As', 'Arsenic', '74.9216', 15, 4,
    'Se', 'Selenium', '78.96', 16, 4,
    'Br', 'Bromine', '79.904', 17, 4,
    'Kr', 'Krypton', '83.798', 18, 4,
    'Rb', 'Rubidium', '85.4678', 1, 5,
    'Sr', 'Strontium', '87.62', 2, 5,
    'Y', 'Yttrium', '88.90585', 3, 5,
    'Zr', 'Zirconium', '91.224', 4, 5,
    'Nb', 'Niobium', '92.90628', 5, 5,
    'Mo', 'Molybdenum', '95.96', 6, 5,
    'Tc', 'Technetium', '(98)', 7, 5,
    'Ru', 'Ruthenium', '101.07', 8, 5,
    'Rh', 'Rhodium', '102.9055', 9, 5,
    'Pd', 'Palladium', '106.42', 10, 5,
    'Ag', 'Silver', '107.8682', 11, 5,
    'Cd', 'Cadmium', '112.411', 12, 5,
    'In', 'Indium', '114.818', 13, 5,
    'Sn', 'Tin', '118.71', 14, 5,
    'Sb', 'Antimony', '121.76', 15, 5,
    'Te', 'Tellurium', '127.6', 16, 5,
    'I', 'Iodine', '126.90447', 17, 5,
    'Xe', 'Xenon', '131.293', 18, 5,
    'Cs', 'Caesium', '132.9054', 1, 6,
    'Ba', 'Barium', '132.9054', 2, 6,
    'La', 'Lanthanum', '138.90547', 4, 9,
    'Ce', 'Cerium', '140.116', 5, 9,
    'Pr', 'Praseodymium', '140.90765', 6, 9,
    'Nd', 'Neodymium', '144.242', 7, 9,
    'Pm', 'Promethium', '(145)', 8, 9,
    'Sm', 'Samarium', '150.36', 9, 9,
    'Eu', 'Europium', '151.964', 10, 9,
    'Gd', 'Gadolinium', '157.25', 11, 9,
    'Tb', 'Terbium', '158.92535', 12, 9,
    'Dy', 'Dysprosium', '162.5', 13, 9,
    'Ho', 'Holmium', '164.93032', 14, 9,
    'Er', 'Erbium', '167.259', 15, 9,
    'Tm', 'Thulium', '168.93421', 16, 9,
    'Yb', 'Ytterbium', '173.054', 17, 9,
    'Lu', 'Lutetium', '174.9668', 18, 9,
    'Hf', 'Hafnium', '178.49', 4, 6,
    'Ta', 'Tantalum', '180.94788', 5, 6,
    'W', 'Tungsten', '183.84', 6, 6,
    'Re', 'Rhenium', '186.207', 7, 6,
    'Os', 'Osmium', '190.23', 8, 6,
    'Ir', 'Iridium', '192.217', 9, 6,
    'Pt', 'Platinum', '195.084', 10, 6,
    'Au', 'Gold', '196.966569', 11, 6,
    'Hg', 'Mercury', '200.59', 12, 6,
    'Tl', 'Thallium', '204.3833', 13, 6,
    'Pb', 'Lead', '207.2', 14, 6,
    'Bi', 'Bismuth', '208.9804', 15, 6,
    'Po', 'Polonium', '(209)', 16, 6,
    'At', 'Astatine', '(210)', 17, 6,
    'Rn', 'Radon', '(222)', 18, 6,
    'Fr', 'Francium', '(223)', 1, 7,
    'Ra', 'Radium', '(226)', 2, 7,
    'Ac', 'Actinium', '(227)', 4, 10,
    'Th', 'Thorium', '232.03806', 5, 10,
    'Pa', 'Protactinium', '231.0588', 6, 10,
    'U', 'Uranium', '238.02891', 7, 10,
    'Np', 'Neptunium', '(237)', 8, 10,
    'Pu', 'Plutonium', '(244)', 9, 10,
    'Am', 'Americium', '(243)', 10, 10,
    'Cm', 'Curium', '(247)', 11, 10,
    'Bk', 'Berkelium', '(247)', 12, 10,
    'Cf', 'Californium', '(251)', 13, 10,
    'Es', 'Einstenium', '(252)', 14, 10,
    'Fm', 'Fermium', '(257)', 15, 10,
    'Md', 'Mendelevium', '(258)', 16, 10,
    'No', 'Nobelium', '(259)', 17, 10,
    'Lr', 'Lawrencium', '(262)', 18, 10,
    'Rf', 'Rutherfordium', '(267)', 4, 7,
    'Db', 'Dubnium', '(268)', 5, 7,
    'Sg', 'Seaborgium', '(271)', 6, 7,
    'Bh', 'Bohrium', '(272)', 7, 7,
    'Hs', 'Hassium', '(270)', 8, 7,
    'Mt', 'Meitnerium', '(276)', 9, 7,
    'Ds', 'Darmstadium', '(281)', 10, 7,
    'Rg', 'Roentgenium', '(280)', 11, 7,
    'Cn', 'Copernicium', '(285)', 12, 7,
    'Nh', 'Nihonium', '(286)', 13, 7,
    'Fl', 'Flerovium', '(289)', 14, 7,
    'Mc', 'Moscovium', '(290)', 15, 7,
    'Lv', 'Livermorium', '(293)', 16, 7,
    'Ts', 'Tennessine', '(294)', 17, 7,
    'Og', 'Oganesson', '(294)', 18, 7
  ];




  constructor() { }

  // objects: CSS3DObject[] = [];
  // targets: ThreeJsTargets = { table: [], sphere: [], helix: [], grid: [] };
  objects: any = [];
  targets: any = { table: [], sphere: [], helix: [], grid: [] };

  ngOnInit(): void {
    this.initRender();
    this.animate();
  }

  ngAfterViewInit() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setSize(this.rendererContainer.nativeElement.clientWidth, this.rendererContainer.nativeElement.clientHeight);
    // this.renderer.setClearColor( 0x050505, 0.0 ); // the default - transparency for bg, replacement for this.scene.background with fully opaque bg
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    
    // console.log(this.rendererContainer.nativeElement.clientHeight);
    // console.log(this.rendererContainer.nativeElement.clientWidth);

    // this.animateCube();
}


  initRender() {

    this.camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
    this.camera.position.z = 3000;

    this.scene = new THREE.Scene();

    // table

    for ( let i = 0; i < this.table.length; i += 5 ) {
      console.log('tablelength: ', this.table.length);
      console.log(this.table[i]);
      
      

      const element: HTMLDivElement = document.createElement( 'div' );
      element.className = 'element';
      element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';

      const number: HTMLDivElement = document.createElement( 'div' );
      number.className = 'number';
      number.textContent = (( i / 5 ) + 1).toString();
      element.appendChild( number );

      const symbol: HTMLDivElement = document.createElement( 'div' );
      symbol.className = 'symbol';
      symbol.textContent = (this.table[ i ]).toString();
      element.appendChild( symbol );

      const details: HTMLDivElement = document.createElement( 'div' );
      details.className = 'details';
      details.innerHTML = this.table[ i + 1 ] + '<br>' + this.table[ i + 2 ];
      element.appendChild( details );

      const objectCSS: CSS3DObject = new CSS3DObject( element );
      objectCSS.position.x = Math.random() * 4000 - 2000;
      objectCSS.position.y = Math.random() * 4000 - 2000;
      objectCSS.position.z = Math.random() * 4000 - 2000;
      this.scene.add( objectCSS );

      this.objects.push( objectCSS );

      //

      const object: THREE.Object3D = new THREE.Object3D();
      const xPos: number = this.table[i + 3] ? <number>this.table[i + 3] : 0;
      const yPos: number = this.table[i + 4] ? <number>this.table[i + 4] : 0;
      object.position.x = ( xPos * 140 ) - 1330;
      object.position.y = - ( yPos * 180 ) + 990;

      this.targets.table.push( object );

    }

    // sphere

    // const vector = new THREE.Vector3();

    // for ( let i = 0, l = this.objects.length; i < l; i ++ ) {

    //   const phi = Math.acos( - 1 + ( 2 * i ) / l );
    //   const theta = Math.sqrt( l * Math.PI ) * phi;

    //   const object: THREE.Object3D = new THREE.Object3D();

    //   object.position.setFromSphericalCoords( 800, phi, theta );

    //   vector.copy( object.position ).multiplyScalar( 2 );

    //   object.lookAt( vector );

    //   this.targets.sphere.push( object );

    // }

    // helix

    // for ( let i = 0, l = this.objects.length; i < l; i ++ ) {

    //   const theta = i * 0.175 + Math.PI;
    //   const y = - ( i * 8 ) + 450;

    //   const object: THREE.Object3D = new THREE.Object3D();

    //   object.position.setFromCylindricalCoords( 900, theta, y );

    //   vector.x = object.position.x * 2;
    //   vector.y = object.position.y;
    //   vector.z = object.position.z * 2;

    //   object.lookAt( vector );

    //   this.targets.helix.push( object );

    // }

    // grid

    // for ( let i = 0; i < this.objects.length; i ++ ) {

    //   const object = new THREE.Object3D();

    //   object.position.x = ( ( i % 5 ) * 400 ) - 800;
    //   object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
    //   object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;

    //   this.targets.grid.push( object );

    // }

    //

    // this.renderer = new CSS3DRenderer();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    // document.getElementById( 'container' ).appendChild( renderer.domElement );

    //

    this.controls = new TrackballControls( this.camera, this.renderer.domElement );
    this.controls.minDistance = 500;
    this.controls.maxDistance = 6000;
    this.controls.addEventListener( 'change', this.render() );

    // const buttonTable = document.getElementById( 'table' );
    // buttonTable?.addEventListener( 'click', function () {

    //   transform( targets.table, 2000 );

    // } );

    // const buttonSphere: any = document.getElementById( 'sphere' );
    // buttonSphere.addEventListener( 'click', function () {

    //   transform( targets.sphere, 2000 );

    // } );

    // const buttonHelix = document.getElementById( 'helix' );
    // buttonHelix.addEventListener( 'click', function () {

    //   transform( targets.helix, 2000 );

    // } );

    // const buttonGrid = document.getElementById( 'grid' );
    // buttonGrid.addEventListener( 'click', function () {

    //   transform( targets.grid, 2000 );

    // } );

    this.transform( this.targets.table, 2000 );

    //

    // window.addEventListener( 'resize', onWindowResize );
  };

  transform(targets: THREE.Object3D[], duration: number) {

    TWEEN.removeAll();

    for ( let i = 0; i < this.objects.length; i ++ ) {

      const object: CSS3DObject = this.objects[ i ];
      const target = targets[ i ];

      new TWEEN.Tween( object.position )
        .to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
        .easing( TWEEN.Easing.Exponential.InOut )
        .start();

      new TWEEN.Tween( object.rotation )
        .to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
        .easing( TWEEN.Easing.Exponential.InOut )
        .start();

    }

    new TWEEN.Tween( this )
      .to( {}, duration * 2 )
      .onUpdate( this.render )
      .start();
  }

  animate() {
    // requestAnimationFrame( this.animate );
    window.requestAnimationFrame(() => this.animate());

    // TWEEN.update();

    this.controls.update();
    // this.render();
  }

  render() {
    this.renderer.render( this.scene, this.camera );


  }

}
