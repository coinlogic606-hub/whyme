'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

interface ThreeModelViewerProps {
  modelPath: string
}

export default function ThreeModelViewer({
  modelPath,
}: ThreeModelViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const controlsRef = useRef<OrbitControls | null>(null)
  const mixerRef = useRef<THREE.AnimationMixer | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.set(0, 0, 5)
    cameraRef.current = camera

    // Renderer setup - 优化性能
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false, // 关闭抗锯齿以提升性能
      powerPreference: 'high-performance'
    })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)) // 限制像素比以提升性能
    renderer.outputColorSpace = THREE.SRGBColorSpace
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // OrbitControls for drag rotation
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = true
    controls.enablePan = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 2
    controlsRef.current = controls

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5)
    directionalLight2.position.set(-5, -5, 5)
    scene.add(directionalLight2)

    const pointLight = new THREE.PointLight(0xa855f7, 0.5)
    pointLight.position.set(0, 2, 2)
    scene.add(pointLight)

    // Load GLB model
    const loader = new GLTFLoader()
    
    // 配置 DRACOLoader 以支持 Draco 压缩的模型
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/')
    loader.setDRACOLoader(dracoLoader)
    
    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene

        // Auto-scale model to fit view
        const box = new THREE.Box3().setFromObject(model)
        const size = box.getSize(new THREE.Vector3())
        const maxDim = Math.max(size.x, size.y, size.z)
        const scale = 2 / maxDim
        model.scale.set(scale, scale, scale)

        // Center model
        box.setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        model.position.sub(center)

        scene.add(model)

        // Handle animations if any
        if (gltf.animations.length > 0) {
          const mixer = new THREE.AnimationMixer(model)
          mixerRef.current = mixer
          const action = mixer.clipAction(gltf.animations[0])
          action.play()
        }
      },
      (progress) => {
        console.log('Loading progress:', (progress.loaded / progress.total) * 100 + '%')
      },
      (error) => {
        console.error('Error loading model:', error)
      }
    )

    // Animation loop - 使用节流优化性能
    let animationId: number
    let lastTime = 0
    const targetFPS = 30 // 限制帧率以提升性能
    const frameInterval = 1000 / targetFPS
    
    const animate = (currentTime: number) => {
      animationId = requestAnimationFrame(animate)
      
      const deltaTime = currentTime - lastTime
      if (deltaTime < frameInterval) return
      lastTime = currentTime - (deltaTime % frameInterval)

      // Update controls
      controls.update()

      // Update animations
      if (mixerRef.current) {
        mixerRef.current.update(0.016)
      }

      renderer.render(scene, camera)
    }
    animate(0)

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)

      // 释放 DRACOLoader
      dracoLoader.dispose()
      
      if (controlsRef.current) {
        controlsRef.current.dispose()
      }
      if (rendererRef.current) {
        rendererRef.current.dispose()
      }
      if (mixerRef.current) {
        mixerRef.current.stopAllAction()
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [modelPath])

  return (
    <div
      ref={containerRef}
      className="w-full h-full cursor-grab active:cursor-grabbing"
      style={{ minHeight: '500px' }}
    />
  )
}
