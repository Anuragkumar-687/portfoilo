'use client';

import { useEffect, useRef } from 'react';

/**
 * Three.js particle field behind the hero.
 *
 * Constraints it has to respect, because the rest of the site was tuned hard
 * for load time:
 *   - dynamically imported, so three.js never lands in the first-load bundle
 *   - skipped entirely under prefers-reduced-motion
 *   - the render loop stops when the hero scrolls away or the tab is hidden,
 *     so it is not burning GPU behind the rest of the page
 */
export function HeroCanvas() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let disposed = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const THREE = await import('three');
      if (disposed) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
      camera.position.z = 14;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      host.appendChild(renderer.domElement);
      Object.assign(renderer.domElement.style, { width: '100%', height: '100%', display: 'block' });

      // Particle field
      const COUNT = 420;
      const positions = new Float32Array(COUNT * 3);
      const seeds = new Float32Array(COUNT);
      for (let i = 0; i < COUNT; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 34;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 16;
        seeds[i] = Math.random() * Math.PI * 2;
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const material = new THREE.PointsMaterial({
        color: 0xf0374b,
        size: 0.075,
        transparent: true,
        opacity: 0.7,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const points = new THREE.Points(geometry, material);
      scene.add(points);

      // A slow wireframe form gives the field some structure to read against.
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(7.5, 0.02, 8, 120),
        new THREE.MeshBasicMaterial({ color: 0xf0374b, transparent: true, opacity: 0.12 })
      );
      ring.rotation.x = Math.PI / 2.6;
      scene.add(ring);

      const resize = () => {
        const { clientWidth: w, clientHeight: h } = host;
        if (!w || !h) return;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(host);

      // Pointer parallax, eased so it never snaps.
      const target = { x: 0, y: 0 };
      const current = { x: 0, y: 0 };
      const onPointer = (e: PointerEvent) => {
        target.x = (e.clientX / window.innerWidth - 0.5) * 0.6;
        target.y = (e.clientY / window.innerHeight - 0.5) * 0.4;
      };
      window.addEventListener('pointermove', onPointer, { passive: true });

      // Only render while the hero is on screen and the tab is active.
      let onScreen = true;
      const io = new IntersectionObserver(([entry]) => { onScreen = entry.isIntersecting; }, { threshold: 0 });
      io.observe(host);
      const onVisibility = () => { if (!document.hidden && onScreen) tick(); };
      document.addEventListener('visibilitychange', onVisibility);

      let raf = 0;
      const base = geometry.attributes.position.array as Float32Array;
      const origY = Float32Array.from(base.filter((_, i) => i % 3 === 1));

      const tick = () => {
        raf = requestAnimationFrame(tick);
        if (!onScreen || document.hidden) return;

        const t = performance.now() * 0.00018;
        for (let i = 0; i < COUNT; i++) {
          base[i * 3 + 1] = origY[i] + Math.sin(t * 2 + seeds[i]) * 0.35;
        }
        geometry.attributes.position.needsUpdate = true;

        current.x += (target.x - current.x) * 0.04;
        current.y += (target.y - current.y) * 0.04;
        points.rotation.y = t * 0.9 + current.x;
        points.rotation.x = current.y;
        ring.rotation.z = t * 1.4;

        renderer.render(scene, camera);
      };
      tick();

      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        io.disconnect();
        window.removeEventListener('pointermove', onPointer);
        document.removeEventListener('visibilitychange', onVisibility);
        geometry.dispose();
        material.dispose();
        ring.geometry.dispose();
        (ring.material as { dispose(): void }).dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    })();

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return <div ref={hostRef} aria-hidden className="absolute inset-0 -z-10" />;
}
