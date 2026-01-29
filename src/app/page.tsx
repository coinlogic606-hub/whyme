'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Sparkles,
  Cpu,
  Zap,
  Heart,
  ArrowRight,
  Star,
  Shield,
  Wifi,
  Battery,
  Eye,
  Box
} from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamic import for Three.js component to avoid SSR issues
const ThreeModelViewer = dynamic(() => import('@/components/three-model-viewer').then(mod => mod.default), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full min-h-[500px]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
<Box className="w-12 h-12 text-purple-400" />
      </motion.div>
    </div>
  )
})

export default function WyndmeProductPage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-black" />
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
        </div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Wyndme
              </span>
            </motion.div>

            <motion.div
              className="hidden md:flex items-center space-x-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {['产品', '特性', '参数', '故事', '预订'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium px-6 shadow-lg shadow-purple-500/25">
                立即预订
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section with 3D Product */}
      <section id="产品" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-block"
              >
                <motion.span
                  className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium inline-flex items-center gap-2"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Star className="w-4 h-4" />
                  全新一代家庭陪伴机器人
                </motion.span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                  Wyndme o1
                </span>
                <br />
                <span className="text-white">智能伙伴</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-gray-400 leading-relaxed max-w-lg"
              >
                集出色的运动能力与AI大脑于一身，不是AI玩具，而是真正的家庭成员
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium px-8 text-lg h-14 group shadow-lg shadow-purple-500/25"
                >
                  立即预订
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-500/50 bg-transparent hover:bg-purple-500/20 text-white px-8 text-lg h-14"
                >
                  了解更多
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-8 pt-8 border-t border-white/10"
              >
                {[
                  { value: '99%', label: 'AI理解准确率' },
                  { value: '12+', label: '小时续航' },
                  { value: '360°', label: '全方位感知' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <motion.div
                      className="text-3xl font-bold text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - 3D Product Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* 3D Model Viewer with Three.js */}
              <div className="relative aspect-square max-w-[500px] mx-auto">
                <ThreeModelViewer
                  modelPath="/yellow.glb"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="特性" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                核心特性
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              革命性的AI技术与卓越的工程设计完美结合
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Core */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-gradient-to-b from-gray-900/50 to-black border border-white/10 p-8 h-full hover:border-purple-500/50 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                >
                  <Cpu className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors relative z-10">
                  AI核心
                </h3>
                <p className="text-gray-400 mb-6 relative z-10">
                  大模型加持的对话系统，理解自然语言，提供智能对话和个性化陪伴
                </p>
                <ul className="space-y-3 text-gray-300 relative z-10">
                  {['多轮对话理解', '情感识别与回应', '个性化学习成长'].map((item) => (
                    <li key={item} className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Mobility */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-b from-gray-900/50 to-black border border-white/10 p-8 h-full hover:border-pink-500/50 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                >
                  <Zap className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-pink-400 transition-colors relative z-10">
                  运动能力
                </h3>
                <p className="text-gray-400 mb-6 relative z-10">
                  双轮足自平衡结构，可在家庭场景中自由活动，灵活避障
                </p>
                <ul className="space-y-3 text-gray-300 relative z-10">
                  {['自主平衡技术', '智能路径规划', '多地形适应能力'].map((item) => (
                    <li key={item} className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-pink-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Companionship */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-gradient-to-b from-gray-900/50 to-black border border-white/10 p-8 h-full hover:border-blue-500/50 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                >
                  <Heart className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors relative z-10">
                  陪伴功能
                </h3>
                <p className="text-gray-400 mb-6 relative z-10">
                  全方位陪伴，从儿童教育到老人看护，覆盖家庭全年龄段需求
                </p>
                <ul className="space-y-3 text-gray-300 relative z-10">
                  {['儿童互动教育', '老人健康提醒', '家庭场景服务'].map((item) => (
                    <li key={item} className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="参数" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                技术规格
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              精密工艺与前沿科技的完美呈现
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: '高度', value: '85cm', icon: '📏' },
              { label: '重量', value: '12kg', icon: '⚖️' },
              { label: '续航', value: '12小时', icon: Battery },
              { label: '充电时间', value: '3小时', icon: Zap },
              { label: '处理器', value: 'AI芯片', icon: Cpu },
              { label: '存储', value: '128GB', icon: '💾' },
              { label: '连接', value: 'WiFi/5G', icon: Wifi },
              { label: '摄像头', value: '4K超清', icon: Eye },
            ].map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-b from-gray-900/50 to-black border border-white/10 p-6 text-center hover:border-purple-500/30 transition-all duration-300 group">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-3xl"
                  >
                    {typeof spec.icon === 'string' ? spec.icon : <spec.icon className="w-6 h-6 text-purple-400" />}
                  </motion.div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {spec.value}
                  </div>
                  <div className="text-gray-400">{spec.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Detailed Specs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-b from-gray-900/50 to-black border border-white/10 p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">详细参数</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: '传感器系统', items: ['360°激光雷达', '超声波传感器阵列', '深度摄像头', '触觉传感器'], color: 'purple' },
                  { title: 'AI能力', items: ['自然语言理解', '情感识别', '场景理解', '自主学习'], color: 'pink' },
                  { title: '运动系统', items: ['双轮平衡底盘', '最高速度 3km/h', '爬坡能力 15°', '智能避障系统'], color: 'blue' },
                ].map((spec) => (
                  <div key={spec.title} className="space-y-4">
                    <h4 className={`text-${spec.color}-400 font-semibold flex items-center gap-2`}>
                      <Shield className="w-5 h-5" />
                      {spec.title}
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      {spec.items.map((item) => (
                        <li key={item} className="flex items-start">
                          <ArrowRight className={`w-5 h-5 text-${spec.color}-400 mr-2 flex-shrink-0 mt-0.5`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section id="故事" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  关于我们
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-6">
                歪觅机器人
              </p>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  歪觅是奎牛智能科技（广州）有限公司的机器人品牌，致力于研发全新一代的家庭陪伴机器人。
                </p>
                <p>
                  我们的旗舰产品，Wyndme o1，集出色的运动能力与AI大脑于一身，采用了独特的外形与运动结构设计，使其具备在家庭场景中自由活动的潜力。
                </p>
                <p>
                  我们不是在制造AI玩具，而是想要创造出真正的家庭成员。每一个细节都经过精心设计，只为给您带来最温暖的陪伴体验。
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {['智能科技', '温暖陪伴', '创新设计'].map((tag) => (
                  <motion.span
                    key={tag}
                    className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/10">
                <img
                  src="/about-us.png"
                  alt="Wyndme 机器人产品展示"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="预订" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-purple-900/30" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              开启智能陪伴新时代
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              现在预订Wyndme o1，成为首批体验者，享受专属优惠和优先发货权
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium px-10 text-lg h-16 shadow-lg shadow-purple-500/25"
              >
                立即预订 ¥1599
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500/50 bg-transparent hover:bg-purple-500/20 text-white px-10 text-lg h-16"
              >
                预约演示
              </Button>
            </div>
            <p className="mt-6 text-gray-500 text-sm">
              支持分期付款 | 7天无理由退货 | 全国联保
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/90 border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Left - Brand */}
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                WYNDME
              </span>
              <p className="text-gray-400 text-sm">
                歪觅机器人 · 你的家庭成员
              </p>
            </div>

            {/* Center - Navigation */}
            <div className="flex items-center gap-8">
              <a href="#特性" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                功能
              </a>
              <a href="#故事" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                关于我们
              </a>
              <a href="#预订" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">
                联系我们
              </a>
            </div>

            {/* Right - Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 奎牛智能科技（广州）有限公司
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function scrollToSection(section: string) {
  const sectionMap: Record<string, string> = {
    '产品': '产品',
    '特性': '特性',
    '参数': '参数',
    '故事': '故事',
    '预订': '预订',
  }

  const targetId = sectionMap[section]
  if (targetId) {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
