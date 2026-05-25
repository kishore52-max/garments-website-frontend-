import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
export function FabricScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mountRef.current) return;
    // Scene setup
    const scene = new THREE.Scene();
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 5;
    camera.position.y = 0;
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xc9a961, 1.5); // Gold tinted light
    directionalLight.position.set(2, 2, 2);
    scene.add(directionalLight);
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
    fillLight.position.set(-2, -1, 2);
    scene.add(fillLight);
    // Fabric Geometry
    const geometry = new THREE.PlaneGeometry(12, 8, 64, 64);
    // Custom Shader Material for cloth simulation
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: {
          value: 0
        },
        uColor: {
          value: new THREE.Color('#F5EFE6')
        },
        uLightPos: {
          value: directionalLight.position
        }
      },
      vertexShader: `
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;

        void main() {
          vUv = uv;
          
          vec3 pos = position;
          
          // Complex wave function for silk-like movement
          float wave1 = sin(pos.x * 1.5 + uTime * 0.5) * 0.3;
          float wave2 = cos(pos.y * 1.2 + uTime * 0.4) * 0.3;
          float wave3 = sin((pos.x + pos.y) * 0.8 + uTime * 0.3) * 0.2;
          
          pos.z = wave1 + wave2 + wave3;
          
          // Calculate normal for lighting
          vec3 objectNormal = vec3(
            -(cos(pos.x * 1.5 + uTime * 0.5) * 1.5 * 0.3 + cos((pos.x + pos.y) * 0.8 + uTime * 0.3) * 0.8 * 0.2),
            -(sin(pos.y * 1.2 + uTime * 0.4) * -1.2 * 0.3 + cos((pos.x + pos.y) * 0.8 + uTime * 0.3) * 0.8 * 0.2),
            1.0
          );
          
          vNormal = normalize(normalMatrix * objectNormal);
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          vViewPosition = -mvPosition.xyz;
          
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform vec3 uLightPos;
        
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;

        void main() {
          vec3 normal = normalize(vNormal);
          vec3 viewDir = normalize(vViewPosition);
          vec3 lightDir = normalize(uLightPos);
          
          // Ambient
          float ambient = 0.3;
          
          // Diffuse
          float diff = max(dot(normal, lightDir), 0.0);
          
          // Specular (silk-like sheen)
          vec3 halfVector = normalize(lightDir + viewDir);
          float spec = pow(max(dot(normal, halfVector), 0.0), 32.0) * 0.5;
          
          // Rim lighting for depth
          float rim = 1.0 - max(dot(viewDir, normal), 0.0);
          rim = smoothstep(0.6, 1.0, rim) * 0.4;
          
          vec3 finalColor = uColor * (ambient + diff * 0.8) + vec3(1.0, 0.9, 0.7) * spec + vec3(0.8, 0.7, 0.5) * rim;
          
          // Subtle vignette
          float dist = distance(vUv, vec2(0.5));
          finalColor *= smoothstep(0.8, 0.2, dist);
          
          gl_FragColor = vec4(finalColor, 0.85); // Slight transparency
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      wireframe: false
    });
    const plane = new THREE.Mesh(geometry, material);
    // Tilt the plane slightly
    plane.rotation.x = -Math.PI / 6;
    plane.rotation.y = Math.PI / 12;
    plane.position.y = -0.5;
    scene.add(plane);
    // Animation Loop
    const clock = new THREE.Clock();
    let animationFrameId: number;
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      // Update shader uniform
      material.uniforms.uTime.value = elapsedTime;
      // Slow breathing camera movement
      camera.position.x = Math.sin(elapsedTime * 0.2) * 0.5;
      camera.position.y = Math.cos(elapsedTime * 0.15) * 0.3;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    // Handle Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);
  return (
    <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none" />);

}