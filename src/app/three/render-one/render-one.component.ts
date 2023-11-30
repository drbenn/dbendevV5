import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-render-one',
  templateUrl: './render-one.component.html',
  styleUrls: ['./render-one.component.scss']
})
export class RenderOneComponent  implements OnInit {
  @ViewChild('rendererContainer') rendererContainer: ElementRef | any;
  @HostListener('window:resize', ['$event'])
	onResize(event: any) {
      console.log(event);
      const divWidth: number = this.rendererContainer.nativeElement.clientWidth;
      const aspectRatio: number = 4/3;
  this.renderer.setSize(divWidth, divWidth / aspectRatio);
  // this.renderer.setSize(this.rendererContainer.nativeElement.clientWidth, this.rendererContainer.nativeElement.clientHeight);
  this.camera.position.z = 1000;
    }

  renderer = new THREE.WebGLRenderer();
  scene: any;
  camera: any;
  cube: any;

  constructor() {}

  ngOnInit(): void {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000); // Field of View(deg)/ Aspect Ratio/ near clipping pane / far clipping pane
    this.camera.position.z = 1000;

    const geometry = new THREE.BoxGeometry(200, 200, 200);
    const material = new THREE.MeshBasicMaterial({color: 0x0000FF, wireframe: true});
    this.cube = new THREE.Mesh(geometry, material);

    this.scene.add(this.cube);
  }


ngAfterViewInit() {
    // this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setSize(this.rendererContainer.nativeElement.clientWidth, this.rendererContainer.nativeElement.clientHeight);
    console.log(this.rendererContainer.nativeElement.clientHeight);
    console.log(this.rendererContainer.nativeElement.clientWidth);

    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.animateCube();
}

animateCube() {
    window.requestAnimationFrame(() => this.animateCube());
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.02;
    this.renderer.render(this.scene, this.camera);
}
}