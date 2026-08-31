"use client"
import type React from "react"
import { MotionConfig } from "framer-motion"

/**
 * OSの「視差効果を減らす」設定を framer-motion 全体に反映させる。
 * reducedMotion="user" にすると、位置・回転・スケールのアニメーションが
 * 自動的に無効化され、opacity のフェードだけが残る。
 *
 * children はプロパティとして渡されるため、内側のサーバーコンポーネントは
 * サーバーレンダリングされたまま維持される（クライアント化されない）。
 */
export function ReducedMotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
