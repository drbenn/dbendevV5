import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as THREE from 'three';
// import Stats from 'three/addons/libs/stats.module.js';

@Component({
  selector: 'app-render-two',
  templateUrl: './render-two.component.html',
  styleUrls: ['./render-two.component.scss']
})
export class RenderTwoComponent implements OnInit {
  renderer = new THREE.WebGLRenderer({ alpha: true }); // alpha option allows transparency
  scene: any;
  camera: any;
  points: any;
  cameraZIndex: number = 2200;
  @ViewChild('rendererContainer') rendererContainer: ElementRef | any;
  @HostListener('window:resize', ['$event'])
	onResize(event: any) {
  //     console.log(event);
  //     const divWidth: number = this.rendererContainer.nativeElement.clientWidth;
  //     const aspectRatio: number = 4/3;
  // this.renderer.setSize(divWidth, divWidth / aspectRatio);
  // // this.renderer.setSize(this.rendererContainer.nativeElement.clientWidth, this.rendererContainer.nativeElement.clientHeight);
  // this.camera.position.z = this.cameraZIndex;
    }



  constructor() {}

  ngOnInit(): void {
    this.initRender();
    this.animate();
  }


ngAfterViewInit() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setSize(this.rendererContainer.nativeElement.clientWidth, this.rendererContainer.nativeElement.clientHeight);
    this.renderer.setClearColor( 0x050505, 0.0 ); // the default - transparency for bg, replacement for this.scene.background with fully opaque bg
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

}


  initRender() {
    this.camera = new THREE.PerspectiveCamera( 24, 600/ 450, 5, 3500 );
    this.camera.position.z = this.cameraZIndex; // todo: og 1750, 3750 looks cool

    this.scene = new THREE.Scene();
    // this.scene.background = new THREE.Color( 0x050505 ); // bg color - 0x then Hex

    // this.scene.fog = new THREE.Fog( 0x050505, 2000, 3500 );

    // scene.fog = new THREE.Fog( 0xcccccc, 10, 15 );
    // this.scene.fog = new THREE.FogExp2( 0xefd1b5, 0.0025 );
    // this.scene.fog = new THREE.FogExp2( 0xff0000, 0.0003 );

    // https://www.youtube.com/watch?v=otavCmIuEhY
    // this.scene.fog = new THREE.Fog( 0xdfe9f3, 100 , this.cameraZIndex + 10000 );
    // const smokeTexture = new THREE.TextureLoader().load("../../../assets/img/smoke1.png");
    // smokeTexture.encoding = THREE.sRGBEncoding;
    // const smokeGeometry = new THREE.PlaneGeometry(250, 400); // set size of plane
    // const smokeMaterial = new THREE.MeshLambertMaterial({
    //   // color: 0x00000ff // vertex color = color x colormap
    //   map: smokeTexture,
    //   emissive: 0x222222, // emissive light of material
    //   opacity: 0.55,
    //   transparent: true,
    // })

    // let smokeParticles = []; //make empty array to put smoke particles into

    // for (let i = 0; i < 2; i++ ) {
    //   let smokeElement = new THREE.Mesh(smokeGeometry, smokeMaterial); // create mesh
    //   smokeElement.scale.set(2,2,2); // set scale x,y,x to double

    //   // position smoke textures at random x,y,z positions
    //   smokeElement.position.set(Math.random() * 1000 - 500, Math.random() * 1000 - 500, Math.random() * 1000 - 500);
    //   // set smoke texture rotations to random amounts on z axis
    //   smokeElement.rotation.z = Math.random() * 360;

    //   this.scene.add(smokeElement);
    //   smokeParticles.push(smokeElement);
    // }

    const particles = 5000; // og: 500000, 50 looks cool and simple

    const geometry = new THREE.BufferGeometry();

    const positions = [];
    const colors = [];

    const color = new THREE.Color();

    // cube size
    const n = 500, n2 = n / 2; // og: 1000, particles spread in the cube

    for ( let i = 0; i < particles; i ++ ) {

      // positions

      const x = Math.random() * n - n2;
      const y = Math.random() * n - n2;
      const z = Math.random() * n - n2;

      positions.push( x, y, z );

      // colors

      const vx = ( x / n ) + 0.5;
      const vy = ( y / n ) + 0.5;
      const vz = ( z / n ) + 0.5;

      color.setRGB( vx, vy, vz, THREE.SRGBColorSpace );

      colors.push( color.r, color.g, color.b );

    }

    geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
    geometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );

    geometry.computeBoundingSphere();

    //

    const material = new THREE.PointsMaterial( { size: 15, vertexColors: true } );

    this.points = new THREE.Points( geometry, material );
    this.scene.add( this.points );

    //

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( window.innerWidth, window.innerHeight );

    // this.rendererContainer.appendChild( this.renderer.domElement );

    //

    // stats = new Stats();
    // this.rendererContainer.appendChild( stats.dom );

    //

    // window.addEventListener( 'resize', onWindowResize );
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    // requestAnimationFrame( animate );

    this.render();
    // stats.update();

  }

  render() {

    const time = Date.now() * 0.001;

    this.points.rotation.x = time * 0.25;
    this.points.rotation.y = time * 0.5;
    this.camera.position.z = this.cameraZIndex;
    this.renderer.render( this.scene, this.camera );

  }
}
