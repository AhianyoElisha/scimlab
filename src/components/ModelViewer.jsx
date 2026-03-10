import React, { Suspense, useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Html, useProgress } from '@react-three/drei';
import * as THREE from 'three';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        color: '#fff',
        fontFamily: 'inherit',
      }}>
        <div style={{
          width: '120px',
          height: '4px',
          background: 'rgba(255,255,255,0.2)',
          borderRadius: '4px',
          overflow: 'hidden',
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: '#4CAF50',
            borderRadius: '4px',
            transition: 'width 0.3s ease',
          }} />
        </div>
        <span style={{ fontSize: '14px', opacity: 0.8 }}>
          Loading model… {progress.toFixed(0)}%
        </span>
      </div>
    </Html>
  );
}

function Model({ url, controlsRef }) {
  const { scene } = useGLTF(url);
  const { camera } = useThree();

  // Clone scene so we can safely manipulate it
  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    if (!clonedScene) return;

    // Compute bounding box
    const box = new THREE.Box3().setFromObject(clonedScene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    // Re-center model at origin
    clonedScene.position.set(-center.x, -center.y, -center.z);

    // Set camera distance based on model size
    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim === 0) return; // empty model guard

    const fov = camera.fov * (Math.PI / 180);
    const dist = maxDim / (2 * Math.tan(fov / 2)) * 2.0;

    camera.position.set(dist * 0.8, dist * 0.6, dist * 0.8);
    camera.near = 0.01;
    camera.far = dist * 100;
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);

    // Update orbit controls target
    if (controlsRef?.current) {
      controlsRef.current.target.set(0, 0, 0);
      controlsRef.current.update();
    }
  }, [clonedScene, camera, controlsRef]);

  return <primitive object={clonedScene} />;
}

export default function ModelViewer({ modelUrl, title }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef();
  const controlsRef = useRef();

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const onFsChange = () => {
      if (!document.fullscreenElement) setIsFullscreen(false);
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: isFullscreen ? '100vh' : '600px',
        background: 'var(--theme, #000C69)',
        borderRadius: isFullscreen ? 0 : '15px',
        overflow: 'hidden',
      }}
    >
      {/* Header overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 20px',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 100%)',
        pointerEvents: 'none',
      }}>
        {title && (
          <h4 style={{ color: '#fff', margin: 0, fontSize: '16px', fontWeight: 600, pointerEvents: 'auto' }}>
            {title} — 3D Model
          </h4>
        )}
        <button
          onClick={toggleFullscreen}
          style={{
            pointerEvents: 'auto',
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: '#fff',
            padding: '6px 12px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '13px',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
          title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        >
          <i className={`fa-solid ${isFullscreen ? 'fa-compress' : 'fa-expand'}`}></i>
          {isFullscreen ? 'Exit' : 'Fullscreen'}
        </button>
      </div>

      {/* Controls hint */}
      <div style={{
        position: 'absolute',
        bottom: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        display: 'flex',
        gap: '16px',
        padding: '8px 16px',
        background: 'rgba(0,0,0,0.5)',
        borderRadius: '8px',
        backdropFilter: 'blur(4px)',
        pointerEvents: 'none',
      }}>
        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px' }}>
          🖱 Drag to rotate
        </span>
        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px' }}>
          ⚙ Scroll to zoom
        </span>
        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px' }}>
          ⇧+Drag to pan
        </span>
      </div>

      <Canvas
        camera={{ fov: 50, position: [5, 3, 5], near: 0.01, far: 10000 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.5 }}
        style={{ width: '100%', height: '100%' }}
        onCreated={({ gl }) => gl.setClearColor('#000C69')}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[10, 15, 10]} intensity={2} />
        <directionalLight position={[-10, 5, -10]} intensity={0.8} />
        <hemisphereLight args={['#ffffff', '#444444', 0.8]} />
        <Suspense fallback={<Loader />}>
          <Model url={modelUrl} controlsRef={controlsRef} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          ref={controlsRef}
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.8}
          zoomSpeed={0.8}
          panSpeed={0.5}
          minDistance={0.5}
          maxDistance={200}
          enablePan
        />
        {/* Ground grid for spatial reference */}
        <gridHelper args={[50, 50, '#444', '#333']} position={[0, -0.01, 0]} />
      </Canvas>
    </div>
  );
}
